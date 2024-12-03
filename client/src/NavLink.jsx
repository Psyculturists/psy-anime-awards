import PropTypes from 'prop-types'

function NavLink(props){
    return(
        <a className='nav-link' href={props.href}>
            <b>
                {props.label}
            </b>
        </a>
    )
}

NavLink.PropTypes = {
    href: PropTypes.string,
    label: PropTypes.string
}

NavLink.defaultProps = {
    href: "/",
    label: "Link"
}


export default NavLink