import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Popup } from "./components/Popup/Popup";

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="" element = {<Home /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
