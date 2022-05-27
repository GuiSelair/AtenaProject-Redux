import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface IState {
	cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
		middleware: middlewares
})

sagaMiddleware.run(rootSaga);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch