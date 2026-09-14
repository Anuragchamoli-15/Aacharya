import style from "./PanditCard.module.css"
import chakra from "../../assets/chakra.png";



function PanditInfoo({ info }) {
  return (
    <main>
      <div className={style.container}>
        <span className={style.chakra}> <img src={chakra} alt="" /></span>
       
        <div className={style.innerContainer}> 
            

          <div className={style.card}>
            <div className={style.panditIntro}>
              <img src={info.image} alt="panditImge" />
              <h2> {info.name}</h2>
              <h3> {info.addres}</h3>
              <p>{info.gotr}</p>
            </div>

            <div className={style.panditAbout}>
            <p className={style.quets}>{info.quets}</p>
            <p> {info.experience}</p>

            <div className={style.experties}>
            <h3>{info.expertiesTitle}</h3>
            <span> {info.works.vedicPujan}</span>
            <span> {info.works.jyotish}</span>
            <span> {info.works.anushthan}</span>
            <span> {info.works.vivhaSanskar}</span>
            <span> {info.works.yag}</span>
            <span> {info.works.karmkand}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PanditInfoo;
