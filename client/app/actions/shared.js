import {getInitalData} from '../requests'
import {setAuthedUser} from "./authedUser";
import {receiveUsers} from "./users";
import {receiveTweets} from "./tweets";

const AUTHED_ID = '5b590b53075976232873b40d'

export function handleInitialData(){
    return (dispatch) => {
        getInitalData().then(([users, tweets]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}