import {INCREMENT, DECREMENT} from "../constants/actionTypes";

export const incrementCount = () => {
    return {type:INCREMENT};
}

export const decrementCount = () => {
    return {type:DECREMENT};
}