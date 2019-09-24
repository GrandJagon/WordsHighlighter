
function replaceContent(node, content){
  const newSpan = document.createElement('span');
  newSpan.innerHTML = content;
  node.parentNode.replaceChild(newSpan, node);
  return newSpan;
}

function replaceNode(node){
  if(node.nodeName !== '#text' || node.parentNode.nodeName === 'SCRIPT' || node.parentNode.nodeName === 'STYLE' ||
      node.parentNode.className === 'tooltip' || node.parentNode.className === 'tooltipcontent'){
        console.log('error node type');
        return;
      }

 for(let [word, def] of glossary){
    let regex = rgx.get(word);
    const newContent = node.textContent.replace(regex, def);

    if(newContent !== node.textContent){
      const newSpan = replaceContent(node, newContent);
      console.log('node replaced');
      return walkDoc(newSpan);
    }
  }
}


function walkDoc(target){
  let treeWalker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, {acceptNode : function(node){
                      if(node.textContent.length === 0){
                        return NodeFilter.FILTER_SKIP;
                      }
                      return NodeFilter.FILTER_ACCEPT;
  }
}, false);
console.log('treewalker created');

nodeList = [];
console.log('nodelist created');

 while(treeWalker.nextNode()){
   nodeList.push(treeWalker.currentNode);
 }
 console.log(nodeList);
 i = 1;

 nodeList.forEach(function(n){
   console.log('node '+i);
   replaceNode(n);
   i++;
 });
}


var target = document.body;

var observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
    if(mutation.addedNodes){
      for(var i = 0; i < mutation.addedNodes.length; i++){
        walkDoc(mutation.addedNodes[i]);
        }
      }
    });
  });


var config = {characterData : true, childList: true, subtree: true}

observer.observe(target, config);

walkDoc(target);
