// Albert Heijn Greasemonkey Script
// 
// ==UserScript==
// @name        Albert Heijn Recepten snelcode
// @namespace   http://ah.nl/
// @description Shows the recipe "snelcode"
// @include     http://www.ah.nl/recepten/recipe.jsp*
// ==/UserScript==


function getElementsByClass(searchClass,node,tag) {
  var classElements = new Array();
  if ( node == null )
    node = document;
  if ( tag == null )
    tag = '*';
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\\\s)"+searchClass+"(\\\\s|$)");
  for (i = 0, j = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
      classElements[j] = els[i];
      j++;
    }
  }
  return classElements;
}


function findID() {

  tmp = getElementsByClass("snelcode")[0];
  tmp.style.display = "block";
  tmp.style.fontSize = "120%";
  tmp.style.fontWeight = "bold";
  
}

findID ();
