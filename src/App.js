import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/post/:id" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
