import { useEffect, useState } from "react";
import fireDB from "../firebase";
const ContactDisplay = ({ SetEdit_id }) => {
  const [contactobj, Setcontactobj] = useState({});

  useEffect(() => {
    //==> contactList k ander changer hone par useEffect envoke hoga and setcontactobject k value ko update karega..
    //setobject k help se show contact list ko b  update krenge
    fireDB.child("contactList").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        Setcontactobj({ ...snapshot.val() });
      }
    });
  }, []);

  return (
    <div className="h-auto w-2/4 m-10">
      <table className="border-collapse border-4 border-yellow-600 bg-gray-300 text-gray-900 ">
        <thead>
          <tr>
            <th className="px-8 py-2">Name</th>
            <th className="px-8 py-2">Phone No.</th>
            <th className="px-8 py-2">Email</th>
            <th className="px-8 py-2">Operation</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(contactobj).map((idx) => {
            return (
              <tr key={idx}>
                <td className="px-8 py-1">{contactobj[idx].name}</td>
                <td className="px-8 py-1">{contactobj[idx].ph}</td>
                <td className="px-8 py-1">{contactobj[idx].email}</td>
                <td className="px-2 py-1">
                  <button
                    className="bg-green-300 mr-2 px-2 py-1 rounded-xl"
                    onClick={() =>
                      SetEdit_id({
                        idx,
                        contactobj,
                        update: "true",
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 ml-2 p-1 rounded-xl"
                    onClick={() => {
                      if (window.confirm("Are you sure ?")) {
                        fireDB.child(`contactList/${idx}`).remove();
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ContactDisplay;
