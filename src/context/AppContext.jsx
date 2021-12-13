
import { createContext } from "react";  // create context

 export const AppContext = createContext();   //comnsumer

 export const AppContextProvider = ({childern}) =>{    //provider
     return <AppContext.Provider value = "abc"  value1 = "black">{childern}</AppContext.Provider>
 }

