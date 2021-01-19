import mountElement from './05mountElement'
import updateNodeElement from './08updateNodeElement'
export default function createDOMElement (virtualDOM,container) {
    let newElement = null;
    if(virtualDOM.type === "text"){
        //文本节点
        newElement = document.createTextNode(virtualDOM.props.textContent)
    }else{
        //元素节点
        newElement = document.createElement(virtualDOM.type)
        updateNodeElement(newElement,virtualDOM)
    }
    // 递归创建子节点
    virtualDOM.children.forEach(child=>{
        // 不确定是普通虚拟dom还是组件
        mountElement(child,newElement)
    })
    return newElement
}