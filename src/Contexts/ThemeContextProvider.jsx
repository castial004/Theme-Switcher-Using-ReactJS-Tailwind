import { useEffect, useState } from "react"
import ThemeContext from "./ThemeContext"
function ThemeContextProvider({children}){
    
    const [theme,setTheme] = useState('light')
    useEffect(()=>{
        const htmlRef = document.querySelector('html')
        htmlRef.classList.remove('dark','light')
        htmlRef.classList.add(theme)
    },[theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider