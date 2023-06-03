
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MainRoutes from './Routes';
import NavBar from "./components/NavBar";
import './index.css'


function App() {



  return (

    <Router>


      <NavBar />
      <main>
        <MainRoutes />
      </main>

    </Router>

  );
}

export default App;
