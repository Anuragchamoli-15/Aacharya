import style from "./Herosection.module.css";
import mobileStyle from "./HerosectionMobie.module.css";
import logo from "../../assets/logo.png";
import swastik from "../../assets/swastik.png";
import saturn from "../../assets/saturn.png";
import Rashi from "../../assets/12-Rashi.png";
import starsing from "../../assets/starsing.png";

function Herosection() {
  return (
    <>
      <div className={`${style.Container} ${mobileStyle.Container}`}>
        <div className={`${style.heroLogo} ${mobileStyle.heroLogo}`}>
          <div className={`${style.logo} ${mobileStyle.logo}`}>
            <img src={logo} alt="logo" />
          </div>

          <h1>Acharya</h1>
          <p>|| श्रद्धा से संस्कार ||</p>
        </div>

        <div
          className={`${style.rotateBackground} ${mobileStyle.rotateBackground}`}
        >
          <img src={swastik} alt="" />
          <img src={swastik} alt="" />
          <img src={swastik} alt="" />
          <img src={swastik} alt="" />
          <img src={swastik} alt="" />
        </div>

        <p className={`${style.tagLine} ${mobileStyle.tagLine}`}>
          - वैदिक परंपराओं एवं सनातन संस्कारों के साथ आपके आधुनिक कार्यों में
          आध्यात्मिक मार्गदर्शन -
        </p>

        <p
          className={`${style.tagLine} ${style.subTag} ${mobileStyle.tagLine} ${mobileStyle.subTag}`}
        >
          वैदिक पूजन एवं ज्योतिष का संगम
        </p>

        <div className={`${style.sevaye} ${mobileStyle.sevaye}`}>
          <p>-- हमारी सेवाएँ --</p>

          <div>
            <span>[ वैदिक पद्धति कर्मकांड ]</span>
            <span>[ ज्योतिषी ]</span>
            <span>[ धार्मिक मार्गदर्शन ]</span>
            <span>[ सभी पुराणों की कथाएँ ]</span>
          </div>
        </div>

        <div className={`${style.saturnBg} ${mobileStyle.saturnBg}`}>
          <img src={saturn} alt="" />
        </div>

        <div
          className={`${style.saturnBg} ${style.rashi} ${mobileStyle.saturnBg} ${mobileStyle.rashi}`}
        >
          <img src={Rashi} alt="" />
        </div>

        <div className={`${style.starsing} ${mobileStyle.starsing}`}>
          <img src={starsing} alt="" />
        </div>
      </div>
    </>
  );
}

export default Herosection;
