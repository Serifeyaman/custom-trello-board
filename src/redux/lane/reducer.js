const initialState = {
  lanesArray: [
    {
      id: 'To-Do',
      title: 'To-Do',
      label: '2/2',
      cards: [
        { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
      ]
    },
    {
      id: 'Doing',
      title: 'Doing',
      label: '0/0',
      cards: []
    },
    {
      id: 'Done',
      title: 'Done',
      label: '0/0',
      cards: []
    }
  ]
}

const laneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LANES':
      return {
        ...state,
        lanesArray: state.lanesArray
      };
    case 'ADD_LANE_CARD':
      return {
        ...state,
        lanesArray: action.data
      };
    
    default:
      return state;
  }
}
export default laneReducer;