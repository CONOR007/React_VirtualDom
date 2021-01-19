/** createElement用来创建虚拟DOM,每一个节点都会调用一次createElement */
export default function createElement(type,props,...children){
    const childElement = [].concat(children).reduce((result, currentChild)=>{
        // 过滤不需要显示的节点
        if(currentChild !==false && currentChild!== null && currentChild!==true){
            if(currentChild instanceof Object){
                result.push(currentChild)
            }else{
                 // 对这种文本节点重新定义
                 currentChild!== false && result.push(createElement("text",{textContent:currentChild}))
            }
        }
        return result
    },[])
    return {
        type,
        props:Object.assign({children:childElement},props),// 组件中通过props.children访问子组件
        children:childElement
    }
}