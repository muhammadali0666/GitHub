import { NavLink } from "react-router-dom"
import "./navbar.css"
import Icon from "../../assets/img/pack.png"
import Star from "../../assets/img/stars.webp"
import Repo from "../../assets/img/repo.png"
import Book from "../../assets/img/read-book-icon.webp"
import File from "../../assets/img/file.png"

export const Navbar = () => {
  return(
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/" className="navbar-item-link">
          <img className="navbar-img me-2" src={Book} alt="icon" width={20} height={15}/>
          Overview
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/repository" className="navbar-item-link">
          <img className="navbar-img me-1" src={Repo} alt="icon" width={20} height={20} />
          Repositories
          <button className="navbar-btn ms-3">
          53
        </button>
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink className="navbar-item-link">
          <img className="navbar-img me-1" src={File} alt="icon"  width={20} height={15}/>
          Projects
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink className="navbar-item-link">
          <img className="navbar-img me-2" src={Icon} alt="icon" width={20} height={25} />
          Packages
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink className="navbar-item-link">
          <img className="navbar-img me-2" src={Star} alt="icon" width={20} height={20} />
          Stars
        </NavLink>
      </li>
    </ul>
  )
}