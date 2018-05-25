function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('main #nested div div div .target')
}






function increaseRankBy(n) {
  var toOrder = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < toOrder.length; i++) {
    toOrder[i].innerHTML = parseInt(toOrder[i].innerHTML) + parseInt(n)
  }
  return toOrder;
}


function deepestChild(){
  var nodes = document.querySelectorAll('main #grand-node div')
  var deeperNode = nodes[nodes.length - 1]
  return deeperNode
}