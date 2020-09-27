import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Raiting/>
            <Accordion/>
            <Raiting/>

        </div>
    );
}

function AppTitle() {
    console.log("Title rendering")
    return (
        <div>This is App component</div>
    )
}

function Raiting() {
    console.log("Raiting rendering")

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    console.log("Accordion rendering ")

    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering ")
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering ")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Star() {
    console.log("Star rendering ")
    return <div>star</div>
}


export default App;
