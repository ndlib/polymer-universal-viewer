"use strict";

/**
 * `univeral-viewer`
 * An encapsulation of the univeral viewer into a web component custom element.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniversalViewer = function (_Polymer$Element) {
  _inherits(UniversalViewer, _Polymer$Element);

  function UniversalViewer() {
    var _ret;

    _classCallCheck(this, UniversalViewer);

    var _this = _possibleConstructorReturn(this, (UniversalViewer.__proto__ || Object.getPrototypeOf(UniversalViewer)).call(this));

    _this.__viewerCounter = UniversalViewer._counter;
    return _ret = _this, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UniversalViewer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(UniversalViewer.prototype.__proto__ || Object.getPrototypeOf(UniversalViewer.prototype), "connectedCallback", this).call(this);
      this._viewerCount = this._viewerCounter;

      var preamble = function preamble(doctype) {
        doctype = doctype || 'html';
        return "<!DOCTYPE " + doctype + "><html>";
      };
      var _tagConcat = function _tagConcat(mainTagName, optionalAttributes) {
        return function (tags) {
          var string = "";
          string = optionalAttributes ? string.concat("<" + mainTagName + " " + optionalAttributes + ">") : string.concat("<" + mainTagName + ">");
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var tag = _step.value;

              string = string.concat(tag);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          string = string.concat("</" + mainTagName + ">");
          return string;
        };
      };
      var head = _tagConcat("head");
      var body = _tagConcat("body", "style=\"margin: 0;\"");
      var postamble = function postamble() {
        return "</html>";
      };

      var iframe = this.$['iframe-viewer'];
      var iframeDoc = iframe.contentDocument;
      iframeDoc.open();
      // iframeDoc.write(html);
      iframeDoc.close();

      this._headTags = [];
      this._headTags.push("<style>html {width:100%; height:100%;} body {height:100%;}</style>");
      this._bodyTags = [];
      this._bodyTags.push("<div class=\"uv\" data-uri=\"" + this.uri + "\" style=\"width:100%; height:100%; overflow:hidden;\"></div>");
      this._bodyTags.push("<script id=\"hack\">function startUV () {alert(\"HELLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOO!\");\n      let bodyScriptTag = document.createElement(\"script\");\n      bodyScriptTag.id = \"embedUV\";\n      bodyScriptTag.type = \"application/javascript\";\n      document.getElementsByTagName(\"body\")[0].appendChild(bodyScriptTag);\n      document.getElementsByTagName(\"script\")[2].src = \"../lib/uv-2.0.2/lib/embed.js\";\n    }</scr" + "ipt>");
      var html = preamble() + head(this._headTags) + body(this._bodyTags) + postamble();

      iframeDoc.getElementsByTagName("html")[0].innerHTML = html;

      // console.log(html);

      //
      // let bodyTag = iframeDoc.createElement("body");
      //
      // let bodyDivTag = iframeDoc.createElement("div");
      // bodyDivTag.className = "uv";
      // bodyDivTag.style.width = "100%";
      // bodyDivTag.style.height = "100%";
      // let dataUriAttribute = iframeDoc.createAttribute("data-uri");
      // dataUriAttribute.value = `${this.uri}`;
      // bodyDivTag.attributes.setNamedItem(dataUriAttribute);
      // let overflowAttribute = iframeDoc.createAttribute("overflow");
      // overflowAttribute.value = "hidden";
      // bodyDivTag.attributes.setNamedItem(overflowAttribute);
      // let allowfullscreenAttribute = iframeDoc.createAttribute("allowfullscreen");
      // allowfullscreenAttribute.value = "allowfullscreen";
      // bodyDivTag.attributes.setNamedItem(allowfullscreenAttribute);
      //
      // bodyTag.appendChild(bodyDivTag);
      // let htmlTag = iframeDoc.getElementsByTagName("html")[0];
      // htmlTag.replaceChild(bodyTag, iframeDoc.getElementsByTagName("body")[0]);
      //
      //
      var bodyScriptTag = iframeDoc.createElement("script");
      bodyScriptTag.id = "hack";
      bodyScriptTag.type = "application/javascript";

      bodyScriptTag.textContent = "(function() {eval(document.getElementById('hack').textContent); startUV();})()";
      iframeDoc.getElementsByTagName("script")[0].parentNode.insertBefore(bodyScriptTag, iframeDoc.getElementsByTagName("script")[0].nextSibling);

      //  super.connectedCallback();
      //  this._viewerCount = this._viewerCounter;
      //  let constructIFrame = function(iframe) {
      //    let iframeDoc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
      //    if (!iframeDoc) {
      //      setTimeout(constructIFrame, 500);
      //    } else {
      //      let bodyTag = iframeDoc.createElement("body");
      //
      //      let bodyDivTag = iframeDoc.createElement("div");
      //      bodyDivTag.className = "uv";
      //      bodyDivTag.style.width = "100%";
      //      bodyDivTag.style.height = "100%";
      //      let dataUriAttribute = iframeDoc.createAttribute("data-uri");
      //      dataUriAttribute.value = `${this.uri}`;
      //      bodyDivTag.attributes.setNamedItem(dataUriAttribute);
      //      let overflowAttribute = iframeDoc.createAttribute("overflow");
      //      overflowAttribute.value = "hidden";
      //      bodyDivTag.attributes.setNamedItem(overflowAttribute);
      //      let allowfullscreenAttribute = iframeDoc.createAttribute("allowfullscreen");
      //      allowfullscreenAttribute.value = "allowfullscreen";
      //      bodyDivTag.attributes.setNamedItem(allowfullscreenAttribute);
      //
      //      bodyTag.appendChild(bodyDivTag);
      //      let htmlTag = iframeDoc.getElementsByTagName("html")[0];
      //      htmlTag.replaceChild(bodyTag, iframeDoc.getElementsByTagName("body")[0]);
      //
      //      let bodyScriptTag = iframeDoc.createElement("script");
      //      bodyScriptTag.id = "embedUV";
      //      bodyScriptTag.type = "application/javascript";
      //      iframeDoc.getElementsByTagName("body")[0].appendChild(bodyScriptTag);
      //      iframeDoc.getElementsByTagName("script")[0].src = "../lib/embed.js";
      //    }
      //  }
      //
      //  let divId = "container-" + this._viewerCount;
      //  let divContainer = this.shadowRoot.getElementById(divId);
      //
      //  let iframe = divContainer.ownerDocument.createElement("iframe");
      //  iframe.id = "iframe-viewer";
      //  iframe.style.width = "100%";
      //  iframe.style.height = "100%";
      //  iframe.style.border = "0";
      //
      //  if (window.attachEvent) {
      //    iframe.attachEvent('onload', constructIFrame.bind(this, iframe));
      //  } else if (window.addEventListener) {
      //    iframe.addEventListener('load', constructIFrame.bind(this, iframe), false);
      //  } else {
      //    document.addEventListener('DOMContentReady', constructIFrame.bind(this, iframe), false);
      //  }
      //
      //  divContainer.appendChild(iframe);
      //
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
  }, {
    key: "_viewerCounter",
    get: function get() {
      return this.__viewerCounter.toString();
    }
  }], [{
    key: "NOT_SUPPLIED_BY_USER",
    get: function get() {
      return "Not Supplied By User";
    }
  }, {
    key: "DEFAULT_WIDTH",
    get: function get() {
      return "100%";
    }
  }, {
    key: "DEFAULT_HEIGHT",
    get: function get() {
      return "600px";
    }
  }, {
    key: "is",
    get: function get() {
      return "universal-viewer";
    }
  }, {
    key: "_counter",
    get: function get() {
      UniversalViewer.__counter = (UniversalViewer.__counter || 0) + 1;
      return UniversalViewer.__counter;
    }
  }, {
    key: "properties",
    get: function get() {
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
      };
    }
  }]);

  return UniversalViewer;
}(Polymer.Element);

customElements.define(UniversalViewer.is, UniversalViewer);