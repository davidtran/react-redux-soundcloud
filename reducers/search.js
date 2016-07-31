import { START_SEARCHING, RECEIVE_SEARCH_RESULT } from '../actions/search'

export default function search(state = {
  query: '',
  result: [],
  isSearching: false
}, action) {
  switch (action.type) {
    case START_SEARCHING:
      return Object.assign({}, state, {
        query: action.query,
        isSearching: true
      })
    case RECEIVE_SEARCH_RESULT:
      return Object.assign({}, state, {
        isSearching: false,
        result: action.result
      })
    default:
      return state
  }
}