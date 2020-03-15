export const setUser = (state, value) => {
  state.user = value
}

export const offUser = (state, value) => {
  state.user = null
}

export const setLanguage = (state, value) => {
  state.user.language = value
}

export const addScore = (state, value) => {
  state.user.score = state.user.score + value
}
