import { Provider } from "react-redux";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import appstore from "./Utils/appstore";
import "./index.css";

function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Header />
        <div className="flex ">
          <SideBar />
          <Outlet />
        </div>
      </Provider>
    </div>
  );
}

export default App;
