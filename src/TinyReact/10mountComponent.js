import isFunction from './09isFunction';
import isFunctionComponent from './11isFunctionComponent'
import mountNativeElement from './06mountNativeElement'
export default function mountComponent (virtualDOM,container) {
    let nextVirtualDOM;
    //判断组件是类组件还是函数组件
    if(isFunctionComponent(virtualDOM)){
        //函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
        if(isFunction(nextVirtualDOM)){
            mountComponent(nextVirtualDOM,container);
        }else{
            mountNativeElement(nextVirtualDOM,container);
        }
    }

    //类组件

}

function buildFunctionComponent (virtualDOM) {
    return virtualDOM.type(virtualDOM.props || {});
}