import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./Store/Store.jsx";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import  {ToastContainer} from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

let persistor=persistStore(store)
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
      <ToastContainer autoClose={1000}/>
    </Provider>
    </>
);
