import MyAddCardLink from 'components/MyAddCardLink';
import MyLaneHeader from 'components/MyLaneHeader';
import React from 'react'
import Board from 'react-trello'
import { Button } from 'reactstrap';

const data = {
  lanes: [
    {
      id: 'To-Do',
      title: 'To-Do',
      label: '2/2',
      // cardStyle: { backgroundColor: 'whitesmoke' },
      cards: [
        { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false },
        { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
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

const components = {
  // GlobalStyle: MyGlobalStyle, 
  LaneHeader: (props) => MyLaneHeader({ ...props }),
  // Card: MyCard,
  AddCardLink: (props) => MyAddCardLink({ ...props }),
};

const App = () => {
  return (
    <Board
      draggable
      editable
      // collapsibleLanes  // büyük kart için collapse
      // editLaneTitle  //büyük kart başlığı günceller
      canAddLanes  // satırda büyük kart ekler
      components={components}
      data={data}
      laneStyle={{ backgroundColor: 'rgba(176, 126, 204, 0.4)', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} // büyük kart css
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