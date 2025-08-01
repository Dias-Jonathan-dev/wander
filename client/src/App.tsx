import { Outlet } from "react-router";
import TopBar from "./components/topbar/TopBar";
import "./Reset.css";
import "./App.css";

function App() {
  console.log("API URL utilisée:", import.meta.env.VITE_API_URL);
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
