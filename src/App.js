import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HomeLinkedin from "./components/HomeLinkedin";
import Header from "./components/Header";
import JoinNow from "./components/JoinNow";
import MyNetworks from "./components/MyNetworks";
import Jobs from "./components/Jobs";
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
              <div>
                <Header />
                <HomeLinkedin />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/networks"
            element={
              <div>
                <Header />
                <MyNetworks />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/jobs"
            element={
              <div>
                <Header />
                <Jobs />
              </div>
            }
          ></Route>
          <Route exact path="/join" element={<JoinNow />}></Route>
          <Route exact path="/home" element={<HomeLinkedin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
