import { useRef } from "react";
import style from "./Contect.module.css"

function Contect(){
const inputNumber =  useRef()
const inputEmail = useRef()

const sumbitBtn = ()=>{
    event.preventDefault()
    if(!(inputEmail.current.value).includes("@gmail.com")){
        alert("enter vailed email")
        console.log("yess")
    }

}


    return (
        <form onSubmit={sumbitBtn} action="" className={style.formcontainer}>
            <div className={style.divcontainer}>

            <input type="text" placeholder="Enter Your name" className={style.inputbar} />
            <input type="tel" ref={inputNumber} placeholder="Enter Your Phone Number" className={style.inputbar}  />
            <input type="email" ref = {inputEmail}placeholder="Enter Your Email" className={style.inputbar}  />


<div className={style.optionDropdown}>

            <input type="text" placeholder="Your Pooja" className={style.optioninputbar} />
            <select name="pojaOpt" id="pooja" className={style.optionBar}>
                <option value="disable">chooes</option>
                <option value="katha">katha</option>
                <option value="katha">katha</option>
            </select>
</div>

            <button>submit</button>
            </div>
        </form>
    )
}

export default Contect;