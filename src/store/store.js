import Vue from 'vue'
import  Vuex from 'vuex'
import * as types from './mutation-types'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        selectList:''
    },
    mutations: {
        [types.SET_LIST](state, payload) {

            state.list = payload

        },
        [types.SET_SELECT_LIST](state, payload) {

            state.selectList = payload

        }
    },
    actions: {
        ActionSetList({ commit }, payload){
            commit(types.SET_LIST, payload)

        },
        ActionSetSelectList({ commit }, payload){
            commit(types.SET_SELECT_LIST, payload)
        },
        ActionGetList({dispatch}, payload){
            return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                dispatch('ActionSetList', res.data)
            })
        }

    } 
 
})