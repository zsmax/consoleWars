!function(e){function t(t){for(var a,l,c=t[0],i=t[1],s=t[2],p=0,u=[];p<c.length;p++)l=c[p],o[l]&&u.push(o[l][0]),o[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(t);u.length;)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={0:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;r.push([4,1]),n()}([function(e,t,n){var a=n(1);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a="padding: 20px; font-weight: bold; font-family: courier; font-size: 30px; position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); cursor: pointer",o={start:!0,pc:{health:100},player:{health:100},attacks:{lowKick:{min:18,max:25},highKick:{min:10,max:35},heal:{min:18,max:25}}};var r="height: 25px; flex-grow: 1; border: 2px solid wheat; text-align: center; position: relative; color: wheat; line-height: 23px; font-weight: bold; z-index: 1;overflow: hidden",l="\ndisplay: flex;\nflex-direction: column;\npadding: 0 10px 20px 10px;\nwidth: 390px;\nheight: 450px;\nmargin: 0 auto;\noverflow-y: auto;\nmargin-top: -70px;\ncolor: wheat;\n",c={style:"background: transparent; flex-grow: 1; height: 30px; color: wheat; padding: 2px 10px; font-size: 20px; font-family: 'courier'; border-top: 1px solid wheat;",placeholder:"type: low kick | high kick | heal (not case sensitive)"},i="margin: 10% auto 0;background: #303030; width: 600px; height: 530px; display: flex; flex-flow: row wrap; position: relative; font-family: 'courier'; transition: all 0.7s",s="background: rgba(19, 15, 15, 0.767); color: wheat; font-size:20px;font-family: 'courier'; cursor: pointer;border-top: 1px solid wheat",d="display: flex; background: #303030; width: 100%; position: absolute; bottom: 0;",p="display: flex; width: 50%; margin: 10px 5px;",u="background-color: brown; width: 100%; height: 100%; position: absolute; z-index: -1; top: 0";function h(e,t){var n={system:"system",pc:"pc",player:"player"},a=document.querySelector(".gameField"),o=document.createElement("div");o.textContent=t,n.hasOwnProperty(e)?(o.classList.add(n[e]),a.appendChild(o),a.scrollTop=a.scrollHeight):console.warn("error")}function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function y(e,t){var n=m(o.attacks[t].min,o.attacks[t].max);if(e!==v&&e!==k)console.error("attackEnemy().error");else{var a,r,l;switch(e===v?"heal"!==t?a=k:r=e:"heal"!==t?a=v:r=e,r&&(o[r].health+n>100?o[r].health=100:o[r].health+=n),a&&(o[a].health-=n),t){case"lowKick":l="low kick";break;case"highKick":l="high kick";break;case"heal":l="heal";break;default:console.error("attack")}l=l.toUpperCase(),h(e,"".concat(l," : ").concat(n," points")),e===k&&(o.start=!0,E())}}function f(){console.warn("playerGame"),o.start=!1;var e=document.querySelector("input"),t=document.querySelector(".actionButton");e.focus(),t.addEventListener("click",function(){e.value&&function(t){var n,a=e.value.toLowerCase();switch(e.value="",a){case"low kick":case"lowkick":case"low":n="lowKick";break;case"high kick":case"high":case"highkick":n="highKick";break;case"heal":n="heal"}if("100"==o.player.health&&"heal"===n){h(x,"You don't need that at this moment. Try kicks")}else if(o.attacks[n])y(k,n);else{h(x,"low kick | high kick | heal")}}()})}var g="position: absolute;\nbottom: 29px;\nleft: 50%;\ntransform: translateX(-50%);\nz-index: 201;\ncolor: #303030;\nbackground: #35e435;\npadding: 15px 2rem;\nfont-size: 24px;\nfont-family: monospace;\nbox-shadow: 0 0 60px black;\nletter-spacing: 0.05em;\ncursor: pointer;";function b(e){var t="url('./assets/img/you_lose.png')",n="url('./assets/img/you_win.png')",a="url('./assets/img/fatality.png')",r=document.createElement("div"),l=document.querySelector("#app"),c=document.querySelector(".gameArea");if(c.style.filter="blur(1px)",e===v)i(t);else if(e===k){i(100===o.player.health?a:n)}else console.error("createLoseWindow -> winner?");function i(e){l.style.position="relative",r.classList.add(".loseWindow"),r.style.height="".concat(c.getBoundingClientRect().height,"px");var t="position: absolute;z-index: 200;"+"width: ".concat(c.getBoundingClientRect().width,"px;")+"height: ".concat(c.getBoundingClientRect().height,"px;")+"top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);"+"background: transparent ".concat(e," center/contain no-repeat;");r.setAttribute("style",t),l.appendChild(r),function(){var e=document.querySelector("#app"),t=document.createElement("button");t.classList.add("replayButton"),t.setAttribute("style",g),t.textContent="REPLAY?",t.addEventListener("click",function(){location.reload()}),e.appendChild(t)}()}}var x="system",v="pc",k="player",w={pc:0,player:0};function E(e){var t=document.querySelector(".pcHealthPoint"),n=document.querySelector(".playerHealthPoint"),a=document.querySelector(".pcHealthBar"),r=document.querySelector(".playerHealthBar"),l=o.pc.health,c=o.player.health;l<=0?l=0:c<=0&&(c=0),t.textContent=l,a.style.width=l+"%",n.textContent=c,r.style.width=c+"%",l?c||C(v):C(k),o.start&&function e(t){var n=L(),a=L();w.pc=0;w.player=0;if(n!=a){var o;n>a?o=v:n<a&&(o=k),w[o]=1;var r="".concat(v," got ").concat(n,", you got ").concat(a);h(x,"THROW BONES:"),h(x,r),h(x,o+" goes")}else e()}(),w.pc?function(){console.warn("pcGame");var e,t=Object.keys(o.attacks),n=t.length,a=function(){return m(1,n)-1};if(o.pc.health>75){var r=a();if("heal"===t[r])for(;"heal"===t[r];)r=a();e=t[r]}else o.pc.health<=35?(console.log("<35"),e=t[o.player.health<=(o.attacks.lowKick.min+o.attacks.lowKick.max)/2?0:m(m(1,n),n)-1]):e=t[a()];o.player.health>0&&y(v,e)}():w.player&&f(),o.start&&requestAnimationFrame(E)}function C(e){var t=document.querySelector("input"),n=document.querySelector(".actionButton");o.start=!1,t.setAttribute("disabled",!0),t.setAttribute("placeholder","END GAME"),n.setAttribute("disabled",!0),b(e)}function L(){return m(1,6)}var A,S,H="font-size: 16px; \nwidth: 70%; \npadding: 5px 5px; \nborder-radius: 10px; \nmargin-top: 2px; \nmargin-bottom: 2px; \ntext-align: left; \nposition: relative; \ncolor: black;",q={system:"".concat(H," ").concat("align-self: center; \ncolor: #fff; \nbackground: #517779; \ntext-align: center; \nwidth: 100%;"),pc:"".concat(H," ").concat("background-color: #efd03c; \nalign-self: flex-start;"),player:"".concat(H," ").concat("  align-self: flex-end; \nbackground-color: #ff8c00;")};function B(){var e=document.querySelector("#app"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),b=document.createElement("div"),x=document.createElement("div"),v=document.createElement("p"),k=document.createElement("p"),w=document.createElement("div"),C=document.createElement("div"),L=document.createElement("input"),A=document.createElement("button");e.appendChild(t),t.style.marginTop="20%",n.classList.add("row"),t.appendChild(n),n.style.display="flex",n.style.width="100%",a.classList.add("pcBlock"),a.setAttribute("style",p),o.classList.add("playerBlock"),o.setAttribute("style",p),m.classList.add("pcIcon","icon"),m.setAttribute("style"," width: 100px; height: 100px;"),m.style.background="transparent url('./assets/img/pcIcon.png') center / cover no-repeat",y.classList.add("playerIcon","icon"),y.setAttribute("style"," width: 100px; height: 100px; order: 1"),y.style.background="transparent url('./assets/img/playerIcon.png') center / cover no-repeat",f.classList.add("pcHealth"),g.classList.add("playerHealth"),f.setAttribute("style",r),g.setAttribute("style",r),b.classList.add("pcHealthBar"),x.classList.add("playerHealthBar"),v.classList.add("pcHealthPoint"),k.classList.add("playerHealthPoint"),f.appendChild(v),g.appendChild(k),v.innerText=100,k.innerText=100,t.classList.add("gameArea"),t.setAttribute("style",i),n.appendChild(a),n.appendChild(o),a.appendChild(m),a.appendChild(f),o.appendChild(y),o.appendChild(g),f.appendChild(b),b.setAttribute("style",u),b.style.left=0,g.appendChild(x),x.setAttribute("style",u),x.style.right=0,w.classList.add("gameField"),w.setAttribute("style",l),t.appendChild(w),C.classList.add("inputBlock"),C.setAttribute("style",d),L.classList.add("input"),L.type="text",L.setAttribute("style",c.style),L.placeholder=c.placeholder,A.classList.add("actionButton"),A.textContent="Do",A.setAttribute("style",s),t.appendChild(C),C.appendChild(L),C.appendChild(A),document.addEventListener("keyup",function(e){L.value&&13===e.keyCode&&(e.preventDefault(),A.click())});var S=document.createElement("style"),H=document.createElement("style"),B=document.createElement("style");S.type="text/css",H.type="text/css",B.type="text/css",S.innerHTML=".system {".concat(q.system,"}; "),H.innerHTML=".pc {".concat(q.pc,"};"),B.innerHTML=".player {".concat(q.player,"};"),document.querySelector("body").append(S,H,B),h("system",'Now you will fight. Fate will decide who attacks first.  You can chouse "LOW KICK" for small range attack (18 - 25 HP). Or "HIGH KICK" for big range attack (10 - 35 HP). Or you can chouse "HEEL" to restore heals in range of low kick. So lets start.'),E()}A=document.querySelector("#app"),(S=document.createElement("button")).classList.add("startButton"),S.textContent="START GAME",S.setAttribute("style",a),A.appendChild(S),o.start=!0;var O=document.querySelector(".startButton");O.addEventListener("click",function(){if(!document.querySelector("#app")){var e=document.createElement("div");e.id="app",document.body.appendChild(e)}B()}),O.addEventListener("click",function(){O.style.display="none"});n(0)}]);