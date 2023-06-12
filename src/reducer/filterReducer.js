const filterReducer = (state, action) =>{

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload], 
                all_products: [...action.payload]  
            }
            case "SET_GRID_VIEW":
                return {
                  ...state,
                  grid_view: true,
                };
            case "SET_LIST_VIEW":
                return{
                    ...state,
                    grid_view:false,
                }
            case "GET_SORT_VALUE":
               
                // console.log(sortValue)
                return{
                    ...state,
                    sorting_value: action.payload,
                }

            case "SORTING_PRODUCTS":
                let newSortData;
                // let tempSortData = [...action.payload];

                const {filter_products , sorting_value} = state;

                const tempProduct =  [...filter_products]

                const sortingProduct = (a, b) =>{
                    if(sorting_value === "a-z"){
                        return a.name.localeCompare(b.name)
                    }
                    if(sorting_value === "z-a"){
                        return b.name.localeCompare(a.name)
                    }
                    if(sorting_value ===  "lowest"){
                        return a.price - b.price
                    }
                    if(sorting_value === "highest"){
                        return b.price - a.price
                    }
                }

                newSortData = tempProduct.sort(sortingProduct);

                return{
                    ...state,
                    filter_products:newSortData
                }
        default: return state;
            
    }
}

export default filterReducer