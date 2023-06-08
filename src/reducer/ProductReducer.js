const ProductReducer = (state, action) =>{

    // if(action.type === "IS_LOADING"){
    //     return {
    //         ...state,
    //         isLoading:true,
    //     }
    // }
    // if(action.type === "IS_ERROR"){
    //     return {
    //         ...state,
    //         isLoading:false,
    //         isError:true
    //     }
    // }
    // return state;

        switch (action.type) {
            case "IS_LOADING":
               return {
                ...state,
                isLoading:true,
            }
            case "SET_API_DATA":
                    const featureData = action.payload.filter((curElem)=>{
                        return curElem.featured === true;
                    });
                 
                    return {
                        ...state,
                        isLoading:false,
                        products:action.payload,
                        featureProducts:featureData,
                    }
                
            case "IS_ERROR":
                return{
                    ...state,
                    isLoading:false,
                    isError:true,
                }
                case "IS_SINGLE_LOADING":
                    return {
                     ...state,
                     isSingleLoading:true,
                 }
                 case "SET_SINGLE_PRODUCT":
                    return {
                     ...state,
                     isSingleLoading:false,
                     singleProduct: action.payload
                 }
                 case "SINGLE_ERROR":
                     return{
                         ...state,
                         isSingleLoading:false,
                         isError: true,
                     }
            default:
                return state;
        }
}

export default ProductReducer;