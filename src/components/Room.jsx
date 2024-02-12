import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateProduct from './CreateProduct'

export default function Room(props) {
  const [flag,setFlag] =useState(false)
  const show = () =>{
    if(flag === true){
        return <CreateProduct typeRoom={props.typeRoom} roomProducts={props.roomProducts} index={props.index} addProduct={props.addProduct} setFlag={setFlag}/>
    }else{
        return <button className='addBtn' onClick={()=>{setFlag(!flag)}}>+</button>
    }
}
  return (
    <div className='room'>
      <div className='roomTitle'>
      <h2>room name:{props.roomName}</h2>
      <h2>room type:{props.typeRoom}</h2>
      </div>
      {show()}
      <br />
      {props.roomProducts.map((val,productIndex)=>{
      let condition = val.condition ? "green" : "red";
      return <button className='addBtn' key={productIndex} onClick={()=>{props.changeProductStatus(props.index,productIndex)}} style={{backgroundColor:condition}}> {val.producType}</button>
      })}
      <br />
      <Link to='/'> <button className='addBtn'> Go back to rooms </button></Link>
    </div>
  );
}
