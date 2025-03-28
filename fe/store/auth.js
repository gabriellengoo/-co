// export const state = () => ({
//     token: null,
//     user: null,
//   })
  
//   export const mutations = {
//     setToken(state, token) {
//       state.token = token
//     },
//     setUser(state, user) {
//       state.user = user
//     },
//   }
  
//   export const actions = {
//     async login({ commit }) {
//       const config = useRuntimeConfig()
//       const redirectUri = config.public.spotifyRedirectUri
//       const clientId = config.public.spotifyClientId
//       const scope = 'user-read-private user-read-email'
//       const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`
//       window.location.href = authUrl
//     },
  
//     async fetchUser({ commit, state }) {
//       if (!state.token) return
//       const { data } = await useFetch('https://api.spotify.com/v1/me', {
//         headers: { Authorization: `Bearer ${state.token}` },
//       })
//       commit('setUser', data)
//     },
//   }
  