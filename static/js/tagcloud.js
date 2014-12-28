/*
    This piece of code is for tag "Cloud" implementation.

    Copyright (c) 2006 Gopalarathnam Venkatesan
    Copyright (c) 2007 Christian Luijten

    Version History
    --------------------------------------------------------------------------

    3.0     Almost complete rewrite for Hobix sidebar

    2.0     Use namespacing to avoid possible conflicts with other scripts
    
    1.0     Initial version

    This works with the category list like Hobix. 

    To use this:

      1. use the "tagList" id for the category list "UL"
      2. include this script in sidebar.html 

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

var TagCloud = {
    draw: function(elem) {
        var c = document.getElementById(elem);
        if (c && c.hasChildNodes()) {
            var maxPosts = 0,
                numCategories = 0,
                categoryElements = [], // the category elements
                categoryNode = [], // the category nodes
                categoryCount = [], // count of posts in each category
                categoryText = [], // text node in the list
                child, i, j, n, s, sz;

            /*
              This loop is for caching the list data and for getting the
              maximum posts in a category.
            */

            categoryElements = c.getElementsByTagName("LI");

            for (i = 0, n = categoryElements.length; i < n; i++) {
                child = categoryElements[i];

                if (child.getAttribute("rel") == "tag") {
                    categoryNode[numCategories] = child;
                    // if (s = child.getElementsByTagName("a"))
                        // categoryNode[numCategories] = s[0];

                    if (s = child.getElementsByTagName("span"))
                        categoryCount[numCategories] = j = parseInt(s[0].innerHTML);
                    
                    if (j > maxPosts) maxPosts = j;

                    numCategories++;
                }
            }

            // This is the actual "cloud" loop (apply relative font sizes).
            for (i = 0; i < numCategories; i++) {
                if (categoryCount[i] > 1) {
                  sz = Math.round(21.7 * Math.log(categoryCount[i] / maxPosts * 100));
                  categoryNode[i].style.fontSize = sz + "%";
                } else {
                  categoryNode[i].style.display = "none";
                }
            }
        }
    }
};
