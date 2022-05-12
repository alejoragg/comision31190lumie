import { useState } from 'react'
import Button from '../Button/Button'

const CountFunction = (props) => {
    // const state = useState(10)
    // const count = state[0]
    // const setCount = state[1]
    console.log(props.children)
    const [count, setCount] = useState(0)


    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        if(count < 5) {
            setCount(count + 1)
        }
    }

    return(
        <div style={{ display: 'flex'}}>
            { props.children }
            <Button handleClick={decrement} label='-' color='red' />
            <h1>{count}</h1>
            <Button handleClick={increment} label='+' color='green' />
        </div>
    )
}

export default CountFunction