(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"html {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(172, 148, 115);\n}\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    max-width: 80%;\n    gap: 20px;\n    padding: 10px;\n}\n\n#header-title {\n    font-family: cursive;\n    padding-top: 40px;\n    margin: 9px;\n    font-size: 5vh;\n}\n\n#header-logo {\n    width: 25vh;\n}\n\n.tabs {\n    margin-top: 8vh;\n    display: flex;\n    justify-content: center;\n    gap: 9vw;\n}\n\n\n#home-tab, #menu-tab, #contact-tab {\n    display: flex;\n    justify-content: center;\n    border: 1px solid black;\n    border-bottom: none;\n    width: 4vw;\n    padding: 8px;\n    font-family:monospace;\n    font-size: 1vw;\n    text-decoration: none;\n    background-color: rgba(243, 223, 198, 0.937);\n    transition: background-color 0.3s, transform 0.2s, font-size 0.2s;\n    color: black;\n}\n\n#home-tab:hover, #menu-tab:hover, #contact-tab:hover {\n    transform: scale(0.95); /* Shrink the tab */\n    font-size: 18px; /* Adjust font size on hover */\n}\n\n.main-body {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    height: 100vh;\n    margin: 50px;\n    width: 50vw;\n    margin-top: 0;\n    justify-content: flex-start;\n    background-color: rgb(255, 208, 146);\n}\n\n.home-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    padding: 30px;\n    height: 30%;\n    margin-top: 7vh;\n    justify-content: space-around;\n}\n\n#restr-icon {\n    height: 30vh;\n}\n\n.restr-intro {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    height: 20vh;\n    text-align: center;\n    padding-top: 20px;\n    border: 1px solid black;\n    padding: 15px;\n    background-color: blanchedalmond;\n    font-size: 1.8vh;\n    flex-wrap: wrap;\n    border-radius: 15px;\n    line-height: 1.5;\n    letter-spacing: 0.05em;\n}\n\n.owner-section {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    justify-content: space-around;\n}\n\n#owner-img {\n    height: 30vh;\n}\n\n.owner-description {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50%;\n    height: 20vh;\n    text-align: center;\n    padding-top: 20px;\n    border: 1px solid black;\n    padding: 15px;\n    background-color: blanchedalmond;\n    font-size: 1.8vh;\n    flex-wrap: wrap;\n    line-height: 1.5;\n    letter-spacing: 0.05em;\n}\n\n.owner-header {\n    font-size: 3vh;\n    margin-left: 5vw;\n    margin-top: 5vh;\n    line-height: 1.5;\n    letter-spacing: 0.05em;\n}\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"424cc343c3d5d42c72b2.png",g=t.p+"eb9d056188cdb957299d.png",v=t.p+"6bbf09082f14f4555288.png";document.querySelector("#menu-tab"),document.querySelector("#home-tab"),document.querySelector("#contact-tab"),(()=>{const e=document.createElement("div");e.className="main-container";const n=document.createElement("div");n.className="main-header";const t=document.createElement("div");t.className="tabs";const r=document.createElement("div");r.className="main-body";const o=new Image;o.src=f,o.setAttribute("id","header-logo");const a=document.createElement("div");a.setAttribute("id","header-title"),a.textContent="Matz's Burgers";const i=document.createElement("a"),c=document.createElement("a"),s=document.createElement("a");i.setAttribute("id","home-tab"),c.setAttribute("id","menu-tab"),s.setAttribute("id","contact-tab"),i.setAttribute("href","#"),c.setAttribute("href","#"),s.setAttribute("href","#"),i.textContent="Home",c.textContent="Menu",s.textContent="Contact",e.appendChild(n),e.appendChild(t),e.appendChild(r),n.appendChild(o),n.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(s),document.body.appendChild(e)})(),(()=>{let e=document.querySelector(".main-body");const n=document.createElement("div");n.className="home-header";const t=document.createElement("div");t.className="restr-intro",t.textContent='"Matz\'s burgers is Ut tristique et egestas quis ipsum suspendisse. Eget aliquet nibh praesent tristique magna sit amet purus. Quite the finest burger I have ever had." -  Gordon Ramsey';const r=new Image;r.src=g,r.setAttribute("id","restr-icon");const o=document.createElement("div"),a=document.createElement("div"),i=new Image,c=document.createElement("div");a.textContent="About The Owner",i.src=v,i.setAttribute("id","owner-img"),c.textContent="Our owner, Eugene Krabs, is a condimentum vitae sapien pellentesque habitant morbi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. ",o.className="owner-section",a.className="owner-header",c.className="owner-description",n.appendChild(r),n.appendChild(t),e.append(n),o.appendChild(c),o.appendChild(i),e.append(a),e.append(o),console.log("hello")})()})()})();