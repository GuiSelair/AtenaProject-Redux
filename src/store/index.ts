import { configureStore } from "@reduxjs/toolkit";
import { ICartState } from "./modules/cart/types";

import rootReducer from "./modules/rootReducer";

export interface IState {
	cart: ICartState;
}

const store = configureStore({
    reducer: rootReducer
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch