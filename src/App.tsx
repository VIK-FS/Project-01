import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
import { GenderPredictor } from "./components/GenderPredictor/GenderPredictor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Contact} from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layout/MainLayout";
// import { PonyLayout } from "./layout/PonyLayout";
// import MyPony from "./components/pony/MyPony/MyPony";
// import BuyPony from "./components/pony/BuyPony/BuyPony";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main layout wrapper for all routes */}
          <Route path="/" element={<MainLayout />}>
            {/* Default home route */}
            <Route index element={<Home />} />
            
            {/* Authentication-related route */}
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            
            {/* API-based prediction feature */}
            <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
            
            {/* Static content pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Demo components routes */}
            <Route path="/age-predictor" element={<AgePredictor />} />
            <Route path="/counter" element={<Counter />} />
            
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<NotFound />} />

            {/* Future feature (commented out) */}
            {/* <Route path="/pony" element={<PonyLayout />}>
              <Route path="/pony/my-pony" element={<MyPony />} />
              <Route path="/pony/buy-pony" element={<BuyPony />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;