function reducer(state: State, action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      loading: true,
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }
  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      loading: true,
      toLanguage: payload,
    };
  }
  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      loading: true,
      fromLanguage: payload,
    };
  }
  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: payload,
    };
  }
}
≠
<svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
  <path d='M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z' />
</svg>;

export function useStore(){
    const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
      useReducer(reducer, inistalState);
}