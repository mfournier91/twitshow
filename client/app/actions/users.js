export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
    return {
        id: RECEIVE_USERS,
        users,
    }
}