'use strict';

var require$$0 = require('path');
var require$$1 = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

!function(e){const t=[{id:"abap",scopeName:"source.abap",path:"abap.tmLanguage.json"},{id:"actionscript-3",scopeName:"source.actionscript.3",path:"actionscript-3.tmLanguage.json"},{id:"ada",scopeName:"source.ada",path:"ada.tmLanguage.json"},{id:"apache",scopeName:"source.apacheconf",path:"apache.tmLanguage.json"},{id:"apex",scopeName:"source.apex",path:"apex.tmLanguage.json"},{id:"apl",scopeName:"source.apl",path:"apl.tmLanguage.json",embeddedLangs:["html","xml","css","javascript","json"]},{id:"applescript",scopeName:"source.applescript",path:"applescript.tmLanguage.json"},{id:"asm",scopeName:"source.asm.x86_64",path:"asm.tmLanguage.json"},{id:"awk",scopeName:"source.awk",path:"awk.tmLanguage.json"},{id:"bat",scopeName:"source.batchfile",path:"bat.tmLanguage.json",aliases:["batch"]},{id:"c",scopeName:"source.c",path:"c.tmLanguage.json",samplePath:"c.sample"},{id:"clojure",scopeName:"source.clojure",path:"clojure.tmLanguage.json",aliases:["clj"]},{id:"cobol",scopeName:"source.cobol",path:"cobol.tmLanguage.json",embeddedLangs:["sql","html","java"]},{id:"coffee",scopeName:"source.coffee",path:"coffee.tmLanguage.json",embeddedLangs:["javascript"]},{id:"cpp",scopeName:"source.cpp",path:"cpp.tmLanguage.json",embeddedLangs:["sql"]},{id:"crystal",scopeName:"source.crystal",path:"crystal.tmLanguage.json",embeddedLangs:["html","sql","css","c","javascript","shellscript"]},{id:"csharp",scopeName:"source.cs",path:"csharp.tmLanguage.json",aliases:["c#"]},{id:"css",scopeName:"source.css",path:"css.tmLanguage.json",samplePath:"css.sample"},{id:"d",scopeName:"source.d",path:"d.tmLanguage.json"},{id:"dart",scopeName:"source.dart",path:"dart.tmLanguage.json"},{id:"diff",scopeName:"source.diff",path:"diff.tmLanguage.json"},{id:"docker",scopeName:"source.dockerfile",path:"docker.tmLanguage.json"},{id:"elixir",scopeName:"source.elixir",path:"elixir.tmLanguage.json",embeddedLangs:["html"]},{id:"elm",scopeName:"source.elm",path:"elm.tmLanguage.json"},{id:"erb",scopeName:"text.html.erb",path:"erb.tmLanguage.json",embeddedLangs:["html","ruby"]},{id:"erlang",scopeName:"source.erlang",path:"erlang.tmLanguage.json"},{id:"fsharp",scopeName:"source.fsharp",path:"fsharp.tmLanguage.json",aliases:["f#"],embeddedLangs:["markdown"]},{id:"gherkin",scopeName:"text.gherkin.feature",path:"gherkin.tmLanguage.json"},{id:"git-commit",scopeName:"text.git-commit",path:"git-commit.tmLanguage.json",embeddedLangs:["diff"]},{id:"git-rebase",scopeName:"text.git-rebase",path:"git-rebase.tmLanguage.json",embeddedLangs:["shellscript"]},{id:"gnuplot",scopeName:"source.gnuplot",path:"gnuplot.tmLanguage.json"},{id:"go",scopeName:"source.go",path:"go.tmLanguage.json",samplePath:"go.sample"},{id:"graphql",scopeName:"source.graphql",path:"graphql.tmLanguage.json",embeddedLangs:["javascript","typescript","jsx","tsx"]},{id:"groovy",scopeName:"source.groovy",path:"groovy.tmLanguage.json"},{id:"hack",scopeName:"source.hack",path:"hack.tmLanguage.json",embeddedLangs:["html","sql"]},{id:"haml",scopeName:"text.haml",path:"haml.tmLanguage.json",embeddedLangs:["ruby","javascript","sass","coffee","markdown","css"]},{id:"handlebars",scopeName:"text.html.handlebars",path:"handlebars.tmLanguage.json",aliases:["hbs"],embeddedLangs:["html","css","javascript","yaml"]},{id:"haskell",scopeName:"source.haskell",path:"haskell.tmLanguage.json"},{id:"hcl",scopeName:"source.hcl",path:"hcl.tmLanguage.json"},{id:"hlsl",scopeName:"source.hlsl",path:"hlsl.tmLanguage.json"},{id:"html",scopeName:"text.html.basic",path:"html.tmLanguage.json",samplePath:"html.sample",embeddedLangs:["javascript","css"]},{id:"ini",scopeName:"source.ini",path:"ini.tmLanguage.json"},{id:"java",scopeName:"source.java",path:"java.tmLanguage.json",samplePath:"java.sample"},{id:"javascript",scopeName:"source.js",path:"javascript.tmLanguage.json",samplePath:"javascript.sample",aliases:["js"]},{id:"jinja-html",scopeName:"text.html.jinja",path:"jinja-html.tmLanguage.json",embeddedLangs:["html"]},{id:"json",scopeName:"source.json",path:"json.tmLanguage.json"},{id:"jsonc",scopeName:"source.json.comments",path:"jsonc.tmLanguage.json"},{id:"jsonnet",scopeName:"source.jsonnet",path:"jsonnet.tmLanguage.json"},{id:"jsx",scopeName:"source.js.jsx",path:"jsx.tmLanguage.json"},{id:"julia",scopeName:"source.julia",path:"julia.tmLanguage.json",embeddedLangs:["cpp","python","javascript","r","sql"]},{id:"kotlin",scopeName:"source.kotlin",path:"kotlin.tmLanguage.json"},{id:"latex",scopeName:"text.tex.latex",path:"latex.tmLanguage.json",embeddedLangs:["tex","css","html","java","javascript","typescript","lua","python","julia","ruby","xml","yaml","cpp","haskell","scala","gnuplot"]},{id:"less",scopeName:"source.css.less",path:"less.tmLanguage.json",embeddedLangs:["css"]},{id:"lisp",scopeName:"source.lisp",path:"lisp.tmLanguage.json"},{id:"logo",scopeName:"source.logo",path:"logo.tmLanguage.json"},{id:"lua",scopeName:"source.lua",path:"lua.tmLanguage.json",embeddedLangs:["c"]},{id:"make",scopeName:"source.makefile",path:"make.tmLanguage.json",aliases:["makefile"]},{id:"markdown",scopeName:"text.html.markdown",path:"markdown.tmLanguage.json",aliases:["md"],embeddedLangs:["css","html","ini","java","lua","make","perl","r","ruby","php","sql","vb","xml","xsl","yaml","bat","clojure","coffee","c","cpp","diff","docker","git-commit","git-rebase","go","groovy","pug","javascript","json","jsonc","less","objective-c","swift","scss","raku","powershell","python","rust","scala","shellscript","typescript","tsx","csharp","fsharp","dart","handlebars","erlang","elixir"]},{id:"matlab",scopeName:"source.matlab",path:"matlab.tmLanguage.json"},{id:"mdx",scopeName:"text.html.markdown.jsx",path:"mdx.tmLanguage.json",embeddedLangs:["jsx","markdown"]},{id:"nginx",scopeName:"source.nginx",path:"nginx.tmLanguage.json"},{id:"nim",scopeName:"source.nim",path:"nim.tmLanguage.json",embeddedLangs:["c","html","xml","javascript","css","markdown"]},{id:"nix",scopeName:"source.nix",path:"nix.tmLanguage.json"},{id:"objective-c",scopeName:"source.objc",path:"objective-c.tmLanguage.json",aliases:["objc"]},{id:"objective-cpp",scopeName:"source.objcpp",path:"objective-cpp.tmLanguage.json"},{id:"ocaml",scopeName:"source.ocaml",path:"ocaml.tmLanguage.json"},{id:"pascal",scopeName:"source.pascal",path:"pascal.tmLanguage.json"},{id:"perl",scopeName:"source.perl",path:"perl.tmLanguage.json",embeddedLangs:["html","xml","css","javascript","sql"]},{id:"php",scopeName:"source.php",path:"php.tmLanguage.json",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"plsql",scopeName:"source.plsql.oracle",path:"plsql.tmLanguage.json"},{id:"postcss",scopeName:"source.css.postcss",path:"postcss.tmLanguage.json"},{id:"powershell",scopeName:"source.powershell",path:"powershell.tmLanguage.json",aliases:["ps","ps1"]},{id:"prolog",scopeName:"source.prolog",path:"prolog.tmLanguage.json"},{id:"pug",scopeName:"text.pug",path:"pug.tmLanguage.json",aliases:["jade"],embeddedLangs:["javascript","css","sass","stylus","coffee","html"]},{id:"puppet",scopeName:"source.puppet",path:"puppet.tmLanguage.json"},{id:"purescript",scopeName:"source.purescript",path:"purescript.tmLanguage.json"},{id:"python",scopeName:"source.python",path:"python.tmLanguage.json",samplePath:"python.sample",aliases:["py"]},{id:"r",scopeName:"source.r",path:"r.tmLanguage.json"},{id:"raku",scopeName:"source.perl.6",path:"raku.tmLanguage.json",aliases:["perl6"]},{id:"razor",scopeName:"text.aspnetcorerazor",path:"razor.tmLanguage.json",embeddedLangs:["html","csharp"]},{id:"riscv",scopeName:"source.riscv",path:"riscv.tmLanguage.json"},{id:"ruby",scopeName:"source.ruby",path:"ruby.tmLanguage.json",samplePath:"ruby.sample",aliases:["rb"],embeddedLangs:["html","xml","sql","css","c","javascript","shellscript","lua"]},{id:"rust",scopeName:"source.rust",path:"rust.tmLanguage.json"},{id:"sas",scopeName:"source.sas",path:"sas.tmLanguage.json",embeddedLangs:["sql"]},{id:"sass",scopeName:"source.sass",path:"sass.tmLanguage.json"},{id:"scala",scopeName:"source.scala",path:"scala.tmLanguage.json"},{id:"scheme",scopeName:"source.scheme",path:"scheme.tmLanguage.json"},{id:"scss",scopeName:"source.css.scss",path:"scss.tmLanguage.json",embeddedLangs:["css"]},{id:"shaderlab",scopeName:"source.shaderlab",path:"shaderlab.tmLanguage.json",aliases:["shader"],embeddedLangs:["hlsl"]},{id:"shellscript",scopeName:"source.shell",path:"shellscript.tmLanguage.json",aliases:["shell","bash","sh","zsh"],embeddedLangs:["ruby","python","applescript","html","markdown"]},{id:"smalltalk",scopeName:"source.smalltalk",path:"smalltalk.tmLanguage.json"},{id:"solidity",scopeName:"source.solidity",path:"solidity.tmLanguage.json"},{id:"sparql",scopeName:"source.sparql",path:"sparql.tmLanguage.json",samplePath:"sparql.sample",embeddedLangs:["turtle"]},{id:"sql",scopeName:"source.sql",path:"sql.tmLanguage.json"},{id:"ssh-config",scopeName:"source.ssh-config",path:"ssh-config.tmLanguage.json"},{id:"stylus",scopeName:"source.stylus",path:"stylus.tmLanguage.json",aliases:["styl"]},{id:"svelte",scopeName:"source.svelte",path:"svelte.tmLanguage.json",embeddedLangs:["javascript","typescript","coffee","stylus","sass","css","scss","less","postcss","pug","markdown"]},{id:"swift",scopeName:"source.swift",path:"swift.tmLanguage.json"},{id:"system-verilog",scopeName:"source.systemverilog",path:"system-verilog.tmLanguage.json"},{id:"tcl",scopeName:"source.tcl",path:"tcl.tmLanguage.json"},{id:"tex",scopeName:"text.tex",path:"tex.tmLanguage.json",embeddedLangs:["r"]},{id:"toml",scopeName:"source.toml",path:"toml.tmLanguage.json"},{id:"tsx",scopeName:"source.tsx",path:"tsx.tmLanguage.json",samplePath:"tsx.sample"},{id:"turtle",scopeName:"source.turtle",path:"turtle.tmLanguage.json",samplePath:"turtle.sample"},{id:"twig",scopeName:"text.html.twig",path:"twig.tmLanguage.json",embeddedLangs:["css","javascript","php","python","ruby"]},{id:"typescript",scopeName:"source.ts",path:"typescript.tmLanguage.json",aliases:["ts"]},{id:"vb",scopeName:"source.asp.vb.net",path:"vb.tmLanguage.json",aliases:["cmd"]},{id:"verilog",scopeName:"source.verilog",path:"verilog.tmLanguage.json"},{id:"vhdl",scopeName:"source.vhdl",path:"vhdl.tmLanguage.json"},{id:"viml",scopeName:"source.viml",path:"viml.tmLanguage.json"},{id:"vue",scopeName:"source.vue",path:"vue.tmLanguage.json",embeddedLangs:["json","markdown","pug","haml","sass","scss","less","stylus","postcss","css","typescript","coffee","javascript"]},{id:"wasm",scopeName:"source.wat",path:"wasm.tmLanguage.json"},{id:"wenyan",scopeName:"source.wenyan",path:"wenyan.tmLanguage.json",aliases:["文言"]},{id:"xml",scopeName:"text.xml",path:"xml.tmLanguage.json",embeddedLangs:["java"]},{id:"xsl",scopeName:"text.xml.xsl",path:"xsl.tmLanguage.json",embeddedLangs:["xml"]},{id:"yaml",scopeName:"source.yaml",path:"yaml.tmLanguage.json"}];var u={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},n={isSpaceSeparator:e=>"string"==typeof e&&u.Space_Separator.test(e),isIdStartChar:e=>"string"==typeof e&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||"$"===e||"_"===e||u.ID_Start.test(e)),isIdContinueChar:e=>"string"==typeof e&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"$"===e||"_"===e||"‌"===e||"‍"===e||u.ID_Continue.test(e)),isDigit:e=>"string"==typeof e&&/[0-9]/.test(e),isHexDigit:e=>"string"==typeof e&&/[0-9A-Fa-f]/.test(e)};let r,s,i,a,o,c,l,h,p;function f(e,t,u){const n=e[t];if(null!=n&&"object"==typeof n)for(const e in n){const t=f(n,e,u);void 0===t?delete n[e]:n[e]=t;}return u.call(e,t,n)}let d,D,g,m,C;function A(){for(d="default",D="",g=!1,m=1;;){C=y();const e=v[d]();if(e)return e}}function y(){if(r[a])return String.fromCodePoint(r.codePointAt(a))}function F(){const e=y();return "\n"===e?(o++,c=0):e?c+=e.length:c++,e&&(a+=e.length),e}const v={default(){switch(C){case"\t":case"\v":case"\f":case" ":case" ":case"\ufeff":case"\n":case"\r":case"\u2028":case"\u2029":return void F();case"/":return F(),void(d="comment");case void 0:return F(),E("eof")}if(!n.isSpaceSeparator(C))return v[s]();F();},comment(){switch(C){case"*":return F(),void(d="multiLineComment");case"/":return F(),void(d="singleLineComment")}throw L(F())},multiLineComment(){switch(C){case"*":return F(),void(d="multiLineCommentAsterisk");case void 0:throw L(F())}F();},multiLineCommentAsterisk(){switch(C){case"*":return void F();case"/":return F(),void(d="default");case void 0:throw L(F())}F(),d="multiLineComment";},singleLineComment(){switch(C){case"\n":case"\r":case"\u2028":case"\u2029":return F(),void(d="default");case void 0:return F(),E("eof")}F();},value(){switch(C){case"{":case"[":return E("punctuator",F());case"n":return F(),_("ull"),E("null",null);case"t":return F(),_("rue"),E("boolean",!0);case"f":return F(),_("alse"),E("boolean",!1);case"-":case"+":return "-"===F()&&(m=-1),void(d="sign");case".":return D=F(),void(d="decimalPointLeading");case"0":return D=F(),void(d="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return D=F(),void(d="decimalInteger");case"I":return F(),_("nfinity"),E("numeric",1/0);case"N":return F(),_("aN"),E("numeric",NaN);case'"':case"'":return g='"'===F(),D="",void(d="string")}throw L(F())},identifierNameStartEscape(){if("u"!==C)throw L(F());F();const e=b();switch(e){case"$":case"_":break;default:if(!n.isIdStartChar(e))throw S()}D+=e,d="identifierName";},identifierName(){switch(C){case"$":case"_":case"‌":case"‍":return void(D+=F());case"\\":return F(),void(d="identifierNameEscape")}if(!n.isIdContinueChar(C))return E("identifier",D);D+=F();},identifierNameEscape(){if("u"!==C)throw L(F());F();const e=b();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!n.isIdContinueChar(e))throw S()}D+=e,d="identifierName";},sign(){switch(C){case".":return D=F(),void(d="decimalPointLeading");case"0":return D=F(),void(d="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return D=F(),void(d="decimalInteger");case"I":return F(),_("nfinity"),E("numeric",m*(1/0));case"N":return F(),_("aN"),E("numeric",NaN)}throw L(F())},zero(){switch(C){case".":return D+=F(),void(d="decimalPoint");case"e":case"E":return D+=F(),void(d="decimalExponent");case"x":case"X":return D+=F(),void(d="hexadecimal")}return E("numeric",0*m)},decimalInteger(){switch(C){case".":return D+=F(),void(d="decimalPoint");case"e":case"E":return D+=F(),void(d="decimalExponent")}if(!n.isDigit(C))return E("numeric",m*Number(D));D+=F();},decimalPointLeading(){if(n.isDigit(C))return D+=F(),void(d="decimalFraction");throw L(F())},decimalPoint(){switch(C){case"e":case"E":return D+=F(),void(d="decimalExponent")}return n.isDigit(C)?(D+=F(),void(d="decimalFraction")):E("numeric",m*Number(D))},decimalFraction(){switch(C){case"e":case"E":return D+=F(),void(d="decimalExponent")}if(!n.isDigit(C))return E("numeric",m*Number(D));D+=F();},decimalExponent(){switch(C){case"+":case"-":return D+=F(),void(d="decimalExponentSign")}if(n.isDigit(C))return D+=F(),void(d="decimalExponentInteger");throw L(F())},decimalExponentSign(){if(n.isDigit(C))return D+=F(),void(d="decimalExponentInteger");throw L(F())},decimalExponentInteger(){if(!n.isDigit(C))return E("numeric",m*Number(D));D+=F();},hexadecimal(){if(n.isHexDigit(C))return D+=F(),void(d="hexadecimalInteger");throw L(F())},hexadecimalInteger(){if(!n.isHexDigit(C))return E("numeric",m*Number(D));D+=F();},string(){switch(C){case"\\":return F(),void(D+=function(){switch(y()){case"b":return F(),"\b";case"f":return F(),"\f";case"n":return F(),"\n";case"r":return F(),"\r";case"t":return F(),"\t";case"v":return F(),"\v";case"0":if(F(),n.isDigit(y()))throw L(F());return "\0";case"x":return F(),function(){let e="",t=y();if(!n.isHexDigit(t))throw L(F());if(e+=F(),t=y(),!n.isHexDigit(t))throw L(F());return e+=F(),String.fromCodePoint(parseInt(e,16))}();case"u":return F(),b();case"\n":case"\u2028":case"\u2029":return F(),"";case"\r":return F(),"\n"===y()&&F(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case void 0:throw L(F())}return F()}());case'"':return g?(F(),E("string",D)):void(D+=F());case"'":return g?void(D+=F()):(F(),E("string",D));case"\n":case"\r":throw L(F());case"\u2028":case"\u2029":!function(e){console.warn(`JSON5: '${j(e)}' in strings is not valid ECMAScript; consider escaping`);}(C);break;case void 0:throw L(F())}D+=F();},start(){switch(C){case"{":case"[":return E("punctuator",F())}d="value";},beforePropertyName(){switch(C){case"$":case"_":return D=F(),void(d="identifierName");case"\\":return F(),void(d="identifierNameStartEscape");case"}":return E("punctuator",F());case'"':case"'":return g='"'===F(),void(d="string")}if(n.isIdStartChar(C))return D+=F(),void(d="identifierName");throw L(F())},afterPropertyName(){if(":"===C)return E("punctuator",F());throw L(F())},beforePropertyValue(){d="value";},afterPropertyValue(){switch(C){case",":case"}":return E("punctuator",F())}throw L(F())},beforeArrayValue(){if("]"===C)return E("punctuator",F());d="value";},afterArrayValue(){switch(C){case",":case"]":return E("punctuator",F())}throw L(F())},end(){throw L(F())}};function E(e,t){return {type:e,value:t,line:o,column:c}}function _(e){for(const t of e){if(y()!==t)throw L(F());F();}}function b(){let e="",t=4;for(;t-- >0;){const t=y();if(!n.isHexDigit(t))throw L(F());e+=F();}return String.fromCodePoint(parseInt(e,16))}const B={start(){if("eof"===l.type)throw k();w();},beforePropertyName(){switch(l.type){case"identifier":case"string":return h=l.value,void(s="afterPropertyName");case"punctuator":return void x();case"eof":throw k()}},afterPropertyName(){if("eof"===l.type)throw k();s="beforePropertyValue";},beforePropertyValue(){if("eof"===l.type)throw k();w();},beforeArrayValue(){if("eof"===l.type)throw k();"punctuator"!==l.type||"]"!==l.value?w():x();},afterPropertyValue(){if("eof"===l.type)throw k();switch(l.value){case",":return void(s="beforePropertyName");case"}":x();}},afterArrayValue(){if("eof"===l.type)throw k();switch(l.value){case",":return void(s="beforeArrayValue");case"]":x();}},end(){}};function w(){let e;switch(l.type){case"punctuator":switch(l.value){case"{":e={};break;case"[":e=[];}break;case"null":case"boolean":case"numeric":case"string":e=l.value;}if(void 0===p)p=e;else {const t=i[i.length-1];Array.isArray(t)?t.push(e):t[h]=e;}if(null!==e&&"object"==typeof e)i.push(e),s=Array.isArray(e)?"beforeArrayValue":"beforePropertyName";else {const e=i[i.length-1];s=null==e?"end":Array.isArray(e)?"afterArrayValue":"afterPropertyValue";}}function x(){i.pop();const e=i[i.length-1];s=null==e?"end":Array.isArray(e)?"afterArrayValue":"afterPropertyValue";}function L(e){return N(void 0===e?`JSON5: invalid end of input at ${o}:${c}`:`JSON5: invalid character '${j(e)}' at ${o}:${c}`)}function k(){return N(`JSON5: invalid end of input at ${o}:${c}`)}function S(){return c-=5,N(`JSON5: invalid identifier character at ${o}:${c}`)}function j(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const t=e.charCodeAt(0).toString(16);return "\\x"+("00"+t).substring(t.length)}return e}function N(e){const t=new SyntaxError(e);return t.lineNumber=o,t.columnNumber=c,t}var P={parse:function(e,t){r=String(e),s="start",i=[],a=0,o=1,c=0,l=void 0,h=void 0,p=void 0;do{l=A(),B[s]();}while("eof"!==l.type);return "function"==typeof t?f({"":p},"",t):p},stringify:function(e,t,u){const r=[];let s,i,a,o="",c="";if(null==t||"object"!=typeof t||Array.isArray(t)||(u=t.space,a=t.quote,t=t.replacer),"function"==typeof t)i=t;else if(Array.isArray(t)){s=[];for(const e of t){let t;"string"==typeof e?t=e:("number"==typeof e||e instanceof String||e instanceof Number)&&(t=String(e)),void 0!==t&&s.indexOf(t)<0&&s.push(t);}}return u instanceof Number?u=Number(u):u instanceof String&&(u=String(u)),"number"==typeof u?u>0&&(u=Math.min(10,Math.floor(u)),c="          ".substr(0,u)):"string"==typeof u&&(c=u.substr(0,10)),l("",{"":e});function l(e,t){let u=t[e];switch(null!=u&&("function"==typeof u.toJSON5?u=u.toJSON5(e):"function"==typeof u.toJSON&&(u=u.toJSON(e))),i&&(u=i.call(t,e,u)),u instanceof Number?u=Number(u):u instanceof String?u=String(u):u instanceof Boolean&&(u=u.valueOf()),u){case null:return "null";case!0:return "true";case!1:return "false"}return "string"==typeof u?h(u):"number"==typeof u?String(u):"object"==typeof u?Array.isArray(u)?function(e){if(r.indexOf(e)>=0)throw TypeError("Converting circular structure to JSON5");r.push(e);let t=o;o+=c;let u,n=[];for(let t=0;t<e.length;t++){const u=l(String(t),e);n.push(void 0!==u?u:"null");}if(0===n.length)u="[]";else if(""===c){u="["+n.join(",")+"]";}else {let e=",\n"+o,r=n.join(e);u="[\n"+o+r+",\n"+t+"]";}return r.pop(),o=t,u}(u):function(e){if(r.indexOf(e)>=0)throw TypeError("Converting circular structure to JSON5");r.push(e);let t=o;o+=c;let u,n=s||Object.keys(e),i=[];for(const t of n){const u=l(t,e);if(void 0!==u){let e=p(t)+":";""!==c&&(e+=" "),e+=u,i.push(e);}}if(0===i.length)u="{}";else {let e;if(""===c)e=i.join(","),u="{"+e+"}";else {let n=",\n"+o;e=i.join(n),u="{\n"+o+e+",\n"+t+"}";}}return r.pop(),o=t,u}(u):void 0}function h(e){const t={"'":.1,'"':.2},u={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let r="";for(let s=0;s<e.length;s++){const i=e[s];switch(i){case"'":case'"':t[i]++,r+=i;continue;case"\0":if(n.isDigit(e[s+1])){r+="\\x00";continue}}if(u[i])r+=u[i];else if(i<" "){let e=i.charCodeAt(0).toString(16);r+="\\x"+("00"+e).substring(e.length);}else r+=i;}const s=a||Object.keys(t).reduce(((e,u)=>t[e]<t[u]?e:u));return r=r.replace(new RegExp(s,"g"),u[s]),s+r+s}function p(e){if(0===e.length)return h(e);const t=String.fromCodePoint(e.codePointAt(0));if(!n.isIdStartChar(t))return h(e);for(let u=t.length;u<e.length;u++)if(!n.isIdContinueChar(String.fromCodePoint(e.codePointAt(u))))return h(e);return e}}};function R(e){var t={exports:{}};return e(t,t.exports),t.exports}var T=R((function(e,t){var u=function(){"undefined"!=typeof document&&document.currentScript&&document.currentScript.src;return function(e){var t,u=void 0!==(e=e||{})?e:{},n={};for(t in u)u.hasOwnProperty(t)&&(n[t]=u[t]);var r,s=!1,i="";function a(e){return u.locateFile?u.locateFile(e,i):i+e}r=function(e){var t;return "function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(d("object"==typeof(t=read(e,"binary"))),t)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print);var o,c,l=u.print||console.log.bind(console),h=u.printErr||console.warn.bind(console);for(t in n)n.hasOwnProperty(t)&&(u[t]=n[t]);n=null,u.arguments&&u.arguments,u.thisProgram&&u.thisProgram,u.quit&&u.quit,u.wasmBinary&&(o=u.wasmBinary),u.noExitRuntime&&u.noExitRuntime,"object"!=typeof WebAssembly&&h("no native wasm support detected");var p=new WebAssembly.Table({initial:244,maximum:244,element:"anyfunc"}),f=!1;function d(e,t){e||J("Assertion failed: "+t);}function D(e){var t=u["_"+e];return d(t,"Cannot call unknown function "+e+", make sure it is exported"),t}function g(e,t,u,n,r){var s={string:function(e){var t=0;if(null!=e&&0!==e){var u=1+(e.length<<2);F(e,t=me(u),u);}return t},array:function(e){var t=me(e.length);return v(e,t),t}};var i=D(e),a=[],o=0;if(n)for(var c=0;c<n.length;c++){var l=s[u[c]];l?(0===o&&(o=ge()),a[c]=l(n[c])):a[c]=n[c];}var h=i.apply(null,a);return h=function(e){return "string"===t?A(e):"boolean"===t?Boolean(e):e}(h),0!==o&&Ce(o),h}var m="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function C(e,t,u){for(var n=t+u,r=t;e[r]&&!(r>=n);)++r;if(r-t>16&&e.subarray&&m)return m.decode(e.subarray(t,r));for(var s="";t<r;){var i=e[t++];if(128&i){var a=63&e[t++];if(192!=(224&i)){var o=63&e[t++];if((i=224==(240&i)?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])<65536)s+=String.fromCharCode(i);else {var c=i-65536;s+=String.fromCharCode(55296|c>>10,56320|1023&c);}}else s+=String.fromCharCode((31&i)<<6|a);}else s+=String.fromCharCode(i);}return s}function A(e,t){return e?C(b,e,t):""}function y(e,t,u,n){if(!(n>0))return 0;for(var r=u,s=u+n-1,i=0;i<e.length;++i){var a=e.charCodeAt(i);if(a>=55296&&a<=57343)a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i);if(a<=127){if(u>=s)break;t[u++]=a;}else if(a<=2047){if(u+1>=s)break;t[u++]=192|a>>6,t[u++]=128|63&a;}else if(a<=65535){if(u+2>=s)break;t[u++]=224|a>>12,t[u++]=128|a>>6&63,t[u++]=128|63&a;}else {if(u+3>=s)break;t[u++]=240|a>>18,t[u++]=128|a>>12&63,t[u++]=128|a>>6&63,t[u++]=128|63&a;}}return t[u]=0,u-r}function F(e,t,u){return y(e,b,t,u)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");function v(e,t){_.set(e,t);}var E,_,b,B,w=65536;function x(e,t){return e%t>0&&(e+=t-e%t),e}function L(e){E=e,u.HEAP8=_=new Int8Array(e),u.HEAP16=new Int16Array(e),u.HEAP32=B=new Int32Array(e),u.HEAPU8=b=new Uint8Array(e),u.HEAPU16=new Uint16Array(e),u.HEAPU32=new Uint32Array(e),u.HEAPF32=new Float32Array(e),u.HEAPF64=new Float64Array(e);}var k=5507664,S=264624,j=u.TOTAL_MEMORY||157286400;function N(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var n=t.func;"number"==typeof n?void 0===t.arg?u.dynCall_v(n):u.dynCall_vi(n,t.arg):n(void 0===t.arg?null:t.arg);}else t();}}(c=u.wasmMemory?u.wasmMemory:new WebAssembly.Memory({initial:j/w}))&&(E=c.buffer),j=E.byteLength,L(E),B[S>>2]=k;var P=[],R=[],T=[],I=[];function M(){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)H(u.preRun.shift());N(P);}function O(){N(R);}function G(){N(T);}function $(){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;)W(u.postRun.shift());N(I);}function H(e){P.unshift(e);}function W(e){I.unshift(e);}var U=0,q=null;function z(e){U++,u.monitorRunDependencies&&u.monitorRunDependencies(U);}function V(e){if(U--,u.monitorRunDependencies&&u.monitorRunDependencies(U),0==U&&q){var t=q;q=null,t();}}function J(e){throw u.onAbort&&u.onAbort(e),l(e+=""),h(e),f=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(e)}u.preloadedImages={},u.preloadedAudios={};var K="data:application/octet-stream;base64,";function X(e){return String.prototype.startsWith?e.startsWith(K):0===e.indexOf(K)}var Y="onigasm.wasm";function Z(){try{if(o)return new Uint8Array(o);if(r)return r(Y);throw "both async and sync fetching of the wasm failed"}catch(e){J(e);}}function Q(){return !o&&s&&"function"==typeof fetch?fetch(Y,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw "failed to load wasm binary file at '"+Y+"'";return e.arrayBuffer()})).catch((function(){return Z()})):new Promise((function(e,t){e(Z());}))}function ee(){var e={env:pe,wasi_unstable:pe};function t(e,t){var n=e.exports;u.asm=n,V();}function n(e){t(e.instance);}function r(t){return Q().then((function(t){return WebAssembly.instantiate(t,e)})).then(t,(function(e){h("failed to asynchronously prepare wasm: "+e),J(e);}))}if(z(),u.instantiateWasm)try{return u.instantiateWasm(e,t)}catch(e){return h("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(o||"function"!=typeof WebAssembly.instantiateStreaming||X(Y)||"function"!=typeof fetch)return r(n);fetch(Y,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(n,(function(e){h("wasm streaming compile failed: "+e),h("falling back to ArrayBuffer instantiation"),r(n);}))}));}(),{}}function te(){J();}function ue(){return _.length}function ne(){return 264624}function re(e,t,u){b.set(b.subarray(t,t+u),e);}function se(e){try{return c.grow(e-E.byteLength+65535>>16),L(c.buffer),1}catch(e){}}function ie(e){var t=ue(),u=65536,n=2147418112;if(e>n)return !1;for(var r=Math.max(t,16777216);r<e;)r=r<=536870912?x(2*r,u):Math.min(x((3*r+2147483648)/4,u),n);return !!se(r)}X(Y)||(Y=a(Y)),R.push({func:function(){De();}});var ae={buffers:[null,[],[]],printChar:function(e,t){var u=ae.buffers[e];0===t||10===t?((1===e?l:h)(C(u,0)),u.length=0):u.push(t);},varargs:0,get:function(e){return ae.varargs+=4,B[ae.varargs-4>>2]},getStr:function(){return A(ae.get())},get64:function(){var e=ae.get();ae.get();return e},getZero:function(){ae.get();}};function oe(e){try{return 0}catch(e){return "undefined"!=typeof FS&&e instanceof FS.ErrnoError||J(e),e.errno}}function ce(e,t,u,n,r){try{return 0}catch(e){return "undefined"!=typeof FS&&e instanceof FS.ErrnoError||J(e),e.errno}}function le(e,t,u,n){try{for(var r=0,s=0;s<u;s++){for(var i=B[t+8*s>>2],a=B[t+(8*s+4)>>2],o=0;o<a;o++)ae.printChar(e,b[i+o]);r+=a;}return B[n>>2]=r,0}catch(e){return "undefined"!=typeof FS&&e instanceof FS.ErrnoError||J(e),e.errno}}function he(e){}var pe={abort:te,emscripten_get_sbrk_ptr:ne,emscripten_memcpy_big:re,emscripten_resize_heap:ie,fd_close:oe,fd_seek:ce,fd_write:le,memory:c,setTempRet0:he,table:p},fe=ee();u.asm=fe;var de,De=u.___wasm_call_ctors=function(){return u.asm.__wasm_call_ctors.apply(null,arguments)},ge=(u._malloc=function(){return u.asm.malloc.apply(null,arguments)},u._free=function(){return u.asm.free.apply(null,arguments)},u._getLastError=function(){return u.asm.getLastError.apply(null,arguments)},u._compilePattern=function(){return u.asm.compilePattern.apply(null,arguments)},u._disposeCompiledPatterns=function(){return u.asm.disposeCompiledPatterns.apply(null,arguments)},u._findBestMatch=function(){return u.asm.findBestMatch.apply(null,arguments)},u.___cxa_demangle=function(){return u.asm.__cxa_demangle.apply(null,arguments)},u._setThrew=function(){return u.asm.setThrew.apply(null,arguments)},u.stackSave=function(){return u.asm.stackSave.apply(null,arguments)}),me=u.stackAlloc=function(){return u.asm.stackAlloc.apply(null,arguments)},Ce=u.stackRestore=function(){return u.asm.stackRestore.apply(null,arguments)};u.__growWasmMemory=function(){return u.asm.__growWasmMemory.apply(null,arguments)},u.dynCall_vi=function(){return u.asm.dynCall_vi.apply(null,arguments)},u.dynCall_iiii=function(){return u.asm.dynCall_iiii.apply(null,arguments)},u.dynCall_iiiii=function(){return u.asm.dynCall_iiiii.apply(null,arguments)},u.dynCall_iii=function(){return u.asm.dynCall_iii.apply(null,arguments)},u.dynCall_iidiiii=function(){return u.asm.dynCall_iidiiii.apply(null,arguments)},u.dynCall_vii=function(){return u.asm.dynCall_vii.apply(null,arguments)},u.dynCall_ii=function(){return u.asm.dynCall_ii.apply(null,arguments)},u.dynCall_i=function(){return u.asm.dynCall_i.apply(null,arguments)},u.dynCall_v=function(){return u.asm.dynCall_v.apply(null,arguments)},u.dynCall_viiiiii=function(){return u.asm.dynCall_viiiiii.apply(null,arguments)},u.dynCall_viiiii=function(){return u.asm.dynCall_viiiii.apply(null,arguments)},u.dynCall_viiii=function(){return u.asm.dynCall_viiii.apply(null,arguments)},u.dynCall_jiji=function(){return u.asm.dynCall_jiji.apply(null,arguments)};function Ae(e){function t(){de||(de=!0,f||(O(),G(),u.onRuntimeInitialized&&u.onRuntimeInitialized(),$()));}U>0||(M(),U>0||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("");}),1),t();}),1)):t()));}if(u.asm=fe,u.ccall=g,u.then=function(e){if(de)e(u);else {var t=u.onRuntimeInitialized;u.onRuntimeInitialized=function(){t&&t(),e(u);};}return u},q=function e(){de||Ae(),de||(q=e);},u.run=Ae,u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return Ae(),e}}();e.exports=u;})),I=R((function(e,t){async function u(e){return new Promise(((u,n)=>{const{log:r,warn:s,error:i}=console;T({instantiateWasm:(t,u)=>(WebAssembly.instantiate(e,t).then((e=>{u(e.instance);})).catch((e=>{throw e})),{})}).then((e=>{t.onigasmH=e,u();})),"undefined"!=typeof print&&(console.log=r,console.error=i,console.warn=s);}))}Object.defineProperty(t,"__esModule",{value:!0});let n=!1;t.loadWASM=async function(e){if(n)throw new Error("Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized");if("string"==typeof e){const t=await(await fetch(e)).arrayBuffer();await u(t);}else {if(!(e instanceof ArrayBuffer))throw new TypeError("Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter");await u(e);}n=!0;};})),M=O;function O(e){var t=this;if(t instanceof O||(t=new O),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e);}));else if(arguments.length>0)for(var u=0,n=arguments.length;u<n;u++)t.push(arguments[u]);return t}function G(e,t,u){var n=t===e.head?new W(u,null,t,e):new W(u,t,t.next,e);return null===n.next&&(e.tail=n),null===n.prev&&(e.head=n),e.length++,n}function $(e,t){e.tail=new W(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++;}function H(e,t){e.head=new W(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++;}function W(e,t,u,n){if(!(this instanceof W))return new W(e,t,u,n);this.list=n,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,u?(u.prev=this,this.next=u):this.next=null;}O.Node=W,O.create=O,O.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,u=e.prev;return t&&(t.prev=u),u&&(u.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=u),e.list.length--,e.next=null,e.prev=null,e.list=null,t},O.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++;}},O.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++;}},O.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)$(this,arguments[e]);return this.length},O.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)H(this,arguments[e]);return this.length},O.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},O.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},O.prototype.forEach=function(e,t){t=t||this;for(var u=this.head,n=0;null!==u;n++)e.call(t,u.value,n,this),u=u.next;},O.prototype.forEachReverse=function(e,t){t=t||this;for(var u=this.tail,n=this.length-1;null!==u;n--)e.call(t,u.value,n,this),u=u.prev;},O.prototype.get=function(e){for(var t=0,u=this.head;null!==u&&t<e;t++)u=u.next;if(t===e&&null!==u)return u.value},O.prototype.getReverse=function(e){for(var t=0,u=this.tail;null!==u&&t<e;t++)u=u.prev;if(t===e&&null!==u)return u.value},O.prototype.map=function(e,t){t=t||this;for(var u=new O,n=this.head;null!==n;)u.push(e.call(t,n.value,this)),n=n.next;return u},O.prototype.mapReverse=function(e,t){t=t||this;for(var u=new O,n=this.tail;null!==n;)u.push(e.call(t,n.value,this)),n=n.prev;return u},O.prototype.reduce=function(e,t){var u,n=this.head;if(arguments.length>1)u=t;else {if(!this.head)throw new TypeError("Reduce of empty list with no initial value");n=this.head.next,u=this.head.value;}for(var r=0;null!==n;r++)u=e(u,n.value,r),n=n.next;return u},O.prototype.reduceReverse=function(e,t){var u,n=this.tail;if(arguments.length>1)u=t;else {if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");n=this.tail.prev,u=this.tail.value;}for(var r=this.length-1;null!==n;r--)u=e(u,n.value,r),n=n.prev;return u},O.prototype.toArray=function(){for(var e=new Array(this.length),t=0,u=this.head;null!==u;t++)e[t]=u.value,u=u.next;return e},O.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,u=this.tail;null!==u;t++)e[t]=u.value,u=u.prev;return e},O.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var u=new O;if(t<e||t<0)return u;e<0&&(e=0),t>this.length&&(t=this.length);for(var n=0,r=this.head;null!==r&&n<e;n++)r=r.next;for(;null!==r&&n<t;n++,r=r.next)u.push(r.value);return u},O.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var u=new O;if(t<e||t<0)return u;e<0&&(e=0),t>this.length&&(t=this.length);for(var n=this.length,r=this.tail;null!==r&&n>t;n--)r=r.prev;for(;null!==r&&n>e;n--,r=r.prev)u.push(r.value);return u},O.prototype.splice=function(e,t){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var u=0,n=this.head;null!==n&&u<e;u++)n=n.next;var r=[];for(u=0;n&&u<t;u++)r.push(n.value),n=this.removeNode(n);null===n&&(n=this.tail),n!==this.head&&n!==this.tail&&(n=n.prev);for(u=2;u<arguments.length;u++)n=G(this,n,arguments[u]);return r},O.prototype.reverse=function(){for(var e=this.head,t=this.tail,u=e;null!==u;u=u.prev){var n=u.prev;u.prev=u.next,u.next=n;}return this.head=t,this.tail=e,this};try{!function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value;};}(O);}catch(e){}const U=Symbol("max"),q=Symbol("length"),z=Symbol("lengthCalculator"),V=Symbol("allowStale"),J=Symbol("maxAge"),K=Symbol("dispose"),X=Symbol("noDisposeOnSet"),Y=Symbol("lruList"),Z=Symbol("cache"),Q=Symbol("updateAgeOnGet"),ee=()=>1;const te=(e,t,u)=>{const n=e[Z].get(t);if(n){const t=n.value;if(ue(e,t)){if(re(e,n),!e[V])return}else u&&(e[Q]&&(n.value.now=Date.now()),e[Y].unshiftNode(n));return t.value}},ue=(e,t)=>{if(!t||!t.maxAge&&!e[J])return !1;const u=Date.now()-t.now;return t.maxAge?u>t.maxAge:e[J]&&u>e[J]},ne=e=>{if(e[q]>e[U])for(let t=e[Y].tail;e[q]>e[U]&&null!==t;){const u=t.prev;re(e,t),t=u;}},re=(e,t)=>{if(t){const u=t.value;e[K]&&e[K](u.key,u.value),e[q]-=u.length,e[Z].delete(u.key),e[Y].removeNode(t);}};class se{constructor(e,t,u,n,r){this.key=e,this.value=t,this.length=u,this.now=n,this.maxAge=r||0;}}const ie=(e,t,u,n)=>{let r=u.value;ue(e,r)&&(re(e,u),e[V]||(r=void 0)),r&&t.call(n,r.value,r.key,e);};var ae=class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[U]=e.max||1/0;const t=e.length||ee;if(this[z]="function"!=typeof t?ee:t,this[V]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[J]=e.maxAge||0,this[K]=e.dispose,this[X]=e.noDisposeOnSet||!1,this[Q]=e.updateAgeOnGet||!1,this.reset();}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[U]=e||1/0,ne(this);}get max(){return this[U]}set allowStale(e){this[V]=!!e;}get allowStale(){return this[V]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[J]=e,ne(this);}get maxAge(){return this[J]}set lengthCalculator(e){"function"!=typeof e&&(e=ee),e!==this[z]&&(this[z]=e,this[q]=0,this[Y].forEach((e=>{e.length=this[z](e.value,e.key),this[q]+=e.length;}))),ne(this);}get lengthCalculator(){return this[z]}get length(){return this[q]}get itemCount(){return this[Y].length}rforEach(e,t){t=t||this;for(let u=this[Y].tail;null!==u;){const n=u.prev;ie(this,e,u,t),u=n;}}forEach(e,t){t=t||this;for(let u=this[Y].head;null!==u;){const n=u.next;ie(this,e,u,t),u=n;}}keys(){return this[Y].toArray().map((e=>e.key))}values(){return this[Y].toArray().map((e=>e.value))}reset(){this[K]&&this[Y]&&this[Y].length&&this[Y].forEach((e=>this[K](e.key,e.value))),this[Z]=new Map,this[Y]=new M,this[q]=0;}dump(){return this[Y].map((e=>!ue(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[Y]}set(e,t,u){if((u=u||this[J])&&"number"!=typeof u)throw new TypeError("maxAge must be a number");const n=u?Date.now():0,r=this[z](t,e);if(this[Z].has(e)){if(r>this[U])return re(this,this[Z].get(e)),!1;const s=this[Z].get(e).value;return this[K]&&(this[X]||this[K](e,s.value)),s.now=n,s.maxAge=u,s.value=t,this[q]+=r-s.length,s.length=r,this.get(e),ne(this),!0}const s=new se(e,t,r,n,u);return s.length>this[U]?(this[K]&&this[K](e,t),!1):(this[q]+=s.length,this[Y].unshift(s),this[Z].set(e,this[Y].head),ne(this),!0)}has(e){if(!this[Z].has(e))return !1;const t=this[Z].get(e).value;return !ue(this,t)}get(e){return te(this,e,!0)}peek(e){return te(this,e,!1)}pop(){const e=this[Y].tail;return e?(re(this,e),e.value):null}del(e){re(this,this[Z].get(e));}load(e){this.reset();const t=Date.now();for(let u=e.length-1;u>=0;u--){const n=e[u],r=n.e||0;if(0===r)this.set(n.k,n.v);else {const e=r-t;e>0&&this.set(n.k,n.v,e);}}}prune(){this[Z].forEach(((e,t)=>te(this,t,!1)));}};var oe=class{constructor(e){if(this.substring=(e,t)=>this.source.substring(e,t),this.toString=(e,t)=>this.source,"string"!=typeof e)throw new TypeError("Argument must be a string");this.source=e,this._utf8Bytes=null,this._utf8Indexes=null;}get utf8Bytes(){return this._utf8Bytes||this.encode(),this._utf8Bytes}get utf8Indexes(){return this._utf8Bytes||this.encode(),this._utf8Indexes}get content(){return this.source}get length(){return this.source.length}get hasMultiByteCharacters(){return null!==this.utf8Indexes}convertUtf8OffsetToUtf16(e){if(e<0)return 0;if(e>=this._utf8Bytes.length-1)return this.source.length;const t=this.utf8Indexes;return t&&e>=this._mappingTableStartOffset?function(e,t){let u=0,n=e.length;if(0===n)return 0;for(;u<n;){const r=Math.floor((u+n)/2);e[r]>=t?n=r:u=r+1;}for(;u>0&&(u>=e.length||e[u]>t);)u--;u>0&&e[u]===e[u-1]&&u--;return u}(t,e-this._mappingTableStartOffset)+this._mappingTableStartOffset:e}convertUtf16OffsetToUtf8(e){if(e<0)return 0;const t=this._utf8Bytes;if(e>=this.source.length)return t.length-1;const u=this.utf8Indexes;return u&&e>=this._mappingTableStartOffset?u[e-this._mappingTableStartOffset]+this._mappingTableStartOffset:e}encode(){const e=this.source,t=e.length;let u,n=0,r=0;function s(e){const s=3*(t-e);u=s<=255?new Uint8Array(t-e):s<=65535?new Uint16Array(t-e):new Uint32Array(t-e),r=e,u[n++]=0;}const i=new Uint8Array(3*t+1);let a=0,o=0;for(;o<e.length;){let c;const l=e.charCodeAt(o);if(u&&(u[n++]=a-r),l<55296||l>57343)c=l;else if(l>=56320)c=65533;else if(o===t-1)c=65533;else {const t=e.charCodeAt(o+1);if(56320<=t&&t<=57343){u||s(o);c=65536+((1023&l)<<10)+(1023&t),o+=1,u[n++]=a-r;}else c=65533;}let h,p;if(c<=127?(h=1,p=0):c<=2047?(h=2,p=192):c<=65535?(h=3,p=224):(h=4,p=240),1===h)i[a++]=c;else for(u||s(a),i[a++]=(c>>6*--h)+p;h>0;){const e=c>>6*(h-1);i[a++]=128|63&e,h-=1;}o+=1;}const c=i.slice(0,a+1);c[a]=0,this._utf8Bytes=c,u&&(this._utf8Indexes=u,this._mappingTableStartOffset=r);}},ce=Object.defineProperty({default:oe},"__esModule",{value:!0});function le(e){const t=I.onigasmH._malloc(e.utf8Bytes.length);return I.onigasmH.HEAPU8.set(e.utf8Bytes,t),t}function he(e){const t=[];let u=0;for(;0!==I.onigasmH.HEAPU8[e];)t[u++]=I.onigasmH.HEAPU8[e++];return t.join()}const pe=new ae({dispose:(e,t)=>{const u=I.onigasmH._malloc(t.regexTPtrs.length);I.onigasmH.HEAPU8.set(t.regexTPtrs,u);if(0!==I.onigasmH._disposeCompiledPatterns(u,e.patterns.length)){const e=he(I.onigasmH._getLastError());throw new Error(e)}I.onigasmH._free(u);},max:1e3});class fe{constructor(e){if(null===I.onigasmH)throw new Error("Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API");for(let t=0;t<e.length;t++){if("string"!=typeof e[t])throw new TypeError("First parameter to OnigScanner constructor must be array of (pattern) strings")}this.sources=e.slice();}get patterns(){return this.sources.slice()}findNextMatch(e,t,u){null==t&&(t=0),"function"==typeof t&&(u=t,t=0);try{u(null,this.findNextMatchSync(e,t));}catch(e){u(e);}}findNextMatchSync(e,t){null==t&&(t=0),t=this.convertToNumber(t);let u=pe.get(this),n=0;if(!u){const e=I.onigasmH._malloc(4),t=[];for(let u=0;u<this.sources.length;u++){const r=this.sources[u],s=le(new ce.default(r));if(n=I.onigasmH._compilePattern(s,e),0!==n){const e=he(I.onigasmH._getLastError());throw new Error(e)}const i=I.onigasmH.HEAP32[e/4];t.push(i),I.onigasmH._free(s);}u={regexTPtrs:new Uint8Array(Uint32Array.from(t).buffer)},I.onigasmH._free(e),pe.set(this,u);}const r=e instanceof ce.default?e:new ce.default(this.convertToString(e)),s=le(r),i=I.onigasmH._malloc(8),a=I.onigasmH._malloc(u.regexTPtrs.length);if(I.onigasmH.HEAPU8.set(u.regexTPtrs,a),n=I.onigasmH._findBestMatch(a,this.sources.length,s,r.utf8Bytes.length-1,r.convertUtf16OffsetToUtf8(t),i),0!==n){const e=he(I.onigasmH._getLastError());throw new Error(e)}const[o,c,l]=new Uint32Array(I.onigasmH.HEAPU32.buffer,i,3);if(I.onigasmH._free(s),I.onigasmH._free(i),I.onigasmH._free(a),l>0){const e=new Uint32Array(I.onigasmH.HEAPU32.buffer,c,l),t=[];let u=0,n=0;for(;u<l;){const s=n++;let i=e[u++],a=e[u++];r.hasMultiByteCharacters&&(i=r.convertUtf8OffsetToUtf16(i),a=r.convertUtf8OffsetToUtf16(a)),t.push({end:a,index:s,length:a-i,start:i});}return I.onigasmH._free(c),{captureIndices:t,index:o,scanner:this}}return null}convertToString(e){return void 0===e?"undefined":null===e?"null":e instanceof ce.default?e.content:e.toString()}convertToNumber(e){return e=parseInt(e,10),isFinite(e)||(e=0),e=Math.max(e,0)}}var de=fe,De=fe,ge=Object.defineProperty({OnigScanner:de,default:De},"__esModule",{value:!0});var me=class{constructor(e){this.source=e;try{this.scanner=new ge.default([this.source]);}catch(e){}}searchSync(e,t){let u;return null==t&&(t=0),u=this.scanner.findNextMatchSync(e,t),this.captureIndicesForMatch(e,u)}search(e,t,u){null==t&&(t=0),"function"==typeof t&&(u=t,t=0);try{u(null,this.searchSync(e,t));}catch(e){u(e);}}testSync(e){return "boolean"==typeof this.source||"boolean"==typeof e?this.source===e:null!=this.searchSync(e)}test(e,t){"function"!=typeof t&&(t=()=>{});try{t(null,this.testSync(e));}catch(e){t(e);}}captureIndicesForMatch(e,t){if(null!=t){const{captureIndices:u}=t;let n;e=this.scanner.convertToString(e);for(let t=0;t<u.length;t++)n=u[t],n.match=e.slice(n.start,n.end);return u}return null}},Ce=Object.defineProperty({default:me},"__esModule",{value:!0}),Ae=I.loadWASM,ye=(Ce.default,ge.default),Fe=ce.default;function ve(e){return e.endsWith("/")||e.endsWith("\\")?e.slice(0,-1):e}function Ee(e){return e.startsWith("./")?e.slice(2):e}const _e="undefined"!=typeof window&&void 0!==window.document&&"undefined"!=typeof fetch;let be="",Be="";let we=null;function xe(e){if(_e)return be||console.warn("[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`"),`${be}${e}`;{const t=require$$0__default['default'];return t.isAbsolute(e)?e:t.resolve(__dirname,"..",e)}}async function Le(e){return P.parse(await async function(e){const t=xe(e);if(_e)return await fetch(t).then((e=>e.text()));{const e=require$$1__default['default'];return await e.promises.readFile(t,"utf-8")}}(e))}async function ke(e){const t=Se(await Le(e));if(t.include){const u=await ke(function(...e){return e.map(ve).map(Ee).join("/")}(function(e){const t=e.split(/[\/\\]/g);return t[t.length-2]}(e),t.include));u.settings&&(t.settings=u.settings.concat(t.settings)),u.bg&&!t.bg&&(t.bg=u.bg),u.colors&&(t.colors=Object.assign(Object.assign({},u.colors),t.colors)),delete t.include;}return t}function Se(e){const t=e.type||"dark",u=Object.assign(Object.assign({name:e.name,type:t},e),function(e){var t,u,n,r,s,i;let a,o,c=e.settings?e.settings:e.tokenColors;const l=c?c.find((e=>!e.name&&!e.scope)):void 0;(null===(t=null==l?void 0:l.settings)||void 0===t?void 0:t.foreground)&&(a=l.settings.foreground);(null===(u=null==l?void 0:l.settings)||void 0===u?void 0:u.background)&&(o=l.settings.background);!a&&(null===(r=null===(n=e)||void 0===n?void 0:n.colors)||void 0===r?void 0:r["editor.foreground"])&&(a=e.colors["editor.foreground"]);!o&&(null===(i=null===(s=e)||void 0===s?void 0:s.colors)||void 0===i?void 0:i["editor.background"])&&(o=e.colors["editor.background"]);a||(a="light"===e.type?je:Ne);o||(o="light"===e.type?Pe:Re);return {fg:a,bg:o}}(e));var n;return e.include&&(u.include=e.include),e.tokenColors&&(u.settings=e.tokenColors,delete u.tokenColors),(n=u).settings||(n.settings=[]),n.settings[0]&&n.settings[0].settings&&!n.settings[0].scope||n.settings.unshift({settings:{foreground:n.fg,background:n.bg}}),u}const je="#333333",Ne="#bbbbbb",Pe="#fffffe",Re="#1e1e1e";class Te{constructor(e,t){this.languagesPath="languages/",this.languageMap={},this.scopeToLangMap={},this._onigLibPromise=e,this._onigLibName=t;}get onigLib(){return this._onigLibPromise}getOnigLibName(){return this._onigLibName}getLangRegistration(e){return this.languageMap[e]}async loadGrammar(e){const u=this.scopeToLangMap[e];if(!u)return null;if(u.grammar)return u.grammar;const n=await async function(e){return await Le(e)}(t.includes(u)?`${this.languagesPath}${u.path}`:u.path);return u.grammar=n,n}addLanguage(e){this.languageMap[e.id]=e,e.aliases&&e.aliases.forEach((t=>{this.languageMap[t]=e;})),this.scopeToLangMap[e.scopeName]=e;}}var Ie=R((function(e,t){e.exports=function(e){var t={};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}return u.m=e,u.c=t,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u(u.s=3)}([function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n=u(1),r=u(5),s=u(6),i=u(2),a="undefined"==typeof performance?function(){return Date.now()}:function(){return performance.now()};t.createGrammar=function(e,t,u,n,r,s){return new A(e,t,u,n,r,s)};var o=function(e){this.scopeName=e;};t.FullScopeDependency=o;var c=function(){function e(e,t){this.scopeName=e,this.include=t;}return e.prototype.toKey=function(){return this.scopeName+"#"+this.include},e}();t.PartialScopeDependency=c;var l=function(){function e(){this.full=[],this.partial=[],this.visitedRule=new Set,this._seenFull=new Set,this._seenPartial=new Set;}return e.prototype.add=function(e){e instanceof o?this._seenFull.has(e.scopeName)||(this._seenFull.add(e.scopeName),this.full.push(e)):this._seenPartial.has(e.toKey())||(this._seenPartial.add(e.toKey()),this.partial.push(e));},e}();function h(e,t,u,r,s){for(var i=0,a=r;i<a.length;i++){var l=a[i];if(!e.visitedRule.has(l)){e.visitedRule.add(l);var d=l.repository?n.mergeObjects({},s,l.repository):s;Array.isArray(l.patterns)&&h(e,t,u,l.patterns,d);var D=l.include;if(D)if("$base"===D||D===t.scopeName)f(e,t,t);else if("$self"===D||D===u.scopeName)f(e,t,u);else if("#"===D.charAt(0))p(e,t,u,D.substring(1),d);else {var g=D.indexOf("#");if(g>=0){var m=D.substring(0,g),C=D.substring(g+1);m===t.scopeName?p(e,t,t,C,d):m===u.scopeName?p(e,t,u,C,d):e.add(new c(m,D.substring(g+1)));}else e.add(new o(D));}}}}function p(e,t,u,n,r){void 0===r&&(r=u.repository),r&&r[n]&&h(e,t,u,[r[n]],r);}function f(e,t,u){if(u.patterns&&Array.isArray(u.patterns)&&h(e,t,u,u.patterns,u.repository),u.injections){var n=[];for(var r in u.injections)n.push(u.injections[r]);h(e,t,u,n,u.repository);}}function d(e,t){if(!e)return !1;if(e===t)return !0;var u=t.length;return e.length>u&&e.substr(0,u)===t&&"."===e[u]}function D(e,t){if(t.length<e.length)return !1;var u=0;return e.every((function(e){for(var n=u;n<t.length;n++)if(d(t[n],e))return u=n+1,!0;return !1}))}function g(e,t,u,n,i){for(var a=s.createMatchers(t,D),o=r.RuleFactory.getCompiledRuleId(u,n,i.repository),c=0,l=a;c<l.length;c++){var h=l[c];e.push({matcher:h.matcher,ruleId:o,grammar:i,priority:h.priority});}}t.ScopeDependencyCollector=l,t.collectSpecificDependencies=p,t.collectDependencies=f;var m=function(e,t,u,n){this.scopeName=e,this.languageId=t,this.tokenType=u,this.themeData=n;};t.ScopeMetadata=m;var C=function(){function e(t,u,n){if(this._initialLanguage=t,this._themeProvider=u,this._cache=new Map,this._defaultMetaData=new m("",this._initialLanguage,0,[this._themeProvider.getDefaults()]),this._embeddedLanguages=Object.create(null),n)for(var r=Object.keys(n),s=0,i=r.length;s<i;s++){var a=r[s],o=n[a];"number"==typeof o&&0!==o?this._embeddedLanguages[a]=o:console.warn("Invalid embedded language found at scope "+a+": <<"+o+">>");}var c=Object.keys(this._embeddedLanguages).map((function(t){return e._escapeRegExpCharacters(t)}));0===c.length?this._embeddedLanguagesRegex=null:(c.sort(),c.reverse(),this._embeddedLanguagesRegex=new RegExp("^(("+c.join(")|(")+"))($|\\.)",""));}return e.prototype.onDidChangeTheme=function(){this._cache=new Map,this._defaultMetaData=new m("",this._initialLanguage,0,[this._themeProvider.getDefaults()]);},e.prototype.getDefaultMetadata=function(){return this._defaultMetaData},e._escapeRegExpCharacters=function(e){return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},e.prototype.getMetadataForScope=function(t){if(null===t)return e._NULL_SCOPE_METADATA;var u=this._cache.get(t);return u||(u=this._doGetMetadataForScope(t),this._cache.set(t,u),u)},e.prototype._doGetMetadataForScope=function(e){var t=this._scopeToLanguage(e),u=this._toStandardTokenType(e),n=this._themeProvider.themeMatch(e);return new m(e,t,u,n)},e.prototype._scopeToLanguage=function(e){if(!e)return 0;if(!this._embeddedLanguagesRegex)return 0;var t=e.match(this._embeddedLanguagesRegex);return t&&(this._embeddedLanguages[t[1]]||0)||0},e.prototype._toStandardTokenType=function(t){var u=t.match(e.STANDARD_TOKEN_TYPE_REGEXP);if(!u)return 0;switch(u[1]){case"comment":return 1;case"string":return 2;case"regex":return 4;case"meta.embedded":return 8}throw new Error("Unexpected match for standard token type!")},e._NULL_SCOPE_METADATA=new m("",0,0,null),e.STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/,e}(),A=function(){function e(e,t,u,n,r,i){if(this._scopeMetadataProvider=new C(t,r,u),this._onigLib=i,this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=r,this._grammar=F(e,null),this._injections=null,this._tokenTypeMatchers=[],n)for(var a=0,o=Object.keys(n);a<o.length;a++)for(var c=o[a],l=0,h=s.createMatchers(c,D);l<h.length;l++){var p=h[l];this._tokenTypeMatchers.push({matcher:p.matcher,type:n[c]});}}return e.prototype.dispose=function(){for(var e=0,t=this._ruleId2desc;e<t.length;e++){var u=t[e];u&&u.dispose();}},e.prototype.createOnigScanner=function(e){return this._onigLib.createOnigScanner(e)},e.prototype.createOnigString=function(e){return this._onigLib.createOnigString(e)},e.prototype.onDidChangeTheme=function(){this._scopeMetadataProvider.onDidChangeTheme();},e.prototype.getMetadataForScope=function(e){return this._scopeMetadataProvider.getMetadataForScope(e)},e.prototype.getInjections=function(){var e=this;if(null===this._injections){this._injections=[];var t=this._grammar.injections;if(t)for(var u in t)g(this._injections,u,t[u],this,this._grammar);if(this._grammarRepository){var n=this._grammarRepository.injections(this._grammar.scopeName);n&&n.forEach((function(t){var u=e.getExternalGrammar(t);if(u){var n=u.injectionSelector;n&&g(e._injections,n,u,e,u);}}));}this._injections.sort((function(e,t){return e.priority-t.priority}));}return this._injections},e.prototype.registerRule=function(e){var t=++this._lastRuleId,u=e(t);return this._ruleId2desc[t]=u,u},e.prototype.getRule=function(e){return this._ruleId2desc[e]},e.prototype.getExternalGrammar=function(e,t){if(this._includedGrammars[e])return this._includedGrammars[e];if(this._grammarRepository){var u=this._grammarRepository.lookup(e);if(u)return this._includedGrammars[e]=F(u,t&&t.$base),this._includedGrammars[e]}return null},e.prototype.tokenizeLine=function(e,t){var u=this._tokenize(e,t,!1);return {tokens:u.lineTokens.getResult(u.ruleStack,u.lineLength),ruleStack:u.ruleStack}},e.prototype.tokenizeLine2=function(e,t){var u=this._tokenize(e,t,!0);return {tokens:u.lineTokens.getBinaryResult(u.ruleStack,u.lineLength),ruleStack:u.ruleStack}},e.prototype._tokenize=function(e,t,u){var n;if(-1===this._rootId&&(this._rootId=r.RuleFactory.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository)),t&&t!==x.NULL)n=!1,t.reset();else {n=!0;var s=this._scopeMetadataProvider.getDefaultMetadata(),i=s.themeData[0],a=B.set(0,s.languageId,s.tokenType,i.fontStyle,i.foreground,i.background),o=this.getRule(this._rootId).getName(null,null),c=this._scopeMetadataProvider.getMetadataForScope(o),l=w.mergeMetadata(a,null,c),h=new w(null,null===o?"unknown":o,l);t=new x(null,this._rootId,-1,-1,!1,null,h,h);}e+="\n";var p=this.createOnigString(e),f=p.content.length,d=new k(u,e,this._tokenTypeMatchers),D=b(this,p,n,0,t,d,!0);return y(p),{lineLength:f,lineTokens:d,ruleStack:D}},e}();function y(e){"function"==typeof e.dispose&&e.dispose();}function F(e,t){return (e=n.clone(e)).repository=e.repository||{},e.repository.$self={$vscodeTextmateLocation:e.$vscodeTextmateLocation,patterns:e.patterns,name:e.scopeName},e.repository.$base=t||e.repository.$self,e}function v(e,t,u,n,r,s,i){if(0!==s.length){for(var a=t.content,o=Math.min(s.length,i.length),c=[],l=i[0].end,h=0;h<o;h++){var p=s[h];if(null!==p){var f=i[h];if(0!==f.length){if(f.start>l)break;for(;c.length>0&&c[c.length-1].endPos<=f.start;)r.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop();if(c.length>0?r.produceFromScopes(c[c.length-1].scopes,f.start):r.produce(n,f.start),p.retokenizeCapturedWithRuleId){var d=p.getName(a,i),D=n.contentNameScopesList.push(e,d),g=p.getContentName(a,i),m=D.push(e,g),C=n.push(p.retokenizeCapturedWithRuleId,f.start,-1,!1,null,D,m),A=e.createOnigString(a.substring(0,f.end));b(e,A,u&&0===f.start,f.start,C,r,!1),y(A);}else {var F=p.getName(a,i);if(null!==F){var v=(c.length>0?c[c.length-1].scopes:n.contentNameScopesList).push(e,F);c.push(new L(v,f.end));}}}}}for(;c.length>0;)r.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos),c.pop();}}function E(e){for(var t=[],u=0,n=e.rules.length;u<n;u++)t.push("   - "+e.rules[u]+": "+e.debugRegExps[u]);return t.join("\n")}function _(e,t,u,n,r,s){var o=function(e,t,u,n,r,s){var o=r.getRule(e),c=o.compile(e,r.endRule,u,n===s),l=0;i.DebugFlags.InDebugMode&&(l=a());var h=c.scanner.findNextMatchSync(t,n);if(i.DebugFlags.InDebugMode){var p=a()-l;p>5&&console.warn("Rule "+o.debugName+" ("+o.id+") matching took "+p+" against '"+t+"'"),h&&console.log("matched rule id: "+c.rules[h.index]+" from "+h.captureIndices[0].start+" to "+h.captureIndices[0].end);}return h?{captureIndices:h.captureIndices,matchedRuleId:c.rules[h.index]}:null}(e,t,u,n,r,s),c=e.getInjections();if(0===c.length)return o;var l=function(e,t,u,n,r,s,a){for(var o,c=Number.MAX_VALUE,l=null,h=0,p=s.contentNameScopesList.generateScopes(),f=0,d=e.length;f<d;f++){var D=e[f];if(D.matcher(p)){var g=t.getRule(D.ruleId).compile(t,null,n,r===a),m=g.scanner.findNextMatchSync(u,r);if(i.DebugFlags.InDebugMode&&(console.log("  scanning for injections"),console.log(E(g))),m){var C=m.captureIndices[0].start;if(!(C>=c)&&(c=C,l=m.captureIndices,o=g.rules[m.index],h=D.priority,c===r))break}}}return l?{priorityMatch:-1===h,captureIndices:l,matchedRuleId:o}:null}(c,e,t,u,n,r,s);if(!l)return o;if(!o)return l;var h=o.captureIndices[0].start,p=l.captureIndices[0].start;return p<h||l.priorityMatch&&p===h?l:o}function b(e,t,u,n,s,a,o){var c=t.content.length,l=!1,h=-1;if(o){var p=function(e,t,u,n,s,a){for(var o=s.beginRuleCapturedEOL?0:-1,c=[],l=s;l;l=l.pop()){var h=l.getRule(e);h instanceof r.BeginWhileRule&&c.push({rule:h,stack:l});}for(var p=c.pop();p;p=c.pop()){var f=p.rule.compileWhile(e,p.stack.endRule,u,o===n),d=f.scanner.findNextMatchSync(t,n);if(i.DebugFlags.InDebugMode&&(console.log("  scanning for while rule"),console.log(E(f))),!d){i.DebugFlags.InDebugMode&&console.log("  popping "+p.rule.debugName+" - "+p.rule.debugWhileRegExp),s=p.stack.pop();break}if(-2!==f.rules[d.index]){s=p.stack.pop();break}d.captureIndices&&d.captureIndices.length&&(a.produce(p.stack,d.captureIndices[0].start),v(e,t,u,p.stack,a,p.rule.whileCaptures,d.captureIndices),a.produce(p.stack,d.captureIndices[0].end),o=d.captureIndices[0].end,d.captureIndices[0].end>n&&(n=d.captureIndices[0].end,u=!1));}return {stack:s,linePos:n,anchorPosition:o,isFirstLine:u}}(e,t,u,n,s,a);s=p.stack,n=p.linePos,u=p.isFirstLine,h=p.anchorPosition;}for(;!l;)f();function f(){i.DebugFlags.InDebugMode&&(console.log(""),console.log("@@scanNext "+n+": |"+t.content.substr(n).replace(/\n$/,"\\n")+"|"));var o=_(e,t,u,n,s,h);if(!o)return i.DebugFlags.InDebugMode&&console.log("  no more matches."),a.produce(s,c),void(l=!0);var p=o.captureIndices,f=o.matchedRuleId,d=!!(p&&p.length>0)&&p[0].end>n;if(-1===f){var D=s.getRule(e);i.DebugFlags.InDebugMode&&console.log("  popping "+D.debugName+" - "+D.debugEndRegExp),a.produce(s,p[0].start),s=s.setContentNameScopesList(s.nameScopesList),v(e,t,u,s,a,D.endCaptures,p),a.produce(s,p[0].end);var g=s;if(s=s.pop(),h=g.getAnchorPos(),!d&&g.getEnterPos()===n)return i.DebugFlags.InDebugMode&&console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),s=g,a.produce(s,c),void(l=!0)}else {var m=e.getRule(f);a.produce(s,p[0].start);var C=s,A=m.getName(t.content,p),y=s.contentNameScopesList.push(e,A);if(s=s.push(f,n,h,p[0].end===c,null,y,y),m instanceof r.BeginEndRule){var F=m;i.DebugFlags.InDebugMode&&console.log("  pushing "+F.debugName+" - "+F.debugBeginRegExp),v(e,t,u,s,a,F.beginCaptures,p),a.produce(s,p[0].end),h=p[0].end;var E=F.getContentName(t.content,p),b=y.push(e,E);if(s=s.setContentNameScopesList(b),F.endHasBackReferences&&(s=s.setEndRule(F.getEndWithResolvedBackReferences(t.content,p))),!d&&C.hasSameRuleAs(s))return i.DebugFlags.InDebugMode&&console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),s=s.pop(),a.produce(s,c),void(l=!0)}else if(m instanceof r.BeginWhileRule){if(F=m,i.DebugFlags.InDebugMode&&console.log("  pushing "+F.debugName),v(e,t,u,s,a,F.beginCaptures,p),a.produce(s,p[0].end),h=p[0].end,E=F.getContentName(t.content,p),b=y.push(e,E),s=s.setContentNameScopesList(b),F.whileHasBackReferences&&(s=s.setEndRule(F.getWhileWithResolvedBackReferences(t.content,p))),!d&&C.hasSameRuleAs(s))return i.DebugFlags.InDebugMode&&console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),s=s.pop(),a.produce(s,c),void(l=!0)}else {var B=m;if(i.DebugFlags.InDebugMode&&console.log("  matched "+B.debugName+" - "+B.debugMatchRegExp),v(e,t,u,s,a,B.captures,p),a.produce(s,p[0].end),s=s.pop(),!d)return i.DebugFlags.InDebugMode&&console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),s=s.safePop(),a.produce(s,c),void(l=!0)}}p[0].end>n&&(n=p[0].end,u=!1);}return s}t.Grammar=A;var B=function(){function e(){}return e.toBinaryStr=function(e){for(var t=e.toString(2);t.length<32;)t="0"+t;return t},e.printMetadata=function(t){var u=e.getLanguageId(t),n=e.getTokenType(t),r=e.getFontStyle(t),s=e.getForeground(t),i=e.getBackground(t);console.log({languageId:u,tokenType:n,fontStyle:r,foreground:s,background:i});},e.getLanguageId=function(e){return (255&e)>>>0},e.getTokenType=function(e){return (1792&e)>>>8},e.getFontStyle=function(e){return (14336&e)>>>11},e.getForeground=function(e){return (8372224&e)>>>14},e.getBackground=function(e){return (4286578688&e)>>>23},e.set=function(t,u,n,r,s,i){var a=e.getLanguageId(t),o=e.getTokenType(t),c=e.getFontStyle(t),l=e.getForeground(t),h=e.getBackground(t);return 0!==u&&(a=u),0!==n&&(o=8===n?0:n),-1!==r&&(c=r),0!==s&&(l=s),0!==i&&(h=i),(a<<0|o<<8|c<<11|l<<14|h<<23)>>>0},e}();t.StackElementMetadata=B;var w=function(){function e(e,t,u){this.parent=e,this.scope=t,this.metadata=u;}return e._equals=function(e,t){for(;;){if(e===t)return !0;if(!e&&!t)return !0;if(!e||!t)return !1;if(e.scope!==t.scope||e.metadata!==t.metadata)return !1;e=e.parent,t=t.parent;}},e.prototype.equals=function(t){return e._equals(this,t)},e._matchesScope=function(e,t,u){return t===e||e.substring(0,u.length)===u},e._matches=function(e,t){if(null===t)return !0;for(var u=t.length,n=0,r=t[n],s=r+".";e;){if(this._matchesScope(e.scope,r,s)){if(++n===u)return !0;s=(r=t[n])+".";}e=e.parent;}return !1},e.mergeMetadata=function(e,t,u){if(null===u)return e;var n=-1,r=0,s=0;if(null!==u.themeData)for(var i=0,a=u.themeData.length;i<a;i++){var o=u.themeData[i];if(this._matches(t,o.parentScopes)){n=o.fontStyle,r=o.foreground,s=o.background;break}}return B.set(e,u.languageId,u.tokenType,n,r,s)},e._push=function(t,u,n){for(var r=0,s=n.length;r<s;r++){var i=n[r],a=u.getMetadataForScope(i),o=e.mergeMetadata(t.metadata,t,a);t=new e(t,i,o);}return t},e.prototype.push=function(t,u){return null===u?this:u.indexOf(" ")>=0?e._push(this,t,u.split(/ /g)):e._push(this,t,[u])},e._generateScopes=function(e){for(var t=[],u=0;e;)t[u++]=e.scope,e=e.parent;return t.reverse(),t},e.prototype.generateScopes=function(){return e._generateScopes(this)},e}();t.ScopeListElement=w;var x=function(){function e(e,t,u,n,r,s,i,a){this.parent=e,this.depth=this.parent?this.parent.depth+1:1,this.ruleId=t,this._enterPos=u,this._anchorPos=n,this.beginRuleCapturedEOL=r,this.endRule=s,this.nameScopesList=i,this.contentNameScopesList=a;}return e._structuralEquals=function(e,t){for(;;){if(e===t)return !0;if(!e&&!t)return !0;if(!e||!t)return !1;if(e.depth!==t.depth||e.ruleId!==t.ruleId||e.endRule!==t.endRule)return !1;e=e.parent,t=t.parent;}},e._equals=function(e,t){return e===t||!!this._structuralEquals(e,t)&&e.contentNameScopesList.equals(t.contentNameScopesList)},e.prototype.clone=function(){return this},e.prototype.equals=function(t){return null!==t&&e._equals(this,t)},e._reset=function(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent;},e.prototype.reset=function(){e._reset(this);},e.prototype.pop=function(){return this.parent},e.prototype.safePop=function(){return this.parent?this.parent:this},e.prototype.push=function(t,u,n,r,s,i,a){return new e(this,t,u,n,r,s,i,a)},e.prototype.getEnterPos=function(){return this._enterPos},e.prototype.getAnchorPos=function(){return this._anchorPos},e.prototype.getRule=function(e){return e.getRule(this.ruleId)},e.prototype._writeString=function(e,t){return this.parent&&(t=this.parent._writeString(e,t)),e[t++]="("+this.ruleId+", TODO-"+this.nameScopesList+", TODO-"+this.contentNameScopesList+")",t},e.prototype.toString=function(){var e=[];return this._writeString(e,0),"["+e.join(",")+"]"},e.prototype.setContentNameScopesList=function(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)},e.prototype.setEndRule=function(t){return this.endRule===t?this:new e(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,t,this.nameScopesList,this.contentNameScopesList)},e.prototype.hasSameRuleAs=function(e){return this.ruleId===e.ruleId},e.NULL=new e(null,0,0,0,!1,null,null,null),e}();t.StackElement=x;var L=function(e,t){this.scopes=e,this.endPos=t;};t.LocalStackElement=L;var k=function(){function e(e,t,u){this._emitBinaryTokens=e,this._tokenTypeOverrides=u,i.DebugFlags.InDebugMode?this._lineText=t:this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0;}return e.prototype.produce=function(e,t){this.produceFromScopes(e.contentNameScopesList,t);},e.prototype.produceFromScopes=function(e,t){if(!(this._lastTokenEndIndex>=t)){if(this._emitBinaryTokens){for(var u=e.metadata,n=0,r=this._tokenTypeOverrides;n<r.length;n++){var s=r[n];s.matcher(e.generateScopes())&&(u=B.set(u,0,S(s.type),-1,0,0));}return this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===u||(this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(u)),void(this._lastTokenEndIndex=t)}var a=e.generateScopes();if(i.DebugFlags.InDebugMode){console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,t).replace(/\n$/,"\\n")+"|");for(var o=0;o<a.length;o++)console.log("      * "+a[o]);}this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:t,scopes:a}),this._lastTokenEndIndex=t;}},e.prototype.getResult=function(e,t){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===t-1&&this._tokens.pop(),0===this._tokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._tokens[this._tokens.length-1].startIndex=0),this._tokens},e.prototype.getBinaryResult=function(e,t){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===t-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),0===this._binaryTokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._binaryTokens[this._binaryTokens.length-2]=0);for(var u=new Uint32Array(this._binaryTokens.length),n=0,r=this._binaryTokens.length;n<r;n++)u[n]=this._binaryTokens[n];return u},e}();function S(e){switch(e){case 4:return 4;case 2:return 2;case 1:return 1;case 0:default:return 8}}},function(e,t,u){function n(e){return Array.isArray(e)?function(e){for(var t=[],u=0,r=e.length;u<r;u++)t[u]=n(e[u]);return t}(e):"object"==typeof e?function(e){var t={};for(var u in e)t[u]=n(e[u]);return t}(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.clone=function(e){return n(e)},t.mergeObjects=function(e){for(var t=[],u=1;u<arguments.length;u++)t[u-1]=arguments[u];return t.forEach((function(t){for(var u in t)e[u]=t[u];})),e},t.basename=function e(t){var u=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return 0===u?t:~u==t.length-1?e(t.substring(0,t.length-1)):t.substr(1+~u)};var r=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/,s=function(){function e(){}return e.hasCaptures=function(e){return null!==e&&r.test(e)},e.replaceCaptures=function(e,t,u){return e.replace(r,(function(e,n,r,s){var i=u[parseInt(n||r,10)];if(!i)return e;for(var a=t.substring(i.start,i.end);"."===a[0];)a=a.substring(1);switch(s){case"downcase":return a.toLowerCase();case"upcase":return a.toUpperCase();default:return a}}))},e}();t.RegexSource=s;},function(e,t,u){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.DebugFlags={InDebugMode:void 0!==e&&!!e.env.VSCODE_TEXTMATE_DEBUG};}).call(this,u(7));},function(e,t,u){var n=this&&this.__awaiter||function(e,t,u,n){return new(u||(u=Promise))((function(r,s){function i(e){try{o(n.next(e));}catch(e){s(e);}}function a(e){try{o(n.throw(e));}catch(e){s(e);}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof u?t:new u((function(e){e(t);}))).then(i,a);}o((n=n.apply(e,t||[])).next());}))},r=this&&this.__generator||function(e,t){var u,n,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i);}catch(e){s=[6,e],n=0;}finally{u=r=0;}if(5&s[0])throw s[1];return {value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(4),i=u(8),a=u(11),o=u(0),c=function(){function e(e){this._options=e,this._syncRegistry=new s.SyncRegistry(a.Theme.createFromRawTheme(e.theme,e.colorMap),e.onigLib),this._ensureGrammarCache=new Map;}return e.prototype.dispose=function(){this._syncRegistry.dispose();},e.prototype.setTheme=function(e,t){this._syncRegistry.setTheme(a.Theme.createFromRawTheme(e,t));},e.prototype.getColorMap=function(){return this._syncRegistry.getColorMap()},e.prototype.loadGrammarWithEmbeddedLanguages=function(e,t,u){return this.loadGrammarWithConfiguration(e,t,{embeddedLanguages:u})},e.prototype.loadGrammarWithConfiguration=function(e,t,u){return this._loadGrammar(e,t,u.embeddedLanguages,u.tokenTypes)},e.prototype.loadGrammar=function(e){return this._loadGrammar(e,0,null,null)},e.prototype._doLoadSingleGrammar=function(e){return n(this,void 0,void 0,(function(){var t,u;return r(this,(function(n){switch(n.label){case 0:return [4,this._options.loadGrammar(e)];case 1:return (t=n.sent())&&(u="function"==typeof this._options.getInjections?this._options.getInjections(e):void 0,this._syncRegistry.addGrammar(t,u)),[2]}}))}))},e.prototype._loadSingleGrammar=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return this._ensureGrammarCache.has(e)||this._ensureGrammarCache.set(e,this._doLoadSingleGrammar(e)),[2,this._ensureGrammarCache.get(e)]}))}))},e.prototype._collectDependenciesForDep=function(e,t,u){var n=this._syncRegistry.lookup(u.scopeName);if(n){u instanceof o.FullScopeDependency?o.collectDependencies(t,this._syncRegistry.lookup(e),n):o.collectSpecificDependencies(t,this._syncRegistry.lookup(e),n,u.include);var r=this._syncRegistry.injections(u.scopeName);if(r)for(var s=0,i=r;s<i.length;s++){var a=i[s];t.add(new o.FullScopeDependency(a));}}else if(u.scopeName===e)throw new Error("No grammar provided for <"+e+">")},e.prototype._loadGrammar=function(e,t,u,s){return n(this,void 0,void 0,(function(){var n,i,a,c,l,h,p,f,d,D,g,m,C=this;return r(this,(function(r){switch(r.label){case 0:n=new Set,i=new Set,n.add(e),a=[new o.FullScopeDependency(e)],r.label=1;case 1:return a.length>0?(c=a,a=[],[4,Promise.all(c.map((function(e){return C._loadSingleGrammar(e.scopeName)})))]):[3,3];case 2:for(r.sent(),l=new o.ScopeDependencyCollector,h=0,p=c;h<p.length;h++)m=p[h],this._collectDependenciesForDep(e,l,m);for(f=0,d=l.full;f<d.length;f++)m=d[f],n.has(m.scopeName)||(n.add(m.scopeName),a.push(m));for(D=0,g=l.partial;D<g.length;D++)m=g[D],n.has(m.scopeName)||i.has(m.toKey())||(i.add(m.toKey()),a.push(m));return [3,1];case 3:return [2,this.grammarForScopeName(e,t,u,s)]}}))}))},e.prototype.addGrammar=function(e,t,u,s){return void 0===t&&(t=[]),void 0===u&&(u=0),void 0===s&&(s=null),n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return this._syncRegistry.addGrammar(e,t),[4,this.grammarForScopeName(e.scopeName,u,s)];case 1:return [2,n.sent()]}}))}))},e.prototype.grammarForScopeName=function(e,t,u,n){return void 0===t&&(t=0),void 0===u&&(u=null),void 0===n&&(n=null),this._syncRegistry.grammarForScopeName(e,t,u,n)},e}();t.Registry=c,t.INITIAL=o.StackElement.NULL,t.parseRawGrammar=i.parseRawGrammar;},function(e,t,u){var n=this&&this.__awaiter||function(e,t,u,n){return new(u||(u=Promise))((function(r,s){function i(e){try{o(n.next(e));}catch(e){s(e);}}function a(e){try{o(n.throw(e));}catch(e){s(e);}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof u?t:new u((function(e){e(t);}))).then(i,a);}o((n=n.apply(e,t||[])).next());}))},r=this&&this.__generator||function(e,t){var u,n,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i);}catch(e){s=[6,e],n=0;}finally{u=r=0;}if(5&s[0])throw s[1];return {value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(0),i=function(){function e(e,t){this._theme=e,this._grammars={},this._rawGrammars={},this._injectionGrammars={},this._onigLibPromise=t;}return e.prototype.dispose=function(){for(var e in this._grammars)this._grammars.hasOwnProperty(e)&&this._grammars[e].dispose();},e.prototype.setTheme=function(e){var t=this;this._theme=e,Object.keys(this._grammars).forEach((function(e){t._grammars[e].onDidChangeTheme();}));},e.prototype.getColorMap=function(){return this._theme.getColorMap()},e.prototype.addGrammar=function(e,t){this._rawGrammars[e.scopeName]=e,t&&(this._injectionGrammars[e.scopeName]=t);},e.prototype.lookup=function(e){return this._rawGrammars[e]},e.prototype.injections=function(e){return this._injectionGrammars[e]},e.prototype.getDefaults=function(){return this._theme.getDefaults()},e.prototype.themeMatch=function(e){return this._theme.match(e)},e.prototype.grammarForScopeName=function(e,t,u,i){return n(this,void 0,void 0,(function(){var n,a,o,c,l;return r(this,(function(r){switch(r.label){case 0:return this._grammars[e]?[3,2]:(n=this._rawGrammars[e])?(a=this._grammars,o=e,c=s.createGrammar,l=[n,t,u,i,this],[4,this._onigLibPromise]):[2,null];case 1:a[o]=c.apply(void 0,l.concat([r.sent()])),r.label=2;case 2:return [2,this._grammars[e]]}}))}))},e}();t.SyncRegistry=i;},function(e,t,u){var n,r=this&&this.__extends||(n=function(e,t){return (n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);})(e,t)},function(e,t){function u(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u);});Object.defineProperty(t,"__esModule",{value:!0});var s=u(1),i=/\\(\d+)/,a=/\\(\d+)/g,o=function(){function e(e,t,u){this.debugRegExps=t,this.rules=u,this.scanner=e.createOnigScanner(t);}return e.prototype.dispose=function(){"function"==typeof this.scanner.dispose&&this.scanner.dispose();},e}();t.CompiledRule=o;var c=function(){function e(e,t,u,n){this.$location=e,this.id=t,this._name=u||null,this._nameIsCapturing=s.RegexSource.hasCaptures(this._name),this._contentName=n||null,this._contentNameIsCapturing=s.RegexSource.hasCaptures(this._contentName);}return Object.defineProperty(e.prototype,"debugName",{get:function(){var e=this.$location?s.basename(this.$location.filename)+":"+this.$location.line:"unknown";return this.constructor.name+"#"+this.id+" @ "+e},enumerable:!0,configurable:!0}),e.prototype.getName=function(e,t){return this._nameIsCapturing&&null!==this._name&&null!==e&&null!==t?s.RegexSource.replaceCaptures(this._name,e,t):this._name},e.prototype.getContentName=function(e,t){return this._contentNameIsCapturing&&null!==this._contentName?s.RegexSource.replaceCaptures(this._contentName,e,t):this._contentName},e}();t.Rule=c;var l=function(e){function t(t,u,n,r,s){var i=e.call(this,t,u,n,r)||this;return i.retokenizeCapturedWithRuleId=s,i}return r(t,e),t.prototype.dispose=function(){},t.prototype.collectPatternsRecursive=function(e,t,u){throw new Error("Not supported!")},t.prototype.compile=function(e,t,u,n){throw new Error("Not supported!")},t}(c);t.CaptureRule=l;var h=function(){function e(e,t,u){if(void 0===u&&(u=!0),u)if(e){for(var n=e.length,r=0,s=[],a=!1,o=0;o<n;o++)if("\\"===e.charAt(o)&&o+1<n){var c=e.charAt(o+1);"z"===c?(s.push(e.substring(r,o)),s.push("$(?!\\n)(?<!\\n)"),r=o+2):"A"!==c&&"G"!==c||(a=!0),o++;}this.hasAnchor=a,0===r?this.source=e:(s.push(e.substring(r,n)),this.source=s.join(""));}else this.hasAnchor=!1,this.source=e;else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=t,this.hasBackReferences=i.test(this.source);}return e.prototype.clone=function(){return new e(this.source,this.ruleId,!0)},e.prototype.setSource=function(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()));},e.prototype.resolveBackReferences=function(e,t){var u=t.map((function(t){return e.substring(t.start,t.end)}));return a.lastIndex=0,this.source.replace(a,(function(e,t){return (u[parseInt(t,10)]||"").replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")}))},e.prototype._buildAnchorCache=function(){var e,t,u,n,r=[],s=[],i=[],a=[];for(e=0,t=this.source.length;e<t;e++)u=this.source.charAt(e),r[e]=u,s[e]=u,i[e]=u,a[e]=u,"\\"===u&&e+1<t&&("A"===(n=this.source.charAt(e+1))?(r[e+1]="￿",s[e+1]="￿",i[e+1]="A",a[e+1]="A"):"G"===n?(r[e+1]="￿",s[e+1]="G",i[e+1]="￿",a[e+1]="G"):(r[e+1]=n,s[e+1]=n,i[e+1]=n,a[e+1]=n),e++);return {A0_G0:r.join(""),A0_G1:s.join(""),A1_G0:i.join(""),A1_G1:a.join("")}},e.prototype.resolveAnchors=function(e,t){return this.hasAnchor&&this._anchorCache?e?t?this._anchorCache.A1_G1:this._anchorCache.A1_G0:t?this._anchorCache.A0_G1:this._anchorCache.A0_G0:this.source},e}();t.RegExpSource=h;var p=function(){function e(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null};}return e.prototype.dispose=function(){this._disposeCaches();},e.prototype._disposeCaches=function(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null);},e.prototype.push=function(e){this._items.push(e),this._hasAnchors=this._hasAnchors||e.hasAnchor;},e.prototype.unshift=function(e){this._items.unshift(e),this._hasAnchors=this._hasAnchors||e.hasAnchor;},e.prototype.length=function(){return this._items.length},e.prototype.setSource=function(e,t){this._items[e].source!==t&&(this._disposeCaches(),this._items[e].setSource(t));},e.prototype.compile=function(e,t,u){if(this._hasAnchors)return t?u?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(e,t,u)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(e,t,u)),this._anchorCache.A1_G0):u?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(e,t,u)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(e,t,u)),this._anchorCache.A0_G0);if(!this._cached){var n=this._items.map((function(e){return e.source}));this._cached=new o(e,n,this._items.map((function(e){return e.ruleId})));}return this._cached},e.prototype._resolveAnchors=function(e,t,u){var n=this._items.map((function(e){return e.resolveAnchors(t,u)}));return new o(e,n,this._items.map((function(e){return e.ruleId})))},e}();t.RegExpSourceList=p;var f=function(e){function t(t,u,n,r,s){var i=e.call(this,t,u,n,null)||this;return i._match=new h(r,i.id),i.captures=s,i._cachedCompiledPatterns=null,i}return r(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);},Object.defineProperty(t.prototype,"debugMatchRegExp",{get:function(){return ""+this._match.source},enumerable:!0,configurable:!0}),t.prototype.collectPatternsRecursive=function(e,t,u){t.push(this._match);},t.prototype.compile=function(e,t,u,n){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0)),this._cachedCompiledPatterns.compile(e,u,n)},t}(c);t.MatchRule=f;var d=function(e){function t(t,u,n,r,s){var i=e.call(this,t,u,n,r)||this;return i.patterns=s.patterns,i.hasMissingPatterns=s.hasMissingPatterns,i._cachedCompiledPatterns=null,i}return r(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);},t.prototype.collectPatternsRecursive=function(e,t,u){var n,r;for(n=0,r=this.patterns.length;n<r;n++)e.getRule(this.patterns[n]).collectPatternsRecursive(e,t,!1);},t.prototype.compile=function(e,t,u,n){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0)),this._cachedCompiledPatterns.compile(e,u,n)},t}(c);t.IncludeOnlyRule=d;var D=function(e){function t(t,u,n,r,s,i,a,o,c,l){var p=e.call(this,t,u,n,r)||this;return p._begin=new h(s,p.id),p.beginCaptures=i,p._end=new h(a||"￿",-1),p.endHasBackReferences=p._end.hasBackReferences,p.endCaptures=o,p.applyEndPatternLast=c||!1,p.patterns=l.patterns,p.hasMissingPatterns=l.hasMissingPatterns,p._cachedCompiledPatterns=null,p}return r(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);},Object.defineProperty(t.prototype,"debugBeginRegExp",{get:function(){return ""+this._begin.source},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"debugEndRegExp",{get:function(){return ""+this._end.source},enumerable:!0,configurable:!0}),t.prototype.getEndWithResolvedBackReferences=function(e,t){return this._end.resolveBackReferences(e,t)},t.prototype.collectPatternsRecursive=function(e,t,u){if(u){var n,r=void 0;for(r=0,n=this.patterns.length;r<n;r++)e.getRule(this.patterns[r]).collectPatternsRecursive(e,t,!1);}else t.push(this._begin);},t.prototype.compile=function(e,t,u,n){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0),this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)),this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,t):this._cachedCompiledPatterns.setSource(0,t)),this._cachedCompiledPatterns.compile(e,u,n)},t}(c);t.BeginEndRule=D;var g=function(e){function t(t,u,n,r,s,i,a,o,c){var l=e.call(this,t,u,n,r)||this;return l._begin=new h(s,l.id),l.beginCaptures=i,l.whileCaptures=o,l._while=new h(a,-2),l.whileHasBackReferences=l._while.hasBackReferences,l.patterns=c.patterns,l.hasMissingPatterns=c.hasMissingPatterns,l._cachedCompiledPatterns=null,l._cachedCompiledWhilePatterns=null,l}return r(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null);},Object.defineProperty(t.prototype,"debugBeginRegExp",{get:function(){return ""+this._begin.source},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"debugWhileRegExp",{get:function(){return ""+this._while.source},enumerable:!0,configurable:!0}),t.prototype.getWhileWithResolvedBackReferences=function(e,t){return this._while.resolveBackReferences(e,t)},t.prototype.collectPatternsRecursive=function(e,t,u){if(u){var n,r=void 0;for(r=0,n=this.patterns.length;r<n;r++)e.getRule(this.patterns[r]).collectPatternsRecursive(e,t,!1);}else t.push(this._begin);},t.prototype.compile=function(e,t,u,n){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0)),this._cachedCompiledPatterns.compile(e,u,n)},t.prototype.compileWhile=function(e,t,u,n){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new p,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,t||"￿"),this._cachedCompiledWhilePatterns.compile(e,u,n)},t}(c);t.BeginWhileRule=g;var m=function(){function e(){}return e.createCaptureRule=function(e,t,u,n,r){return e.registerRule((function(e){return new l(t,e,u,n,r)}))},e.getCompiledRuleId=function(t,u,n){return t.id||u.registerRule((function(r){if(t.id=r,t.match)return new f(t.$vscodeTextmateLocation,t.id,t.name,t.match,e._compileCaptures(t.captures,u,n));if(void 0===t.begin){t.repository&&(n=s.mergeObjects({},n,t.repository));var i=t.patterns;return void 0===i&&t.include&&(i=[{include:t.include}]),new d(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,e._compilePatterns(i,u,n))}return t.while?new g(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,e._compileCaptures(t.beginCaptures||t.captures,u,n),t.while,e._compileCaptures(t.whileCaptures||t.captures,u,n),e._compilePatterns(t.patterns,u,n)):new D(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,e._compileCaptures(t.beginCaptures||t.captures,u,n),t.end,e._compileCaptures(t.endCaptures||t.captures,u,n),t.applyEndPatternLast,e._compilePatterns(t.patterns,u,n))})),t.id},e._compileCaptures=function(t,u,n){var r=[];if(t){var s=0;for(var i in t)"$vscodeTextmateLocation"!==i&&(o=parseInt(i,10))>s&&(s=o);for(var a=0;a<=s;a++)r[a]=null;for(var i in t)if("$vscodeTextmateLocation"!==i){var o=parseInt(i,10),c=0;t[i].patterns&&(c=e.getCompiledRuleId(t[i],u,n)),r[o]=e.createCaptureRule(u,t[i].$vscodeTextmateLocation,t[i].name,t[i].contentName,c);}}return r},e._compilePatterns=function(t,u,n){var r=[];if(t)for(var s=0,i=t.length;s<i;s++){var a=t[s],o=-1;if(a.include)if("#"===a.include.charAt(0)){var c=n[a.include.substr(1)];c&&(o=e.getCompiledRuleId(c,u,n));}else if("$base"===a.include||"$self"===a.include)o=e.getCompiledRuleId(n[a.include],u,n);else {var l=null,h=null,p=a.include.indexOf("#");p>=0?(l=a.include.substring(0,p),h=a.include.substring(p+1)):l=a.include;var f=u.getExternalGrammar(l,n);if(f)if(h){var m=f.repository[h];m&&(o=e.getCompiledRuleId(m,u,f.repository));}else o=e.getCompiledRuleId(f.repository.$self,u,f.repository);}else o=e.getCompiledRuleId(a,u,n);if(-1!==o){var C=u.getRule(o),A=!1;if((C instanceof d||C instanceof D||C instanceof g)&&C.hasMissingPatterns&&0===C.patterns.length&&(A=!0),A)continue;r.push(o);}}return {patterns:r,hasMissingPatterns:(t?t.length:0)!==r.length}},e}();t.RuleFactory=m;},function(e,t,u){function n(e){return !!e&&!!e.match(/[\w\.:]+/)}Object.defineProperty(t,"__esModule",{value:!0}),t.createMatchers=function(e,t){for(var u,r,s,i=[],a=(s=(r=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(u=e),{next:function(){if(!s)return null;var e=s[0];return s=r.exec(u),e}}),o=a.next();null!==o;){var c=0;if(2===o.length&&":"===o.charAt(1)){switch(o.charAt(0)){case"R":c=1;break;case"L":c=-1;break;default:console.log("Unknown priority "+o+" in scope selector");}o=a.next();}var l=p();if(i.push({matcher:l,priority:c}),","!==o)break;o=a.next();}return i;function h(){if("-"===o){o=a.next();var e=h();return function(t){return !!e&&!e(t)}}if("("===o){o=a.next();var u=function(){for(var e=[],t=p();t&&(e.push(t),"|"===o||","===o);){do{o=a.next();}while("|"===o||","===o);t=p();}return function(t){return e.some((function(e){return e(t)}))}}();return ")"===o&&(o=a.next()),u}if(n(o)){var r=[];do{r.push(o),o=a.next();}while(n(o));return function(e){return t(r,e)}}return null}function p(){for(var e=[],t=h();t;)e.push(t),t=h();return function(t){return e.every((function(e){return e(t)}))}}};},function(e,t){var u,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(u===setTimeout)return setTimeout(e,0);if((u===s||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}!function(){try{u="function"==typeof setTimeout?setTimeout:s;}catch(e){u=s;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(e){n=i;}}();var o,c=[],l=!1,h=-1;function p(){l&&o&&(l=!1,o.length?c=o.concat(c):h=-1,c.length&&f());}function f(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(o=c,c=[];++h<t;)o&&o[h].run();h=-1,t=c.length;}o=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function d(e,t){this.fun=e,this.array=t;}function D(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var u=1;u<arguments.length;u++)t[u-1]=arguments[u];c.push(new d(e,t)),1!==c.length||l||a(f);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=D,r.addListener=D,r.once=D,r.off=D,r.removeListener=D,r.removeAllListeners=D,r.emit=D,r.prependListener=D,r.prependOnceListener=D,r.listeners=function(e){return []},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n=u(9),r=u(2),s=u(10);t.parseRawGrammar=function(e,t){return void 0===t&&(t=null),null!==t&&/\.json$/.test(t)?function(e,t){return r.DebugFlags.InDebugMode?s.parse(e,t,!0):JSON.parse(e)}(e,t):function(e,t){return r.DebugFlags.InDebugMode?n.parseWithLocation(e,t,"$vscodeTextmateLocation"):n.parse(e)}(e,t)};},function(e,t,u){function n(e,t,u){var n=e.length,r=0,s=1,i=0;function a(t){if(null===u)r+=t;else for(;t>0;)10===e.charCodeAt(r)?(r++,s++,i=0):(r++,i++),t--;}function o(e){null===u?r=e:a(e-r);}function c(){for(;r<n;){var t=e.charCodeAt(r);if(32!==t&&9!==t&&13!==t&&10!==t)break;a(1);}}function l(t){return e.substr(r,t.length)===t&&(a(t.length),!0)}function h(t){var u=e.indexOf(t,r);o(-1!==u?u+t.length:n);}function p(t){var u=e.indexOf(t,r);if(-1!==u){var s=e.substring(r,u);return o(u+t.length),s}return s=e.substr(r),o(n),s}n>0&&65279===e.charCodeAt(0)&&(r=1);var f=0,d=null,D=[],g=[],m=null;function C(e,t){D.push(f),g.push(d),f=e,d=t;}function A(){if(0===D.length)return y("illegal state stack");f=D.pop(),d=g.pop();}function y(t){throw new Error("Near offset "+r+": "+t+" ~~~"+e.substr(r,50)+"~~~")}var F,v,E,_=function(){if(null===m)return y("missing <key>");var e={};null!==u&&(e[u]={filename:t,line:s,char:i}),d[m]=e,m=null,C(1,e);},b=function(){if(null===m)return y("missing <key>");var e=[];d[m]=e,m=null,C(2,e);},B=function(){var e={};null!==u&&(e[u]={filename:t,line:s,char:i}),d.push(e),C(1,e);},w=function(){var e=[];d.push(e),C(2,e);};function x(){if(1!==f)return y("unexpected </dict>");A();}function L(){return 1===f||2!==f?y("unexpected </array>"):void A()}function k(e){if(1===f){if(null===m)return y("missing <key>");d[m]=e,m=null;}else 2===f?d.push(e):d=e;}function S(e){if(isNaN(e))return y("cannot parse float");if(1===f){if(null===m)return y("missing <key>");d[m]=e,m=null;}else 2===f?d.push(e):d=e;}function j(e){if(isNaN(e))return y("cannot parse integer");if(1===f){if(null===m)return y("missing <key>");d[m]=e,m=null;}else 2===f?d.push(e):d=e;}function N(e){if(1===f){if(null===m)return y("missing <key>");d[m]=e,m=null;}else 2===f?d.push(e):d=e;}function P(e){if(1===f){if(null===m)return y("missing <key>");d[m]=e,m=null;}else 2===f?d.push(e):d=e;}function R(e){if(1===f){if(null===m)return y("missing <key>");d[m]=e,m=null;}else 2===f?d.push(e):d=e;}function T(e){if(e.isClosed)return "";var t=p("</");return h(">"),t.replace(/&#([0-9]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,10))})).replace(/&#x([0-9a-f]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,16))})).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,(function(e){switch(e){case"&amp;":return "&";case"&lt;":return "<";case"&gt;":return ">";case"&quot;":return '"';case"&apos;":return "'"}return e}))}for(;r<n&&(c(),!(r>=n));){var I=e.charCodeAt(r);if(a(1),60!==I)return y("expected <");if(r>=n)return y("unexpected end of input");var M=e.charCodeAt(r);if(63!==M)if(33!==M){if(47===M){if(a(1),c(),l("plist")){h(">");continue}if(l("dict")){h(">"),x();continue}if(l("array")){h(">"),L();continue}return y("unexpected closed tag")}var O=(v=void 0,E=void 0,E=!1,47===(v=p(">")).charCodeAt(v.length-1)&&(E=!0,v=v.substring(0,v.length-1)),{name:v.trim(),isClosed:E});switch(O.name){case"dict":1===f?_():2===f?B():(d={},null!==u&&(d[u]={filename:t,line:s,char:i}),C(1,d)),O.isClosed&&x();continue;case"array":1===f?b():2===f?w():C(2,d=[]),O.isClosed&&L();continue;case"key":F=T(O),1!==f?y("unexpected <key>"):null!==m?y("too many <key>"):m=F;continue;case"string":k(T(O));continue;case"real":S(parseFloat(T(O)));continue;case"integer":j(parseInt(T(O),10));continue;case"date":N(new Date(T(O)));continue;case"data":P(T(O));continue;case"true":T(O),R(!0);continue;case"false":T(O),R(!1);continue}if(!/^plist/.test(O.name))return y("unexpected opened tag "+O.name)}else {if(a(1),l("--")){h("--\x3e");continue}h(">");}else a(1),h("?>");}return d}Object.defineProperty(t,"__esModule",{value:!0}),t.parseWithLocation=function(e,t,u){return n(e,t,u)},t.parse=function(e){return n(e,null,null)};},function(e,t,u){function n(e,t){throw new Error("Near offset "+e.pos+": "+t+" ~~~"+e.source.substr(e.pos,50)+"~~~")}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=function(e,t,u){var a=new r(e),o=new s,c=0,l=null,h=[],p=[];function f(){h.push(c),p.push(l);}function d(){c=h.pop(),l=p.pop();}function D(e){n(a,e);}for(;i(a,o);){if(0===c){if(null!==l&&D("too many constructs in root"),3===o.type){l={},u&&(l.$vscodeTextmateLocation=o.toLocation(t)),f(),c=1;continue}if(2===o.type){l=[],f(),c=4;continue}D("unexpected token in root");}if(2===c){if(5===o.type){d();continue}if(7===o.type){c=3;continue}D("expected , or }");}if(1===c||3===c){if(1===c&&5===o.type){d();continue}if(1===o.type){var g=o.value;if(i(a,o)&&6===o.type||D("expected colon"),i(a,o)||D("expected value"),c=2,1===o.type){l[g]=o.value;continue}if(8===o.type){l[g]=null;continue}if(9===o.type){l[g]=!0;continue}if(10===o.type){l[g]=!1;continue}if(11===o.type){l[g]=parseFloat(o.value);continue}if(2===o.type){var m=[];l[g]=m,f(),c=4,l=m;continue}if(3===o.type){var C={};u&&(C.$vscodeTextmateLocation=o.toLocation(t)),l[g]=C,f(),c=1,l=C;continue}}D("unexpected token in dict");}if(5===c){if(4===o.type){d();continue}if(7===o.type){c=6;continue}D("expected , or ]");}if(4===c||6===c){if(4===c&&4===o.type){d();continue}if(c=5,1===o.type){l.push(o.value);continue}if(8===o.type){l.push(null);continue}if(9===o.type){l.push(!0);continue}if(10===o.type){l.push(!1);continue}if(11===o.type){l.push(parseFloat(o.value));continue}if(2===o.type){m=[],l.push(m),f(),c=4,l=m;continue}if(3===o.type){C={},u&&(C.$vscodeTextmateLocation=o.toLocation(t)),l.push(C),f(),c=1,l=C;continue}D("unexpected token in array");}D("unknown state");}return 0!==p.length&&D("unclosed constructs"),l};var r=function(e){this.source=e,this.pos=0,this.len=e.length,this.line=1,this.char=0;},s=function(){function e(){this.value=null,this.type=0,this.offset=-1,this.len=-1,this.line=-1,this.char=-1;}return e.prototype.toLocation=function(e){return {filename:e,line:this.line,char:this.char}},e}();function i(e,t){t.value=null,t.type=0,t.offset=-1,t.len=-1,t.line=-1,t.char=-1;for(var u,r=e.source,s=e.pos,i=e.len,a=e.line,o=e.char;;){if(s>=i)return !1;if(32!==(u=r.charCodeAt(s))&&9!==u&&13!==u){if(10!==u)break;s++,a++,o=0;}else s++,o++;}if(t.offset=s,t.line=a,t.char=o,34===u){for(t.type=1,s++,o++;;){if(s>=i)return !1;if(u=r.charCodeAt(s),s++,o++,92!==u){if(34===u)break}else s++,o++;}t.value=r.substring(t.offset+1,s-1).replace(/\\u([0-9A-Fa-f]{4})/g,(function(e,t){return String.fromCodePoint(parseInt(t,16))})).replace(/\\(.)/g,(function(t,u){switch(u){case'"':return '"';case"\\":return "\\";case"/":return "/";case"b":return "\b";case"f":return "\f";case"n":return "\n";case"r":return "\r";case"t":return "\t";default:n(e,"invalid escape sequence");}throw new Error("unreachable")}));}else if(91===u)t.type=2,s++,o++;else if(123===u)t.type=3,s++,o++;else if(93===u)t.type=4,s++,o++;else if(125===u)t.type=5,s++,o++;else if(58===u)t.type=6,s++,o++;else if(44===u)t.type=7,s++,o++;else if(110===u){if(t.type=8,s++,o++,117!==(u=r.charCodeAt(s)))return !1;if(s++,o++,108!==(u=r.charCodeAt(s)))return !1;if(s++,o++,108!==(u=r.charCodeAt(s)))return !1;s++,o++;}else if(116===u){if(t.type=9,s++,o++,114!==(u=r.charCodeAt(s)))return !1;if(s++,o++,117!==(u=r.charCodeAt(s)))return !1;if(s++,o++,101!==(u=r.charCodeAt(s)))return !1;s++,o++;}else if(102===u){if(t.type=10,s++,o++,97!==(u=r.charCodeAt(s)))return !1;if(s++,o++,108!==(u=r.charCodeAt(s)))return !1;if(s++,o++,115!==(u=r.charCodeAt(s)))return !1;if(s++,o++,101!==(u=r.charCodeAt(s)))return !1;s++,o++;}else for(t.type=11;;){if(s>=i)return !1;if(!(46===(u=r.charCodeAt(s))||u>=48&&u<=57||101===u||69===u||45===u||43===u))break;s++,o++;}return t.len=s-t.offset,null===t.value&&(t.value=r.substr(t.offset,t.len)),e.pos=s,e.line=a,e.char=o,!0}},function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,u,n,r,s){this.scope=e,this.parentScopes=t,this.index=u,this.fontStyle=n,this.foreground=r,this.background=s;};function r(e){return !!(/^#[0-9a-f]{6}$/i.test(e)||/^#[0-9a-f]{8}$/i.test(e)||/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{4}$/i.test(e))}function s(e){if(!e)return [];if(!e.settings||!Array.isArray(e.settings))return [];for(var t=e.settings,u=[],s=0,i=0,a=t.length;i<a;i++){var o=t[i];if(o.settings){var c=void 0;c="string"==typeof o.scope?o.scope.replace(/^[,]+/,"").replace(/[,]+$/,"").split(","):Array.isArray(o.scope)?o.scope:[""];var l=-1;if("string"==typeof o.settings.fontStyle){l=0;for(var h=0,p=(D=o.settings.fontStyle.split(" ")).length;h<p;h++)switch(D[h]){case"italic":l|=1;break;case"bold":l|=2;break;case"underline":l|=4;}}var f=null;"string"==typeof o.settings.foreground&&r(o.settings.foreground)&&(f=o.settings.foreground);var d=null;for("string"==typeof o.settings.background&&r(o.settings.background)&&(d=o.settings.background),h=0,p=c.length;h<p;h++){var D,g=(D=c[h].trim().split(" "))[D.length-1],m=null;D.length>1&&(m=D.slice(0,D.length-1)).reverse(),u[s++]=new n(g,m,i,l,f,d);}}}return u}function i(e,t){e.sort((function(e,t){var u=c(e.scope,t.scope);return 0!==u||0!==(u=l(e.parentScopes,t.parentScopes))?u:e.index-t.index}));for(var u=0,n="#000000",r="#ffffff";e.length>=1&&""===e[0].scope;){var s=e.shift();-1!==s.fontStyle&&(u=s.fontStyle),null!==s.foreground&&(n=s.foreground),null!==s.background&&(r=s.background);}for(var i=new a(t),f=new h(0,null,u,i.getId(n),i.getId(r)),d=new p(new h(0,null,-1,0,0),[]),D=0,g=e.length;D<g;D++){var m=e[D];d.insert(0,m.scope,m.parentScopes,m.fontStyle,i.getId(m.foreground),i.getId(m.background));}return new o(i,f,d)}t.ParsedThemeRule=n,t.parseTheme=s;var a=function(){function e(e){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(e)){this._isFrozen=!0;for(var t=0,u=e.length;t<u;t++)this._color2id[e[t]]=t,this._id2color[t]=e[t];}else this._isFrozen=!1;}return e.prototype.getId=function(e){if(null===e)return 0;e=e.toUpperCase();var t=this._color2id[e];if(t)return t;if(this._isFrozen)throw new Error("Missing color in color map - "+e);return t=++this._lastColorId,this._color2id[e]=t,this._id2color[t]=e,t},e.prototype.getColorMap=function(){return this._id2color.slice(0)},e}();t.ColorMap=a;var o=function(){function e(e,t,u){this._colorMap=e,this._root=u,this._defaults=t,this._cache={};}return e.createFromRawTheme=function(e,t){return this.createFromParsedTheme(s(e),t)},e.createFromParsedTheme=function(e,t){return i(e,t)},e.prototype.getColorMap=function(){return this._colorMap.getColorMap()},e.prototype.getDefaults=function(){return this._defaults},e.prototype.match=function(e){return this._cache.hasOwnProperty(e)||(this._cache[e]=this._root.match(e)),this._cache[e]},e}();function c(e,t){return e<t?-1:e>t?1:0}function l(e,t){if(null===e&&null===t)return 0;if(!e)return -1;if(!t)return 1;var u=e.length,n=t.length;if(u===n){for(var r=0;r<u;r++){var s=c(e[r],t[r]);if(0!==s)return s}return 0}return u-n}t.Theme=o,t.strcmp=c,t.strArrCmp=l;var h=function(){function e(e,t,u,n,r){this.scopeDepth=e,this.parentScopes=t,this.fontStyle=u,this.foreground=n,this.background=r;}return e.prototype.clone=function(){return new e(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)},e.cloneArr=function(e){for(var t=[],u=0,n=e.length;u<n;u++)t[u]=e[u].clone();return t},e.prototype.acceptOverwrite=function(e,t,u,n){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,-1!==t&&(this.fontStyle=t),0!==u&&(this.foreground=u),0!==n&&(this.background=n);},e}();t.ThemeTrieElementRule=h;var p=function(){function e(e,t,u){void 0===t&&(t=[]),void 0===u&&(u={}),this._mainRule=e,this._rulesWithParentScopes=t,this._children=u;}return e._sortBySpecificity=function(e){return 1===e.length||e.sort(this._cmpBySpecificity),e},e._cmpBySpecificity=function(e,t){if(e.scopeDepth===t.scopeDepth){var u=e.parentScopes,n=t.parentScopes,r=null===u?0:u.length,s=null===n?0:n.length;if(r===s)for(var i=0;i<r;i++){var a=u[i].length,o=n[i].length;if(a!==o)return o-a}return s-r}return t.scopeDepth-e.scopeDepth},e.prototype.match=function(t){if(""===t)return e._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));var u,n,r=t.indexOf(".");return -1===r?(u=t,n=""):(u=t.substring(0,r),n=t.substring(r+1)),this._children.hasOwnProperty(u)?this._children[u].match(n):e._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))},e.prototype.insert=function(t,u,n,r,s,i){if(""!==u){var a,o,c,l=u.indexOf(".");-1===l?(a=u,o=""):(a=u.substring(0,l),o=u.substring(l+1)),this._children.hasOwnProperty(a)?c=this._children[a]:(c=new e(this._mainRule.clone(),h.cloneArr(this._rulesWithParentScopes)),this._children[a]=c),c.insert(t+1,o,n,r,s,i);}else this._doInsertHere(t,n,r,s,i);},e.prototype._doInsertHere=function(e,t,u,n,r){if(null!==t){for(var s=0,i=this._rulesWithParentScopes.length;s<i;s++){var a=this._rulesWithParentScopes[s];if(0===l(a.parentScopes,t))return void a.acceptOverwrite(e,u,n,r)}-1===u&&(u=this._mainRule.fontStyle),0===n&&(n=this._mainRule.foreground),0===r&&(r=this._mainRule.background),this._rulesWithParentScopes.push(new h(e,t,u,n,r));}else this._mainRule.acceptOverwrite(e,u,n,r);},e}();t.ThemeTrieElement=p;}]);}));class Me{static toBinaryStr(e){let t=e.toString(2);for(;t.length<32;)t="0"+t;return t}static printMetadata(e){let t=Me.getLanguageId(e),u=Me.getTokenType(e),n=Me.getFontStyle(e),r=Me.getForeground(e),s=Me.getBackground(e);console.log({languageId:t,tokenType:u,fontStyle:n,foreground:r,background:s});}static getLanguageId(e){return (255&e)>>>0}static getTokenType(e){return (1792&e)>>>8}static getFontStyle(e){return (14336&e)>>>11}static getForeground(e){return (8372224&e)>>>14}static getBackground(e){return (4286578688&e)>>>23}static set(e,t,u,n,r,s){let i=Me.getLanguageId(e),a=Me.getTokenType(e),o=Me.getFontStyle(e),c=Me.getForeground(e),l=Me.getBackground(e);return 0!==t&&(i=t),0!==u&&(a=8===u?0:u),-1!==n&&(o=n),0!==r&&(c=r),0!==s&&(l=s),(i<<0|a<<8|o<<11|c<<14|l<<23)>>>0}}function Oe(e,t){let u=[];for(let n=0,r=t.length;n<r;n++){let r=t.slice(0,n),s=t[n];u[n]={scopeName:s,themeMatches:He(e,s,r)};}return u}function Ge(e,t){let u=e+".";return e===t||t.substring(0,u.length)===u}function $e(e,t,u,n){if(!Ge(e,u))return !1;let r=t.length-1,s=n.length-1;for(;r>=0&&s>=0;)Ge(t[r],n[s])&&r--,s--;return -1===r}function He(e,t,u){let n=[],r=0;for(let s=0,i=e.settings.length;s<i;s++){let i,a=e.settings[s];if("string"==typeof a.scope)i=a.scope.split(/,/).map((e=>e.trim()));else {if(!Array.isArray(a.scope))continue;i=a.scope;}for(let e=0,s=i.length;e<s;e++){let o=i[e].split(/ /);$e(o[o.length-1],o.slice(0,o.length-1),t,u)&&(n[r++]=a,e=s);}}return n}const We={1:"font-style: italic",2:"font-weight: bold",4:"text-decoration: underline"};function Ue(e,t={}){const u=t.bg||"#fff";let n="";return n+=`<pre class="shiki" style="background-color: ${u}">`,t.langId&&(n+=`<div class="language-id">${t.langId}</div>`),n+="<code>",e.forEach((e=>{n+='<span class="line">',e.forEach((e=>{const u=[`color: ${e.color||t.fg}`];e.fontStyle>0&&u.push(We[e.fontStyle]),n+=`<span style="${u.join("; ")}">${function(e){return e.replace(/[&<>"']/g,(e=>qe[e]))}(e.content)}</span>`;})),n+="</span>\n";})),n=n.replace(/\n*$/,""),n+="</code></pre>",n}const qe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class ze extends Ie.Registry{constructor(e){super(e),this._resolver=e,this.themesPath="themes/",this._resolvedThemes={},this._resolvedGrammars={};}getTheme(e){return "string"==typeof e?this._resolvedThemes[e]:e}async loadTheme(e){return "string"==typeof e?(this._resolvedThemes[e]||(this._resolvedThemes[e]=await ke(`${this.themesPath}${e}.json`)),this._resolvedThemes[e]):((e=Se(e)).name&&(this._resolvedThemes[e.name]=e),e)}async loadThemes(e){return await Promise.all(e.map((e=>this.loadTheme(e))))}getLoadedThemes(){return Object.keys(this._resolvedThemes)}getGrammer(e){return this._resolvedGrammars[e]}async loadLanguage(e){const t=await this.loadGrammar(e.scopeName);this._resolvedGrammars[e.id]=t,e.aliases&&e.aliases.forEach((e=>{this._resolvedGrammars[e]=t;}));}async loadLanguages(e){for(const t of e)this._resolver.addLanguage(t);for(const t of e)await this.loadLanguage(t);}getLoadedLanguages(){return Object.keys(this._resolvedGrammars)}}function Ve(e){return "string"==typeof e?t.find((t=>{var u;return t.id===e||(null===(u=t.aliases)||void 0===u?void 0:u.includes(e))})):e}e.BUNDLED_LANGUAGES=t,e.BUNDLED_THEMES=["dark-plus","github-dark","github-light","light-plus","material-darker","material-default","material-lighter","material-ocean","material-palenight","min-dark","min-light","monokai","nord","poimandres","slack-dark","slack-ochin","solarized-dark","solarized-light"],e.getHighlighter=async function(e){var u,n;const{_languages:r,_themes:s}=function(e){var u;let n=t,r=e.themes||[];return (null===(u=e.langs)||void 0===u?void 0:u.length)&&(n=e.langs.map(Ve)),e.theme&&r.unshift(e.theme),r.length||(r=["nord"]),{_languages:n,_themes:r}}(e),i=new Te(async function(){if(!we){let e;if(_e)e=Ae(Be||xe("dist/onigasm.wasm"));else {const t=require$$0__default['default'].join(require.resolve("onigasm"),"../onigasm.wasm"),u=require$$1__default['default'].readFileSync(t).buffer;e=Ae(u);}we=e.then((()=>({createOnigScanner:e=>new ye(e),createOnigString:e=>new Fe(e)})));}return we}(),"onigasm"),a=new ze(i);(null===(u=e.paths)||void 0===u?void 0:u.themes)&&(a.themesPath=e.paths.themes),(null===(n=e.paths)||void 0===n?void 0:n.languages)&&(i.languagesPath=e.paths.languages);const o=(await a.loadThemes(s))[0];let c;function l(e){const t=e?a.getTheme(e):o;if(!t)throw Error(`No theme registration for ${e}`);c&&c.name===t.name||(a.setTheme(t),c=t);return {_theme:t,_colorMap:a.getColorMap()}}function h(e,t="text",u,n={includeExplanation:!0}){if(function(e){return !e||["plaintext","txt","text"].includes(e)}(t))return [[{content:e}]];const{_grammer:r}=function(e){const t=a.getGrammer(e);if(!t)throw Error(`No language registration for ${e}`);return {_grammer:t}}(t),{_theme:s,_colorMap:i}=l(u);return function(e,t,u,n,r){let s=u.split(/\r\n|\r|\n/),i=Ie.INITIAL,a=[],o=[];for(let u=0,c=s.length;u<c;u++){let c,l,h,p=s[u];if(""===p){a=[],o.push([]);continue}r.includeExplanation&&(c=n.tokenizeLine(p,i),l=c.tokens,h=0);let f=n.tokenizeLine2(p,i),d=f.tokens.length/2;for(let u=0;u<d;u++){let n=f.tokens[2*u],s=u+1<d?f.tokens[2*u+2]:p.length;if(n===s)continue;let i=f.tokens[2*u+1],o=t[Me.getForeground(i)],c=Me.getFontStyle(i),D=[];if(r.includeExplanation){let t=0;for(;n+t<s;){let u=l[h],n=p.substring(u.startIndex,u.endIndex);t+=n.length,D.push({content:n,scopes:Oe(e,u.scopes)}),h++;}}a.push({content:p.substring(n,s),color:o,fontStyle:c,explanation:D});}o.push(a),a=[],i=f.ruleStack;}return o}(s,i,e,r,n)}return await a.loadLanguages(r),{codeToThemedTokens:h,codeToHtml:function(e,t="text",u){const n=h(e,t,u,{includeExplanation:!1}),{_theme:r}=l(u);return Ue(n,{fg:r.fg,bg:r.bg})},getTheme:e=>l(e)._theme,loadTheme:async function(e){await a.loadTheme(e);},loadLanguage:async function(e){const t=Ve(e);i.addLanguage(t),await a.loadLanguage(t);},getBackgroundColor:function(e){const{_theme:t}=l(e);return t.bg},getForegroundColor:function(e){const{_theme:t}=l(e);return t.fg},getLoadedThemes:function(){return a.getLoadedThemes()},getLoadedLanguages:function(){return a.getLoadedLanguages()}}},e.loadTheme=ke,e.renderToHtml=Ue,e.setCDN=function(e){be=e;},e.setOnigasmWASM=function(e){Be=e;},Object.defineProperty(e,"__esModule",{value:!0});}(commonjsGlobal.shiki=commonjsGlobal.shiki||{});

var lib = {};

var onigasmH = {};

var onigasm = {exports: {}};

(function (module, exports) {
var Onigasm = (function() {
  typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Onigasm) {
  Onigasm = Onigasm || {};

var Module=typeof Onigasm!=="undefined"?Onigasm:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key];}}var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readBinary;{readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){scriptArgs;}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print;}}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key];}}moduleOverrides=null;if(Module["arguments"]);if(Module["thisProgram"]);if(Module["quit"]);var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["noExitRuntime"]);if(typeof WebAssembly!=="object"){err("no native wasm support detected");}var wasmMemory;var wasmTable=new WebAssembly.Table({"initial":244,"maximum":244+0,"element":"anyfunc"});var ABORT=false;function assert(condition,text){if(!condition){abort("Assertion failed: "+text);}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len);}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string")return UTF8ToString(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i]);}else {cArgs[i]=args[i];}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(u8Array[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else {var str="";while(idx<endPtr){var u0=u8Array[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2;}else {u0=(u0&7)<<18|u1<<12|u2<<6|u8Array[idx++]&63;}if(u0<65536){str+=String.fromCharCode(u0);}else {var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023);}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023;}if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u;}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63;}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63;}else {if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63;}}outU8Array[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer);}var WASM_PAGE_SIZE=65536;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple;}return x}var buffer,HEAP8,HEAPU8,HEAP32;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=new Uint16Array(buf);Module["HEAPU32"]=new Uint32Array(buf);Module["HEAPF32"]=new Float32Array(buf);Module["HEAPF64"]=new Float64Array(buf);}var DYNAMIC_BASE=5507664,DYNAMICTOP_PTR=264624;var INITIAL_TOTAL_MEMORY=Module["TOTAL_MEMORY"]||157286400;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"];}else {wasmMemory=new WebAssembly.Memory({"initial":INITIAL_TOTAL_MEMORY/WASM_PAGE_SIZE});}if(wasmMemory){buffer=wasmMemory.buffer;}INITIAL_TOTAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func);}else {Module["dynCall_vi"](func,callback.arg);}}else {func(callback.arg===undefined?null:callback.arg);}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift());}}callRuntimeCallbacks(__ATPRERUN__);}function initRuntime(){callRuntimeCallbacks(__ATINIT__);}function preMain(){callRuntimeCallbacks(__ATMAIN__);}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift());}}callRuntimeCallbacks(__ATPOSTRUN__);}function addOnPreRun(cb){__ATPRERUN__.unshift(cb);}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb);}var runDependencies=0;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies);}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies);}if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback();}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what);}what+="";out(what);err(what);ABORT=true;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";throw new WebAssembly.RuntimeError(what)}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}var wasmBinaryFile="onigasm.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile);}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else {throw "both async and sync fetching of the wasm failed"}}catch(err){abort(err);}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw "failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary());})}function createWasm(){var info={"env":asmLibraryArg,"wasi_unstable":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;removeRunDependency();}addRunDependency();function receiveInstantiatedSource(output){receiveInstance(output["instance"]);}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason);})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource);})});}else {return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return {}}__ATINIT__.push({func:function(){___wasm_call_ctors();}});function _abort(){abort();}function _emscripten_get_heap_size(){return HEAP8.length}function _emscripten_get_sbrk_ptr(){return 264624}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=_emscripten_get_heap_size();var PAGE_MULTIPLE=65536;var LIMIT=2147483648-PAGE_MULTIPLE;if(requestedSize>LIMIT){return false}var MIN_TOTAL_MEMORY=16777216;var newSize=Math.max(oldSize,MIN_TOTAL_MEMORY);while(newSize<requestedSize){if(newSize<=536870912){newSize=alignUp(2*newSize,PAGE_MULTIPLE);}else {newSize=Math.min(alignUp((3*newSize+2147483648)/4,PAGE_MULTIPLE),LIMIT);}}var replacement=emscripten_realloc_buffer(newSize);if(!replacement){return false}return true}var SYSCALLS={buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0;}else {buffer.push(curr);}},varargs:0,get:function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(){var ret=UTF8ToString(SYSCALLS.get());return ret},get64:function(){var low=SYSCALLS.get();SYSCALLS.get();return low},getZero:function(){SYSCALLS.get();}};function _fd_close(fd){try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_write(fd,iov,iovcnt,pnum){try{var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j]);}num+=len;}HEAP32[pnum>>2]=num;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _setTempRet0($i){}var asmLibraryArg={"abort":_abort,"emscripten_get_sbrk_ptr":_emscripten_get_sbrk_ptr,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"fd_close":_fd_close,"fd_seek":_fd_seek,"fd_write":_fd_write,"memory":wasmMemory,"setTempRet0":_setTempRet0,"table":wasmTable};var asm=createWasm();Module["asm"]=asm;var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return Module["asm"]["__wasm_call_ctors"].apply(null,arguments)};Module["_malloc"]=function(){return Module["asm"]["malloc"].apply(null,arguments)};Module["_free"]=function(){return Module["asm"]["free"].apply(null,arguments)};Module["_getLastError"]=function(){return Module["asm"]["getLastError"].apply(null,arguments)};Module["_compilePattern"]=function(){return Module["asm"]["compilePattern"].apply(null,arguments)};Module["_disposeCompiledPatterns"]=function(){return Module["asm"]["disposeCompiledPatterns"].apply(null,arguments)};Module["_findBestMatch"]=function(){return Module["asm"]["findBestMatch"].apply(null,arguments)};Module["___cxa_demangle"]=function(){return Module["asm"]["__cxa_demangle"].apply(null,arguments)};Module["_setThrew"]=function(){return Module["asm"]["setThrew"].apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return Module["asm"]["stackSave"].apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return Module["asm"]["stackAlloc"].apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return Module["asm"]["stackRestore"].apply(null,arguments)};Module["__growWasmMemory"]=function(){return Module["asm"]["__growWasmMemory"].apply(null,arguments)};Module["dynCall_vi"]=function(){return Module["asm"]["dynCall_vi"].apply(null,arguments)};Module["dynCall_iiii"]=function(){return Module["asm"]["dynCall_iiii"].apply(null,arguments)};Module["dynCall_iiiii"]=function(){return Module["asm"]["dynCall_iiiii"].apply(null,arguments)};Module["dynCall_iii"]=function(){return Module["asm"]["dynCall_iii"].apply(null,arguments)};Module["dynCall_iidiiii"]=function(){return Module["asm"]["dynCall_iidiiii"].apply(null,arguments)};Module["dynCall_vii"]=function(){return Module["asm"]["dynCall_vii"].apply(null,arguments)};Module["dynCall_ii"]=function(){return Module["asm"]["dynCall_ii"].apply(null,arguments)};Module["dynCall_i"]=function(){return Module["asm"]["dynCall_i"].apply(null,arguments)};Module["dynCall_v"]=function(){return Module["asm"]["dynCall_v"].apply(null,arguments)};Module["dynCall_viiiiii"]=function(){return Module["asm"]["dynCall_viiiiii"].apply(null,arguments)};Module["dynCall_viiiii"]=function(){return Module["asm"]["dynCall_viiiii"].apply(null,arguments)};Module["dynCall_viiii"]=function(){return Module["asm"]["dynCall_viiii"].apply(null,arguments)};Module["dynCall_jiji"]=function(){return Module["asm"]["dynCall_jiji"].apply(null,arguments)};Module["asm"]=asm;Module["ccall"]=ccall;var calledRun;Module["then"]=function(func){if(calledRun){func(Module);}else {var old=Module["onRuntimeInitialized"];Module["onRuntimeInitialized"]=function(){if(old)old();func(Module);};}return Module};dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller;};function run(args){if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun();}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("");},1);doRun();},1);}else {doRun();}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()();}}run();


  return Onigasm
}
);
})();
module.exports = Onigasm;
}(onigasm));

