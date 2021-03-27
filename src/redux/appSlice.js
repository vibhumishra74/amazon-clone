import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "basket",
  initialState: {
    baskets: [],
    users: null,
  },
  reducers: {
    incremented: (state, action) => {
      // console.log("state from appslice>>", state.baskets);
      // console.log("state from appslice>>", action);
      // let newBasket = state.baskets.push(action.paylod);
      // console.log("statessss>>", state.baskets[0]);
      state.baskets.push(action.payload);
    },
    user: (state, action) => {
      state.users = action.payload;
    },
    decremented: (state, action) => {
      // state.baskets = [...state.baskets.filter(
      //   (pro) => pro.id !== action.payload.id
      // )]
      // console.log("action>>>>", action.payload);
      const pid = `${action.payload.id}`;
      //remove all items with same id
      // state.baskets = [...state.baskets.filter((item) => item.id !== pid)];
      // console.log("state.basket", state.baskets);
      //remove single items with 1st index
      const index = state.baskets.findIndex((i) => i.id === pid);
      let newBasket = [...state.baskets];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`no items found with ${pid}`);
      }
      state.baskets = newBasket;
    },
  },
});

export const { incremented, decremented, user } = appSlice.actions;
export const selectbasket = (state) => state.baskets;
export const selectuser = (state) => state.users;
export const value = (state) => state.value;

export default appSlice.reducer;

// const store = configureStore({
//   reducer: appSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}
