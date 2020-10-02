import React from "react";

type PropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: PropsType) {
    console.log("Accordion rendering ")

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type PropsTitleType = {
    title: string
}

function AccordionTitle(props: PropsTitleType) {
    console.log("AccordionTitle rendering ")
    return (
        <h3>{props.title}</h3>
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