Object.defineProperty(onigasmH, "__esModule", { value: true });
const OnigasmModuleFactory = onigasm.exports;
async function initModule(bytes) {
    return new Promise((resolve, reject) => {
        const { log, warn, error } = console;
        OnigasmModuleFactory({
            instantiateWasm(imports, successCallback) {
                WebAssembly.instantiate(bytes, imports)
                    .then((output) => {
                    successCallback(output.instance);
                })
                    .catch((e) => {
                    throw e;
                });
                return {};
            },
        })
            .then(moduleH => {
            onigasmH.onigasmH = moduleH;
            resolve();
        });
        if (typeof print !== 'undefined') {
            // can be removed when https://github.com/emscripten-core/emscripten/issues/9829 is fixed.
            // tslint:disable-next-line:no-console
            console.log = log;
            // tslint:disable-next-line:no-console
            console.error = error;
            // tslint:disable-next-line:no-console
            console.warn = warn;
        }
    });
}
let isInitialized = false;
/**
 * Mount the .wasm file that will act as library's "backend"
 * @param data Path to .wasm file or it's ArrayBuffer
 */
async function loadWASM(data) {
    if (isInitialized) {
        throw new Error(`Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized`);
    }
    if (typeof data === 'string') {
        const arrayBuffer = await (await fetch(data)).arrayBuffer();
        await initModule(arrayBuffer);
    }
    else if (data instanceof ArrayBuffer) {
        await initModule(data);
    }
    else {
        throw new TypeError(`Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter`);
    }
    isInitialized = true;
}
onigasmH.loadWASM = loadWASM;

