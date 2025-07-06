import logo from '../assets/logo.png';
export default function AppHeader () {
  return(
    <div className="flex flex-row justify-between items-center p-10">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="w-20 h-10" />
      </div>
      <div className="flex flex-row items-center">
        
      </div>
    </div>
  );
}
