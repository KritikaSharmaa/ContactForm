import ContactDisplay from "./components/ContactDisplay";
import ContactInput from "./components/ContactInput";
import { useState } from "react";

const App = () => {
  const [Edit_id, SetEdit_id] = useState("");
  console.log(Edit_id);

  return (
    <>
      <div className="bg-gray-200 h-screen w-screen flex justify-between items-center">
        <ContactInput Edit_id={Edit_id} />
        <ContactDisplay SetEdit_id={SetEdit_id} />
      </div>
    </>
  );
};

export default App;