var OnigRegExp$1 = {};

var OnigScanner$1 = {};

var iterator = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value;
    }
  };
};

var yallist = Yallist$1;

Yallist$1.Node = Node;
Yallist$1.create = Yallist$1;

function Yallist$1 (list) {
  var self = this;
  if (!(self instanceof Yallist$1)) {
    self = new Yallist$1();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self
}

Yallist$1.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }
  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;

  return next
};

Yallist$1.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;
  if (head) {
    head.prev = node;
  }

  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.length++;
};

Yallist$1.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;
  if (tail) {
    tail.next = node;
  }

  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.length++;
};

Yallist$1.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }
  return this.length
};

Yallist$1.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }
  return this.length
};

Yallist$1.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return res
};

Yallist$1.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return res
};

Yallist$1.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist$1.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist$1.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }
  if (i === n && walker !== null) {
    return walker.value
  }
};

Yallist$1.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }
  if (i === n && walker !== null) {
    return walker.value
  }
};

Yallist$1.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }
  return res
};

Yallist$1.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }
  return res
};

Yallist$1.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc
};

Yallist$1.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc
};

Yallist$1.prototype.toArray = function () {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }
  return arr
};

Yallist$1.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }
  return arr
};

Yallist$1.prototype.slice = function (from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }
  return ret
};

