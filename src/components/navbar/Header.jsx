import style from "./HeaderBar.module.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import {CircleUserRound,House,Info} from "lucide-react"


function HeaderBar() {
  return (
    <header className={style.head} >
        <nav className={style.container}>
            
            <div className="flex items-center">
            <div className="w-[80px] mb-1">
                 <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col items-center mb-1">
                <h1>Acharya</h1>
                <p className="text-sm m-0 text-[#f5e6c8]">|| यतो धर्म ततो जय ||</p>
            </div>
            </div>

<CircleUserRound size={28} />

            <ul className={style.items}>
                <li className="flex flex-col items-center"> <House size={20} color="#f5e6c8" /><Link to href="/">Home</Link></li>
                <li className="flex flex-col items-center"> <CircleUserRound size={20} color="#f5e6c8" /><Link to href="">Contact</Link></li>
                <li className="flex flex-col items-center"><Info size={20} color="#f5e6c8"  /><Link to href="">About</Link></li>
            </ul>
        </nav>
    </header>
        );
}

export default HeaderBar;
