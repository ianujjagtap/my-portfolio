import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Preloader } from "./components/preloader";
import { InstallPrompt } from "./components/InstallPrompt";
import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <InstallPrompt />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="bg-gradient-to-b from-blue-950 to-black text-gray-200 min-h-screen flex flex-col lg:flex-row">
        <Header />
        <Footer />
      </div>
    </>
  );
};

export default App;