Yallist$1.prototype.sliceReverse = function (from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }
  return ret
};

Yallist$1.prototype.splice = function (start, deleteCount /*, ...nodes */) {
  if (start > this.length) {
    start = this.length - 1;
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }
  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 2; i < arguments.length; i++) {
    walker = insert(this, walker, arguments[i]);
  }
  return ret;
};

Yallist$1.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }
  this.head = tail;
  this.tail = head;
  return this
};

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }
  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self);
  if (!self.head) {
    self.head = self.tail;
  }
  self.length++;
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self);
  if (!self.tail) {
    self.tail = self.head;
  }
  self.length++;
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  iterator(Yallist$1);
} catch (er) {}

// A linked list to keep track of recently-used-ness
const Yallist = yallist;

const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

const naiveLength = () => 1;

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache$1 {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options };

    if (!options)
      options = {};

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    this[MAX] = options.max || Infinity;

    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity;
    trim(this);
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA;
    trim(this);
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength;

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }
    trim(this);
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value));
    }

    this[CACHE] = new Map(); // hash of items by key
    this[LRU_LIST] = new Yallist(); // list of items in order of use recency
    this[LENGTH] = 0; // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false
      }

      const node = this[CACHE].get(key);
      const item = node.value;

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value);
      }

      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge);

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value);

      return false
    }

    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail;
    if (!node)
      return null

    del(this, node);
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key));
  }

  load (arr) {
    // reset the cache
    this.reset();

    const now = Date.now();
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v);
      else {
        const maxAge = expiresAt - now;
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key);
  if (node) {
    const hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }
    return hit.value
  }
};

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
};

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
};

