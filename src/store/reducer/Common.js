export const CHANGE_ROUTE = 'CHANGE_ROUTE';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {...state, count: action.count};
    default:
      return state;
  }
};
