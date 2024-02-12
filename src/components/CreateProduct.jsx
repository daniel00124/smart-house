import React,{ useState } from 'react'

export default function CreateProduct(props) {
    const [productChosen,setProductChosen] = useState("Lamp")

    const checkProductChosen =()=>{
        const roomProducts = props.roomProducts;
        if(productChosen === "Stereo" && roomProducts.filter(val => val.producType === "Stereo").length > 0)
            alert("Only 1 stereo in each room");
        else if(productChosen === "Heater" && props.typeRoom !== "Bathroom")
            alert("Heater allowed only in bathroom!")
        else if(roomProducts.length === 5)
            alert("Only 5 products per room")
        else{
            props.addProduct(props.index , productChosen)
        }
        props.setFlag(true)
    }
  return (
    <div>
        <select className='inpt' onChange={(e)=>setProductChosen(e.target.value)}>
            <option value="Lamp">Lamp</option>
            <option value="Stereo">Stereo</option>
            <option value="Air Con">Air Con</option>
            <option value="Heater">Heater</option>
        </select>
        <br />
        <button className='addBtn' onClick={checkProductChosen}>Add Product</button>
    </div>
  )
}
