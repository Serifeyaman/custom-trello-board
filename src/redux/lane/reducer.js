const initialState = {
  lanesArray: [
    {
      id: '1',
      title: 'To-Do',
      label: '2/2',
      cards: [
        { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
      ]
    },
    {
      id: '2',
      title: 'Doing',
      label: '0/0',
      cards: []
    },
    {
      id: '3',
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
    case 'ADD_LANE':
      return {
        ...state,
        lanesArray: action.data
      };
    case 'DELETE_LANE':
      return {
        ...state,
        lanesArray: action.data
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