export type ActtionType = {
    type: 'TOGGLE-COLLAPSED'
}

export type StateType = {
    collapsed: boolean
}

export const reduser = (state: StateType, action: ActtionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            return {
                ...state,
                collapsed: !state.collapsed
            }
            /*const copyState = {...state}
            copyState.collapsed = !state.collapsed
            return copyState*/
        }
        default:
            return state
    }
}