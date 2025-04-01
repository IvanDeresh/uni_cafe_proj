import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
