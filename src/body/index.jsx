import Servico from './servico';
import Banner from './banner';
export default function AppBody () {
  return(
    <div className="flex flex-col gap-3 w-full">
      <Banner />
      <Servico />
    </div>
  );
}
