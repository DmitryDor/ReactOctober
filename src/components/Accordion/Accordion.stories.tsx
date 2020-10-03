import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";



export default {
    title: 'Accordion ',
    component: Accordion,
} as Meta;

export const Collapsed = () => <Accordion title={'Collapsed'} collapsed={true} onClick={action('Collapsed')} />
export const Uncollapsed = () => <Accordion  title={'Uncollapsed'} collapsed={false} onClick={action('Uncollapsed')}/>
export const ChangeAccordion = () => {
    let[value, setValue] = useState<boolean>(true)
    return <Accordion title='Changed Accordion' collapsed={value} onClick={setValue}/>
}

