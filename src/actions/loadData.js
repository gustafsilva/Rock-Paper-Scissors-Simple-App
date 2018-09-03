export const loadData = (state) => {
  /* If the data is already ready */
  return {
    ...state,
    isReady: true
  };
}