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
                    console.log(`Feature data is ${featureData}`)
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

            default:
                return state;
        }
}

export default ProductReducer;