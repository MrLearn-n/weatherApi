import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Popup } from "./components/Popup/Popup";

function App() {
    const { modal } = useSelector((state) => state);
    const { list, week, dayList, isLoading } = useSelector(
        ({ weather }) => weather
    );

    const storageTheme = localStorage.getItem('theme');
    const root = document.querySelector(':root');

    const components = [
        "body-background",
        "components-background",
        "card-background",
        "text-color",
    ];

    useEffect(() => {
        components.forEach((item) => {
            root.style.setProperty(
                `--${item}-default`,
                `var(--${item}-${storageTheme})`
            );
        });
    }, [storageTheme]);

    return (
        <div className="global-container">
            {modal.modal && <Popup data={dayList} />}
            <div className="container">
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
