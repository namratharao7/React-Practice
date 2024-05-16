import React from 'react'

// function Greet() {
//     return <h1>Hello World!</h1>
// }

const Greet = (props) => {
    console.log("props are", props);
   return (
    <div>
        <h1>Hello {props.name} a.k.a {props.actorName} !!</h1>
        {props.children}
    </div>
   )

   // {} is a feature of JSX that transforms JSX.
    
}

export default Greet;