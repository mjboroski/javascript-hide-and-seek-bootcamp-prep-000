function getFirstSelector(selector){
  var output = document.querySelector(selector);
  return output;
}

function nestedTarget(){
  return document.querySelector('#nested.target')
}


function increaseRankBy(n){
  const lis = document.getElementById('app').querySelector('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).parseInt()
  }
}

function deepestChild(){
  div#grand-node
  querySelector()
  querySelectorAll()
}*/
