import style from "./otherService.module.css"

function ServiceCard({data}) {
  return (
    <>
          <div className={style.card}>
            <img src={data.image} alt="photo" />
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
          </div>
 
    </>
  );
}

export default ServiceCard;
