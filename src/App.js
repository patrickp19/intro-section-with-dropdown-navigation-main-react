import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Register from "./routes/register/register.component";

const App = () => {
  return (
    // <img src={"./images/client-meet.svg"} />
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
