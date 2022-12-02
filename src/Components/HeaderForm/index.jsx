import Logo from "../../assets/img/Logo.png"
import "./headerform.css"

export const HeaderForm = () => {
  return (
    <>
      <img className="text-light me-3" src={Logo} alt="logo" width={50} height={50}/>
      <form className="header-form">
        <input type="text" className="header-input px-3 py-2 rounded-2" placeholder="Search or jupm to..."/>
        <button className="header-btn px-2 rounded-2">
          /
        </button>
      </form>
    </>
  )
}