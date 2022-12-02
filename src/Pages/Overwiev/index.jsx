import "./overwiev.css";
import { useEffect, useState } from "react";
import Book from "../../assets/img/repo.png";
import { NavLink } from "react-router-dom";

export const Overwiev = () => {
  const [myData, setMyData] = useState([]);
  const [pro, setPro] = useState("muhammadali0666");

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.github.com/users/${pro}/repos`)
        .then((res) => res.json())
        .then((data) => setMyData(data));
      // console.log(data);
    }
    getData();
  }, []);
  console.log(myData);
  myData.splice(1);

  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="fs-4">Pinned</p>
        <p className="pins">Customize your pins</p>
      </div>
      {
        <ul className="ps-0">
          {myData?.length > 0 &&
            myData.map((e) => (
              <li className="card w-75 mt-3 p-3">
                <div className="card-top d-flex align-items-center">
                  <img src={Book} alt="icon" width={20} height={20} />
                  <a className="repo-link" target="blank" href={e.html_url}>
                    <p className="mx-2">{e.name}</p>
                  </a>
                  <button className="card-btn rounded-4 px-2">
                    {e.visibility}
                  </button>
                </div>
                <p className="my-2">{e.full_name}</p>
                <div className="buttom">
                  <div className="bottom-span"></div>
                  <p className="ms-1">SCSS</p>
                </div>
                <img src="" alt="" />
              </li>
            ))}
        </ul>
      }
    </>
  );
};
