import { Header } from "../Header";
import {Footer} from "../Footer"
import "./layout.css";
import {Contex} from "../../Contex"
import { useContext } from "react";

export const Layout = ({ children }) => {
  const cont = useContext(Contex)
  return (
    <>
      <header>
        {
          <>
            <Header />
          </>
        }
      </header>
      <main>
      <hr className="hr-line" />
        <div className="mains container d-flex mt-0 ps-5">
          <div className="d-flex">{children}</div>
          <div className="mt-5">
          
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};
