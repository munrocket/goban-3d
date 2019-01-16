(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'AppHeader'
  };

  var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "header" }, [_vm._v("support@support.com")])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_template__ = typeof __vue_render__ !== 'undefined'
    ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
    : {};
  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-09cd7c8f_0", { source: "\n\n\n\n\n", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = script$$1 || {};

    {
      component.__file = "E:\\Source\\3dgo\\src\\components\\AppHeader.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */


  var AppHeader = __vue_normalize__(
    __vue_template__,
    __vue_inject_styles__,
    typeof __vue_script__ === 'undefined' ? {} : __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {},
    typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
  )

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$1 = {
    name: 'AppBody'
  };

  var __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm._m(0)
  };
  var __vue_staticRenderFns__$1 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { staticClass: "box", attrs: { id: "sidebar" } }, [
          _c(
            "form",
            { attrs: { id: "quick-search", action: "/search/", method: "get" } },
            [
              _c("div", [
                _c("input", { attrs: { type: "hidden", name: "alltags" } }),
                _c("input", {
                  staticClass: "keyword-field",
                  attrs: { type: "text", name: "keyword" }
                }),
                _c(
                  "button",
                  {
                    staticClass: "search-submit-button",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Search")]
                )
              ])
            ]
          ),
          _c("ul", { staticClass: "menu" }, [
            _c("li", { staticClass: "menu_rss_feed" }, [
              _c("a", { attrs: { title: "Demo", href: "/demo/" } }, [
                _vm._v("Demo")
              ])
            ]),
            _c("li", { staticClass: "menu_tags" }, [
              _c(
                "a",
                { attrs: { title: "search articles by tag", href: "/tags/" } },
                [_vm._v("Tags")]
              )
            ]),
            _c("li", { staticClass: "menu_index" }, [
              _c(
                "a",
                {
                  attrs: {
                    title: "search articles chronologically",
                    href: "/archive"
                  }
                },
                [_vm._v("Archive")]
              )
            ]),
            _c("li", { staticClass: "menu_break" }),
            _c(
              "li",
              {
                staticClass: "menu_bookshelf",
                attrs: { title: "my books on librarything.com" }
              },
              [
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "http://www.librarything.com/catalog.php?view=olooney&offset=0&shelf_rows=10&previousOffset=0&shelf=shelf"
                    }
                  },
                  [_vm._v("Bookshelf")]
                )
              ]
            )
          ])
        ]),
        _c("div", { attrs: { id: "main-wrapper" } }, [
          _c("div", { staticClass: "content-page" }, [
            _c("h1", [_vm._v("Play")]),
            _c("p", [
              _vm._v(
                "This is a static HTML page that has representative markup for my site. By styling this page, I can create a theme that could be applied to all of my content."
              )
            ]),
            _c("blockquote", [
              _c("h2", [_vm._v("Active players:")]),
              _c("ul", [
                _c("li", [_vm._v("Player1 vs ")]),
                _c("li", [_vm._v("Player 2")])
              ])
            ])
          ])
        ])
      ])
    }
  ];
  __vue_render__$1._withStripped = true;

  var __vue_template__$1 = typeof __vue_render__$1 !== 'undefined'
    ? { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }
    : {};
  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-eaa578cc_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* a crosshair looks more tron-y */\n* {\n  cursor: crosshair;\n}\nbody {\n  background: black;\n  color: rgba(21, 171, 195, 1.0);\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n  /* give all text a cold glow */\n  text-shadow: 0 0 5px rgba(21, 171, 195, 0.7);\n}\n.content-page {\n  font-size: 13px;\n  line-height: 21px;\n  display: block;\n  /*margin: 0px 5px 20px 55px; todo*/\n  margin: 0 auto 20px;\n  width: 500px;\n  padding: 25px 75px;\n  border: 1px solid rgba(21, 171, 195, 1.0);\n  background: url(../images/quote_right.png) top right no-repeat;\n\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n\n  -moz-box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);\n  -webkit-box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);\n  box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);\n}\n.content-page a {\n  color: rgb(36, 198, 224);\n  text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);\n  cursor: pointer;\n}\n.content-page h1 {\n  margin: .8em 0 0 0;\n  font-size: 1.7em;\n  text-align: center;\n  font-weight: bold;\n  padding: .5em;\n  border: 1px solid rgba(36, 198, 24, 1.0);\n  margin-bottom: 1ex;\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n\n  -moz-border-radius: 1em;\n  border-radius: 1em;\n  background-color: rgba(36, 198, 224, 1.0);\n  color: black;\n\n  -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n  -webkit-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n  box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n}\n.content-page h2 {\n  background: url(../images/quote_right.png) center right no-repeat;\n}\na.big-rss-link {\n  display: block;\n  float: left;\n  top: 10px;\n  left: 0px;\n  width: 59px;\n  height: 58px;\n  background-image: url(../images/rss.png);\n  text-indent: -999em;\n  margin: 5px;\n  cursor: pointer;\n}\na.big-rss-link:hover {\n  background-image: url(../images/rss_bright.png);\n}\n.content-page blockquote {\n  width: 400px;\n  background-image: url(../images/quote_left.png);\n  background-repeat: no-repeat;\n  /*background: url(../images/quote_left.png) top left no-repeat, url(../images/quote_right.png) top right no-repeat;*/\n  font-size: 1.3em;\n  text-indent: 1em;\n  padding: 20px 50px 10px;\n  margin: .2em auto;\n\n  -moz-border-radius: 1em;\n  border-radius: 1em;\n\n  border: 2px solid rgba(21, 171, 195, 1.0);\n  -moz-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n  -webkit-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n  box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n}\n.content-page code {\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n  font-style: normal;\n  color: rgba(39, 215, 243, 1.0);\n  text-shadow: 0 0 5px rgba(39, 215, 243, 1.0);\n}\n.content-page blockquote a {\n  font-size: .85em;\n}\n.content-page ul {\n  list-style-type: none;\n  padding-left: 1ex;\n}\n.content-page ul li {\n  background-image: url(../images/bullet_point.png);\n  background-repeat: no-repeat;\n  background-position: 0 2px;\n  padding-left: 20px;\n}\n.content-page ol {\n  list-style: decimal inside;\n  padding-left: 1ex;\n}\n.content-page ol li {\n  list-style: decimal inside;\n  display: list-item;\n}\n\n/* shared styles for ul and ol items */\n.content-page li {\n  margin: 1em 0 1em;\n  font-size: 13px;\n  line-height: 17px;\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n}\n\n/* Menu style */\nul.menu {\n  position: relative;\n  right: 500px;\n  list-style-type: none;\n}\nul.menu li {\n  display: block;\n  width: 110px;\n  -moz-border-radius: 1em;\n  border-radius: 1em;\n  border: 1px solid rgba(21, 171, 195, 1.0);\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.5ex;\n  -moz-box-shadow: 0 0 10px rgba(21, 171, 195, 0.5);\n  -webkit-box-shadow: 0 0 10px rgba(21, 171, 195, 0.5);\n  box-shadow: 0 0 10px rgba(21, 171, 195, 0.5);\n  cursor: pointer;\n}\nul.menu li:hover {\n  color: rgb(36, 198, 224);\n  border-color: rgb(36, 198, 224);\n  -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n  -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 0.9);\n  text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);\n  cursor: pointer;\n}\nul.menu li:hover a {\n  color: rgb(36, 198, 224);\n  text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);\n  cursor: pointer;\n}\nul.menu li a {\n  cursor: pointer;\n  text-decoration: none;\n  color: rgba(21, 171, 195, 1.0);\n}\nul.menu a:hover,\nul.menu a:active,\nul.menu a:visited:hover,\nul.menu a:active:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\nul.menu li.menu_break {\n  height: 10px;\n  visibility: hidden;\n}\n#quick-search {\n  display: none;\n  position: relative;\n  right: 385px;\n  margin: 0 2px 1ex;\n}\n#quick-search input {\n  width: 85px;\n  padding-left: 19px;\n  background-repeat: no-repeat;\n  background-position: 2px 2px;\n  font-size: 12px;\n  font-style: normal;\n  height: 18px;\n  line-height: 18px;\n  font-family: Verdana, sans-serif;\n  border: 2px inset #ccc;\n}\n#quick-search button {\n  display: none;\n}\n#sidebar {\n  /* margin: 1em 5px 10px 0px; todo */\n  position: absolute;\n  left: 50%;\n}\n\n/* keyboard */\n.inverse {\n  background-color: rgba(21, 171, 195, 1.0);\n  color: rgba(0, 0, 0, 0.7);\n}\n.glow {\n  -webkit-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n  -moz-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n  box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n}\n.roundy {\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n}\n.keyboard {\n  width: 27em;\n  border: 4px double rgba(21, 171, 195, 1.0);\n  padding: 4px 0;\n  font-size: 18px;\n  cursor: pointer;\n}\n.keyboard * {\n  cursor: pointer;\n}\n.keyboard-row {\n  clear: both;\n  padding: 4px 0;\n  text-align: center;\n}\n.keyboard-key {\n  border: 1px solid rgba(21, 171, 195, 1.0);\n  display: inline;\n  margin: 2px;\n  padding: 0 5px;\n  height: 20px;\n}\n.keyboard-key:hover {\n  border: 1px solid rgba(36, 198, 224, 1.0);\n  background-color: rgba(36, 198, 224, 1.0);\n  -webkit-box-shadow: 0 0 7px rgba(36, 198, 224, 1.0);\n  -moz-box-shadow: 0 0 7px rgba(36, 198, 224, 1.0);\n  box-shadow: 0 0 7px rgba(36, 198, 224, 1.0);\n}\n.keyboard-key:active {\n  border: 1px solid rgba(36, 198, 224, 1.0);\n  color: rgba(36, 198, 224, 1.0);\n  background-color: rgba(36, 198, 224, 0.3);\n  -webkit-box-shadow: 0 0 7px rgba(36, 198, 224, 1.0);\n  -moz-box-shadow: 0 0 7px rgba(36, 198, 224, 1.0);\n  box-shadow: 0 0 7px rgba(36, 198, 224, 1.0);\n}\n", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = script || {};

    {
      component.__file = "E:\\Source\\3dgo\\src\\components\\AppBody.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */


  var AppBody = __vue_normalize__$1(
    __vue_template__$1,
    __vue_inject_styles__$1,
    typeof __vue_script__$1 === 'undefined' ? {} : __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    typeof __vue_create_injector__$1 !== 'undefined' ? __vue_create_injector__$1 : function () {},
    typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
  )

  //

  var script$2 = {
    name: 'App',
    components: { AppHeader: AppHeader, AppBody: AppBody }
  };

  var __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "layout", attrs: { id: "app" } }, [
      _c("header", [_c("app-header", { attrs: { title: "3d go" } })], 1),
      _c("div", { staticClass: "body" }, [
        _c("main", { staticClass: "content" }, [_c("app-body")], 1)
      ])
    ])
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

  var __vue_template__$2 = typeof __vue_render__$2 !== 'undefined'
    ? { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 }
    : {};
  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = script || {};

    {
      component.__file = "E:\\Source\\3dgo\\src\\App.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */


  var App = __vue_normalize__$2(
    __vue_template__$2,
    __vue_inject_styles__$2,
    typeof __vue_script__$2 === 'undefined' ? {} : __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    typeof __vue_create_injector__$2 !== 'undefined' ? __vue_create_injector__$2 : function () {},
    typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
  )

  var app = new Vue({
    render: function (h) { return h(App); }
  });

  app.$mount('app');

})));
