import { addLaneCardX, addLaneX } from "services/LaneService"

export const getLanes = () => {
    return dispatch =>
        dispatch({
            type: 'GET_LANES'
        })
}

export const addLane = (state, payload) => {
    let lane = addLaneX(state, payload)
    return dispatch =>
        dispatch({
            type: 'ADD_LANE',
            data: lane
        })
}

export const addLaneCard = (state, payload) => {
    let card = addLaneCardX(state, payload.id, payload)
    return dispatch =>
        dispatch({
            type: 'ADD_LANE_CARD',
            data: card
        })
}