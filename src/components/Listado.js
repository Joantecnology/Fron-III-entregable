import React from 'react'
import dataProduct from './data.json'
import Item from './Item'

export default function Listado() {

  const renderItems = (array) =>{
    return (
      array.map(item => {
        return (
          <Item Nombre={item.producto.nombre} Descripcion = {item.producto.descripcion} Stock = {item.Stock} addItem={PaymentResponse.addItem}/>
        )
      })
    )
  }
  return (
    <div className='container'>
      {renderItems(dataProduct)}
    </div>
  )
}
