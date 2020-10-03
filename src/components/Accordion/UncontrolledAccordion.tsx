import React, {useState} from "react";

type PropsType = {
    title: string
}

export function UncontrolledAccordion(props: PropsType) {
    console.log("Accordion rendering ")

    let [collapsed, setCollapsed] = useState<boolean>(false)

    const coll = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title} coll={coll}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type PropsTitleType = {
    title: string
    coll: () => void
}

function AccordionTitle(props: PropsTitleType) {
    console.log("AccordionTitle rendering ")
    return (
        <h3 onClick={props.coll}>{props.title}</h3>
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