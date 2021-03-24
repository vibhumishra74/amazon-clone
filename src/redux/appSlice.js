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
      state.baskets.filter((items) => {
        console.log("decrement", items);
        return items.id !== state.baskets.id;
      });
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
