import style from "./Herosection.module.css"
import logo from "../../assets/logo.png"
import swastik from "../../assets/swastik.png"
import saturn from "../../assets/saturn.png"
import Rashi from "../../assets/12-Rashi.png"
import starsing from "../../assets/starsing.png"





 

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

            <div className={style.rotateBackground}>
                <img src={swastik} alt="" />
                <img src={swastik} alt="" />
                <img src={swastik} alt="" />
                <img src={swastik} alt="" />
                <img src={swastik} alt="" />
            </div>

            <p className={style.tagLine}>- वैदिक परंपराओं एवं सनातन संस्कारों के साथ आपके आधुनिक कार्यों में आध्यात्मिक मार्गदर्शन -</p>
            <p className={` ${style.tagLine} ${style.subTag}`}>वैदिक पूजन एवं ज्योतिष का संगम</p>
            
            <div className={style.sevaye}>
                <p>-- हमारी सेवाएँ --</p>
                <div>
                <span>[ वैदिक पद्धति कर्मकांड ]</span>
                <span>[ ज्योतिषी ]</span>
                <span>[ धार्मिक मार्गदर्शन ]</span>
                <span>[ सभी पुराणों की कथाएँ ]</span>
                </div>
            </div>

            <div className={style.saturnBg}>
                <img src={saturn} alt="" />
            </div>

            <div className={` ${style.saturnBg} ${style.rashi} `}>
                <img src={Rashi} alt="" />
            </div>

            <div className={style.starsing}>
                <img src={starsing} alt="" />
            </div>
</div>




</>


    )
}

export default Herosection