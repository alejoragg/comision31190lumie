import './Item.css'

const Item = ({id, name, price, handlePage}) => {
    return (
        <div className="CardItem">
            <h1>{name}</h1>
            <button onClick={() => handlePage({ path: 'detail', param: id})}>Ver detalle</button>
        </div>
    )
}

export default Item