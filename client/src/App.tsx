import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProtectedRoute from "./helpers/utils/protectRoute";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/loyalty-program" element={<LoyaltyProgram />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
