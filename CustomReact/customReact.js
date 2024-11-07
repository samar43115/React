
function customRender(element,container){
    const domElement =  document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const key in element.props) {
        domElement.setAttribute(key,element.props[key]);
    }
    container.appendChild(domElement);
}


const element ={
    type:'a',
    props:{
        href:'https://www.notion.so/',
        target:'_blank'
    },
    children:'Click this link to visit Notion'
}

const container = document.querySelector('#root');

customRender(element,container);