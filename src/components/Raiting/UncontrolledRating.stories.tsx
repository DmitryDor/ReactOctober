import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Rating} from "./Rating";
import {RatingValueType} from "../../App";
import {UncontrolledRaiting} from "./uncontrolledRaiting";



export default {
    title: 'UncontrolledRaiting',
    component: UncontrolledRaiting,
} as Meta;


export const ChangeRating = () => {
    let [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={ setRating }/>
}
