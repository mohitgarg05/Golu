
import './App.css';
import Home from './Home'
import About from './About'
import GoogleAds from './GoogleAds'
import Subscribe from './Subscribe'
import Navbar from './Navbar'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
function App() {
  return (
   <>
    <section id="navbar">
      <Navbar />
    </section>
    <section id="home">
        <Home />
    </section>
    <section id="about">
        <About />
    </section>
    <section id="google-ads">
        <GoogleAds />
    </section>
    <section id="subcribe-form" style={{backgroundColor:"#1B1E61"}}>
      <Subscribe />
    </section>
   </>
  );
}

export default App;
