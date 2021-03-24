$(document).ready(function () {

  function reveal(card, text) {
    $(card).click(function () {
      $(text).slideToggle()
    })
  }

  reveal(".c1", ".t1")
  reveal(".c2", ".t2")
  reveal(".c3", ".t3")
  reveal(".c4", ".t4")
  reveal(".c5", ".t5")
  reveal(".c6", ".t6")
  reveal(".c7", ".t7")
  reveal(".c8", ".t8")
  reveal(".c9", ".t9")

});