import requests from '../requests/index'
import {setAuthedUser} from "./authedUser";
import {receiveUsers} from "./users";
import {receiveTweets} from "./tweets";
import {arrayToObject} from "../helpers/index";
import { showLoading, hideLoading } from 'react-redux-loading-bar' 

const AUTHED_ID = '5b590b53075976232873b40d'
const {getInitialData} = requests

export function handleInitialData(){
    return (dispatch) => {
      dispatch(showLoading());
        getInitialData().then(([users, tweets]) => {
            dispatch(receiveUsers(arrayToObject(users)));
            dispatch(receiveTweets(arrayToObject(tweets)));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}