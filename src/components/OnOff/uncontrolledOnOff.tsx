import React, {useState} from 'react';

type PropsType = {

}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(true)

    const switchOn = () => {
        return setOn(true)

    }
    const switchOff = () => {
        return setOn(false)

    }

    let onStyle = {
        width: '100px',
        height: '30px',
        backgroundColor: on? 'green': ''
    }
    let offStyle = {
        width: '100px',
        height: '30px',
        backgroundColor: on? '': 'red',
        marginLeft: '5px'
    }
    let indicatorStyle = {
        width: '25px',
        height: '25px',
        borderRadius: '12px',
        backgroundColor: on? 'green': 'red',
        marginLeft: '10px'
    }

    return (
        <div >
            <button style={onStyle} onClick={switchOn}>On</button>
            <button style={offStyle} onClick={switchOff}>Off</button>
            <button style={indicatorStyle}>x</button>
        </div>
    )
}