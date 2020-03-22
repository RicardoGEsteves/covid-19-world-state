const formatDate = (loading, state) => {
  if (!loading) {
    const formatter = state.lastUpdate.split('T');
    return formatter;
  }
};

export default formatDate;
