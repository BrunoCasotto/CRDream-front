
module.exports = {
  //default value
  state: {
    loading: false
  },
  //setter to define change state value
  setters: {
    toggleLoading: function(newState) {
      state.loading = newState
    }
  }
}