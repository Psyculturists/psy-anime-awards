import Logo from "./Logo"
import NavLink from "./NavLink"

function NavBar(){
    return (
        <div className="nav-bar">
            <NavLink label="NOMINATE"/>
            <NavLink label="ABOUT"/>
            <Logo />
            <NavLink label="PARTNERS"/>
            <NavLink label="FAQ"/>
        </div>
    )
}

export default NavBar