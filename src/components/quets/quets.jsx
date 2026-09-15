import style from "./quets.module.css"

function Quets() {
  return (
    <>
      <div className={style.aboutDhrma}>
        <p>
          “हमारा उद्देश्य केवल अनुष्ठानों का संपादन करना नहीं, बल्कि आपको अपनी
          सनातन परंपराओं और धर्म के और निकट लाना है। हमारा प्रयास है कि वैदिक
          ज्ञान एवं शास्त्रों के प्रमाणों के माध्यम से आपको अपने धर्म को समझने
          और जानने का अवसर मिले, ताकि आप इसकी गहराई और महत्त्व को आत्मसात कर
          सकें।”
        </p>
        <p>जाने अपने धर्म और परंपराओं के बारे में</p>
        <div className={style.dhrmaLink}>
            <a href="/Aacharya/ved">ved</a>
            <a href="">puran</a>
            <a href="">krmkand</a>
        </div>
      </div>
    </>
  );
}

export default Quets