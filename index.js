function getFirstSelector(selector) {
  var first_element = document.querySelector(selector)
  return first_element
}

function nestedTarget() {
  return document.querySelector('.target')
}

function increaseRankBy(n) {
  var array = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < array.length; i++) {
    array[i].innerHTML = parseInt(array[i].innerHTML) + parseInt(n)
  }
  return array
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div')
  var deepest_node = nodes[nodes.length - 1]
  return deepest_node
}