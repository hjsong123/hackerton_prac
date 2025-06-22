import {useNavigate} from 'react-router-dom';

function Header() {
    const move_page = useNavigate();

  return (
    <header className="header">
      <nav id ="navbar">
        <div className="header-left">
            <h1>My Application</h1>
            <ul className="nav-list">
            <li onClick={() => move_page("/")}>Home</li>
            <li onClick={() => move_page("/about")}>About</li>
            <li onClick={() => move_page("/contact")}>Contact</li>
            </ul>
        </div>
        <ul className="nav-list" id="auth-links">
          <li onClick={() => move_page("/login")}>Login</li>
          <li onClick={() => move_page("/auth")}>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;