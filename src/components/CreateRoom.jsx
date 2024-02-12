import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateRoom(props) {
  const [typeRoom,setTypeRoom] = useState("default")
  const [roomName,setRoomName] = useState("")
  const [roomColor,setRoomColor] = useState("")
  const nav = useNavigate()
  const checkRoom = () =>{
    if(typeRoom === "default" || roomName.length < 1){
        alert("Error");
        nav("/")
    }else{
        alert("A room has been added");
        props.addRoom(roomName,roomColor,typeRoom);
        nav('/')
    }
}
  return (
    <div className='createRoom'>
      <select className='inpt' onChange={(e)=>{setTypeRoom(e.target.value)}}>
        <option value="default">choose room type</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="kitchen">kitchen</option>
      </select>
      <input className='inpt' placeholder="enter room name" type="text" maxLength="9" onChange={(e)=>{setRoomName(e.target.value)}}></input>
      <input className='inpt' type="color" onChange={(e)=>{setRoomColor(e.target.value)}}></input>
      <button className='addBtn' onClick={checkRoom}>Create Room</button>
    </div>
  );
}
