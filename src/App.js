import MyAddCardForm from 'components/MyAddCardForm';
import MyAddCardLink from 'components/MyAddCardLink';
import MyLaneForm from 'components/MyLaneForm';
import MyLaneHeader from 'components/MyLaneHeader';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Board from 'react-trello'
import { getLanes } from 'redux/lane/action';

const App = () => {

  const { lanesArray } = useSelector(state => state.laneReducer)
  const dispatch = useDispatch()

  console.log("laness", lanesArray)

  return (
    <Board
      onDataChange={() => dispatch(getLanes())}
      draggable
      editable
      cardDraggable
      canAddLanes
      components={{
        // GlobalStyle: MyGlobalStyle, 
        // Card: MyCard,
        NewLaneForm: (props) => MyLaneForm({ ...props, lanesArray: lanesArray }),
        LaneHeader: (props) => MyLaneHeader({ ...props }),
        AddCardLink: (props) => MyAddCardLink({ ...props }),
        NewCardForm: (props) => MyAddCardForm({ ...props, lanesArray: lanesArray })
      }}
      data={{ lanes: lanesArray }}
      laneStyle={{ backgroundColor: 'rgba(176, 126, 204, 0.4)', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} // büyük kart css
      cardStyle={{ backgroundColor: 'rgba(235, 236, 240, 1)' }}
      style={{
        background: "rgb(126,196,204)",
        background: "linear-gradient(142deg, rgba(126,196,204,1) 0%, rgba(176,126,204,0.7189250700280112) 97%)",
        overflowWrap: 'break-word',
      }}
      onCardClick={(e) => console.log("modal aç", e)}
    />
  )
}

export default App