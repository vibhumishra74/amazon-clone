import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "basket",
  initialState: {
    baskets: [],
    value: 0,
  },
  reducers: {
    incremented: (state, action) => {
      // console.log("state from appslice>>", state.baskets);
      console.log("state from appslice>>", action);
      // state.baskets += action.payload.price;
      state.baskets.push(action.payload);
      // let newBasket = state.baskets.push(action.paylod);
      console.log("statessss>>", state.baskets[0]);
      // state.baskets = newBasket;
    },
    basketvalue: (state) => {
      state.value = state.basket.length;
    },
    decremented: (state, action) => {
      // state.basket.splice(
      //   state.basket.findIndex((item) => item.id === action.payload.id),
      //   1
      // );
      // state.baskets = [...state.baskets.filter(
      //   (pro) => pro.id !== action.payload.id
      // )]
      console.log("action>>>>", action.payload);
      const pid = `${action.payload.id}`;
      state.baskets = [...state.baskets.filter((item) => item.id !== pid)];
      console.log("state.basket", state.baskets);
      // console.log(
      //   "decrement...",
      //   state.baskets,
      //   "state",
      //   state,
      //   "payloadsss",
      //   action.payload
      // );
      //  ba =  [...state.baskets]
      // state.baskets.filter((items) => items.id !== action.payload.id);
    },
  },
});

export const { incremented, decremented } = appSlice.actions;
export const selectbasket = (state) => state.baskets;
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
