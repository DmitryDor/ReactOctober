import React, {useState} from 'react';

type PropsType = {
    value: boolean
    onOff: (newValue: boolean) => void
}

export function OnOff(props: PropsType) {


    const switchOn = () => {
        return props.onOff(true)
    }
    const switchOff = () => {
        return props.onOff(false)
    }

    let onStyle = {
        width: '100px',
        height: '30px',
        backgroundColor: props.value ? 'green' : ''
    }
    let offStyle = {
        width: '100px',
        height: '30px',
        backgroundColor: props.value ? '' : 'red',
        marginLeft: '5px'
    }
    let indicatorStyle = {
        width: '25px',
        height: '25px',
        borderRadius: '12px',
        backgroundColor: props.value ? 'green' : 'red',
        marginLeft: '10px'
    }


    return (
        <div>
            <button style={onStyle} onClick={switchOn}>On</button>
            <button style={offStyle} onClick={switchOff}>Off</button>
            <button style={indicatorStyle}>x</button>
        </div>
    )
}