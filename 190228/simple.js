function printDOM(node, prefix){
    console.log(prefix+ node.nodeName + '-' + node.nodeType);
    for(let i =0; i<node.childNodes.length; ++i){
        printDOM(node.childNodes[i],prefix + '\t');
    }
}
//printDOM(document,'');

console.log(document.getElementById('content'));

const callouts = document.getElementsByClassName('callout');
console.log(callouts);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

document.write("<p><b>document</b>object -write() method</p>");

const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
para1.textContent = "Modified HTML file";
para1.innerHTML = "Modified <i>HTML</i> tag"

const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.innerHTML = "I was <b><i>created</i></b> dynamically!";
p2.textContent = "I was <b><i>also</i></b>created dynamically!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1, firstChild);
parent.appendChild(p2);
console.log(document.getElementById('content'));

function highlightParas(containing){
    if(typeof containing == 'string'){
        containing = new RegExp(`\\b${containing}\\b`,'i');
    }
    const paras=document.getElementsByTagName('p');
    console.log(paras);
    for(let p of paras){
        if(!containing.test(p.textContent)){
            continue;
        }
        p.classList.add('highlight');
    }
}
// highlightParas('unique');

function removeParaHighlights(){
    //css 적용 찾을때 사용 (querySeletorAll)
    const paras = document.querySelectorAll('p.highlight');
    for (let p of paras){
        p.classList.remove('highlight');
    }
}

const highlightActions = document.querySelectorAll('[data-action="highlight"]');
console.log(highlightActions);
console.log(highlightActions[0].dataset);

highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";

for( let a of highlightActions){
    a.addEventListener('click', evt=>{
        evt.preventDefault();
        highlightParas('unique');
        // highlightParas(a.dataset.containing);
    });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions){
    a.addEventListener('click', evt=>{
        evt.preventDefault();
        removeParaHighlights();
    });
}
