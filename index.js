function getFirstSelector(selector){
  var output = document.querySelector(selector);
  return output;
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div div div div .target div')
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
