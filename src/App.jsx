import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Popup } from "./components/Popup/Popup";

function App() {
  const { modal } = useSelector(state => state);
  const { list, week, dayList, isLoading } = useSelector(({ weather }) => weather);  

  return (
    <div className="global-container">
      {modal.modal &&
        <Popup data = {dayList}/>
      }
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
