import "./repo.css";
import Repo from "../../assets/img/repo.png";

export const RepoNav = () => {
  return (
    <div className="mb-2">
      <input
        className="input rounded-2 p-1"
        type="text"
        placeholder="Find a repository"
      />
      <select className="select ms-3 rounded-2 p-1">
        <option className="option">Type</option>
        <option className="option">All</option>
        <hr  className="hr"/>
        <option className="option">Public</option>
        <hr  className="hr"/>
        <option className="option">Private</option>
        <hr  className="hr"/>
        <option className="option">Sources</option>
        <hr  className="hr"/>
        <option className="option">Forks</option>
        <hr  className="hr"/>
        <option className="option">Archived</option>
        <hr  className="hr"/>
        <option className="option">Mirrors</option>
        <hr  className="hr"/>
        <option className="option">Templates</option>
      </select>
      <select className="select rounded-2 p-1 ms-2">
        <option className="option">Languages</option>
        <option className="option">All</option>
        <hr  className="hr"/>
        <option className="option">Html</option>
        <hr  className="hr"/>
        <option className="option">JavaScript</option>
        <hr  className="hr"/>
        <option className="option">Scss</option>
        <hr  className="hr"/>
        <option className="option">Css</option>
      </select>
      <select className="select rounded-2 p-1 ms-2">
        <option className="option">Sort</option>
        <option className="option">Last update</option>
        <hr className="hr" />
        <option className="option">Name</option>
        <hr className="hr" />
        <option className="option">Stars</option>
      </select>
      <button className="repo-nav rounded-2 p-1 ms-3 btn btn-success">
        {" "}
        <img className="img" src={Repo} alt="img" width={15} height={15} /> New
      </button>
    </div>
  );
};
