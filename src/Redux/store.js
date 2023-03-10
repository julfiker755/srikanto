import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Productreducer from "./Product/Productreducer";


const store = createStore(Productreducer,composeWithDevTools())
export default store;