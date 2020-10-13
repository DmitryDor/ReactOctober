import React, {useReducer} from "react";
import {reduser} from "./reducer";

type PropsType = {
    title: string
}


export function UncontrolledAccordion(props: PropsType) {
    console.log("Accordion rendering ")

    // let [collapsed, setCollapsed] = useState<boolean>(false)
    let [state, dispatch] = useReducer(reduser, {collapsed: false})

    /* const coll = () => {
         setCollapsed(!collapsed)
     }*/
    const coll = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitle title={props.title} coll={coll}/>
            {!state.collapsed && <AccordionBody/>}
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