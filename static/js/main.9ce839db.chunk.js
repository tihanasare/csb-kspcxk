(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var r=n(6),c=n(4),o=n(7),a=n(0),i=n.n(a),u=n(3),l=n(8),p=(n(16),["https://www.letterformagic.com/upload/Moon.jpg","https://www.letterformagic.com/upload/Sun.jpg","https://www.letterformagic.com/upload/Universe.jpg","https://www.letterformagic.com/upload/Juggler.jpg","https://www.letterformagic.com/upload/Inquirer.jpg","https://www.letterformagic.com/upload/Hermit.jpg","https://www.letterformagic.com/upload/Devil.jpg","https://www.letterformagic.com/upload/Death.jpg"]),s=function(t){return{x:0,y:-4*t,scale:1,rot:20*Math.random()-10,delay:100*t}},w=function(t){return{x:0,rot:0,scale:1.5,y:-1e3}},d=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")};function f(){var t=Object(a.useState)(function(){return new Set}),e=Object(c.a)(t,1)[0],n=Object(u.c)(p.length,function(t){return Object(r.a)({},s(t),{from:w(t)})}),o=Object(c.a)(n,2),f=o[0],g=o[1],m=Object(l.a)(function(t){var n=Object(c.a)(t.args,1)[0],r=t.down,o=Object(c.a)(t.delta,1)[0],a=(t.distance,Object(c.a)(t.direction,1)[0]),i=t.velocity,u=a<0?-1:1;!r&&i>.2&&e.add(n),g(function(t){if(n===t){var c=e.has(n);return{x:c?(200+window.innerWidth)*u:r?o:0,rot:o/100+(c?10*u*i:0),scale:r?1.1:1,delay:void 0,config:{friction:50,tension:r?800:c?200:500}}}}),r||e.size!==p.length||setTimeout(function(){return e.clear()||g(function(t){return s(t)})},600)});return f.map(function(t,e){var n=t.x,r=t.y,c=t.rot,o=t.scale;return i.a.createElement(u.a.div,{key:e,style:{transform:Object(u.b)([n,r],function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0)")})}},i.a.createElement(u.a.div,Object.assign({},m(e),{style:{transform:Object(u.b)([c,o],d),backgroundImage:"url(".concat(p[e],")")}})))})}Object(o.render)(i.a.createElement(f,null),document.getElementById("root"))},16:function(t,e,n){},9:function(t,e,n){t.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.9ce839db.chunk.js.map