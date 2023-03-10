import { RouterProvider } from "react-router-dom";
import routes from "./component/routes";
import './App.css'
import { Provider } from "react-redux";
import store from "./Redux/store";


export default function App() {
    return (
     <Provider store={store}>
       <RouterProvider router={routes} />
     </Provider>
    );
}
