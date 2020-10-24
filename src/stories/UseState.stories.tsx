import React, {useState} from "react";


export default {
    title: 'useState demo'
}


function generationData() {
    //difficult counting
    console.log('generationData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(generationData)

    const changer = (state: number) => {
        return state + 1
    }



return <>
    <button onClick={() => setCounter(changer)}>+</button>
    <>{counter}</>
</>
}