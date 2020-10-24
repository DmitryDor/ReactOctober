import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect HomeTask'
}


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(10)


    console.log('SetTimeoutExample')

    let date = new Date()
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())

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