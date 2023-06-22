import { configureStore } from "@reduxjs/toolkit";
import { persistedFollowedUsersReducer } from "./followedUsersSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { persistedFiltersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    followedUsers: persistedFollowedUsersReducer,
    filters: persistedFiltersReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
