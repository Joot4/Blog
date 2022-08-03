import logosvg from '../svg/logo.svg';

const Header = () =>{
  const desclogo = 'Essa é a logo do site';

  return (
    <>
      <header className="flex-space-between">
          <div className="logo">
            <img src={logosvg} alt={desclogo}/>
          </div>
          <div className="search">
            <input type="text" className="input-search"></input>
          </div>
          <ul className="menu">
           <li><a href="#" className="nav-link">Categories</a></li>
           <li><a href="#" className="nav-link">About</a></li>
           <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
      </header>
    </>
  );
}

export default Header;