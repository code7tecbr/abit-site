import { FaDraftingCompass } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";




export default function IconProjetoEletrico() {
  return (
    <div className="flex flex-col w-20 items-center justify-between">
      <div className="flex flex-row">
        <div>
          <RiLightbulbFlashFill className="w-10 h-10" />
        </div>
        <div>
          <FaDraftingCompass className="w-5 h-5" style={{ rotate: "90deg" }}/>
        </div>
      </div>
    </div>      
  );
}
