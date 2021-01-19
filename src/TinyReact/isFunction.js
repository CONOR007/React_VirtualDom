// import mountNativeElement from './mountNativeElement'
export default function isFunction (virtualDOM) {
    return virtualDOM && typeof virtualDOM.type === 'function'
}