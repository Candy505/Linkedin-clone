import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HomeLinkedin from "./components/HomeLinkedin";
import Header from "./components/Header";
import JoinNow from "./components/JoinNow";
import MyNetworks from "./components/MyNetworks";
import Jobs from "./components/Jobs";
import Profile from "./components/Profile";
import styl from './components/Styl.css';
import EditProfile from "./components/EditProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            exact
            path="/home"
            element={
              <div className="s">
                <Header />
                <HomeLinkedin />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/networks"
            element={
              <div className="s">
                <Header />
                <MyNetworks />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/jobs"
            element={
              <div className="s">
                <Header />
                <Jobs />
              </div>
            }
          ></Route>
          <Route exact path="/join" element={<JoinNow />}></Route>

          <Route
            exact
            path="/profile"
            element={
              <div className="s">
                <Header />
                <Profile />
              </div>
            }
          ></Route>

          <Route exact path="/home" element={<HomeLinkedin />}></Route>
          <Route exact path="/Edit" element={<EditProfile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
