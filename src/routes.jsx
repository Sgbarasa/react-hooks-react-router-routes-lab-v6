import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: (
      <>
        <NavBar />
        <ErrorPage />
      </>
    ),
  },
  {
    path: "/actors",
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
  },
  {
    path: "/directors",
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
  },
];

export default routes;
