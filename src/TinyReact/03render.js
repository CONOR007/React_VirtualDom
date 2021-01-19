import diff from './04diff'

/** 把virtualDOM转换成真实的Dom */
export default function render(virtualDOM,container,oldDom) {
    diff(virtualDOM,container,oldDom);
}