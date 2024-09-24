import Navbar from "./components/Navbar";
import Home from "./sections/Home";

function App() {
  return (
    <div className="bg-[#000000] text-[#b0b0b0]">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
      </main>
    </div>
  );
}

export default App;
