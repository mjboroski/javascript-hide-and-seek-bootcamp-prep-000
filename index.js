function getFirstSelector(selector){
  var output = document.querySelector(selector);
  return output;
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    let sub=lis[i].children;
      for (let j = 0; j < sub.length; j++) {
        sub[j].innerHTML = parseInt(sub[j].innerHTML)+n;
      }
  }
}

function deepestChild(){
  var selection=document.getElementById('div#grand-node');
  for (let i = 0; i < selection.length;i>0; i++) {
    if(selection[i].div!=undefined){
      let selection = selection[i].div
    }
  return selection;
  }

}
