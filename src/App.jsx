import "./App.css";

//Components
import Navbar from "./components/navbar";
import Title1 from "./components/title1";
import OurServices from "./components/ourServices";
import Cards from "./components/cards";
import Technologies from "./components/technologies";
import Clients from "./components/clients";
import Cards2 from "./components/cards2";
import Footer from "./components/footer";

function App() {
  return (
    <main className="container">
      <section className="d-flex flex-column bg-custom position-relative">
        <Navbar />
        <div className="d-flex flex-row flex-lg-row justify-content-lg-between">
          <div className="bg-custom w-lg-50 text-white m-auto ms-5 ">
            <Title1 />
          </div>
          <div className="main-background w-50 d-none d-lg-block"></div>
        </div>
        <OurServices />
      </section>
      <section className="d-flex flex-column bg-custom position-relative">
        <Cards />
      </section>
      <section className="d-flex flex-column bg-custom-technologies">
        <Technologies />
      </section>
      <section className="d-flex flex-column">
        <Clients />
      </section>
      <section className="d-flex flex-column">
        <Cards2 />
      </section>
      <section className="position-relative">
        <Footer />
      </section>
    </main>
  );
}

export default App;
