import Header from "./components/Header";
import GetInput from "./components/GetInput";
import NewOne from "./components/NewOne";

function App() {
  return (
    <main className="w-96 h-[calc(100%-7rem)] mx-auto my-14 relative flex flex-col items-center">
      <Header />

      <NewOne />

      <GetInput />
    </main>
  );
}

export default App;
