import "./App.css";
import './Helper.js'
import Landingpage from "./components/Landingpage";
import Leftslider from "./components/Leftslider";
import Downslider from "./components/Downslider";

function App() {
  return (
    <div className="App">
      <main>
        <Landingpage />
        <Leftslider />
        <Downslider />
      </main>
    </div>
  );
}

export default App;
