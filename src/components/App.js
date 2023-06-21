import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { lazy } from "react";

import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { store, persistor } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Home = lazy(() => import("../pages/Home/Home.js"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets.js"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.js"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="tweets" element={<Tweets />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistGate>
      </Provider>
    </PersistQueryClientProvider>
  );
};
