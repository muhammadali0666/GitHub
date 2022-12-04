import "./profile.css";
import { useEffect, useState } from "react";
import Followers from "../../assets/img/followers.png";
import { NavLink } from "react-router-dom";

export const Profile = () => {
  const [myData, setMyData] = useState([]);
  const [pro, setPro] = useState("muhammadali0666");

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.github.com/users/${pro}`)
        .then((res) => res.json())
        .then((data) => setMyData(data));
    }
    getData();
  }, []);

  return (
    <div>
      <img className="profile-img mt-4" src={myData.avatar_url} alt="logo" />
      <p className="profile-user-name my-3">{myData.login}</p>
      <button className="profile-btn rounded-2 py-1 fw-semibold">Edit profile</button>
      <div className="profile-box mt-3">
        <div className="profile-box-in d-flex align-items-center">
          <img
            className="me-2"
            src={Followers}
            alt="img"
            width={20}
            height={20}
          />
          <NavLink to="/follower" className="profile-follower text-dark">
            <p className="profile-follower ">
              <span className="profile-span fw-bold me-2">
                {myData.followers}
              </span>
              followers
            </p>
          </NavLink>
          <NavLink to="/following" className="profile-follower text-dark">
            <p className="profile-follower ms-2">
              <span className="profile-span fw-bold me-2">
                {myData.following}
              </span>
              following
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
