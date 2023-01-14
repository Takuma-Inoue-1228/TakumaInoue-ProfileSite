import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Top } from "./components/Top";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Top />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/gallery"} element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
