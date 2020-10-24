import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const UseEffectExample = () => {
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

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(10)


    console.log('SetTimeoutExample')

   /* useEffect(() => {
        setTimeout(() => {
            console.log('useEffect')
            document.title = counter.toString()
        }, 3000)
    }, [counter])*/

   /* useEffect(() => {
        setInterval(() => {
            console.log('tick: ' + counter)

            setCounter( (state) => state + 1)
        }, 1000)

    }, [])*/


    return (
        <>
           {/* {fake}
            <button onClick={() => setFake(fake + 1)}>fake</button>
            Hello,
            {counter}
            <button onClick={() => setCounter(counter + 1)}>counter</button>*/}

            Counter - {counter}  Fake  - {fake}
        </>
    )
}