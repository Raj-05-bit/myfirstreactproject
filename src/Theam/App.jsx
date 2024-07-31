import React, { createContext } from "react";
import UserProvider from "./UserProvider.jsx"
import Theme from "./Theme.jsx"
const App=()=>{
return (
    <div>
        <h1>gg</h1>
        <UserProvider>
            <Theme></Theme>
        </UserProvider>
       
    </div>
)
}
export default App;