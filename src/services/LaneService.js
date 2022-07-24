export const addLaneX = (lane, data) => {
    lane.push(data)
    return lane
}

export const updateLaneHeaderX = (lane, data) => {
    let findlane = lane.find(p => p.id === data.id)
    var index = lane.indexOf(findlane)
    lane[index].title = data.title;
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

export const deleteLaneCardX = (lane, cardId) => {
    lane.map((item) => {
        let findCard = item.cards.find(p => p.id === cardId)
        var index = item.cards.indexOf(findCard)
        item.cards.splice(index, 1)
    })
    return lane
}

export const addComment = (lane, cardId, data) => {
    lane.map((item) => {
        let findCard = item.cards.find(p => p.id === cardId)
        findCard?.comments?.push(data)
    })
    return lane
}

export const deleteComment = (lane, cardId, commentId) => {
    lane.map((item) => {
        let findCard = item.cards.find(p => p.id === cardId)
        let findComment = findCard.comments.find(p => p.id === commentId)
        var index = findCard.comments.indexOf(findComment)
        findCard.comments.splice(index, 1)
    })
    return lane
}