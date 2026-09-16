import style from "./HeaderBar.module.css"
import { Link } from "react-router-dom";


function HeaderBar() {
  return (
    <header className={style.head} >
        <nav className={style.container}>
                <h1>Acharya</h1>
            <ul className={style.items}>
                <li><Link to href="/">Home</Link></li>
                <li><a href="">Contect</a></li>
            </ul>
        </nav>
    </header>
        );
}

export default HeaderBar;
