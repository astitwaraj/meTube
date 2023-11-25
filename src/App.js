import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import appstore from "./Utils/appstore";
import "./index.css";
function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Header />
        <div className="flex">
          <SideBar />
          <Body />
        </div>
      </Provider>
    </div>
  );
}

export default App;
