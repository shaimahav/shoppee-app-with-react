import { createContext } from "react";
const initialParams={
        filterProducts:[],
    };
     const FilterContext=createContext(initialParams);
export default FilterContext;