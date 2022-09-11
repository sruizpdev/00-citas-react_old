import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
      </div>
    </div>
  );
}

export default App;
