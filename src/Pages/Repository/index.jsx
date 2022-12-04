import "./repository.css";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Star from "../../assets/img/stars.webp";
import { RepoNav } from "../../Components/RepoNav";

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
      <RepoNav />
      {
        <ul className="repo-list">
          <hr />
          {myData?.length > 0 &&
            myData.map((e) => (
              <>
                <li className="repo-item py-3">
                  <div className="repo-top d-flex">
                    <div className="mini-box">
                      <a className="links" target="blank" href={e.html_url}>
                        <p className="repo-p fs-3 fw-semibold fs-4 text-primary">
                          {e.name}
                        </p>
                      </a>
                      <button className="repo-text ms-3 rounded-3 px-1">
                        {e.visibility}
                      </button>
                    </div>
                    <div className="box d-flex">
                      <button className="repos-btn px-2 d-flex align-items-center">
                        <img
                          className="me-2"
                          src={Star}
                          alt="img"
                          width={20}
                          height={20}
                        />
                        Star
                      </button>
                      <select className="repo-select"></select>
                    </div>
                  </div>
                  <div className="repo-bottom">
                    <p className="repo-lang mt-3 d-flex align-items-center">
                      <div className="round me-1"></div>
                      {e.language}
                    </p>
                  </div>
                </li>
                <hr />
              </>
            ))}
        </ul>
      }
    </>
  );
};
