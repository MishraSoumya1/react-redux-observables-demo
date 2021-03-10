const initialState = {
  employees: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEE_SUCCESS":
      return { ...state, ...action.payload };
    case "FETCH_EMPLOYEE_FAILURE":
      return { ...state, employees: [], ...action.payload };
    default:
      return { ...state };
  }
};
