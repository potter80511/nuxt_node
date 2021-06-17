import * as types from '@/constants.js'

export const state = () => ({
  test_data: {
    aaa: 1,
    bbb: 'string',
  },
})

export const getters = {
  [types.SET_CONFIG_URL]: (state) => {
    console.log(state, 'login state')
    return state.test_data
  },
}

export const namespaced = false
