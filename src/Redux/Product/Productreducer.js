import { ADDPRODUCT, ADDTOCART, DECREENTCART, INCREMENTCART } from "./actiontypes";

const initialState={
    product:[],
    cart:[],
}
const Productreducer = (state=initialState,action) => {
    switch (action.type) {
        case ADDPRODUCT:
         return {
            ...state,
            product:[action.payload,...state.product]
         }
         case DECREENTCART:
            return state.cart.filter(t=>t.id !== action.payload)
         case ADDTOCART:
        return {
            ...state,
            cart:[action.payload,...state.cart]
        }
        case INCREMENTCART:
            state.cart=state.cart.map(t=>{
            if(t.id !== action.payload) return t
            return {
                ...t,
                Quantity:t.Quantity+1
            }
         })
        default:
            return state
    }
    
};

export default Productreducer;