import style from "./Veda.module.css"

function Veda({ data }) {
  return (
    <>
  

      <div className={style.veds}>
        <div className={style.vedImg}>
          <img src={data.image} alt="" />
          <h3>{data.title}</h3>
        </div>
        <div className={style.vedAbout}>
          <p>{data.subtitle}</p>
          <p>{data.information}</p>
          <p>{data.keyPoints}</p>
        </div>
      </div>
    </>
  );
}
export default Veda;
