import isFunction from './isFunction'
// 判断是否是函数组件
export default function isFunctionComponent (virtualDOM) {
    const type = virtualDOM.type
    return type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
}