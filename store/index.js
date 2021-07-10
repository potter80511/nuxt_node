// import * as types from '@/constants.js'

export const state = () => ({
  isUserLogin: false,
  userPicture: '',
  userName: '',
  userUid: '',
  courses: [],
})

export const mutations = {
  setUserLogin: (state, payload) => {
    state.isUserLogin = true
    state.userPicture =
      payload.userPicture ||
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzRnZnpLD6Llnr3_J5lTEGxX_px_ceuvsVntvk8Av737-S8XbfkrDN937cTGGvLHGI08&usqp=CAU'
    state.userName = payload.userName
    state.userUid = payload.userUid
  },
  add_test_data: (state, payload) => {
    // state.testData.title = payload.title
    state.testData.aaa++
  },
  set_courses: (state, payload) => {
    state.courses = payload.courses
  },
}

export const actions = {
  async ajaxTest({ commit, getters }, payload) {
    const res = await this.$axios('/api/test')

    // getters[types.SET_CONFIG_URL]
    commit('add_test_data', {
      title: res.data,
    })
  },
  async get_courses({ commit }) {
    const res = await this.$axios('/api/courses')
    const {
      data: { courses },
    } = res

    commit('set_courses', {
      courses,
    })
  },
}

export const getters = {}
