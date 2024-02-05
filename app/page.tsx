import GetInput from "@/components/GetInput";
import Header from "@/components/Header";
import List from "@/components/List";
import NewOne from "@/components/NewOne";

const Home = () => {
  return (
    <main className="w-96 h-[calc(100%-7rem)] mx-auto my-14 relative flex flex-col items-center">
      <Header />

      <NewOne />

      <GetInput />
    </main>
  );
};

export default Home;
