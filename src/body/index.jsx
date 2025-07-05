import { IconIncendio, IconEngenheiro, IconRender3D, IconProjetoHidraulico } from '../icons';

export default function AppBody () {
  return(
    <div>  
      <h1> Serviços</h1>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-end w-full">
          <IconIncendio />
        </div>
        <div className="flex flex-row items-end w-full">
          <IconEngenheiro />
        </div>
        <div className="flex flex-row items-end w-full">
          <IconRender3D />
        </div>
        <div className="flex flex-row items-end w-full">
          <IconProjetoHidraulico />
        </div>
      </div>
    </div>
  );
}
