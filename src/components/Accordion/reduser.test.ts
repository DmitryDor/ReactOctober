import {ActtionType, reduser, StateType} from "./reducer";


test('collapsed should be true', () => {
//    data
    const state: StateType = {
        collapsed: false
    }
//    action
    const action: ActtionType = {
        type: 'TOGGLE-COLLAPSED'
    }
    const endState = reduser(state, action)

//    expection

expect(endState.collapsed).toBe(true)

})

test('collapsed should be false', () => {
//    data
    const state: StateType = {
        collapsed: true
    }
//    action
    const action: ActtionType = {
        type: 'TOGGLE-COLLAPSED'
    }
    const endState = reduser(state, action)

//    expection

    expect(endState.collapsed).toBe(false)

})



