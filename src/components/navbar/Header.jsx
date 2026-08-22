import style from "./HeaderBar.module.css"

function HeaderBar() {
  return (
    <header className={style.head} >
        <nav className={style.container}>
                <h1>Acharya</h1>
            <ul className={style.items}>
                <li><a href="/">Home</a></li>
                <li><a href="">Contect</a></li>
                <li><a href="">empty</a></li>
                <li><a href="">empty</a></li>
            </ul>
        </nav>
    </header>
        );
}

export default HeaderBar;
