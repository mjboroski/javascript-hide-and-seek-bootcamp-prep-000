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
    var sub=lis.children;
      for (let j = 0; j < sub.length; j++) {
        lis[i].innerHTML = (i + n).parseInt()
      }
  }
}
/*
function deepestChild(){
  div#grand-node
  querySelector()
  querySelectorAll()
}*/
