import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <Button
        text="Test de bouton"
        theme="validation"
        size="medium"
        onClick={() => alert("ok")}
      />
    </div>
  );
}

export default App;
