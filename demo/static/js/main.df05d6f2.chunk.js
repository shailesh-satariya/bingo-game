(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(4),c=n.n(i),s=n(6);!function(e){e.NOT_STARTED="NOT_STARTED",e.IN_PROGRESS="IN_PROGRESS",e.SOLVED="SOLVED"}(r||(r={}));var l=n(1),u=function(){return Object(l.jsx)("div",{"data-test":"component-confetti-ribbons",children:Array.from({length:200}).map((function(e,t){return Object(l.jsx)("div",{"data-test":"elm-confetti-ribbon",className:"confetti-"+(t+1)},t)}))})},d=n(11),f=function(e){var t=e.grid,n=e.addMove,r={gridTemplateRows:"repeat(".concat(t.length,", 1fr)"),gridTemplateColumns:"repeat(".concat(t[0].length,", 1fr)")};return Object(l.jsx)("div",{"data-test":"component-game-grid",className:"game-grid-container",children:Object(l.jsx)("div",{className:"game-grid-wrapper",children:Object(l.jsx)("div",{className:"game-grid",style:r,children:t.map((function(e,t){return e.map((function(e,r){return Object(l.jsx)("div",Object(d.a)(Object(d.a)({"data-test":"grid-tile",className:"d-flex flex-column grid-tile "+(e.traversed?"traversed":"")},!e.traversed&&{onClick:function(){return n({x:t,y:r})}}),{},{children:Object(l.jsx)("div",{className:"grid-tile-inner flex-1 d-flex text-center justify-content-center align-items-center m-2 p-1",children:Object(l.jsx)("span",{children:e.phrase})})}),"".concat(t,"-").concat(r))}))}))})})})},h=n(10),g=function(e){var t=Math.floor(Math.sqrt(e.length)),n=t,r=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(e),a=0;return Array.from({length:n}).map((function(){return Array.from({length:t}).map((function(){return{phrase:r[a++],traversed:!1}}))}))},v=function(e){var t,n=Object(h.a)(e);try{for(n.s();!(t=n.n()).done;){var r,a=t.value,o=Object(h.a)(a);try{for(o.s();!(r=o.n()).done;){if(!r.value.traversed)return!1}}catch(i){o.e(i)}finally{o.f()}}}catch(i){n.e(i)}finally{n.f()}return!0},m="NEW_GAME",p="ADD_MOVE",y="SOLVED",b="BINGO",j="NO_BINGO",O={phrases:["(child noises in the background)","Hello, hello","I need to jump in the another call","Can everyone go on mute?","Could you please get closer to the mic?","(load painful echo/feedback)","Next side please","Can we take this offline?","Is ___ on the call?","Could you please share these slides afterwards?","Can somebody grant presenter rights?","Can you email that to everyone?","Conf call Bingo","Sorry I had problems loging in","(animal noises in the background)","Sorry, I didn't find the conference id","I was having connection issues","I'll have to get back to you","Who just joined","Sorry, something ___ with my calendar","Do you see my screen?","Let's wait for ___!","You will send the minutes","Sorry, I was on mute","Can you repeat please?"]},x=Object(s.b)((function(e){return{gameState:e.gameState,grid:e.grid,bingo:e.bingo}}),{newGame:function(e){return function(t){t({type:m,payload:{grid:e}}),v(e)&&t({type:y,payload:e})}},addMove:function(e){return function(t,n){var r=n().grid,a=e.x,o=e.y;r&&r[a]&&r[a][o]&&(r[a][o].traversed=!0);var i=r?function(e){return e.map((function(e){return e.map((function(e){return{phrase:e.phrase,traversed:e.traversed}}))}))}(r):r;t({type:p,payload:{grid:i,position:e}}),i&&((function(e,t){var n=t.x;if(!e[n])return!1;for(var r=0;r<e.length;r++){var a=e[n][r];if(!a||!a.traversed)return!1}return!0}(i,e)||function(e,t){for(var n=t.y,r=0;r<e.length;r++){var a=e[r]&&e[r][n]?e[r][n]:null;if(!a||!a.traversed)return!1}return!0}(i,e)||function(e,t){if(t.x!==t.y)return!1;for(var n=0;n<e.length;n++){var r=e[n]&&e[n][n]?e[n][n]:null;if(!r||!r.traversed)return!1}return!0}(i,e)||function(e,t){if(t.x+t.y!==e.length-1)return!1;for(var n=0;n<e.length;n++){var r=n,a=e.length-n-1,o=e[r]&&e[r][a]?e[r][a]:null;if(!o||!o.traversed)return!1}return!0}(i,e))&&t({type:b}),v(i)&&t({type:y,payload:i}))}},setNoBingo:function(){return function(e){e({type:j})}}})((function(e){var t=e.gameState,n=e.grid,o=e.bingo,i=e.newGame,c=e.setNoBingo,s=e.addMove;return Object(a.useEffect)((function(){var e=g(O.phrases);i(e)}),[i]),Object(a.useEffect)((function(){o&&setTimeout((function(){c()}),5e3)}),[o,c]),Object(l.jsxs)("div",{"data-test":"component-app",className:"d-flex justify-content-center align-items-center vw-100 vh-100",children:[t!==r.NOT_STARTED&&n?Object(l.jsx)(f,{"data-test":"elm-game-grid",grid:n,addMove:s}):null,o?Object(l.jsx)(u,{"data-test":"elm-confetti-ribbons"}):null]})})),w=(n(29),n(2)),S=n(14),N=r.NOT_STARTED,_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return r.IN_PROGRESS;case y:return r.SOLVED;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case p:return t.payload.grid;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload.grid;default:return e}},I=n(15),D=[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return D;case p:return[].concat(Object(I.a)(e),[t.payload.position]);default:return e}},R=!1,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return R;case b:return!0;case j:return!1;default:return e}},C=Object(w.c)({gameState:_,grid:E,initialGrid:T,moves:M,bingo:k}),A=[S.a],G=w.a.apply(void 0,A)(w.d)(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(s.a,{store:G,children:Object(l.jsx)(x,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.df05d6f2.chunk.js.map