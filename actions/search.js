import fetch from 'isomorphic-fetch'
import { SOUND_CLOUD_CLIENT_ID } from '../constants'
export const START_SEARCHING = 'START_SEARCHING'
export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT'

export function search(query) {
  return (dispatch) => {
    dispatch(startSearching(query))
    doSearch(query, function(result) {
      dispatch(receiveSearchResult(result))
    })
  }
}

function startSearching(query) {
  return {
    type: START_SEARCHING,
    query
  }
}

function receiveSearchResult(result) {
  return {
    type: RECEIVE_SEARCH_RESULT,
    result
  }
}

function doSearch(query, callback) {
  let url = 'http://api.soundcloud.com/tracks?linked_partitioning=1&client_id=' + SOUND_CLOUD_CLIENT_ID + '&q=' + query
  fetch(url)
    .then(response => response.json())
    .then(json => {
      callback(json.collection)
    })
}