const del = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value);

    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
};

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value;
  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE])
      hit = undefined;
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self);
};

var lruCache = LRUCache$1;

var OnigString$1 = {};

Object.defineProperty(OnigString$1, "__esModule", { value: true });
class OnigString {
    constructor(content) {
        this.substring = (start, end) => {
            return this.source.substring(start, end);
        };
        this.toString = (start, end) => {
            return this.source;
        };
        if (typeof content !== 'string') {
            throw new TypeError('Argument must be a string');
        }
        this.source = content;
        this._utf8Bytes = null;
        this._utf8Indexes = null;
    }
    get utf8Bytes() {
        if (!this._utf8Bytes) {
            this.encode();
        }
        return this._utf8Bytes;
    }
    /**
     * Returns `null` if all utf8 offsets match utf-16 offset (content has no multi byte characters)
     */
    get utf8Indexes() {
        if (!this._utf8Bytes) {
            this.encode();
        }
        return this._utf8Indexes;
    }
    get content() {
        return this.source;
    }
    get length() {
        return this.source.length;
    }
    get hasMultiByteCharacters() {
        return this.utf8Indexes !== null;
    }
    convertUtf8OffsetToUtf16(utf8Offset) {
        if (utf8Offset < 0) {
            return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf8Offset >= utf8Array.length - 1) {
            return this.source.length;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf8Offset >= this._mappingTableStartOffset) {
            return findFirstInSorted(utf8OffsetMap, utf8Offset - this._mappingTableStartOffset) + this._mappingTableStartOffset;
        }
        return utf8Offset;
    }
    convertUtf16OffsetToUtf8(utf16Offset) {
        if (utf16Offset < 0) {
            return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf16Offset >= this.source.length) {
            return utf8Array.length - 1;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf16Offset >= this._mappingTableStartOffset) {
            return utf8OffsetMap[utf16Offset - this._mappingTableStartOffset] + this._mappingTableStartOffset;
        }
        return utf16Offset;
    }
    encode() {
        const str = this.source;
        const n = str.length;
        let utf16OffsetToUtf8;
        let utf8Offset = 0;
        let mappingTableStartOffset = 0;
        function createOffsetTable(startOffset) {
            const maxUtf8Len = (n - startOffset) * 3;
            if (maxUtf8Len <= 0xff) {
                utf16OffsetToUtf8 = new Uint8Array(n - startOffset);
            }
            else if (maxUtf8Len <= 0xffff) {
                utf16OffsetToUtf8 = new Uint16Array(n - startOffset);
            }
            else {
                utf16OffsetToUtf8 = new Uint32Array(n - startOffset);
            }
            mappingTableStartOffset = startOffset;
            utf16OffsetToUtf8[utf8Offset++] = 0;
        }
        const u8view = new Uint8Array((n * 3) /* alloc max now, trim later*/ + 1 /** null termination character */);
        let ptrHead = 0;
        let i = 0;
        // for some reason, v8 is faster with str.length than using a variable (might be illusion)
        while (i < str.length) {
            let codepoint;
            const c = str.charCodeAt(i);
            if (utf16OffsetToUtf8) {
                utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
            }
            if (c < 0xD800 || c > 0xDFFF) {
                codepoint = c;
            }
            else if (c >= 0xDC00) {
                codepoint = 0xFFFD;
            }
            else {
                if (i === n - 1) {
                    codepoint = 0xFFFD;
                }
                else {
                    const d = str.charCodeAt(i + 1);
                    if (0xDC00 <= d && d <= 0xDFFF) {
                        if (!utf16OffsetToUtf8) {
                            createOffsetTable(i);
                        }
                        const a = c & 0x3FF;
                        const b = d & 0x3FF;
                        codepoint = 0x10000 + (a << 10) + b;
                        i += 1;
                        utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
                    }
                    else {
                        codepoint = 0xFFFD;
                    }
                }
            }
            let bytesRequiredToEncode;
            let offset;
            if (codepoint <= 0x7F) {
                bytesRequiredToEncode = 1;
                offset = 0;
            }
            else if (codepoint <= 0x07FF) {
                bytesRequiredToEncode = 2;
                offset = 0xC0;
            }
            else if (codepoint <= 0xFFFF) {
                bytesRequiredToEncode = 3;
                offset = 0xE0;
            }
            else {
                bytesRequiredToEncode = 4;
                offset = 0xF0;
            }
            if (bytesRequiredToEncode === 1) {
                u8view[ptrHead++] = codepoint;
            }
            else {
                if (!utf16OffsetToUtf8) {
                    createOffsetTable(ptrHead);
                }
                u8view[ptrHead++] = (codepoint >> (6 * (--bytesRequiredToEncode))) + offset;
                while (bytesRequiredToEncode > 0) {
                    const temp = codepoint >> (6 * (bytesRequiredToEncode - 1));
                    u8view[ptrHead++] = (0x80 | (temp & 0x3F));
                    bytesRequiredToEncode -= 1;
                }
            }
            i += 1;
        }
        const utf8 = u8view.slice(0, ptrHead + 1);
        utf8[ptrHead] = 0x00;
        this._utf8Bytes = utf8;
        if (utf16OffsetToUtf8) { // set if UTF-16 surrogate chars or multi-byte characters found
            this._utf8Indexes = utf16OffsetToUtf8;
            this._mappingTableStartOffset = mappingTableStartOffset;
        }
    }
}
function findFirstInSorted(array, i) {
    let low = 0;
    let high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] >= i) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    // low is on the index of the first value >= i or array.length. Decrement low until we find array[low] <= i
    while (low > 0 && (low >= array.length || array[low] > i)) {
        low--;
    }
    // check whether we are on the second index of a utf-16 surrogate char. If so, go to the first index.
    if (low > 0 && array[low] === array[low - 1]) {
        low--;
    }
    return low;
}
OnigString$1.default = OnigString;

