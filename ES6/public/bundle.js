!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";function n(e,o){return e-o}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function u(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,o){return!o||"object"!==c(o)&&"function"!=typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,o){return(a=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function f(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function s(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,o,t){return o&&s(e.prototype,o),t&&s(e,t),e}t.r(o);var d=function(e){function o(){var e;return f(this,o),(e=i(this,l(o).call(this))).usuario="Gustavo",e.todos=[],e}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&a(e,o)}(o,e),p(o,[{key:"addTodo",value:function(){this.todos.push("Novo todo"),console.log(this.todos)}},{key:"mostraUsuario",value:function(){console.log(this.usuario)}}]),o}(function(){function e(){f(this,e),this.data=[]}return p(e,[{key:"add",value:function(e){this.data.push(e),console.log(this.data)}}]),e}()),y=function(){function e(){f(this,e)}return p(e,null,[{key:"soma",value:function(e,o){return e+o}}]),e}(),b=new d;document.getElementById("novotodo").onclick=function(){b.add("Novo todo")},b.mostraUsuario(),console.log(y.soma(1,2));var g={nome:"Gustavo"};g.nome="Cleiton",console.log(g),function(e){if(e>5){console.log(e,4)}}(10);var v=[1,3,4,5,8,9],m=v.map((function(e,o){return e+o}));console.log(m);var O=v.reduce((function(e,o){return e+o}));console.log(O);var h=v.filter((function(e){return e%2==0}));console.log(h);var j=v.find((function(e){return 4===e}));console.log(j);console.log({nome:"Gustavo"});var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e+o};console.log(P(1)),console.log(P());var w={nome:"Gustavo",idade:21,endereco:{cidade:"Ponta Grossa",estado:"PR"}};!function(e){var o=e.nome,t=e.idade;console.log(o,t)}(w);var S=w.nome,_=w.idade,k=w.endereco.cidade;console.log(S),console.log(_),console.log(k);var G={nomeD:"Diego",idade:23,empresa:"Rocketseat"},x=function(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(G,["nomeD"]);console.log(S,x);var D=[1,2,3,4],E=D[0],T=D[1],M=D.slice(2);console.log(E,T,M),console.log(function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];return o.reduce((function(e,o){return e+o}))}(1,3,4));var R=[].concat([1,2,3],[4,5,6]);console.log(R);var C=function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){u(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}({},{nome:"Diego",idade:23,empresa:"Rocketseat"},{nome:"Gustavo"});console.log(C);var I={nomeG:"Gustavo",idadeG:23,empresa:"WebTools"};console.log(I),console.log(function(e,o){return e+o}(1,2)),console.log(n(4,2)),console.log(function(e,o){return e+o}(20,25)),console.log(n(10,9))}]);