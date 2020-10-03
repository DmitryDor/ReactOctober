import React from "react";

type PropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

export function Accordion(props: PropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={ () => props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type PropsTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: PropsTitleType) {
    console.log("AccordionTitle rendering ")
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
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