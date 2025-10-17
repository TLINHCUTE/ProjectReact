import { Route, Routes } from "react-router-dom";
import In from "./pages/auth/Signin";
import Up from "./pages/auth/Signup";

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<In />} />
    <Route path="/about" element={<Up />} />
  </Routes>
);

export default RouterConfig;
