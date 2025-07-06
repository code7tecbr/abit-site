import { MdOutlineFireHydrantAlt } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";




export default function IconProjetoHidraulico() {
  return (
    <div className="flex flex-col w-20 items-center justify-between">
      <div className="flex flex-row">
        <div>
          <MdOutlineFireHydrantAlt className="w-10 h-10" />
        </div>
        <div>
          <FaDraftingCompass className="w-5 h-5" style={{ rotate: "90deg", marginTop: "10px" }}/>
        </div>
      </div>
    </div>     
  );
}
