import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'OnOff ',
    component: OnOff,
} as Meta;

export const OnMode = () => <OnOff value={true} onOff={ action('on or off clicked')} />
export const OffMode = () => <OnOff value={false} onOff={ action('on or off clicked')} />
export const ChangeOnOff = () => {
    let[value, setValue] = useState<boolean>(true)
    return <OnOff value={value} onOff={setValue} />
}

