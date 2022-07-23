import MyAddCardForm from 'components/MyAddCardForm';
import MyAddCardLink from 'components/MyAddCardLink';
import MyLaneCard from 'components/MyLaneCard';
import MyLaneForm from 'components/MyLaneForm';
import MyLaneHeader from 'components/MyLaneHeader';
import React from 'react'
import { Plus } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import Board from 'react-trello'
import { Button } from 'reactstrap';
import { getLanes } from 'redux/lane/action';
import { deleteLaneCardX } from 'services/LaneService';

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
      editLaneTitle
      components={{
        // GlobalStyle: MyGlobalStyle, 
        NewLaneSection: (props) => <Button onClick={() => props.onClick()} color='secondary' size='md' style={{ fontSize: 14, backgroundColor:'#306073', border:'none', margin:5 }}> <Plus size={15} /> Liste Ekle</Button>,
        NewLaneForm: (props) => MyLaneForm({ ...props, lanesArray: lanesArray }),
        LaneHeader: (props) => MyLaneHeader({ ...props, lanesArray: lanesArray }),

        AddCardLink: (props) => MyAddCardLink({ ...props }),
        NewCardForm: (props) => MyAddCardForm({ ...props, lanesArray: lanesArray }),
        // Card: (props) => MyLaneCard({...props}),

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
      onCardDelete={(e)=>dispatch(deleteLaneCardX(lanesArray, e))}
      // onCardMoveAcrossLanes={(e)=>console.log("e", e)}
      // handleDragEnd={(e) => console.log("handleDragEnd e",e)}
    />
  )
}

export default App