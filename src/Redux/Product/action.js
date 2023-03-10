import { ADDPRODUCT, ADDTOCART, DECREENTCART, DELETEITEM, INCREMENTCART } from "./actiontypes"

export const addproduct=(product)=>{
    return {
        type:ADDPRODUCT,
        payload:product,
    }
}
export const addtocart=(cartitem)=>{
    return {
        type:ADDTOCART,
        payload:cartitem,
    }
}
export const deleteitem=(id)=>{
    return {
        type:DELETEITEM,
        payload:id,
    }
}
export const incrementcart=(inid)=>{
    return {
        type:INCREMENTCART,
        payload:inid,
    }
}
export const decrementcart=(deid)=>{
    return {
        type:DECREENTCART,
        payload:deid,
    }
}