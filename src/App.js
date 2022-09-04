import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import AfterLoginMain from "./components/afterLogin/afterLoginMain";
import BeforeLoginMain from "./components/beforeLogin/beforeLoginMain";
import Admin from "./components/admin/admin";
import { Routes, Route } from "react-router-dom";

function App() {
  const login = useSelector((state) => state.mert.login);

  return (
    <div>
      {login === true ? <AfterLoginMain /> : <BeforeLoginMain />}
      <Routes>
        <Route path="/admin" element={<Admin />} />;
      </Routes>
    </div>
  );
}

export default App;
