import style from "./Herosection.module.css"
import image from "../../assets/image.png"

function Herosection(){
    return(
<>

<div className={style.Container}>


            <div className={style.heroIfoBar}>
                <h2>Acharya Ankit Chamoli1</h2>
                <p>Dehradun, Uttarakhand</p>
                <p>Mool Nivasi - Pauri Garhwal</p>
                <p>Shastri & Acharya Studied to SGRR Sanskrit Vidhalay</p>
            </div>
            <div className={style.heroImagBar}>
                <img src={image} alt="" />
                <h2>Acharya Ankit Chamoli</h2>
            </div>
</div>




</>


    )
}

export default Herosection