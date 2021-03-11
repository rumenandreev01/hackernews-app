import hackerNewsApi from '../../services/hackerNewsApi';

const NS = "@hnReader/story";

export const actionTypes = {
  FETCH_STORY_IDS: `${NS}/FETCH_STORY_IDS`,
  FETCH_STORIES: `${NS}/FETCH_STORIES`,
}

const action = (type, payload)=>({type, payload})

const actions = {
    fetchStoryIds: (payload={})=>{
        return dispatch => dispatch(action(actionTypes.FETCH_STORY_IDS))
    }
}