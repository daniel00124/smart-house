import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function HomePage(props) {
  const nav =useNavigate()
  return (
            <div className='homePage'>
            {props.roomColection.map((e,idx)=>{
                return <button className='addedRooms' key={idx} onClick={()=>{nav(`/room${e.roomName}`)}} style={{backgroundColor:e.roomColor}}>{e.roomName}</button>
            })}
            <Link to='/addroom'><button className='addBtn'>+</button></Link>
        </div>
  )
}
