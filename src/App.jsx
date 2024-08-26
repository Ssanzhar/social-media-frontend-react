import LeftBar from "./components/LeftBar";
import VerticalDivider from "./components/VerticalDivider";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./components/MainBody/Home";
import Messages from "./components/MainBody/Messages";
import Post from "./components/MainBody/Post";
import Search from "./components/MainBody/Search";
import Profile from "./components/MainBody/Profile";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/messages",
      element: <Messages />,
    },
    {
      path: "/post",
      element: <Post />,
    },
    {
      path: "search",
      element: <Search />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <div className="App">
      <LeftBar />
      <VerticalDivider />
      {routes}
    </div>
  );
}

export default App;
