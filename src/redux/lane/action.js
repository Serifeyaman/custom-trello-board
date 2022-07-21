import { addLaneCardX } from "services/LaneService"

export const getLanes = () => {
    return dispatch =>
        dispatch({
            type: 'GET_LANES'
        })
}

export const addLaneCard = (state, payload) => {
    let deger = addLaneCardX(state, payload.id, payload)
    return dispatch =>
        dispatch({
            type: 'ADD_LANE_CARD',
            data: deger
        })
}