Object.defineProperty(OnigScanner$1, "__esModule", { value: true });
const LRUCache = lruCache;
const onigasmH_1$1 = onigasmH;
const OnigString_1$1 = OnigString$1;
/**
 * Allocates space on the heap and copies the string bytes on to it
 * @param str
 * @returns pointer to the first byte's address on heap
 */
function mallocAndWriteString(str) {
    const ptr = onigasmH_1$1.onigasmH._malloc(str.utf8Bytes.length);
    onigasmH_1$1.onigasmH.HEAPU8.set(str.utf8Bytes, ptr);
    return ptr;
}
function convertUTF8BytesFromPtrToString(ptr) {
    const chars = [];
    let i = 0;
    while (onigasmH_1$1.onigasmH.HEAPU8[ptr] !== 0x00) {
        chars[i++] = onigasmH_1$1.onigasmH.HEAPU8[ptr++];
    }
    return chars.join();
}
const cache = new LRUCache({
    dispose: (scanner, info) => {
        const regexTPtrsPtr = onigasmH_1$1.onigasmH._malloc(info.regexTPtrs.length);
        onigasmH_1$1.onigasmH.HEAPU8.set(info.regexTPtrs, regexTPtrsPtr);
        const status = onigasmH_1$1.onigasmH._disposeCompiledPatterns(regexTPtrsPtr, scanner.patterns.length);
        if (status !== 0) {
            const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1$1.onigasmH._getLastError());
            throw new Error(errMessage);
        }
        onigasmH_1$1.onigasmH._free(regexTPtrsPtr);
    },
    max: 1000,
});
class OnigScanner {
    /**
     * Create a new scanner with the given patterns
     * @param patterns  An array of string patterns
     */
    constructor(patterns) {
        if (onigasmH_1$1.onigasmH === null) {
            throw new Error(`Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API`);
        }
        for (let i = 0; i < patterns.length; i++) {
            const pattern = patterns[i];
            if (typeof pattern !== 'string') {
                throw new TypeError(`First parameter to OnigScanner constructor must be array of (pattern) strings`);
            }
        }
        this.sources = patterns.slice();
    }
    get patterns() {
        return this.sources.slice();
    }
    /**
     * Find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     * @param callback The (error, match) function to call when done, match will null when there is no match
     */
    findNextMatch(string, startPosition, callback) {
        if (startPosition == null) {
            startPosition = 0;
        }
        if (typeof startPosition === 'function') {
            callback = startPosition;
            startPosition = 0;
        }
        try {
            const match = this.findNextMatchSync(string, startPosition);
            callback(null, match);
        }
        catch (error) {
            callback(error);
        }
    }
    /**
     * Find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     */
    findNextMatchSync(string, startPosition) {
        if (startPosition == null) {
            startPosition = 0;
        }
        startPosition = this.convertToNumber(startPosition);
        let onigNativeInfo = cache.get(this);
        let status = 0;
        if (!onigNativeInfo) {
            const regexTAddrRecieverPtr = onigasmH_1$1.onigasmH._malloc(4);
            const regexTPtrs = [];
            for (let i = 0; i < this.sources.length; i++) {
                const pattern = this.sources[i];
                const patternStrPtr = mallocAndWriteString(new OnigString_1$1.default(pattern));
                status = onigasmH_1$1.onigasmH._compilePattern(patternStrPtr, regexTAddrRecieverPtr);
                if (status !== 0) {
                    const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1$1.onigasmH._getLastError());
                    throw new Error(errMessage);
                }
                const regexTAddress = onigasmH_1$1.onigasmH.HEAP32[regexTAddrRecieverPtr / 4];
                regexTPtrs.push(regexTAddress);
                onigasmH_1$1.onigasmH._free(patternStrPtr);
            }
            onigNativeInfo = {
                regexTPtrs: new Uint8Array(Uint32Array.from(regexTPtrs).buffer),
            };
            onigasmH_1$1.onigasmH._free(regexTAddrRecieverPtr);
            cache.set(this, onigNativeInfo);
        }
        const onigString = string instanceof OnigString_1$1.default ? string : new OnigString_1$1.default(this.convertToString(string));
        const strPtr = mallocAndWriteString(onigString);
        const resultInfoReceiverPtr = onigasmH_1$1.onigasmH._malloc(8);
        const regexTPtrsPtr = onigasmH_1$1.onigasmH._malloc(onigNativeInfo.regexTPtrs.length);
        onigasmH_1$1.onigasmH.HEAPU8.set(onigNativeInfo.regexTPtrs, regexTPtrsPtr);
        status = onigasmH_1$1.onigasmH._findBestMatch(
        // regex_t **patterns
        regexTPtrsPtr, 
        // int patternCount
        this.sources.length, 
        // UChar *utf8String
        strPtr, 
        // int strLen
        onigString.utf8Bytes.length - 1, 
        // int startOffset
        onigString.convertUtf16OffsetToUtf8(startPosition), 
        // int *resultInfo
        resultInfoReceiverPtr);
        if (status !== 0) {
            const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1$1.onigasmH._getLastError());
            throw new Error(errMessage);
        }
        const [
        // The index of pattern which matched the string at least offset from 0 (start)
        bestPatternIdx, 
        // Begin address of capture info encoded as pairs
        // like [start, end, start, end, start, end, ...]
        //  - first start-end pair is entire match (index 0 and 1)
        //  - subsequent pairs are capture groups (2, 3 = first capture group, 4, 5 = second capture group and so on)
        encodedResultBeginAddress, 
        // Length of the [start, end, ...] sequence so we know how much memory to read (will always be 0 or multiple of 2)
        encodedResultLength,] = new Uint32Array(onigasmH_1$1.onigasmH.HEAPU32.buffer, resultInfoReceiverPtr, 3);
        onigasmH_1$1.onigasmH._free(strPtr);
        onigasmH_1$1.onigasmH._free(resultInfoReceiverPtr);
        onigasmH_1$1.onigasmH._free(regexTPtrsPtr);
        if (encodedResultLength > 0) {
            const encodedResult = new Uint32Array(onigasmH_1$1.onigasmH.HEAPU32.buffer, encodedResultBeginAddress, encodedResultLength);
            const captureIndices = [];
            let i = 0;
            let captureIdx = 0;
            while (i < encodedResultLength) {
                const index = captureIdx++;
                let start = encodedResult[i++];
                let end = encodedResult[i++];
                if (onigString.hasMultiByteCharacters) {
                    start = onigString.convertUtf8OffsetToUtf16(start);
                    end = onigString.convertUtf8OffsetToUtf16(end);
                }
                captureIndices.push({
                    end,
                    index,
                    length: end - start,
                    start,
                });
            }
            onigasmH_1$1.onigasmH._free(encodedResultBeginAddress);
            return {
                captureIndices,
                index: bestPatternIdx,
                scanner: this,
            };
        }
        return null;
    }
    convertToString(value) {
        if (value === undefined) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (value instanceof OnigString_1$1.default) {
            return value.content;
        }
        return value.toString();
    }
    convertToNumber(value) {
        value = parseInt(value, 10);
        if (!isFinite(value)) {
            value = 0;
        }
        value = Math.max(value, 0);
        return value;
    }
}
OnigScanner$1.OnigScanner = OnigScanner;
OnigScanner$1.default = OnigScanner;

