import { addLaneCardX, addLaneX, deleteLaneX, updateLaneHeaderX } from "services/LaneService"

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

export const updateLaneHeader = (state, payload) => {
    let lane = updateLaneHeaderX(state, payload)
    return dispatch =>
        dispatch({
            type: 'UPDATE_LANE',
            updateData: lane
        })
}

export const deleteLane = (state, laneId) => {
    let lane = deleteLaneX(state, laneId)
    return dispatch =>
        dispatch({
            type: 'DELETE_LANE',
            data: lane
        })
}

export const addLaneCard = (state,laneId, payload) => {
    let card = addLaneCardX(state, laneId, payload)
    return dispatch =>
        dispatch({
            type: 'ADD_LANE_CARD',
            data: card
        })
}

export const deleteLaneCard = (state, cardId) => {
    let card = deleteLaneX(state, cardId)
    return dispatch =>
        dispatch({
            type: 'DELETE_LANE_CARD',
            data: card
        })
}