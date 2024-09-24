import Navbar from "./components/Navbar";
import Education from "./sections/Education";
import Home from "./sections/Home";

function App() {
  return (
    <div className="bg-[#000000] text-[#b0b0b0]">
      <Navbar />
      <main>
        <section id="home" className="border-b-2 border-[#181818]">
          <Home />
        </section>
        <section id="education" className="border-b-2 border-[#181818]">
          <Education />
        </section>
      </main>
    </div>
  );
}

export default App;
