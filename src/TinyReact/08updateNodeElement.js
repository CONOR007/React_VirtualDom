import createDOMElement from './07createDOMElement'

/** 把virtualDOM转换成真实的Dom */
export default function updateNodeElement (newElement,virtualDOM) {
    const {children,...props} = virtualDOM.props;
    Object.keys(props).forEach(propName=>{
        const newPropsValue = virtualDOM.props[propName];
        // 如果是以on开头的说明是事件,onClick => click
        if(propName.slice(0,2) === 'on'){
            // 事件名称
            const eventName = propName.toLocaleLowerCase().slice(2)
            newElement.addEventListener(eventName, newPropsValue);
        }else if(propName === "value" || propName === "checked"){
            newElement[propName] = newPropsValue;
        }else if (propName === "className"){
            newElement.setAttribute('class',newPropsValue)
        }else{
            newElement.setAttribute(propName,newPropsValue)
        }
    })
}