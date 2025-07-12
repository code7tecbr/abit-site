import { 
  IconIncendio, 
  IconEngenheiro, 
  IconRender3D, 
  IconProjetoHidraulico, 
  IconProjetoEstrutural, 
  IconProjetoEletrico 
} from '../icons';
import DivIcone from './div-icone';
export default function Servico() {
  const divProjetoEstrutural = DivIcone(<IconProjetoEstrutural />, "PROJETOS", "ESTRUTURAIS");
  const divProjetoEletrico = DivIcone(<IconProjetoEletrico />, "PROJETOS", "ELETRICOS");
  const divProjetoHidraulico = DivIcone(<IconProjetoHidraulico />, "PROJETOS", "HIDRÁULICOS");
  const divProjetoIncendio = DivIcone(<IconIncendio />, "PROJETOS", "COM. A INCÊNDIO");
  const divRenderizacao3D = DivIcone(<IconRender3D />, "RENDERIZAÇÕES", "E 3D");
  const divProjetoArquitetonico = DivIcone(<IconEngenheiro />, "PROJETOS", "ARQUITETÔNICOS");

  return (
    <div className='flex flex-col gap-3 items-center justify-center p-5' id="servicos">  
      <h1 className="text-2xl font-bold" style={{ color: "var(--color-gold-deep)" }}> SERVIÇOS</h1>
      <div className="flex flex-col gap-3 w-full h-full items-center justify-center">
        <div className="flex flex-row gap-3 w-full h-full items-center justify-between p-10">
          {divProjetoArquitetonico}
          {divProjetoEstrutural}
          {divProjetoEletrico}
        </div>
        <div className="flex flex-row gap-3 w-full h-full items-center justify-between p-10">
          {divProjetoHidraulico}
          {divProjetoIncendio}
          {divRenderizacao3D}
        </div>
      </div>
    </div>
  );
}
