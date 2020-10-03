import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {UncontrolledAccordion} from "./UncontrolledAccordion";



export default {
    title: 'UncontrolledAccordion ',
    component: UncontrolledAccordion,
} as Meta;


export const ChangeUncontrolledAccordion = () => {
    let[value, setValue] = useState<boolean>(true)
    return <Accordion title='Changed UncontrolledAccordion' collapsed={value} onClick={setValue}/>
}

