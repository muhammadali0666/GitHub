import "./follower.css";
import { useEffect, useState } from "react";

export const Follower = () => {
  const [myData, setMyData] = useState([]);
  const [pro, setPro] = useState("muhammadali0666");

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.github.com/users/${pro}/followers`)
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
        <ul className="follower-list mt-3">
          {myData?.length > 0 &&
            myData.map((e) => (
              <>
              <li className="follower-item">
                <a className="d-flex link" target="blank" href={e.html_url}>
                <img className="follower-img" src={e.avatar_url} alt="icon" />
                <p className="follower-name ms-4">{e.login}</p>
              </a>
              <button className="follower-btn px-2 rounded-2 ms-auto">Unfollow</button>
              </li>
              <hr className="my-4" />
              </>
            ))}
        </ul>
      }
    </>
  );
};
