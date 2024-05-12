const initiState = {
  product: [],
  basket: [],
  favorit: [],
};

export const Reducer = (state = initiState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_TO_BASKET":
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
        };
      }

    case "DELETE":
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.payload),
      };
    case "PLUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };

    case "MINUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el
        ),
      };

    case "ADD_TO_FAVORITE":
      let favo = state.favorit.find((el) => el.id === action.payload.id);
      if (favo) {
        return {
          ...state,
          favorit: state.favorit.filter((el) => el.id !== action.payload.id),
        };
      } else {
        return { ...state, favorit: [...state.favorit, action.payload] };
      }

    default:
      return state;
  }
};
