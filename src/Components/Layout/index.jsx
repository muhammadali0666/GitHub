import { Header } from "../Header";
import {Footer} from "../Footer"
import "./layout.css";

export const Layout = ({ children }) => {
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
