import { HeaderForm } from "../HeaderForm";
import "./header.css";
import Notificate from "../../assets/img/not.svg"
import Plus from "../../assets/img/plus.svg"
import Prof from "../../assets/img/profile.jfif"

export const Header = () => {
  return (
    <>
      <div className="header bg-dark">
        <div className="header-inner d-flex align-items-center container py-3">
          <div className="header-form d-flex align-items-center">
            <HeaderForm />
          </div>
          <ul className="list-unstyled d-flex align-item-center">
            <li className="header-item">
              <a href="#" className="header-link">
                Pull request
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Issue
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Maketplace
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Explore
              </a>
            </li>
          </ul>

          <div className="header-end-box ms-auto">
            <img className="img" src={Notificate} alt="img" width={20} height={20}/>
            <img className="heads-img mx-3"  src={Plus} alt="img" width={20} height={20}/>
            <img className="head-img" src={Prof} alt="img" width={20} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};
