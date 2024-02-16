import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Head from "./Head";
import Maincontainer from "./Maincontainer";
import WatchPage from "./WatchPage";
import Footer from "./Footer";

const Route = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <div >
      <Head/>
      <RouterProvider router = {Route}/>
      <Footer/>
    </div>
  );
}

export default App;
