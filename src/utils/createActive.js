const createActive = (loading, state) => {
  if (!loading) {
    const active =
      state.confirmed.value - (state.deaths.value + state.recovered.value);
    return active;
  }
};

export default createActive;
