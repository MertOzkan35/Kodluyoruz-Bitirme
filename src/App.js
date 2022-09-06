import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import AfterLoginMain from "./components/afterLogin/afterLoginMain";
import BeforeLoginMain from "./components/beforeLogin/beforeLoginMain";
import Admin from "./components/admin/admin";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  const login = useSelector((state) => state.mert.login);

  return (
    <div>
      {login === true ? <AfterLoginMain /> : <BeforeLoginMain />}
      <Routes>
        <Route path="/admin" element={<Admin />} />;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
