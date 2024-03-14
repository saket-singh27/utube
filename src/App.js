import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/Store";

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
    <Provider store={store}>
    <div id="app" className="scrollbar-hide ">
      <div className="sticky top-0 ">
        <Head/>
      </div>
      <RouterProvider router = {Route}/>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
