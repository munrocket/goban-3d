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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'TheHeader'
  };

  var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm._m(0)
  };
  var __vue_staticRenderFns__ = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("header", [
        _c("ul", { staticClass: "menu" }, [
          _c("li", [
            _c("a", { attrs: { title: "asdf", href: "/rules" } }, [
              _vm._v("Rules")
            ])
          ]),
          _c("li", [
            _c("a", { attrs: { title: "asdf", href: "/tags" } }, [
              _vm._v("Wtf layout")
            ])
          ]),
          _c("li", [
            _c("a", { attrs: { title: "asdf", href: "/about" } }, [
              _vm._v("About")
            ])
          ])
        ])
      ])
    }
  ];
  __vue_render__._withStripped = true;

  var __vue_template__ = typeof __vue_render__ !== 'undefined'
    ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
    : {};
  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-55783194_0", { source: "\nul.menu {\n  list-style: none;\n  right: 500px;\n  list-style-type: none;\n}\nul.menu li {\n  display: inline;\n  padding: 2px 10px;\n  margin: 1px 3px;\n  width: 110px;\n  -moz-border-radius: 1em;\n  border-radius: 1em;\n  border: 1px solid rgba(21, 171, 195, 1.0);\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.5ex;\n  -moz-box-shadow: 0 0 10px rgba(21, 171, 195, 0.5);\n  -webkit-box-shadow: 0 0 10px rgba(21, 171, 195, 0.5);\n  box-shadow: 0 0 10px rgba(21, 171, 195, 0.5);\n  cursor: pointer;\n}\nul.menu li:hover {\n  color: rgb(36, 198, 224);\n  border-color: rgb(36, 198, 224);\n  -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n  -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 0.9);\n  text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);\n  cursor: pointer;\n}\nul.menu li:hover a {\n  color: rgb(36, 198, 224);\n  text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);\n  cursor: pointer;\n}\nul.menu li a {\n  cursor: pointer;\n  text-decoration: none;\n  color: rgba(21, 171, 195, 1.0);\n}\nul.menu a:hover,\nul.menu a:active,\nul.menu a:visited:hover,\nul.menu a:active:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\nul.menu li.menu_break {\n  height: 10px;\n  visibility: hidden;\n}\n", map: undefined, media: undefined });

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
      component.__file = "E:\\Source\\goban-3d\\src\\components\\TheHeader.vue";
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


  var TheHeader = __vue_normalize__(
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
      return _c("main", [
        _c("div", { staticClass: "content-page" }, [
          _c("h1", [_vm._v("Play")]),
          _c("p", [
            _vm._v(
              "This is an abstract strategy 3d board game for two players, in which the aim is to surround more territory than the opponent."
            )
          ]),
          _c("blockquote", [
            _c("h2", [_vm._v("Active games:")]),
            _c("ul", [
              _c("li", [_vm._v("Player1 vs Anon     (move ~54, torus)")]),
              _c("li", [_vm._v("Kid125 vs CyberIO   (move ~10, klein bottle)")])
            ])
          ]),
          _c("blockquote", [
            _c("h2", [_vm._v("Lobby:")]),
            _c("ul", [
              _c("li", [_vm._v("wassap_player")]),
              _c("li", [_vm._v("who_are_here")]),
              _c("li", [_vm._v("i_am_just_wathing")]),
              _c("li", [_vm._v("fuck_off")])
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
    inject("data-v-7d5a7314_0", { source: "\nmain {\n  margin: 20px\n}\n.content-page {\n  font-size: 13px;\n  line-height: 21px;\n  margin: 20px 0;\n  width: 500px;\n  padding: 25px 55px;\n  border: 1px solid rgba(21, 171, 195, 1.0);\n\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n\n  -moz-box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);\n  -webkit-box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);\n  box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);\n}\n.content-page a {\n  color: rgb(36, 198, 224);\n  text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);\n  cursor: pointer;\n}\n.content-page h1 {\n  margin: .8em 0 0 0;\n  font-size: 1.7em;\n  text-align: center;\n  font-weight: bold;\n  padding: .5em;\n  border: 1px solid rgba(36, 198, 24, 1.0);\n  margin-bottom: 1ex;\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n\n  -moz-border-radius: 1em;\n  border-radius: 1em;\n  background-color: rgba(36, 198, 224, 1.0);\n  color: black;\n\n  -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n  -webkit-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n  box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);\n}\n.content-page blockquote {\n  width: 400px;\n  font-size: 1.3em;\n  text-indent: .5em;\n  padding: 10px 30px 10px;\n  margin: .3em auto;\n\n  -moz-border-radius: 1em;\n  border-radius: 1em;\n\n  border: 2px solid rgba(21, 171, 195, 1.0);\n  -moz-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n  -webkit-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n  box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);\n}\n.content-page code {\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n  font-style: normal;\n  color: rgba(39, 215, 243, 1.0);\n  text-shadow: 0 0 5px rgba(39, 215, 243, 1.0);\n}\n.content-page blockquote a {\n  font-size: .85em;\n}\n.content-page ul {\n  list-style-type: none;\n  padding-left: 1ex;\n}\n.content-page ul li {\n  background-repeat: no-repeat;\n  background-position: 0 2px;\n}\n.content-page ol {\n  list-style: decimal inside;\n  padding-left: 1ex;\n}\n.content-page ol li {\n  list-style: decimal inside;\n  display: list-item;\n}\n\n/* shared styles for ul and ol items */\n.content-page li {\n  margin: 0.5em 0 .5em;\n  font-size: 13px;\n  line-height: 17px;\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n}\n", map: undefined, media: undefined });

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
      component.__file = "E:\\Source\\goban-3d\\src\\components\\TheMain.vue";
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


  var TheMain = __vue_normalize__$1(
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
    components: { TheHeader: TheHeader, TheMain: TheMain }
  };

  var __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "layout", attrs: { id: "app" } }, [
      _c("header", [_c("the-header")], 1),
      _c("div", { staticClass: "body" }, [
        _c("main", { staticClass: "content" }, [_c("the-main")], 1)
      ])
    ])
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

  var __vue_template__$2 = typeof __vue_render__$2 !== 'undefined'
    ? { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 }
    : {};
  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-75e432a3_0", { source: "\n* {\n  cursor: crosshair;\n}\nbody {\n  display: block;\n  background: black;\n  color: rgba(21, 171, 195, 1.0);\n  font-family: \"Bitstream Vera Sans Mono\", monospace;\n  /* give all text a cold glow */\n  text-shadow: 0 0 5px rgba(103, 166, 175, 0.7);\n}\n", map: undefined, media: undefined });

  };
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
      component.__file = "E:\\Source\\goban-3d\\src\\App.vue";
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
