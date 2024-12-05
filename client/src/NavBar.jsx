import Logo from "./Logo"
import NavLink from "./NavLink"

function NavBar(){
    return (
        <div className="nav-bar">
            <NavLink label="NOMINATE"/>
            <NavLink label="PARTNERS"/>
            <Logo />
            <NavLink label="ABOUT"/>
            <NavLink label="FAQ"/>
        </div>
    )
}

export default NavBar