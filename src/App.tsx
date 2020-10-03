import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Rating";
import {UncontrolledRaiting} from "./components/Raiting/uncontrolledRaiting";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>

            <Accordion title={'controlled'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRaiting/>


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
