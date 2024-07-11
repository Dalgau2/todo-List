import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./Store/Store.jsx";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import  {ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={1000}/>
    </Provider>
    </>
);
