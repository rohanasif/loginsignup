import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Homepage from "./routes/Homepage";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />}></Route>
    </Routes>
  );
};

export default App;
