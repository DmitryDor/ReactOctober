import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {  Meta } from '@storybook/react/types-6-0';
import {Rating} from "./Rating";
import {UncontrolledRaiting} from "./uncontrolledRaiting";
import {action} from "@storybook/addon-actions";



export default {
    title: 'UncontrolledRaiting',
    component: UncontrolledRaiting,
} as Meta;


export const EmptyRating = () => <UncontrolledRaiting defaultValue={0} />
export const Rating1 = () => <UncontrolledRaiting defaultValue={1} />
export const Rating2 = () => <UncontrolledRaiting defaultValue={2} />
export const Rating3 = () => <UncontrolledRaiting defaultValue={3} />
export const Rating4 = () => <UncontrolledRaiting defaultValue={4} />
export const Rating5 = () => <UncontrolledRaiting defaultValue={5} />


