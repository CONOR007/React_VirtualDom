import mountElement from './05mountElement'
export default function diff (virtualDOM,container,oldDom) {
    // 判断oldDom存不存在
    if(!oldDom){
        // 创建真实的dom
        mountElement(virtualDOM,container)
    }
}