Object.defineProperty(OnigRegExp$1, "__esModule", { value: true });
const OnigScanner_1$1 = OnigScanner$1;
class OnigRegExp {
    /**
     * Create a new regex with the given pattern
     * @param source A string pattern
     */
    constructor(source) {
        this.source = source;
        try {
            this.scanner = new OnigScanner_1$1.default([this.source]);
        }
        catch (error) {
            // doesn't make much sense, but this to pass atom/node-oniguruam tests
        }
    }
    /**
     * Synchronously search the string for a match starting at the given position
     * @param string The string to search
     * @param startPosition The optional position to start the search at, defaults to `0`
     */
    searchSync(string, startPosition) {
        let match;
        if (startPosition == null) {
            startPosition = 0;
        }
        match = this.scanner.findNextMatchSync(string, startPosition);
        return this.captureIndicesForMatch(string, match);
    }
    /**
     * Search the string for a match starting at the given position
     * @param string The string to search
     * @param startPosition The optional position to start the search at, defaults to `0`
     * @param callback The `(error, match)` function to call when done, match will be null if no matches were found. match will be an array of objects for each matched group on a successful search
     */
    search(string, startPosition, callback) {
        if (startPosition == null) {
            startPosition = 0;
        }
        if (typeof startPosition === 'function') {
            callback = startPosition;
            startPosition = 0;
        }
        try {
            const ret = this.searchSync(string, startPosition);
            callback(null, ret);
        }
        catch (error) {
            callback(error);
        }
    }
    /**
     * Synchronously test if this regular expression matches the given string
     * @param string The string to test against
     */
    testSync(string) {
        if ((typeof this.source === 'boolean' || typeof string === 'boolean')) {
            return this.source === string;
        }
        return this.searchSync(string) != null;
    }
    /**
     * Test if this regular expression matches the given string
     * @param string The string to test against
     * @param callback The (error, matches) function to call when done, matches will be true if at least one match is found, false otherwise
     */
    test(string, callback) {
        if (typeof callback !== 'function') {
            callback = () => { };
        }
        try {
            callback(null, this.testSync(string));
        }
        catch (error) {
            callback(error);
        }
    }
    captureIndicesForMatch(string, match) {
        if (match != null) {
            const { captureIndices } = match;
            let capture;
            string = this.scanner.convertToString(string);
            for (let i = 0; i < captureIndices.length; i++) {
                capture = captureIndices[i];
                capture.match = string.slice(capture.start, capture.end);
            }
            return captureIndices;
        }
        else {
            return null;
        }
    }
}
OnigRegExp$1.default = OnigRegExp;

