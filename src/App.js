import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Services from "./component/Services";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/mediaquery.scss";

function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
