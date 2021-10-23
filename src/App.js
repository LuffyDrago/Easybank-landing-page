import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
