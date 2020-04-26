(() => {
console.log("hello world!!");
let style = document.createElement('style');
let resultClassElement = [];
const traverseNode = (node, index, className) => {
    if(node.style.cssText.length) {
        const styleName = 'cssClass' + index;
           style.innerHTML += '.' + styleName + '{' + node.style.cssText + '}\n';
           node.style.cssText = '';
           node.setAttribute("class",styleName);
           index++;
    }
    if(node.getAttribute('class') === className) {
        resultClassElement.push(node.nodeName);
    }
    if(node.children.length) {
        for(let i = 0 ; i< node.children.length ; i++) {
            traverseNode(node.children[i], index, className);
        }
    }
};
traverseNode(document.body, 0, "l2");
document.head.appendChild(style);
console.log(resultClassElement);
})()
