import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


import {UncontrolledOnOff} from "./uncontrolledOnOff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncontrolledOnOff ',
    component: UncontrolledOnOff,
} as Meta;


export const OnMode = () => <UncontrolledOnOff defaultOn = {true} />
export const OffMode = () => <UncontrolledOnOff defaultOff = {false} />
