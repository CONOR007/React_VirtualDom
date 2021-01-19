import mountNativeElement from './mountNativeElement'
import isFunction from './isFunction'
import mountComponent from './mountComponent'
export default function mountElement (virtualDOM,container) {
    // 考虑普通虚拟dom和组件
    if(isFunction(virtualDOM)){
        // 组件
        mountComponent(virtualDOM,container)
    }else{
        // 普通虚拟dom
        mountNativeElement(virtualDOM,container)
    }
}