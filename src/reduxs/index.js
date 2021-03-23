let initialstate = {
  cart: [],
};

export default function reducers(state = initialstate, action) {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}
