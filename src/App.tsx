import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
