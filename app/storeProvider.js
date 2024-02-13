"use client";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const StoreProvider = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};