Object.defineProperty(lib, "__esModule", { value: true });
const onigasmH_1 = onigasmH;
lib.loadWASM = onigasmH_1.loadWASM;
const OnigRegExp_1 = OnigRegExp$1;
lib.OnigRegExp = OnigRegExp_1.default;
const OnigScanner_1 = OnigScanner$1;
lib.OnigScanner = OnigScanner_1.default;
const OnigString_1 = OnigString$1;
lib.OnigString = OnigString_1.default;

var minimist = function (args, opts) {
    if (!opts) opts = {};
    
    var flags = { bools : {}, strings : {}, unknownFn: null };

    if (typeof opts['unknown'] === 'function') {
        flags.unknownFn = opts['unknown'];
    }

    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {
      flags.allBools = true;
    } else {
      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {
          flags.bools[key] = true;
      });
    }
    
    var aliases = {};
    Object.keys(opts.alias || {}).forEach(function (key) {
        aliases[key] = [].concat(opts.alias[key]);
        aliases[key].forEach(function (x) {
            aliases[x] = [key].concat(aliases[key].filter(function (y) {
                return x !== y;
            }));
        });
    });

    [].concat(opts.string).filter(Boolean).forEach(function (key) {
        flags.strings[key] = true;
        if (aliases[key]) {
            flags.strings[aliases[key]] = true;
        }
     });

    var defaults = opts['default'] || {};
    
    var argv = { _ : [] };
    Object.keys(flags.bools).forEach(function (key) {
        setArg(key, defaults[key] === undefined ? false : defaults[key]);
    });
    
    var notFlags = [];

    if (args.indexOf('--') !== -1) {
        notFlags = args.slice(args.indexOf('--')+1);
        args = args.slice(0, args.indexOf('--'));
    }

    function argDefined(key, arg) {
        return (flags.allBools && /^--[^=]+$/.test(arg)) ||
            flags.strings[key] || flags.bools[key] || aliases[key];
    }

    function setArg (key, val, arg) {
        if (arg && flags.unknownFn && !argDefined(key, arg)) {
            if (flags.unknownFn(arg) === false) return;
        }

        var value = !flags.strings[key] && isNumber(val)
            ? Number(val) : val
        ;
        setKey(argv, key.split('.'), value);
        
        (aliases[key] || []).forEach(function (x) {
            setKey(argv, x.split('.'), value);
        });
    }

    function setKey (obj, keys, value) {
        var o = obj;
        for (var i = 0; i < keys.length-1; i++) {
            var key = keys[i];
            if (key === '__proto__') return;
            if (o[key] === undefined) o[key] = {};
            if (o[key] === Object.prototype || o[key] === Number.prototype
                || o[key] === String.prototype) o[key] = {};
            if (o[key] === Array.prototype) o[key] = [];
            o = o[key];
        }

        var key = keys[keys.length - 1];
        if (key === '__proto__') return;
        if (o === Object.prototype || o === Number.prototype
            || o === String.prototype) o = {};
        if (o === Array.prototype) o = [];
        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {
            o[key] = value;
        }
        else if (Array.isArray(o[key])) {
            o[key].push(value);
        }
        else {
            o[key] = [ o[key], value ];
        }
    }
    
    function aliasIsBoolean(key) {
      return aliases[key].some(function (x) {
          return flags.bools[x];
      });
    }

    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        
        if (/^--.+=/.test(arg)) {
            // Using [\s\S] instead of . because js doesn't support the
            // 'dotall' regex modifier. See:
            // http://stackoverflow.com/a/1068308/13216
            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
            var key = m[1];
            var value = m[2];
            if (flags.bools[key]) {
                value = value !== 'false';
            }
            setArg(key, value, arg);
        }
        else if (/^--no-.+/.test(arg)) {
            var key = arg.match(/^--no-(.+)/)[1];
            setArg(key, false, arg);
        }
        else if (/^--.+/.test(arg)) {
            var key = arg.match(/^--(.+)/)[1];
            var next = args[i + 1];
            if (next !== undefined && !/^-/.test(next)
            && !flags.bools[key]
            && !flags.allBools
            && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                setArg(key, next, arg);
                i++;
            }
            else if (/^(true|false)$/.test(next)) {
                setArg(key, next === 'true', arg);
                i++;
            }
            else {
                setArg(key, flags.strings[key] ? '' : true, arg);
            }
        }
        else if (/^-[^-]+/.test(arg)) {
            var letters = arg.slice(1,-1).split('');
            
            var broken = false;
            for (var j = 0; j < letters.length; j++) {
                var next = arg.slice(j+2);
                
                if (next === '-') {
                    setArg(letters[j], next, arg);
                    continue;
                }
                
                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
                    setArg(letters[j], next.split('=')[1], arg);
                    broken = true;
                    break;
                }
                
                if (/[A-Za-z]/.test(letters[j])
                && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
                    setArg(letters[j], next, arg);
                    broken = true;
                    break;
                }
                
                if (letters[j+1] && letters[j+1].match(/\W/)) {
                    setArg(letters[j], arg.slice(j+2), arg);
                    broken = true;
                    break;
                }
                else {
                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
                }
            }
            
            var key = arg.slice(-1)[0];
            if (!broken && key !== '-') {
                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])
                && !flags.bools[key]
                && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                    setArg(key, args[i+1], arg);
                    i++;
                }
                else if (args[i+1] && /^(true|false)$/.test(args[i+1])) {
                    setArg(key, args[i+1] === 'true', arg);
                    i++;
                }
                else {
                    setArg(key, flags.strings[key] ? '' : true, arg);
                }
            }
        }
        else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
                argv._.push(
                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)
                );
            }
            if (opts.stopEarly) {
                argv._.push.apply(argv._, args.slice(i + 1));
                break;
            }
        }
    }
    
    Object.keys(defaults).forEach(function (key) {
        if (!hasKey(argv, key.split('.'))) {
            setKey(argv, key.split('.'), defaults[key]);
            
            (aliases[key] || []).forEach(function (x) {
                setKey(argv, x.split('.'), defaults[key]);
            });
        }
    });
    
    if (opts['--']) {
        argv['--'] = new Array();
        notFlags.forEach(function(key) {
            argv['--'].push(key);
        });
    }
    else {
        notFlags.forEach(function(key) {
            argv._.push(key);
        });
    }

    return argv;
};

function hasKey (obj, keys) {
    var o = obj;
    keys.slice(0,-1).forEach(function (key) {
        o = (o[key] || {});
    });

    var key = keys[keys.length - 1];
    return key in o;
}

function isNumber (x) {
    if (typeof x === 'number') return true;
    if (/^0x[0-9a-f]+$/i.test(x)) return true;
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}

const argv = minimist(process.argv.slice(2));

const customLanguages = [{
    id: 'blade',
    scopeName: 'text.html.php.blade',
    path: 'blade.tmLanguage.json',
}];

const languages = shiki.BUNDLED_LANGUAGES;
languages.push(...customLanguages);

(() => {
    if (argv._[0] === 'languages') {
        process.stdout.write(JSON.stringify(languages));
        return;
    }

    if (argv._[0] === 'themes') {
        process.stdout.write(JSON.stringify(shiki.BUNDLED_THEMES));
        return;
    }

    let language = argv.lang;
    if (! language) {
        language = 'php';
    }

    let theme = argv.theme;
    if (! theme) {
        theme = 'nord';
    }

    shiki.getHighlighter({
        theme,
        paths: {
            themes: 'dist/themes/',
            languages: 'dist/languages/'
        },
        langs: languages,
    }).then((highlighter) => {
        process.stdout.write(highlighter.codeToHtml(argv._[0], language));
    });
})();
