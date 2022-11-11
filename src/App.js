import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    // <img src={"./images/client-meet.svg"} />
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
