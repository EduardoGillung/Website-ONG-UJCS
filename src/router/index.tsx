import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/homepage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
