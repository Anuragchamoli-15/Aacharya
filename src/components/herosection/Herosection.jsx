import style from "./Herosection.module.css"
import logo from "../../assets/logo.png"

 

function Herosection(){
    return(
<>

<div className={style.Container}>

            <div className={style.heroLogo}>
                <div className={style.logo}>
                <img src={logo} alt="logo" />
                </div>
                <h1>Acharya</h1>
                <p>|| श्रद्धा से संस्कार ||</p>
            </div>
            
            <div className={style.dec}>
                <span>[ श्रद्धा ]</span>
                <span>[ भक्ति ]</span>
                <span>[ ज्ञान ]</span>



            </div>
</div>




</>


    )
}

export default Herosection