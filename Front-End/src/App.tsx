
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './Routes';
import NavBar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css"; import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";

function App() {



  return (

    <Router>

      <NavBar />
   
      <MainRoutes />


    </Router>

  );
}

export default App;
