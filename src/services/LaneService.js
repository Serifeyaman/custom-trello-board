export const addLaneX = (lane,data) => {
    lane.push(data)
    console.log("lane",lane)
    return lane
}

export const addLaneCardX = (lane, laneId, data) => {
    let findlane = lane.find(p => p.id === laneId)
    findlane.cards.push(data)
    return lane
}
