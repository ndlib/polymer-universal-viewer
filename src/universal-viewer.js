"use strict";

/**
 * `univeral-viewer`
 * An encapsulation of the univeral viewer into a web component custom element.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
 class UniversalViewer extends Polymer.Element {
   constructor() {
     super();
     this.__viewerCounter = UniversalViewer._counter;
     return this;
   }

   static get NOT_SUPPLIED_BY_USER() { return "Not Supplied By User"; }

   static get DEFAULT_WIDTH() { return "100%"; }

   static get DEFAULT_HEIGHT() { return "600px"; }

   static get is() { return "universal-viewer"; }

   static get _counter() {
     UniversalViewer.__counter = (UniversalViewer.__counter || 0) + 1;
     return UniversalViewer.__counter;
   }

   get _viewerCounter() {
     return this.__viewerCounter.toString();
   }

   static get properties() {
     return {
       _viewerCount: String,
       __srcdoc: String,
       width: {
         type: String,
         value: UniversalViewer.NOT_SUPPLIED_BY_USER // default will be 100%
       },
       height: {
         type: String,
         value: UniversalViewer.NOT_SUPPLIED_BY_USER // default will be 600px
       },
       uri: String
     }
   }

   connectedCallback() {
    super.connectedCallback();
    this._viewerCount = this._viewerCounter;
    // let iframe = this.$['iframe-viewer'];
    // let iframeDoc = iframe.contentDocument;
    // iframeDoc.open();
    // // iframeDoc.write(html);
    // iframeDoc.close();

    // function constructIFrame() {
    //   // iframe = this.$['iframe-viewer'];
    //   let iframeDoc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
    //   if (!iframeDoc) {
    //     setTimeout(constructIFrame, 500);
    //   } else {
    //     iframeDoc.open();
    //     iframeDoc.close();
    //
    //     let bodyTag = iframeDoc.createElement("body");
    //
    //     let bodyDivTag = iframeDoc.createElement("div");
    //     bodyDivTag.className = "uv";
    //     bodyDivTag.style.width = "100%";
    //     bodyDivTag.style.height = "100%";
    //     bodyDivTag.setAttribute("data-uri", `${this.uri}`);
    //     // let dataUriAttribute = iframeDoc.createAttribute("data-uri");
    //     // dataUriAttribute.value = `${this.uri}`;
    //     // bodyDivTag.attributes.setNamedItem(dataUriAttribute);
    //     bodyDivTag.setAttribute("overflow", "hidden");
    //     // let overflowAttribute = iframeDoc.createAttribute("overflow");
    //     // overflowAttribute.value = "hidden";
    //     // bodyDivTag.attributes.setNamedItem(overflowAttribute);
    //     bodyDivTag.setAttribute("allowfullscreen", "allowfullscreen");
    //     // let allowfullscreenAttribute = iframeDoc.createAttribute("allowfullscreen");
    //     // allowfullscreenAttribute.value = "allowfullscreen";
    //     // bodyDivTag.attributes.setNamedItem(allowfullscreenAttribute);
    //
    //     bodyTag.appendChild(bodyDivTag);
    //
    //     let bodyScriptTag = iframeDoc.createElement("script");
    //     bodyScriptTag.id = "embedUV";
    //     bodyScriptTag.type = "application/javascript";
    //     bodyScriptTag.src = "../lib/uv-2.0.2/lib/embed.js";
    //     // bodyScriptTag.textContent = "alert('why firefox! WHYHWHWHWYWNYWHWHWY!')";
    //
    //     bodyTag.appendChild(bodyScriptTag);
    //
    //     let htmlTag = iframeDoc.getElementsByTagName("html")[0];
    //     htmlTag.replaceChild(bodyTag, iframeDoc.getElementsByTagName("body")[0]);
    //
    //   }
    //
    // }
    //
    //
    //
    // let divId = "container-" + this._viewerCount;
    // let divContainer = this.shadowRoot.getElementById(divId);
    //
    // let iframe = divContainer.ownerDocument.createElement("iframe");
    // iframe.id = "iframe-viewer";
    // iframe.style.width = "100%";
    // iframe.style.height = "100%";
    // iframe.style.border = "0";
    // iframe.setAttribute("allowfullscreen", "allowfullscreen");
    // //  let allowfullscreenAttribute = divContainer.ownerDocument.createAttribute("allowfullscreen");
    // //  allowfullscreenAttribute.value = "allowfullscreen";
    // //  iframe.attributes.setNamedItem(allowfullscreenAttribute);
    // iframe.setAttribute("seamless", "seamless");
    // //  let seamlessAttribute = divContainer.ownerDocument.createAttribute("seamless");
    // //  seamlessAttribute.value = "seamless";
    // //  iframe.attributes.setNamedItem(seamlessAttribute);
    // iframe.setAttribute("src", "../blank.html");
    //
    // if (window.attachEvent) {
    //   iframe.attachEvent('onload', constructIFrame.bind(this, iframe));
    // } else if (window.addEventListener) {
    //   iframe.addEventListener('load', constructIFrame.bind(this, iframe), false);
    // } else {
    //   document.addEventListener('DOMContentReady', constructIFrame.bind(this, iframe), false);
    // }
    //
    // divContainer.appendChild(iframe);
    //
    //
    //
    //
    // // iframeDoc.getElementsByTagName("div")[0].parentNode.insertBefore(bodyScriptTag, iframeDoc.getElementsByTagName("div")[0].nextSibling);
    //
    // //  super.connectedCallback();
    // //  this._viewerCount = this._viewerCounter;
    // //  let constructIFrame = function(iframe) {
    // //    let iframeDoc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
    // //    if (!iframeDoc) {
    // //      setTimeout(constructIFrame, 500);
    // //    } else {
    // //      let bodyTag = iframeDoc.createElement("body");
    //  //
    // //      let bodyDivTag = iframeDoc.createElement("div");
    // //      bodyDivTag.className = "uv";
    // //      bodyDivTag.style.width = "100%";
    // //      bodyDivTag.style.height = "100%";
    // //      let dataUriAttribute = iframeDoc.createAttribute("data-uri");
    // //      dataUriAttribute.value = `${this.uri}`;
    // //      bodyDivTag.attributes.setNamedItem(dataUriAttribute);
    // //      let overflowAttribute = iframeDoc.createAttribute("overflow");
    // //      overflowAttribute.value = "hidden";
    // //      bodyDivTag.attributes.setNamedItem(overflowAttribute);
    // //      let allowfullscreenAttribute = iframeDoc.createAttribute("allowfullscreen");
    // //      allowfullscreenAttribute.value = "allowfullscreen";
    // //      bodyDivTag.attributes.setNamedItem(allowfullscreenAttribute);
    //  //
    // //      bodyTag.appendChild(bodyDivTag);
    // //      let htmlTag = iframeDoc.getElementsByTagName("html")[0];
    // //      htmlTag.replaceChild(bodyTag, iframeDoc.getElementsByTagName("body")[0]);
    //  //
    // //      let bodyScriptTag = iframeDoc.createElement("script");
    // //      bodyScriptTag.id = "embedUV";
    // //      bodyScriptTag.type = "application/javascript";
    // //      iframeDoc.getElementsByTagName("body")[0].appendChild(bodyScriptTag);
    // //      iframeDoc.getElementsByTagName("script")[0].src = "../lib/embed.js";
    // //    }
    // //  }
    //  //
    // //  let divId = "container-" + this._viewerCount;
    // //  let divContainer = this.shadowRoot.getElementById(divId);
    //  //
    // //  let iframe = divContainer.ownerDocument.createElement("iframe");
    // //  iframe.id = "iframe-viewer";
    // //  iframe.style.width = "100%";
    // //  iframe.style.height = "100%";
    // //  iframe.style.border = "0";
    //  //
    // //  if (window.attachEvent) {
    // //    iframe.attachEvent('onload', constructIFrame.bind(this, iframe));
    // //  } else if (window.addEventListener) {
    // //    iframe.addEventListener('load', constructIFrame.bind(this, iframe), false);
    // //  } else {
    // //    document.addEventListener('DOMContentReady', constructIFrame.bind(this, iframe), false);
    // //  }
    //  //
    // //  divContainer.appendChild(iframe);
    //  //
     if (this.style.width === "") {
       if (this.width == UniversalViewer.NOT_SUPPLIED_BY_USER) {
         this.style.width = UniversalViewer.DEFAULT_WIDTH;
       } else {
         this.style.width = this.width;
       }
     } /* else {
       was set via css
     } */

     if (this.style.height === "") {
       if (this.height == UniversalViewer.NOT_SUPPLIED_BY_USER) {
         this.style.height = UniversalViewer.DEFAULT_HEIGHT;
       } else {
         this.style.height = this.height;
       }
     } /* else {
       was set via css
     } */
   }
 }
 customElements.define(UniversalViewer.is, UniversalViewer);
