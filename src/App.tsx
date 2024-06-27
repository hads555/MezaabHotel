import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Routes/path";
import { ThemeProvider } from "styled-components";
import './style.css';
import { theme } from "antd";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n";
import { authSlice } from "./redux/apis/apisSlice";
import { themeStyle } from "./components/Config/Theme";

const App = () => {
  // const dispatch = useDispatch();
  // dispatch(authSlice.actions.setTheme( {themeStyle} ));
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <PersistGate persistor={persistor}>
              <RouterProvider router={router} />
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </I18nextProvider>
    </>
  );
};

export default App;
