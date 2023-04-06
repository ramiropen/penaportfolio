import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/CSS/App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LoanCalculator from "./projects/loanCalculator/LoanCalculator";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/LoanCalculator' element={<LoanCalculator />}></Route>
          <Route path='*' element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
      <div>
      </div>
    </div>
  )
}
