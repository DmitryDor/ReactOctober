import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './select.module.css'

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemsType>
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)

    useEffect(() => {
        sethoveredElementValue(props.value)
    }, [props.value])


    const selectedItem = props.items.find(i => i.value === props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextPretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextPretendentElement) {
                        props.onChange(nextPretendentElement.value)
                        return
                    }else{

                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }
            if (e.key === 'Enter' || e.key === 'Escape') {
                setActive(false)
            }
        }





return (

    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {
            active &&
            <div className={styles.items}>
                {props.items.map(i => {
                        const onItemClick = () => {
                            props.onChange(i.value);
                            toggleItems()
                        }
                        return (
                            <div
                                onMouseEnter={() => {
                                    sethoveredElementValue(i.value)
                                }}
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                key={i.value}
                                onClick={onItemClick}
                            >{i.title}
                            </div>)
                    }
                )}

            </div>
        }
    </div>
)
}