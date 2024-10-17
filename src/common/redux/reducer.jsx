import { ItemData } from "../../components/ecommerce/data/reduxdata";




const data = ItemData

export default function reducer(state = data, action) {

    const { type, payload } = action;

switch (type) {
case "ADD_TO_CART":
    state = ItemData.filter((idx) => {
        return idx.id == payload
    })
    return [...state]
    break;
case "PRODUCT":
    state = ItemData.filter((idx) => {
        return idx.id == payload
    })
    return state
    break;

default:
    return data
}
}