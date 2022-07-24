//yeni liste ekleme
export const addLaneX = (lane, data) => {
    lane.push(data)
    return lane
}

//liste başlığını güncelleme
export const updateLaneHeaderX = (lane, data) => {
    let findlane = lane.find(p => p.id === data.id)
    var index = lane.indexOf(findlane)
    lane[index].title = data.title;
    return lane
}

//liste silme
export const deleteLaneX = (lane, laneId) => {
    let findlane = lane.find(p => p.id === laneId)
    var index = lane.indexOf(findlane)
    lane.splice(index, 1)
    return lane
}

//listeye kart ekleme
export const addLaneCardX = (lane, laneId, data) => {
    let findlane = lane.find(p => p.id === laneId)
    findlane.cards.push(data)
    return lane
}

//kart silme
export const deleteLaneCardX = (lane, cardId) => {
    lane.map((item) => {
        let findCard = item.cards.find(p => p.id === cardId)
        var index = item.cards.indexOf(findCard)
        item.cards.splice(index, 1)
    })
    return lane
}

//kart güncelleme
export const updateLaneCardX = (lane, cardId, data) => {

    var findLaneArray = lane.filter(p => p.cards.find(q => q.id === cardId))
    var findCard = findLaneArray[0].cards.find(q => q.id === cardId)
    var index = findLaneArray[0].cards.indexOf(findCard)
    findLaneArray[0].cards[index] = data

    return [lane, findCard]
}

//karta yorum ekleme
export const addComment = (lane, cardId, data) => {
    lane.map((item) => {
        let findCard = item.cards.find(p => p.id === cardId)
        findCard?.comments?.push(data)
    })
    return lane
}

//kartan yorum silme
export const deleteComment = (lane, cardId, commentId) => {
    var findLaneArray = lane.filter(p => p.cards.find(q => q.id === cardId))
    let findCard = findLaneArray[0].cards.find(p => p.id === cardId)
    let findComment = findCard.comments.find(p => p.id === commentId)
    var index = findCard.comments.indexOf(findComment)
    findCard.comments.splice(index, 1)
    return [lane, findCard]
}

//kart taşıma
export const dragCardToLane = (lane, cardId, newLane) => {
    var findLaneArray = lane.find(p => p.cards.find(q => q.id === cardId))
    var findCard = findLaneArray.cards.find(q => q.id === cardId)
    var oldLaneCardIndex = findLaneArray.cards.indexOf(findCard)
    lane[newLane].cards.push(findCard)  //yeni listeye ekledi
    findLaneArray.cards.splice(oldLaneCardIndex, 1)  //eski listeden sildi
}

//yorum güncelleme
export const updateComment = (lane, cardId, data) => {
    var findLaneArray = lane.filter(p => p.cards.find(q => q.id === cardId))
    let findCard = findLaneArray[0].cards.find(p => p.id === cardId)
    let findComment = findCard.comments.find(p => p.id === data.id)
    var index = findCard.comments.indexOf(findComment)
    findCard.comments[index] = data
    return [lane, findCard]
}