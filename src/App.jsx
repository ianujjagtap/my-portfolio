import React from 'react'
import { Header } from './components/header';
import { Footer } from './components/footer';



const App = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-black text-gray-200 min-h-screen flex flex-col lg:flex-row">
      <Header />
      <Footer />
    </div>
  );
};

export default App