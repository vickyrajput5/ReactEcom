import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContect = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState= {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
}
const AppProvider = ({children}) =>{

    const [state , dispatch] = useReducer(reducer, initialState);

    const getProducts =async (url) =>{
        dispatch({type:"IS_LOADING" })
      try {
        const res = await axios.get(url)
        const products = res.data;
        dispatch({type:"SET_API_DATA", payload:products})

      } catch (error) {
          dispatch({type:"IS_ERROR"})
      }
    }

    const getSingleProduct = async(url) =>{
        dispatch({type: "IS_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleProduct = res.data;
            dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct})

        } catch (error) {
            dispatch({type:"SINGLE_ERROR"})
        }

    }
    useEffect(()=>{
        getProducts(API)
    }, [])

    return <AppContect.Provider value={{...state, getSingleProduct}}>{children}</AppContect.Provider>
}
// custom hook

const useProductContext = () =>{
   return useContext(AppContect);
}
export {AppProvider, AppContect, useProductContext};