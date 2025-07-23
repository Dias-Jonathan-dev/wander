import { Outlet } from "react-router";
import TopBar from "./components/topbar/TopBar";
import "./Reset.css";
import "./App.css";

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
