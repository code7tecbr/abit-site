import logo from '../assets/logo.png';
export default function AppHeader () {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Usa scrollIntoView com comportamento suave
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return(
    <header 
    className="fixed top-0 left-0 w-full z-50 shadow-md p-4 md:relative md:p-10"
  >
    <div className="flex flex-row justify-between items-center max-w-7xl mx-auto"> {/* Adicionei max-w e mx-auto para centralizar o conteúdo */}
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="w-20 h-10" />
      </div>
      <div className="flex flex-row items-center">
        {/* Aqui você pode adicionar seus itens de navegação, botões, etc. */}
        {/* Exemplo: */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="menu-item" onClick={() => scrollToSection('home')}>Início</a></li>
            <li><a href="#" className="menu-item" onClick={() => scrollToSection('servicos')}>Serviços</a></li>
            <li><a href="#" className="menu-item" onClick={() => scrollToSection('contato')}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  );
}
