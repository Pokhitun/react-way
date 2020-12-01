import classes from'./Navbar.module.css'

const Navbar = () =>{
    return(
        <nav className ={classes.nav}>
                <ul>
                    <li><a href='#' className = {`${classes.item} ${classes.hover}`}>Profile</a></li>
                    <li><a href='#' className = {classes.item}>Messages</a></li>
                    <li><a href='#' className = {classes.item}>News</a></li>
                    <li><a href='#' className = {classes.item}>Music</a></li>
                    <li><a href='#' className = {classes.item}>Setings</a></li>
                </ul>
        </nav>
    );
} 

export default Navbar;