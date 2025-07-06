import { MdOutlineFireHydrantAlt } from 'react-icons/md';
import { RxRulerHorizontal } from "react-icons/rx";
import { TfiPencilAlt2 } from "react-icons/tfi";
import { FaRegBuilding } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";



export default function IconProjetoEstrutural() {
  return (
    <div className="flex flex-col w-20 items-center justify-between">
      <div className="flex flex-row">
        <div>
          <FaRegBuilding className="w-10 h-10" />
        </div>
        <div>
          <FaDraftingCompass className="w-5 h-5" style={{ rotate: "90deg" }}/>
        </div>
      </div>
    </div>     
  );
}
