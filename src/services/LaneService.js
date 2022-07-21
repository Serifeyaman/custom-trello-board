export const addLaneCardX = (lane, laneId, data) => {
    let findlane = lane.find(p => p.id === laneId)
    findlane.cards.push(data)
    return lane
}
