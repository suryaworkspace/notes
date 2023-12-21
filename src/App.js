import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
