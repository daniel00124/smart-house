import './App.css';
import { useState } from 'react';
import {HashRouter as BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';

function App() {

  const [roomColection,setRoomColection] = useState([])
  const addRoom = (roomName,roomColor,typeRoom)=>{
    setRoomColection([...roomColection,{typeRoom:typeRoom,roomName:roomName,roomColor:roomColor, roomProducts:[]}]);
  }
  const addProduct = (index, producType) =>{
    const roomsCopy = [...roomColection];
    const product = {condition:false, producType: producType};
    roomsCopy[index].roomProducts.push(product)
    setRoomColection(roomsCopy)
  }

  const changeProductStatus = (indexOfRoom,indexOfProduct) =>{
    roomColection[indexOfRoom].roomProducts[indexOfProduct].condition = !roomColection[indexOfRoom].roomProducts[indexOfProduct].condition
    setRoomColection([...roomColection])
  }
  
  return (
    <div className="App">
        <h1 className='title'>Smart house</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage roomColection={roomColection}/>}/>
        <Route path='/addroom' element={<CreateRoom addRoom={addRoom}/>}/>
        {roomColection.map((val,index)=>{
      return <Route key={index} path={`/room${val.roomName}`} element={<Room index={index} roomName={val.roomName} typeRoom={val.typeRoom} roomProducts={val.roomProducts} addProduct={addProduct} changeProductStatus={changeProductStatus} />} />
    })}
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
