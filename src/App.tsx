import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/Raiting/uncontrolledRaiting";


function App() {

    return (
        <div className={'App'}>
            <OnOff />
            <UncontrolledRaiting/>
            <Accordion title={'controlled'} collapsed={false}/>
            <UncontrolledAccordion title={'Menu'}/>


        </div>
    );
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
