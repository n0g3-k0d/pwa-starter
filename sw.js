if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const o=e=>n(e,i),t={module:{uri:i},exports:d,require:o};s[i]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ac1b792"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icons/icon_192.png",revision:"a80ffffb8d3a555b25a0f19a0a9878f1"},{url:"assets/icons/icon_24.png",revision:"04fa5b0f5827d885b678f0d131406aab"},{url:"assets/icons/icon_48.png",revision:"3dbd388868265c8498acfe676ef27811"},{url:"assets/icons/icon_512.png",revision:"414aacb61ad294e75f267554db7e9368"},{url:"assets/readme/build-output.png",revision:"ee332fabed8b56f4aae86902c18146a2"},{url:"assets/readme/codespace-button.png",revision:"be7f5a61d03a119f2e297d15df7dfab2"},{url:"assets/readme/copy-starter.png",revision:"969196419238157c3d673545c2daed32"},{url:"assets/readme/git-clone.png",revision:"65897273261e49c6c9148df875e13e4d"},{url:"assets/readme/intro.png",revision:"cd10ec0be4be4b10195986d075904542"},{url:"assets/readme/local-button.png",revision:"1b40f28a11a334cc90e6802070b9eae1"},{url:"assets/readme/new-repo-from-starter.png",revision:"184b8b88c43aa759948968f69251200e"},{url:"assets/readme/pwa-running.png",revision:"a5a5ef96823c312160626df383d0925d"},{url:"assets/readme/pwa-starter-overview.png",revision:"480b506d1a2a832131525fd4d0fd7478"},{url:"assets/readme/static-web-app-slash.png",revision:"865934771530a3b8f9e10aae8d0423d9"},{url:"assets/readme/use-this-template.png",revision:"2d67dfcbdc3c8c6f8b5fefcd0016021f"},{url:"assets/readme/vscode-in-browser.png",revision:"fc3d41a79144a5bb00a423b78ec73c1f"},{url:"assets/screenshots/screen.png",revision:"808ac8889e4c17f3f83fd9235f1aa28d"},{url:"code/app-about.da8f67fa.js",revision:null},{url:"code/index.3085277c.js",revision:null},{url:"code/index.c492f108.css",revision:null},{url:"index.html",revision:"42ee66e8fb9e59196b234dd5a2b8aed2"},{url:"kisfaludy_favicon_gold.png",revision:"5b9e4ff8601947b397bdc07980858a9b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/unpkg\.com\/.*/i,new e.CacheFirst({cacheName:"unpkg-libs-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
