import kundali from "../../assets/kundali.png";
import ServiceCard from "./serviceCard";
import style from "./otherService.module.css"


function ServiceData() {
  const Data = [
    {
      id: 1,
      image: kundali,
      title: "kundali milan",
      subtitle: "jane apne jivan sathi ke sath apna future",
    },

    {
      id: 2,
      image: kundali,
      title: "varshfal",
      subtitle: "jane apne aane wale sal ke bare me",
    },

    {
      id: 3,
      image: kundali,
      title: "navgreh puja",
      subtitle: "jivn ki aisthirta ko kre sant",
    },
  ];
  return (
    <section>
      <div className={style.container}>
        <div className={style.innerContainer}>
          {Data.map((item) => (
            <ServiceCard key={item.id} data={item}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceData;
