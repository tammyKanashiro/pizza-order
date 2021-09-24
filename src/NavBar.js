import logo from "./pizza-logo.png";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={ logo } alt=""/>
            <h2 className="app-title">Pizza App</h2>
        </nav>
    );
}
 
export default NavBar;