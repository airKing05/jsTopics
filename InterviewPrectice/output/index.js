console.log("index start");

import {name} from './index2.js';

console.log("index", name);



// order of console
//  "1 index2 console 1", "2 index start", "3 index21"
// in memory creation js engin will collect the variable fom the index2.js file (because import statement has higher priority)
//  so this "console.log("index2 console 1")" is at the top level 
// "console.log("index", name);" will be last because will written at the end to the code



// question 2

var variable = "name";
// this variable will add to the global scope if do not use "type = 'module'" script tag in index.html
// this variable will add to the module scope if use "type = 'module'" script tag in index.html

// order of scopes:  GLOBAL > MODULE > FUNCTION  
// SCRIPT scope is part of global scope


