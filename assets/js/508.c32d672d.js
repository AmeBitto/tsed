(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{821:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[s._v("#")]),s._v(" Namespace "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Namespace } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/socketio"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.44.6/packages/socketio/src/decorators/nsp.ts#L0-L0"}},[s._v("/packages/socketio/src/decorators/nsp.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("type Namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),s._v("NamespaceType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propertyKey?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("div",{pre:!0},[a("p",[s._v("Inject the "),a("a",{pre:!0,attrs:{href:"https://socket.io/docs/rooms-and-namespaces/#namespaces",target:"_blank",rel:"noopener noreferrer"}},[s._v("SocketIO.Namespace"),a("OutboundLink",{pre:!0})],1),s._v(" instance in the decorated parameter.")]),s._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SocketService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/socketio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SocketService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/nsp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyWS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  @Nsp\n  nsp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// will inject SocketIO.Namespace (not available on constructor)")]),s._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Nsp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/my-other-namespace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  nspOther"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Namespace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// communication between two namespace")]),s._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"event"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("myMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("@Namespace "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),a("br")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);