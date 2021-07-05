import { useEffect, useState } from "react";
import fireDB from "../firebase.js";

const ContactInput = (props) => {
  let { idx, contactobj, update } = props.Edit_id;
  // console.log(idx + "%%" + contactobj[idx] + "%%" + update);

  const [FieldValue, SetFieldValue] = useState({
    name: "",
    ph: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (idx != undefined) SetFieldValue({ ...contactobj[idx] });
  }, [idx, contactobj]);

  const HandleOnChange = (e) => {
    const { id, value } = e.target;

    SetFieldValue((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
  };
  const HandleSavebtn = () => {
    if (update != "true") fireDB.child("contactList").push(FieldValue);
    else fireDB.child(`contactList/${idx}`).set(FieldValue);
  };
  return (
    <>
      <div className=" h-auto w-2/4 m-10 ">
        <div className=" w-7/12 m-auto bg-grey-800">
          <div className="text-center text-4xl font-bold text-gray-900">
            Contact Us
          </div>
          <input
            type="text"
            placeholder="Name"
            className="m-7 w-72 h-8 p-2"
            id="name"
            value={FieldValue.name}
            onChange={HandleOnChange}
          ></input>
          <br />
          <input
            type="tel"
            placeholder="Enter mobile Number"
            className="m-7 w-72 h-8 p-2"
            id="ph"
            value={FieldValue.ph}
            onChange={HandleOnChange}
          ></input>
          <input
            type="email"
            placeholder="Enter Email"
            className="m-7 w-72 h-8 p-2"
            id="email"
            value={FieldValue.email}
            onChange={HandleOnChange}
          ></input>
          <br />
          <textarea
            placeholder="address"
            className="m-7 w-72 h-8 p-2 outline-none"
            id="address"
            value={FieldValue.address}
            onChange={HandleOnChange}
          ></textarea>
          <br />
          <button
            className="m-7 w-72 h-10 p-2 bg-green-500 font-bold text-gray-800"
            onClick={HandleSavebtn}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
export default ContactInput;
