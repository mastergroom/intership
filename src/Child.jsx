import React from "react"
function Child(pro){
    return(
        <div>
            <h1>press below button</h1>
            <button onClick={pro.data}>CLICK ME</button>
        </div>
    )
}
export default Child