import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroductionPage from "./IntroductionPage";
import NextPage from "./NextPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
