export const getUser = (state) => {
  return state.user
}

export const authStatus = (state) => {
  return state.status
}

export const getLanguage = (state) => {
  return state.user.language
}

export const getScore = (state) => {
  return state.user.score
}
