export const addLaneX = (lane, data) => {
    lane.push(data)
    return lane
}

export const deleteLaneX = (lane, laneId) => {
    let findlane = lane.find(p => p.id === laneId)
    var index = lane.indexOf(findlane)
    lane.splice(index, 1)
    return lane
}

export const addLaneCardX = (lane, laneId, data) => {
    let findlane = lane.find(p => p.id === laneId)
    findlane.cards.push(data)
    return lane
}
