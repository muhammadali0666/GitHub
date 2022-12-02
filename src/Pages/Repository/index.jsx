import "./repository.css";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Star from "../../assets/img/star.png"

export const Repository = () => {
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

  return (
    <>
      <h1>Repository</h1>
        {
          <ul className="repo-list">
            {myData?.length > 0 &&
              myData.map((e) => (
                <li className="repo-item">
                  <div className="repo-top">
                  <a target="blank" href={e.html_url}>
                  <p className="repo-p fs-3">{e.name}</p>
                  </a>
                  <p className="repo-text">{e.visibility}</p>
                  <button className="repo-btn">
                    <img src={Star} alt="img" />
                    Star
                  </button>
                  </div>
                  <p className="repo-date">{e.updated_at}</p>
                  {/* <img src="" alt="" /> */}
                </li>
              ))}
          </ul>
        }
      </>
  );
};
