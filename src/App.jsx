import "./App.css";
import { Layout } from "./Components/Layout";
import { Navbar } from "./Components/Navbar";
import { Profile } from "./Components/Profile";
import { RouteWrapper } from "./Routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="d-flex">
          <div className="left-box">
            <Profile />
          </div>
          <div className="right-box mt-4 ps-5">
            <Navbar />
            <RouteWrapper />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
