export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, value) {
    state.user = value
  }
}
