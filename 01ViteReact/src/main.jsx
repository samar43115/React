import React from 'react';
import { createRoot } from 'react-dom/client'

// const reactelement ={
//     type:'a',
//     props:{
//         href:'https://www.notion.so/',
//         target:'_blank'
//     },
//     children:'Click this link to visit Notion'
// }

const reactElement = React.createElement(
    'a',
    {href:'https://www.notion.so/', target:'_blank'},
    'Click Me'
)

// const randomElement =(
//     <h1>Hellow there</h1>
// )

createRoot(document.getElementById('root')).render(
    // App()
    //   randomElement -> </randomElement> won't work even if you make 'r' capital as it is same as randomElement()
    // reactelement -> won't work as react transpiler has its own defention of creating an element. 
    reactElement
)
