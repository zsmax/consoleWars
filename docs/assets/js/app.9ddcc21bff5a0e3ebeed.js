!function(e){function t(t){for(var a,l,c=t[0],i=t[1],s=t[2],p=0,u=[];p<c.length;p++)l=c[p],r[l]&&u.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(t);u.length;)u.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;o.push([4,1]),n()}([function(e,t,n){var a=n(1);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a="padding: 20px; font-weight: bold; font-family: courier; font-size: 30px; position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); cursor: pointer",r={start:!0,pc:{health:100},player:{health:100},attacks:{lowKick:{min:18,max:25},highKick:{min:10,max:35},heal:{min:18,max:25}}};var o="height: 25px; flex-grow: 1; border: 2px solid wheat; text-align: center; position: relative; color: wheat; line-height: 23px; font-weight: bold; z-index: 1;overflow: hidden",l="\ndisplay: flex;\nflex-direction: column;\npadding: 0 10px 20px 10px;\nwidth: 390px;\nheight: 450px;\nmargin: 0 auto;\noverflow-y: auto;\nmargin-top: -70px;\ncolor: wheat;\n",c={style:"background: transparent; flex-grow: 1; height: 30px; color: wheat; padding: 2px 10px; font-size: 20px; font-family: 'courier'; border-top: 1px solid wheat;",placeholder:"напиши свою атаку"},i="margin: 10% auto 0;background: #303030; width: 600px; height: 530px; display: flex; flex-flow: row wrap; position: relative; font-family: 'courier'; transition: all 0.7s",s="background: rgba(19, 15, 15, 0.767); color: wheat; font-size:20px;font-family: 'courier'; cursor: pointer;border-top: 1px solid wheat",d="display: flex; background: #303030; width: 100%; position: absolute; bottom: 0;",p="display: flex; width: 50%; margin: 10px 5px;",u="background-color: brown; width: 100%; height: 100%; position: absolute; z-index: -1; top: 0";function h(e,t){var n={system:"system",pc:"pc",player:"player"},a=document.querySelector(".gameField"),r=document.createElement("div");r.textContent=t,n.hasOwnProperty(e)?(r.classList.add(n[e]),a.appendChild(r),a.scrollTop=a.scrollHeight):console.warn("error")}function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function y(e,t){var n=m(r.attacks[t].min,r.attacks[t].max);if(e!==v&&e!==w)console.error("attackEnemy().error");else{var a,o,l;switch(e===v?"heal"!==t?a=w:o=e:"heal"!==t?a=v:o=e,o&&(r[o].health+n>100?r[o].health=100:r[o].health+=n),a&&(r[a].health-=n),t){case"lowKick":l="удар";break;case"highKick":l="сильный удар";break;case"heal":l="аптечка";break;default:console.error("attack")}l=l.toUpperCase(),h(e,"".concat(l," : ").concat(n,"НР")),e===w&&(r.start=!0,C())}}function f(){console.warn("playerGame"),r.start=!1;var e=document.querySelector("input"),t=document.querySelector(".actionButton");e.focus(),t.addEventListener("click",function(){e.value&&function(t){var n,a=e.value.toLowerCase();switch(e.value="",a){case"удар":n="lowKick";break;case"сильный удар":n="highKick";break;case"аптечка":n="heal"}if("100"==r.player.health&&"heal"===n){h(b,"Вам пока не нужна аптечка - попробуйте удары.")}else if(r.attacks[n])y(w,n);else{h(b,"Варианты атак:\n            УДАР | СИЛЬНЫЙ УДАР | АПТЕЧКА")}}()})}var g="position: absolute;\nbottom: 29px;\nleft: 50%;\ntransform: translateX(-50%);\nz-index: 201;\ncolor: #303030;\nbackground: #35e435;\npadding: 15px 2rem;\nfont-size: 24px;\nfont-family: monospace;\nbox-shadow: 0 0 60px black;\nletter-spacing: 0.05em;\ncursor: pointer;";function x(e){var t="url('./assets/img/you_lose.png')",n="url('./assets/img/you_win.png')",a="url('./assets/img/fatality.png')",o=document.createElement("div"),l=document.querySelector("#app"),c=document.querySelector(".gameArea");if(c.style.filter="blur(1px)",e===v)i(t);else if(e===w){i(100===r.player.health?a:n)}else console.error("createLoseWindow -> winner?");function i(e){l.style.position="relative",o.classList.add(".loseWindow"),o.style.height="".concat(c.getBoundingClientRect().height,"px");var t="position: absolute;z-index: 200;"+"width: ".concat(c.getBoundingClientRect().width,"px;")+"height: ".concat(c.getBoundingClientRect().height,"px;")+"top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);"+"background: transparent ".concat(e," center/contain no-repeat;");o.setAttribute("style",t),l.appendChild(o),function(){var e=document.querySelector("#app"),t=document.createElement("button");t.classList.add("replayButton"),t.setAttribute("style",g),t.textContent="ПЕРЕИГРАЕМ?",t.addEventListener("click",function(){location.reload()}),e.appendChild(t)}()}}var b="system",v="pc",w="player",k={pc:0,player:0};function C(e){var t=document.querySelector(".pcHealthPoint"),n=document.querySelector(".playerHealthPoint"),a=document.querySelector(".pcHealthBar"),o=document.querySelector(".playerHealthBar"),l=r.pc.health,c=r.player.health;l<=0?l=0:c<=0&&(c=0),t.textContent=l,a.style.width=l+"%",n.textContent=c,o.style.width=c+"%",l?c||E(v):E(w),r.start&&function e(t){var n=L(),a=L();k.pc=0;k.player=0;if(n!=a){var r;n>a?r=v:n<a&&(r=w),k[r]=1,h(b,"Ход "+{pc:"компьютера",player:"игрока"}[r])}else e()}(),k.pc?function(){console.warn("pcGame");var e,t=Object.keys(r.attacks),n=t.length,a=function(){return m(1,n)-1};if(r.pc.health>75){var o=a();if("heal"===t[o])for(;"heal"===t[o];)o=a();e=t[o]}else r.pc.health<=35?(console.log("<35"),e=t[r.player.health<=(r.attacks.lowKick.min+r.attacks.lowKick.max)/2?0:m(m(1,n),n)-1]):e=t[a()];r.player.health>0&&y(v,e)}():k.player&&f(),r.start&&requestAnimationFrame(C)}function E(e){var t=document.querySelector("input"),n=document.querySelector(".actionButton");r.start=!1,t.setAttribute("disabled",!0),t.setAttribute("placeholder","END GAME"),n.setAttribute("disabled",!0),x(e)}function L(){return m(1,6)}var A,S,q="font-size: 16px; \nwidth: 70%; \npadding: 5px 5px; \nborder-radius: 10px; \nmargin-top: 2px; \nmargin-bottom: 2px; \ntext-align: left; \nposition: relative; \ncolor: black;",H={system:"".concat(q," ").concat("align-self: center; \ncolor: #fff; \nbackground: #517779; \ntext-align: center; \nwidth: 100%;"),pc:"".concat(q," ").concat("background-color: #efd03c; \nalign-self: flex-start;"),player:"".concat(q," ").concat("  align-self: flex-end; \nbackground-color: #ff8c00;")};function B(){var e=document.querySelector("#app"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),v=document.createElement("p"),w=document.createElement("p"),k=document.createElement("div"),E=document.createElement("div"),L=document.createElement("input"),A=document.createElement("button");e.appendChild(t),t.style.marginTop="20%",n.classList.add("row"),t.appendChild(n),n.style.display="flex",n.style.width="100%",a.classList.add("pcBlock"),a.setAttribute("style",p),r.classList.add("playerBlock"),r.setAttribute("style",p),m.classList.add("pcIcon","icon"),m.setAttribute("style"," width: 100px; height: 100px;"),m.style.background="transparent url('./assets/img/pcIcon.png') center / cover no-repeat",y.classList.add("playerIcon","icon"),y.setAttribute("style"," width: 100px; height: 100px; order: 1"),y.style.background="transparent url('./assets/img/playerIcon.png') center / cover no-repeat",f.classList.add("pcHealth"),g.classList.add("playerHealth"),f.setAttribute("style",o),g.setAttribute("style",o),x.classList.add("pcHealthBar"),b.classList.add("playerHealthBar"),v.classList.add("pcHealthPoint"),w.classList.add("playerHealthPoint"),f.appendChild(v),g.appendChild(w),v.innerText=100,w.innerText=100,t.classList.add("gameArea"),t.setAttribute("style",i),n.appendChild(a),n.appendChild(r),a.appendChild(m),a.appendChild(f),r.appendChild(y),r.appendChild(g),f.appendChild(x),x.setAttribute("style",u),x.style.left=0,g.appendChild(b),b.setAttribute("style",u),b.style.right=0,k.classList.add("gameField"),k.setAttribute("style",l),t.appendChild(k),E.classList.add("inputBlock"),E.setAttribute("style",d),L.classList.add("input"),L.type="text",L.setAttribute("style",c.style),L.placeholder=c.placeholder,A.classList.add("actionButton"),A.textContent="Do",A.setAttribute("style",s),t.appendChild(E),E.appendChild(L),E.appendChild(A),document.addEventListener("keyup",function(e){L.value&&13===e.keyCode&&(e.preventDefault(),A.click())});var S=document.createElement("style"),q=document.createElement("style"),B=document.createElement("style");S.type="text/css",q.type="text/css",B.type="text/css",S.innerHTML=".system {".concat(H.system,"}; "),q.innerHTML=".pc {".concat(H.pc,"};"),B.innerHTML=".player {".concat(H.player,"};"),document.querySelector("body").append(S,q,B),h("system",'ВАм предстоит битва с злобным компьютером. Вы можете выбрать "УДАР" со средним диаппазоном урона (18 - 25 HP). Или "СИЛЬНЫЙ УДАР" с большим диаппазоном урона (10 - 35 HP). Или вы можете выбрать "АПТЕЧКА" для лечения себя в диаппазоне (18 - 25HP) Так начнём же.'),C()}A=document.querySelector("#app"),(S=document.createElement("button")).classList.add("startButton"),S.textContent="НАЧАТЬ ИГРУ",S.setAttribute("style",a),A.appendChild(S),r.start=!0;var P=document.querySelector(".startButton");P.addEventListener("click",function(){if(!document.querySelector("#app")){var e=document.createElement("div");e.id="app",document.body.appendChild(e)}B()}),P.addEventListener("click",function(){P.style.display="none"});n(0)}]);