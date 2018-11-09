import { INCREMENT, DECREMENT } from '../actions';

const initislState = { value: 0 };

export default (state = initislState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
