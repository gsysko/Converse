!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}({6:function(e,n){var t,i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(a,o){function r(e){try{c(i.next(e))}catch(e){o(e)}}function l(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,l)}c((i=i.apply(e,n||[])).next())}))},a=0;figma.showUI(__html__),figma.ui.resize(400,48),figma.ui.onmessage=e=>i(this,void 0,void 0,(function*(){let n=figma.currentPage.selection.find(e=>"FRAME"===e.type&&"Widget"==e.name),o=figma.currentPage.selection.find(e=>"FRAME"===e.type&&"Messenger"==e.name);n?t=n.findOne(e=>"FRAME"===e.type&&"Log"==e.name):o&&(t=o.findOne(e=>"FRAME"===e.type&&"Log"==e.name)),"create-message"===e.type?yield function(e,n){return i(this,void 0,void 0,(function*(){let i,o=t.children[t.children.length-1];if(a=parseInt(o.name),n&&o.mainComponent.name.startsWith("Direction=Outbound")||!n&&o.mainComponent.name.startsWith("Direction=Inbound"))if(i=o.findAll(e=>e.name.startsWith("Message ")).length,i<3){(r=o).swapComponent(r.mainComponent.parent.findChild(e=>e.name==r.mainComponent.name.substr(0,r.mainComponent.name.length-1)+(i+1)))}else{i=2;var r=o;figma.notify("Conversation Kit currently only supports 3 consecutive messages.")}else{let e;i=0,yield figma.importComponentSetByKeyAsync("98e8f2af5cef20537dfbfb1dc294f6fc1f60d466").then(t=>{e=n?t.findChild(e=>"Direction=Outbound, Messages=1"===e.name):t.findChild(e=>"Direction=Inbound, Messages=1"===e.name)}),(r=null==e?void 0:e.createInstance()).layoutAlign="STRETCH",r.name=(++a).toString();let l=o.findOne(e=>"Receipt"==e.name);if(l&&(l.visible=!1),t.insertChild(a,r),!n){let e=r.findOne(e=>"TEXT"===e.type&&"Label"==e.name);yield figma.loadFontAsync(e.fontName).then(()=>{e.characters="Marilyn Collins"})}}let l=r.findAll(e=>"TEXT"===e.type&&"Text"==e.name)[i];if(yield figma.loadFontAsync(l.fontName).then(()=>{l.characters=e}),r.mainComponent.name.startsWith("Direction=Outbound")?l.width>324:l.width>288){let e=r.findAll(e=>e.name.startsWith("Message "))[i],n=e.mainComponent.parent;e.swapComponent(n.children[0])}r.y+r.height>t.height&&(t.primaryAxisAlignItems="MAX")}))}(e.message,e.direction):"setup"===e.type&&(yield function(){return i(this,void 0,void 0,(function*(){if(!t){let e=figma.currentPage.findAll(e=>"Widget"==e.name),n=figma.createFrame();n.setRelaunchData({open:""}),n.name="Widget",e.length>0&&(n.x=e[e.length-1].x+480),n.resize(380,780),n.clipsContent=!1,n.fills=[],n.layoutMode="VERTICAL",n.primaryAxisSizingMode="AUTO",n.counterAxisAlignItems="MAX",n.itemSpacing=8;let i=figma.createFrame();i.setRelaunchData({open:""}),i.name="Messenger",i.resize(380,700),i.layoutMode="VERTICAL",i.primaryAxisSizingMode="FIXED";let a=yield figma.importStyleByKeyAsync("8a51f0a179f0ad6d5af3e3329681bcd33e0f748c").catch(()=>{figma.notify("Zcripter requires the '00 Zendesk Theme - Light (Default)' library."),figma.closePlugin()});i.fillStyleId=a.id;let o,r=yield figma.importStyleByKeyAsync("20b0405ad7024a20ad878b90b3b75bd5bb26443a").catch(()=>{figma.notify("Zcripter requires the 'Garden' library."),figma.closePlugin()});i.effectStyleId=r.id,n.appendChild(i),"start"==figma.command?(o=figma.currentPage.selection.find(e=>"INSTANCE"==e.type&&"Launcher"==e.name),n.x=o.x-308,n.y=o.y-708,o.swapComponent(yield figma.importComponentByKeyAsync("c5f2c7b8417b86629a8e52aa37ebe2c065a2c6de"))):o=(yield figma.importComponentByKeyAsync("c5f2c7b8417b86629a8e52aa37ebe2c065a2c6de")).createInstance(),o.setRelaunchData({}),n.appendChild(o);let l=(yield figma.importComponentByKeyAsync("da85778fa3e3f54485fcedfe1bf2476f851f2f41")).createInstance(),c=l.findChild(e=>"Title"==e.name);yield figma.loadFontAsync(c.fontName),c.characters="Zendesk",l.layoutAlign="STRETCH",i.appendChild(l),(t=figma.createFrame()).name="Log",t.resize(380,1),t.layoutMode="VERTICAL",t.layoutGrow=1,t.layoutAlign="STRETCH",t.overflowDirection="VERTICAL",t.fills=[],i.appendChild(t);let f=(yield figma.importComponentByKeyAsync("0cdeaec0c5baf216b6c74d1a939a9c94e025f1df")).createInstance();f.layoutAlign="STRETCH",i.appendChild(f),figma.currentPage.appendChild(n);const d=[];d.push(n),figma.currentPage.selection=d,figma.viewport.scrollAndZoomIntoView(d)}var e=t.findChild(e=>"0"==e.name&&"INSTANCE"===e.type);if(!e){yield figma.importComponentByKeyAsync("663b06bfe927cf5574dc82c60e084da2ee5e99d9").then(n=>{e=n.createInstance()}),e.name="0",a=0,e.layoutAlign="STRETCH";let n=e.findChild(e=>"TEXT"==e.type&&e.name.includes("Timestamp")),o=new Date(Date.now());!function(e,n){i(this,void 0,void 0,(function*(){yield figma.loadFontAsync(e.fontName),e.characters=n}))}(n,["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()]+" "+o.getDate()+", "+o.getHours()%12+":"+o.getMinutes()+" "+(o.getHours()/12<1?"AM":"PM")),t.insertChild(0,e)}}))}())}))}});