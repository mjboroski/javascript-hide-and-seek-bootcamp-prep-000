function getFirstSelector(selector){
  var output = document.querySelector(selector);
  return output;
}

function nestedTarget(){
  let nestedSelector = document.getElementById('nested')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
  .querySelectorAll('div')
  if(div.class=='target'){
    return div.innerHTML
  }
}
}

/*function increaseRankBy(n){
  querySelector(.ranked-list)
  parseInt()
}

function deepestChild(){
  div#grand-node
  querySelector()
  querySelectorAll()
}*/
