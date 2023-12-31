import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingPage/Landingpage";
import HomePage from "./pages/home/HomePage";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { useLocation } from "react-router-dom";
import DetailPage from "./pages/detailPage/DetailPage";
import CreatePokemonPage from "./pages/CreatePage/CreatePokemonPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import axios from "axios";
import { Navigate } from "react-router-dom";
axios.defaults.baseURL = "https://pokeapiapi-production.up.railway.app/";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname === "/" ? null : <NavbarContainer />}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
        <Route path="/pokemon/create" element={<CreatePokemonPage />} />
        <Route path="*" element={<Navigate to={"/error"} />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
