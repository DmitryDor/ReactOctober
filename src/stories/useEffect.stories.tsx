import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const UseEffectStories = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(10)


    console.log('Example')

    useEffect(() => {
        console.log('useEffect every')
        document.title = counter.toString()
    }) // срабатывает при каждой перерисовке


    useEffect(() => {
        console.log('useEffect first')
        document.title = counter.toString()
    }, [])  // срабатывает при первой отрисовке(аналогичен componentDidMount)

    useEffect(() => {
        console.log('useEffect counter')
        document.title = counter.toString()
    }, [counter]) // срабатывает при изменении зависимостей

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    )
}