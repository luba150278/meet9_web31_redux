const initialState = {
  res: 0,
  first: 0,
  mathAction: '',
  second: 0,
};

export default function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'matAction':
      return { ...state, mathAction: action.payload };
    case 'number':
      if (state.mathAction === '') {
        if (state.first === 0) {
          return { ...state, first: action.payload, res: action.payload };
        } else {
          const res = Number(state.first.toString() + action.payload);
          return { ...state, first: res, res: res };
        }
      } else {
        if (state.second === 0) {
          return { ...state, second: action.payload, res: action.payload };
        } else {
          const res = Number(state.second.toString() + action.payload);
          return {
            ...state,
            second: Number(state.second.toString() + action.payload),
            res,
          };
        }
      }
    case 'equal':
      const res = eval(`${state.first}${state.mathAction}${state.second}`);
      return { ...state, res: res, second: 0, mapActions: '', first: res };
    case 'cancel':
      return { ...initialState };
    default:
      return state;
  }
}
