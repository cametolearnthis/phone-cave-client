import "./App.css";
import NavBar from "./components/NavBar";
import PhoneList from "./pages/PhoneList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePhone from "./pages/SinglePhone";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneList />} />
        <Route path="/phones/:id" element={<SinglePhone/>}/>
      </Routes>
    </>
  );
}

export default App;
