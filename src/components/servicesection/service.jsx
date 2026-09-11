import style from "./service.module.css";
import no1 from "../../assets/no1.jpg";
import no2 from "../../assets/no2.jpeg";
import no3 from "../../assets/no3.jpeg";
import no4 from "../../assets/no4.jpeg";
import no5 from "../../assets/no5.jpeg";

function Services() {
  return (
    <>

        <div className={style.carts}>
          <img src={no2} alt="piture" />
          <div className={style.infocart}>
          <h2>Hawan</h2>
          <button className={style.btn}>
            {" "}
            <a href="/Aacharya/Hawan/" className={style.innerbtn}>
              view more
            </a>
          </button>
          </div>
        </div>
        <div className={style.carts}>
          <img src={no5} alt="piture" />
           <div className={style.infocart}>
          <h2>Hawan</h2>
          <button className={style.btn}>
            {" "}
            <a href="" className={style.innerbtn}>
              view more
            </a>
          </button>
          </div>
        </div>
        <div className={style.carts}>
          <img src={no4} alt="piture" />
           <div className={style.infocart}>
          <h2>Hawan</h2>
          <button className={style.btn}>
            {" "}
            <a href="" className={style.innerbtn}>
              view more
            </a>
          </button>
          </div>
        </div>
        <div className={style.carts}>
          <img src={no3} alt="piture" />
           <div className={style.infocart}>
          <h2>Hawan</h2>
          <button className={style.btn}>
            {" "}
            <a href="" className={style.innerbtn}>
              view more
            </a>
          </button>
          </div>
        </div>
        <div className={style.carts}>
          <img src={no1} alt="piture" />
           <div className={style.infocart}>
          <h2>ankit</h2>
          <button className={style.btn}>
            {" "}
            <a href="" className={style.innerbtn}>
              view more
            </a>
          </button>
          </div>
        </div>
        
      {/* </div> */}
    </>
  );
}

export default Services;
