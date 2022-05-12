import { useState } from 'react'
import Button from '../Button/Button'


const CountFunction = (props) => {
    const [data, setData] = useState({
        count: 0,
        title: 'hola'
    })

    const decrement = () => {
        setData({ ...data, count: data.count -1 })
    }

    const increment = () => {
        setData({ ...data, count: data.count + 1 })
    }

    const changeTitle = () => {
        setData({ 
            ...data, 
            title: data.title === 'hola' ? 'chau' : 'hola'
        })
    }

    // setData({ ...data })
    
    return(
        <div style={{ display: 'flex'}}>
            { data.title }
            <Button handleClick={decrement} label='-' color='red' />
            <h1>{data.count}</h1>
            <Button handleClick={increment} label='+' color='green' />
            <button onClick={changeTitle}>Cambiar Titulo</button>
        </div>
    )
}

export default CountFunction