import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/Home/Home";
// import { Bounce, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
export default function App() {
  const userAuth = useSelector((state) => state.user.isAuthUser);
  // console.log(123);
  // if (userAuth === 'idle') console.log(123);
  console.log(userAuth);
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-prime-color">
      <Routes>
        <Route
          path="/"
          element={userAuth ? <Home /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/login"
          element={!userAuth ? <Login /> : <Navigate to={"/"} />}
        ></Route>
        <Route
          path="/signup"
          element={!userAuth ? <Signup /> : <Navigate to={"/"} />}
        ></Route>
        {/* <Route path="/signup" element= {<Signup/>}></Route> */}
      </Routes>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition= Bounce
      /> */}
      {/* Same as */}
      {/* <ToastContainer /> */}
    </div>
  );
}
