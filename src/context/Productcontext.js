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
    useEffect(()=>{
        getProducts(API)
    }, [])

    return <AppContect.Provider value={{...state}}>{children}</AppContect.Provider>
}
// custom hook

const useProductContext = () =>{
   return useContext(AppContect);
}
export {AppProvider, AppContect, useProductContext};