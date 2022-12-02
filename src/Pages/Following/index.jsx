import "./following.css";
import { useState, useEffect } from "react";

export const Following = () => {
  const [myData, setMyData] = useState([]);
  const [pro, setPro] = useState("muhammadali0666");
  const [user, setUser] = useState("login")

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.github.com/users/${pro}/following`)
        .then((res) => res.json())
        .then((data) => setMyData(data));
      // console.log(data);
    }
    getData();
  }, []);
  console.log(myData);

  return (
    <>
      {
        <ul className="ps-0 mt-3">
          {myData?.length > 0 &&
            myData.map((e) => (
              <>
              <li className="following-item">
              <a className="follow-links d-flex" target="blank" href={e.html_url}>
                <img className="following-img" src={e.avatar_url} alt="" />
                <p className="ms-4 fs-5 fw-normal">{e.login}</p>
              </a>
                <button class="button-follow btn btn-secondary ms-auto bg-light text-dark">Unfollow</button>
              </li>
                <hr className="folow-hr my-4" />
              </>
            ))}
        </ul>
      }
    </>
  );
};
