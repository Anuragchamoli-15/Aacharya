import "./App.css";
import HeaderBar from "../components/navbar/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Outlet/>
     <Footer></Footer>
     
    </>
  );
}

export default App;
