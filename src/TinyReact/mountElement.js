import mountNativeElement from './mountNativeElement'
export default function mountElement (virtualDOM,container) {
    // 考虑普通虚拟dom和组件
    mountNativeElement(virtualDOM,container)
}