import React from "react"

function TextsView(props){
    let { text } = props

    return (
       <div>
           <h2>{text.title}</h2>
           <p>{text.content}</p>
       </div> 
    )
}

export default TextsView