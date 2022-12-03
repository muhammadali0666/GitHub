import "./footer.css"
import Logo from "../../assets/img/Logo.png"
import { FooterList } from "../FooterList"

export const Footer = () => {
  return(
    <div className="container footer d-flex align-items-center">
      <div className="footer-box d-flex align-items-center">
        <img src={Logo} alt="logo" />
        <p className="logo-p">
        © 2022 GitHub, Inc.
        </p>
      </div>
      <FooterList/>
    </div>
  )
}