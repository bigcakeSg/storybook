import "./App.css";
import BannerStory from "./components/bannerStory";
import ButtonStory from "./components/buttonStory";

function App() {
  return (
    <div className="App">
      <BannerStory text="Bannière" />
      <ButtonStory
        text="Test de bouton"
        theme="validation"
        size="medium"
        onClick={() => alert("ok")}
      />
    </div>
  );
}

export default App;
