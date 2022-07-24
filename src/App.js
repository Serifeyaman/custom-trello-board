import React, { useState } from 'react'
import Board from 'react-trello'
import { Plus } from 'react-feather';

import { myContext } from 'utility/MyContext';
import { deleteLaneCardX } from 'services/LaneService';
import { initialLanesArray } from 'constant/MyDatas';

import { Button } from 'reactstrap';
import MyAddCardForm from 'components/MyAddCardForm';
import MyAddCardLink from 'components/MyAddCardLink';
// import MyLaneCard from 'components/MyLaneCard';
import MyLaneForm from 'components/MyLaneForm';
import MyLaneHeader from 'components/MyLaneHeader';
import CardModal from 'components/CardModal';
import CardInfoForm from 'components/CardInfoForm';
import CardComment from 'components/CardComment';
import MyLaneCard from 'components/MyLaneCard';

const App = () => {

  const [mylanesArray, setLanesArray] = useState(initialLanesArray)

  const [modalOpen, setModalOpen] = useState(false)
  const showModal = () => setModalOpen(!modalOpen);
  const [cardInfo, setCardInfo] = useState({})

  const cardDetail = (lane, cardId) => {
    showModal()
    let findlane = lane.find(p => p.cards.find(q => q.id === cardId))
    let findcard = findlane.cards.find(c => c.id === cardId)
    setCardInfo(findcard)
  }

  return (
    <myContext.Provider value={{ mylanesArray, setLanesArray, cardInfo, setCardInfo }}>
      <Board
        onDataChange={() => console.log("laneArray", mylanesArray)}
        draggable
        editable
        cardDraggable
        canAddLanes
        editLaneTitle
        components={{
          // GlobalStyle: MyGlobalStyle, 
          NewLaneSection: (props) => <Button onClick={() => props.onClick()} color='secondary' size='md' style={{ fontSize: 14, backgroundColor: '#306073', border: 'none', margin: 5 }}> <Plus size={15} /> Liste Ekle</Button>,
          NewLaneForm: (props) => MyLaneForm({ ...props, lanesArray: mylanesArray }),
          LaneHeader: (props) => MyLaneHeader({ ...props, lanesArray: mylanesArray }),

          AddCardLink: (props) => MyAddCardLink({ ...props }),
          NewCardForm: (props) => MyAddCardForm({ ...props, lanesArray: mylanesArray }),
          // Card: (props) => MyLaneCard({...props}),

        }}
        data={{ lanes: mylanesArray }}
        laneStyle={{ backgroundColor: 'rgba(176, 126, 204, 0.4)', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} // büyük kart css
        cardStyle={{ backgroundColor: 'rgba(235, 236, 240, 1)' }}
        style={{
          background: "rgb(126,196,204)",
          background: "linear-gradient(142deg, rgba(126,196,204,1) 0%, rgba(176,126,204,0.7189250700280112) 97%)",
          overflowWrap: 'break-word',
        }}
        onCardDelete={(e) => deleteLaneCardX(mylanesArray, e)}
        onCardClick={(e) => cardDetail(mylanesArray, e)}
      // onCardMoveAcrossLanes={(e)=>console.log("e", e)}
      // handleDragEnd={(e) => console.log("handleDragEnd e",e)}
      />

      <CardModal title="Kart Detay" size="lg" modalOpen={modalOpen} showModal={showModal} >
        <CardInfoForm />
        <h6 style={{ color: '#ced4da' }}>Yorum Ekle</h6>
        <CardComment />
      </CardModal>
    </myContext.Provider>
  )
}

export default App