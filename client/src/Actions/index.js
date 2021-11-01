import axios from 'axios';
import { FETCH_USER } from './types'

/**
 * Fetches response from API when a user is authenticated
 * Action creator dispatches action with the data received from res as payload
 */
export const fetchUser = () => 
    async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER, payload: res.data })
    }

