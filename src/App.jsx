import "./App.css";
import Navbar from "./components/Header/Navbar";
import ConnectWallet from "./views/ConnectWallet";
import Footer from "./components/Footer";
import Profile from "./views/Profile";
import Search from "./views/Search";
import Create from "./views/Create";
import SmallNavbar from "./components/Header/SmallNavbar";
import { Route, useLocation } from "wouter";
import LandingPage from "./views/LandingPage";
import Wallet from "./views/wallet";
function App() {
  const [location, setLocation] = useLocation();
  return (
    <>
      <main className=" bg-black">
        {location != "/" && (
          <>
            <div className=" hidden lg:block">
              <Navbar />
            </div>
            <div className=" lg:hidden">
              <SmallNavbar />
            </div>
          </>
        )}
         <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/connect-wallet">
          <ConnectWallet />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        {location != "/" && <Footer />}
      </main>
    </>
  );
}

export default App;
