import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    return <div>
        <UncontrolledAccordion title={'Users'}/>
    </div>


}

type PropsType = {
    title: string
}

function PageTitle(props: PropsType) {
    console.log("Title rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
