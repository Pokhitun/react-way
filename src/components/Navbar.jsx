import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className ='nav'>
                <ul>
                    <li><a href='#' className = "item">Profile</a></li>
                    <li><a href='#' className = "item">Messages</a></li>
                    <li><a href='#' className = "item">News</a></li>
                    <li><a href='#' className = "item">Music</a></li>
                    <li><a href='#' className = "item">Setings</a></li>
                </ul>
        </nav>
    );
} 

export default Navbar;