import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="font-outfit">
      <div className="max-w-7xl  mx-auto">

      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
