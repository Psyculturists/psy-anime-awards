import psylogo from './assets/psylogo.png'

function Logo(){
    return (
        <a href="/" className="logo">
            <img className='logo-img' src={psylogo}></img>
        </a>
    )
}


export default Logo