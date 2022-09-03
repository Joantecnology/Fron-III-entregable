import {userState} from "react";
export default function Item() {

  const [itemStock,setItemStock] = userState(props.stock);
  const stock = itemStock >0

  return (
    <div className='producto'>
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>En stock:<span>{stock ? itemStock: 'Agotado'}</span></h5>
      <button
        disabled = {!stock}
        onClick = {() => {
          setItemStock(itemStock-1)
        props.addItem()
        }}>
        {stock ? 'Comprar' : 'No hay mas stock'}
      </button>
    </div>
  )
}