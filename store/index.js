// import * as types from '@/constants.js'

export const state = () => ({
  testData: {
    aaa: 1,
    bbb: 'string',
  },
})

export const mutations = {
  add_test_data: (state, payload) => {
    // state.testData.title = payload.title
    state.testData.aaa++
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
}

export const getters = {}
