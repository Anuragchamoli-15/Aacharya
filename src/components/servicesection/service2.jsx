import { useState } from "react";
import Services from "./service";
import style from "./service.module.css";

function ServiceBar() {

  const [currntaction, setaction] = useState("viewmore")
  const handlclick = ()=>{
    setaction("lessview")
  }
  return (
    <>
      <center>
        <h3>Our Pujas</h3>
      </center>

      <section className={style.mastercontainer}>
        <div className={currntaction === "lessview"? style.master2: style.master} >
        <Services ></Services>
        {/* <Services ></Services> */}
        </div>
        <center>

        <button className={style.viewbutton} onClick={handlclick}>{currntaction}</button>
        </center>
      </section>
    </>
  );
}

export default ServiceBar;
