import "./footer.css"
import Logo from "../../assets/img/footer.png"
import { FooterList } from "../FooterList"

export const Footer = () => {
  return(
    <div className="container footer d-flex align-items-center">
      <div className="footer-box d-flex align-items-center">
        <img className="me-2" src={Logo} alt="logo" width={30} height={30}/>
        <p className="logo-p">
        © 2022 GitHub, Inc.
        </p>
      </div>
      <FooterList/>
    </div>
  )
}