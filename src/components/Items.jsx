import Herosection from "../components/herosection/Herosection";
import Data from "./PanditInfo/PanditData";
import ServiceData from "./Sevaye/serviceData";
import Quets from "./quets/quets";

function Items() {
  return (
    <>
      <Herosection></Herosection>
      <Data></Data>
      <Quets></Quets>
      <ServiceData></ServiceData>
    </>
  );
}

export default Items;
