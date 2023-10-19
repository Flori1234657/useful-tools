import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";

const Tools = lazy(() => import("./pages/Tools"));
const Task = lazy(() => import("./pages/Task"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/task" element={<Task />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
