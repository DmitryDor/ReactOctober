import React from "react";

type ItemType = {
    title: string
    value: any
}

type PropsType = {
    title: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: Array<ItemType> // = ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: PropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type PropsBodyType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: PropsBodyType) {
    console.log("AccordionBody rendering ")
    return (
        <ul >
            {props.items.map((i,index) => <li onClick={ () => {props.onClick(i.value)} } key={index}>{i.title}</li>)}
        </ul>
    )
}