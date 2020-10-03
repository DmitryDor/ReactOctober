import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Rating} from "./Rating";
import {RatingValueType} from "../../App";



export default {
    title: 'Rating stories',
    component: Rating,
} as Meta;

export const EmptyRating = () => <Rating value={0} onClick={ x=> x}/>
export const Rating1 = () => <Rating value={1} onClick={ x=> x}/>
export const Rating2 = () => <Rating value={2} onClick={ x=> x}/>
export const Rating3 = () => <Rating value={3} onClick={ x=> x}/>
export const Rating4 = () => <Rating value={4} onClick={ x=> x}/>
export const Rating5 = () => <Rating value={5} onClick={ x=> x}/>
export const ChangeRating = () => {
    let [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={ setRating }/>
}
