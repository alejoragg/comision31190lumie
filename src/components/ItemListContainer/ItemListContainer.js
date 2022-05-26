import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting, handlePage }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return(
        <div className='ItemListContainer'>
            <h1>{ greeting }</h1>
            <ItemList products={products} handlePage={handlePage}/>
        </div>
    )
}

export default ItemListContainer