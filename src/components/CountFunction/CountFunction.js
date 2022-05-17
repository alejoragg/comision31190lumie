import { useState, useEffect } from 'react'

const CountFunction = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Me ejecuto despues del montaje')

        return () => {
            console.log('Me ejecuto antes de desmontarme')
        }
    }, [])

    const decrement = () => {
        for(let i = 0; i < 5; i ++) {
            console.log(`vuelta ${i + 1}`)
            setCount((count) => count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    console.log('ejecuto antes de montar')

    return(
        <div style={{ display: 'flex'}}>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default CountFunction