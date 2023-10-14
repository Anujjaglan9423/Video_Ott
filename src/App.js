import HomePage from "./Pages/HomePage";
import Welcome from "./Pages/Welcome";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./i18";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./Pages/RegisterPage";
import List from "./Pages/List";
import Detail from "./Pages/Detail";
import Search from "./Pages/Search";
import Account from "./Pages/Account";
import PlanPage from "./Pages/PlanPage";
import Watchlist from "./Pages/Watchlist";
import HomePlan from "./Pages/HomePlan";
import NewLogin from "./Pages/NewLogin";
import PlanPageNew from "./Pages/PlanPageNew";
import Radio from "./Pages/Radio";
// import Geners from "./Pages/Geners";

function App() {
  const user = useSelector((state) => state.UserReducer.user);

  //if (!user) return <Login />;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<NewLogin />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/plans" element={<PlanPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/homeplan" element={<HomePlan />} />
        <Route path="/plansnew" element={<PlanPageNew />} />
        <Route path="/radio" element={<Radio />} />
        {/* <Route path="/geners" element={<Geners />} /> */}
      </Routes>
    </>
  );
}

export default App;
