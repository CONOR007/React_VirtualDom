import createDOMElement from './07createDOMElement'

/** 把virtualDOM转换成真实的Dom */
export default function mountNativeElement (virtualDOM,container) {
    const newElement = createDOMElement(virtualDOM,container)
    // 将转换之后的真实节点放入Dom中
    container.append(newElement);
}