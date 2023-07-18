import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HomeLinkedin from "./components/HomeLinkedin";
import Header from "./components/Header";
import JoinNow from "./components/JoinNow";
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
          <Route exact path="/join" element={<JoinNow />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
