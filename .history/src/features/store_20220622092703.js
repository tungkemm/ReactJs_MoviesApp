import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import movieReducer from "./movies/movieSlice";
import filterReducer from "./movies/filterSearchSlice";
import loginReducer from "./movies/loginSlice";

const persistLocalConfig = {
  key: "dataMovieApp",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  movies: movieReducer,
  filter: filterReducer,
  login: loginReducer,
});

const persitedReducer = persistReducer(persistLocalConfig, rootReducer);

const store = configureStore({
  reducer: persitedReducer,
});

export const persistor = persistStore(store);

export default store;


// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// import { filtersSlice } from "../components/PageTodos/Filters/filtersSlice";
// import { todosSlice } from "../components/PageTodos/TodoList/todosSlice";
// import { loginSlice } from "../components/PageLogin/loginSlice";

// const persistLocalConfig = {
//   key: "dataRedux",
//   storage,
//   stateReconciler: autoMergeLevel2,
// };

// const rootReducer = combineReducers({
//     filters: filtersSlice.reducer,
//     todos: todosSlice.reducer,
//     login: loginSlice.reducer
// })

// const persitedReducer = persistReducer(persistLocalConfig, rootReducer);

// const store = configureStore({
//   reducer: persitedReducer,
// });

// export const persistor = persistStore(store);

// export default store;
