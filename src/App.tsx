import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Identify from "./pages/Identify";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/identify" element={<Identify />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
