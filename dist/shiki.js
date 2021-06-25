'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lib$1 = {};

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
async function loadWASM$1(data) {
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
onigasmH.loadWASM = loadWASM$1;

var OnigRegExp$1 = {};

var OnigScanner$2 = {};

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
    push$1(this, arguments[i]);
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

function push$1 (self, item) {
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

var OnigString$2 = {};

Object.defineProperty(OnigString$2, "__esModule", { value: true });
class OnigString$1 {
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
OnigString$2.default = OnigString$1;

Object.defineProperty(OnigScanner$2, "__esModule", { value: true });
const LRUCache = lruCache;
const onigasmH_1$1 = onigasmH;
const OnigString_1$1 = OnigString$2;
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
class OnigScanner$1 {
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
OnigScanner$2.OnigScanner = OnigScanner$1;
OnigScanner$2.default = OnigScanner$1;

Object.defineProperty(OnigRegExp$1, "__esModule", { value: true });
const OnigScanner_1$1 = OnigScanner$2;
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

Object.defineProperty(lib$1, "__esModule", { value: true });
const onigasmH_1 = onigasmH;
var loadWASM = lib$1.loadWASM = onigasmH_1.loadWASM;
const OnigRegExp_1 = OnigRegExp$1;
lib$1.OnigRegExp = OnigRegExp_1.default;
const OnigScanner_1 = OnigScanner$2;
var OnigScanner = lib$1.OnigScanner = OnigScanner_1.default;
const OnigString_1 = OnigString$2;
var OnigString = lib$1.OnigString = OnigString_1.default;

var main = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(5),o=n(6),s=n(2),a="undefined"==typeof performance?function(){return Date.now()}:function(){return performance.now()};t.createGrammar=function(e,t,n,r,i,o){return new v(e,t,n,r,i,o)};var c=function(e){this.scopeName=e;};t.FullScopeDependency=c;var u=function(){function e(e,t){this.scopeName=e,this.include=t;}return e.prototype.toKey=function(){return this.scopeName+"#"+this.include},e}();t.PartialScopeDependency=u;var l=function(){function e(){this.full=[],this.partial=[],this.visitedRule=new Set,this._seenFull=new Set,this._seenPartial=new Set;}return e.prototype.add=function(e){e instanceof c?this._seenFull.has(e.scopeName)||(this._seenFull.add(e.scopeName),this.full.push(e)):this._seenPartial.has(e.toKey())||(this._seenPartial.add(e.toKey()),this.partial.push(e));},e}();function h(e,t,n,i,o){for(var s=0,a=i;s<a.length;s++){var l=a[s];if(!e.visitedRule.has(l)){e.visitedRule.add(l);var d=l.repository?r.mergeObjects({},o,l.repository):o;Array.isArray(l.patterns)&&h(e,t,n,l.patterns,d);var g=l.include;if(g)if("$base"===g||g===t.scopeName)f(e,t,t);else if("$self"===g||g===n.scopeName)f(e,t,n);else if("#"===g.charAt(0))p(e,t,n,g.substring(1),d);else {var m=g.indexOf("#");if(m>=0){var _=g.substring(0,m),y=g.substring(m+1);_===t.scopeName?p(e,t,t,y,d):_===n.scopeName?p(e,t,n,y,d):e.add(new u(_,g.substring(m+1)));}else e.add(new c(g));}}}}function p(e,t,n,r,i){(void 0===i&&(i=n.repository),i&&i[r])&&h(e,t,n,[i[r]],i);}function f(e,t,n){if(n.patterns&&Array.isArray(n.patterns)&&h(e,t,n,n.patterns,n.repository),n.injections){var r=[];for(var i in n.injections)r.push(n.injections[i]);h(e,t,n,r,n.repository);}}function d(e,t){if(!e)return !1;if(e===t)return !0;var n=t.length;return e.length>n&&e.substr(0,n)===t&&"."===e[n]}function g(e,t){if(t.length<e.length)return !1;var n=0;return e.every((function(e){for(var r=n;r<t.length;r++)if(d(t[r],e))return n=r+1,!0;return !1}))}function m(e,t,n,r,s){for(var a=o.createMatchers(t,g),c=i.RuleFactory.getCompiledRuleId(n,r,s.repository),u=0,l=a;u<l.length;u++){var h=l[u];e.push({matcher:h.matcher,ruleId:c,grammar:s,priority:h.priority});}}t.ScopeDependencyCollector=l,t.collectSpecificDependencies=p,t.collectDependencies=f;var _=function(e,t,n,r){this.scopeName=e,this.languageId=t,this.tokenType=n,this.themeData=r;};t.ScopeMetadata=_;var y=function(){function e(t,n,r){if(this._initialLanguage=t,this._themeProvider=n,this._cache=new Map,this._defaultMetaData=new _("",this._initialLanguage,0,[this._themeProvider.getDefaults()]),this._embeddedLanguages=Object.create(null),r)for(var i=Object.keys(r),o=0,s=i.length;o<s;o++){var a=i[o],c=r[a];"number"==typeof c&&0!==c?this._embeddedLanguages[a]=c:console.warn("Invalid embedded language found at scope "+a+": <<"+c+">>");}var u=Object.keys(this._embeddedLanguages).map((function(t){return e._escapeRegExpCharacters(t)}));0===u.length?this._embeddedLanguagesRegex=null:(u.sort(),u.reverse(),this._embeddedLanguagesRegex=new RegExp("^(("+u.join(")|(")+"))($|\\.)",""));}return e.prototype.onDidChangeTheme=function(){this._cache=new Map,this._defaultMetaData=new _("",this._initialLanguage,0,[this._themeProvider.getDefaults()]);},e.prototype.getDefaultMetadata=function(){return this._defaultMetaData},e._escapeRegExpCharacters=function(e){return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},e.prototype.getMetadataForScope=function(t){if(null===t)return e._NULL_SCOPE_METADATA;var n=this._cache.get(t);return n||(n=this._doGetMetadataForScope(t),this._cache.set(t,n),n)},e.prototype._doGetMetadataForScope=function(e){var t=this._scopeToLanguage(e),n=this._toStandardTokenType(e),r=this._themeProvider.themeMatch(e);return new _(e,t,n,r)},e.prototype._scopeToLanguage=function(e){if(!e)return 0;if(!this._embeddedLanguagesRegex)return 0;var t=e.match(this._embeddedLanguagesRegex);if(!t)return 0;var n=this._embeddedLanguages[t[1]]||0;return n||0},e.prototype._toStandardTokenType=function(t){var n=t.match(e.STANDARD_TOKEN_TYPE_REGEXP);if(!n)return 0;switch(n[1]){case"comment":return 1;case"string":return 2;case"regex":return 4;case"meta.embedded":return 8}throw new Error("Unexpected match for standard token type!")},e._NULL_SCOPE_METADATA=new _("",0,0,null),e.STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/,e}(),v=function(){function e(e,t,n,r,i,s){if(this._scopeMetadataProvider=new y(t,i,n),this._onigLib=s,this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=i,this._grammar=C(e,null),this._injections=null,this._tokenTypeMatchers=[],r)for(var a=0,c=Object.keys(r);a<c.length;a++)for(var u=c[a],l=0,h=o.createMatchers(u,g);l<h.length;l++){var p=h[l];this._tokenTypeMatchers.push({matcher:p.matcher,type:r[u]});}}return e.prototype.dispose=function(){for(var e=0,t=this._ruleId2desc;e<t.length;e++){var n=t[e];n&&n.dispose();}},e.prototype.createOnigScanner=function(e){return this._onigLib.createOnigScanner(e)},e.prototype.createOnigString=function(e){return this._onigLib.createOnigString(e)},e.prototype.onDidChangeTheme=function(){this._scopeMetadataProvider.onDidChangeTheme();},e.prototype.getMetadataForScope=function(e){return this._scopeMetadataProvider.getMetadataForScope(e)},e.prototype.getInjections=function(){var e=this;if(null===this._injections){this._injections=[];var t=this._grammar.injections;if(t)for(var n in t)m(this._injections,n,t[n],this,this._grammar);if(this._grammarRepository){var r=this._grammarRepository.injections(this._grammar.scopeName);r&&r.forEach((function(t){var n=e.getExternalGrammar(t);if(n){var r=n.injectionSelector;r&&m(e._injections,r,n,e,n);}}));}this._injections.sort((function(e,t){return e.priority-t.priority}));}return this._injections},e.prototype.registerRule=function(e){var t=++this._lastRuleId,n=e(t);return this._ruleId2desc[t]=n,n},e.prototype.getRule=function(e){return this._ruleId2desc[e]},e.prototype.getExternalGrammar=function(e,t){if(this._includedGrammars[e])return this._includedGrammars[e];if(this._grammarRepository){var n=this._grammarRepository.lookup(e);if(n)return this._includedGrammars[e]=C(n,t&&t.$base),this._includedGrammars[e]}return null},e.prototype.tokenizeLine=function(e,t){var n=this._tokenize(e,t,!1);return {tokens:n.lineTokens.getResult(n.ruleStack,n.lineLength),ruleStack:n.ruleStack}},e.prototype.tokenizeLine2=function(e,t){var n=this._tokenize(e,t,!0);return {tokens:n.lineTokens.getBinaryResult(n.ruleStack,n.lineLength),ruleStack:n.ruleStack}},e.prototype._tokenize=function(e,t,n){var r;if(-1===this._rootId&&(this._rootId=i.RuleFactory.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository)),t&&t!==I.NULL)r=!1,t.reset();else {r=!0;var o=this._scopeMetadataProvider.getDefaultMetadata(),s=o.themeData[0],a=P.set(0,o.languageId,o.tokenType,s.fontStyle,s.foreground,s.background),c=this.getRule(this._rootId).getName(null,null),u=this._scopeMetadataProvider.getMetadataForScope(c),l=x.mergeMetadata(a,null,u),h=new x(null,null===c?"unknown":c,l);t=new I(null,this._rootId,-1,-1,!1,null,h,h);}e+="\n";var p=this.createOnigString(e),f=p.content.length,d=new T(n,e,this._tokenTypeMatchers),g=S(this,p,r,0,t,d,!0);return b(p),{lineLength:f,lineTokens:d,ruleStack:g}},e}();function b(e){"function"==typeof e.dispose&&e.dispose();}function C(e,t){return (e=r.clone(e)).repository=e.repository||{},e.repository.$self={$vscodeTextmateLocation:e.$vscodeTextmateLocation,patterns:e.patterns,name:e.scopeName},e.repository.$base=t||e.repository.$self,e}function w(e,t,n,r,i,o,s){if(0!==o.length){for(var a=t.content,c=Math.min(o.length,s.length),u=[],l=s[0].end,h=0;h<c;h++){var p=o[h];if(null!==p){var f=s[h];if(0!==f.length){if(f.start>l)break;for(;u.length>0&&u[u.length-1].endPos<=f.start;)i.produceFromScopes(u[u.length-1].scopes,u[u.length-1].endPos),u.pop();if(u.length>0?i.produceFromScopes(u[u.length-1].scopes,f.start):i.produce(r,f.start),p.retokenizeCapturedWithRuleId){var d=p.getName(a,s),g=r.contentNameScopesList.push(e,d),m=p.getContentName(a,s),_=g.push(e,m),y=r.push(p.retokenizeCapturedWithRuleId,f.start,-1,!1,null,g,_),v=e.createOnigString(a.substring(0,f.end));S(e,v,n&&0===f.start,f.start,y,i,!1),b(v);}else {var C=p.getName(a,s);if(null!==C){var w=(u.length>0?u[u.length-1].scopes:r.contentNameScopesList).push(e,C);u.push(new A(w,f.end));}}}}}for(;u.length>0;)i.produceFromScopes(u[u.length-1].scopes,u[u.length-1].endPos),u.pop();}}function k(e){for(var t=[],n=0,r=e.rules.length;n<r;n++)t.push("   - "+e.rules[n]+": "+e.debugRegExps[n]);return t.join("\n")}function R(e,t,n,r,i,o){var c=function(e,t,n,r,i,o){var c=i.getRule(e),u=c.compile(e,i.endRule,n,r===o),l=0;s.DebugFlags.InDebugMode&&(l=a());var h=u.scanner.findNextMatchSync(t,r);if(s.DebugFlags.InDebugMode){var p=a()-l;p>5&&console.warn("Rule "+c.debugName+" ("+c.id+") matching took "+p+" against '"+t+"'"),h&&console.log("matched rule id: "+u.rules[h.index]+" from "+h.captureIndices[0].start+" to "+h.captureIndices[0].end);}return h?{captureIndices:h.captureIndices,matchedRuleId:u.rules[h.index]}:null}(e,t,n,r,i,o),u=e.getInjections();if(0===u.length)return c;var l=function(e,t,n,r,i,o,a){for(var c,u=Number.MAX_VALUE,l=null,h=0,p=o.contentNameScopesList.generateScopes(),f=0,d=e.length;f<d;f++){var g=e[f];if(g.matcher(p)){var m=t.getRule(g.ruleId).compile(t,null,r,i===a),_=m.scanner.findNextMatchSync(n,i);if(s.DebugFlags.InDebugMode&&(console.log("  scanning for injections"),console.log(k(m))),_){var y=_.captureIndices[0].start;if(!(y>=u)&&(u=y,l=_.captureIndices,c=m.rules[_.index],h=g.priority,u===i))break}}}return l?{priorityMatch:-1===h,captureIndices:l,matchedRuleId:c}:null}(u,e,t,n,r,i,o);if(!l)return c;if(!c)return l;var h=c.captureIndices[0].start,p=l.captureIndices[0].start;return p<h||l.priorityMatch&&p===h?l:c}function S(e,t,n,r,o,a,c){var u=t.content.length,l=!1,h=-1;if(c){var p=function(e,t,n,r,o,a){for(var c=o.beginRuleCapturedEOL?0:-1,u=[],l=o;l;l=l.pop()){var h=l.getRule(e);h instanceof i.BeginWhileRule&&u.push({rule:h,stack:l});}for(var p=u.pop();p;p=u.pop()){var f=p.rule.compileWhile(e,p.stack.endRule,n,c===r),d=f.scanner.findNextMatchSync(t,r);if(s.DebugFlags.InDebugMode&&(console.log("  scanning for while rule"),console.log(k(f))),!d){s.DebugFlags.InDebugMode&&console.log("  popping "+p.rule.debugName+" - "+p.rule.debugWhileRegExp),o=p.stack.pop();break}if(-2!==f.rules[d.index]){o=p.stack.pop();break}d.captureIndices&&d.captureIndices.length&&(a.produce(p.stack,d.captureIndices[0].start),w(e,t,n,p.stack,a,p.rule.whileCaptures,d.captureIndices),a.produce(p.stack,d.captureIndices[0].end),c=d.captureIndices[0].end,d.captureIndices[0].end>r&&(r=d.captureIndices[0].end,n=!1));}return {stack:o,linePos:r,anchorPosition:c,isFirstLine:n}}(e,t,n,r,o,a);o=p.stack,r=p.linePos,n=p.isFirstLine,h=p.anchorPosition;}for(;!l;)f();function f(){s.DebugFlags.InDebugMode&&(console.log(""),console.log("@@scanNext "+r+": |"+t.content.substr(r).replace(/\n$/,"\\n")+"|"));var c=R(e,t,n,r,o,h);if(!c)return s.DebugFlags.InDebugMode&&console.log("  no more matches."),a.produce(o,u),void(l=!0);var p=c.captureIndices,f=c.matchedRuleId,d=!!(p&&p.length>0)&&p[0].end>r;if(-1===f){var g=o.getRule(e);s.DebugFlags.InDebugMode&&console.log("  popping "+g.debugName+" - "+g.debugEndRegExp),a.produce(o,p[0].start),o=o.setContentNameScopesList(o.nameScopesList),w(e,t,n,o,a,g.endCaptures,p),a.produce(o,p[0].end);var m=o;if(o=o.pop(),h=m.getAnchorPos(),!d&&m.getEnterPos()===r)return s.DebugFlags.InDebugMode&&console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),o=m,a.produce(o,u),void(l=!0)}else {var _=e.getRule(f);a.produce(o,p[0].start);var y=o,v=_.getName(t.content,p),b=o.contentNameScopesList.push(e,v);if(o=o.push(f,r,h,p[0].end===u,null,b,b),_ instanceof i.BeginEndRule){var C=_;s.DebugFlags.InDebugMode&&console.log("  pushing "+C.debugName+" - "+C.debugBeginRegExp),w(e,t,n,o,a,C.beginCaptures,p),a.produce(o,p[0].end),h=p[0].end;var k=C.getContentName(t.content,p),S=b.push(e,k);if(o=o.setContentNameScopesList(S),C.endHasBackReferences&&(o=o.setEndRule(C.getEndWithResolvedBackReferences(t.content,p))),!d&&y.hasSameRuleAs(o))return s.DebugFlags.InDebugMode&&console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),o=o.pop(),a.produce(o,u),void(l=!0)}else if(_ instanceof i.BeginWhileRule){C=_;s.DebugFlags.InDebugMode&&console.log("  pushing "+C.debugName),w(e,t,n,o,a,C.beginCaptures,p),a.produce(o,p[0].end),h=p[0].end;k=C.getContentName(t.content,p),S=b.push(e,k);if(o=o.setContentNameScopesList(S),C.whileHasBackReferences&&(o=o.setEndRule(C.getWhileWithResolvedBackReferences(t.content,p))),!d&&y.hasSameRuleAs(o))return s.DebugFlags.InDebugMode&&console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),o=o.pop(),a.produce(o,u),void(l=!0)}else {var P=_;if(s.DebugFlags.InDebugMode&&console.log("  matched "+P.debugName+" - "+P.debugMatchRegExp),w(e,t,n,o,a,P.captures,p),a.produce(o,p[0].end),o=o.pop(),!d)return s.DebugFlags.InDebugMode&&console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),o=o.safePop(),a.produce(o,u),void(l=!0)}}p[0].end>r&&(r=p[0].end,n=!1);}return o}t.Grammar=v;var P=function(){function e(){}return e.toBinaryStr=function(e){for(var t=e.toString(2);t.length<32;)t="0"+t;return t},e.printMetadata=function(t){var n=e.getLanguageId(t),r=e.getTokenType(t),i=e.getFontStyle(t),o=e.getForeground(t),s=e.getBackground(t);console.log({languageId:n,tokenType:r,fontStyle:i,foreground:o,background:s});},e.getLanguageId=function(e){return (255&e)>>>0},e.getTokenType=function(e){return (1792&e)>>>8},e.getFontStyle=function(e){return (14336&e)>>>11},e.getForeground=function(e){return (8372224&e)>>>14},e.getBackground=function(e){return (4286578688&e)>>>23},e.set=function(t,n,r,i,o,s){var a=e.getLanguageId(t),c=e.getTokenType(t),u=e.getFontStyle(t),l=e.getForeground(t),h=e.getBackground(t);return 0!==n&&(a=n),0!==r&&(c=8===r?0:r),-1!==i&&(u=i),0!==o&&(l=o),0!==s&&(h=s),(a<<0|c<<8|u<<11|l<<14|h<<23)>>>0},e}();t.StackElementMetadata=P;var x=function(){function e(e,t,n){this.parent=e,this.scope=t,this.metadata=n;}return e._equals=function(e,t){for(;;){if(e===t)return !0;if(!e&&!t)return !0;if(!e||!t)return !1;if(e.scope!==t.scope||e.metadata!==t.metadata)return !1;e=e.parent,t=t.parent;}},e.prototype.equals=function(t){return e._equals(this,t)},e._matchesScope=function(e,t,n){return t===e||e.substring(0,n.length)===n},e._matches=function(e,t){if(null===t)return !0;for(var n=t.length,r=0,i=t[r],o=i+".";e;){if(this._matchesScope(e.scope,i,o)){if(++r===n)return !0;o=(i=t[r])+".";}e=e.parent;}return !1},e.mergeMetadata=function(e,t,n){if(null===n)return e;var r=-1,i=0,o=0;if(null!==n.themeData)for(var s=0,a=n.themeData.length;s<a;s++){var c=n.themeData[s];if(this._matches(t,c.parentScopes)){r=c.fontStyle,i=c.foreground,o=c.background;break}}return P.set(e,n.languageId,n.tokenType,r,i,o)},e._push=function(t,n,r){for(var i=0,o=r.length;i<o;i++){var s=r[i],a=n.getMetadataForScope(s),c=e.mergeMetadata(t.metadata,t,a);t=new e(t,s,c);}return t},e.prototype.push=function(t,n){return null===n?this:n.indexOf(" ")>=0?e._push(this,t,n.split(/ /g)):e._push(this,t,[n])},e._generateScopes=function(e){for(var t=[],n=0;e;)t[n++]=e.scope,e=e.parent;return t.reverse(),t},e.prototype.generateScopes=function(){return e._generateScopes(this)},e}();t.ScopeListElement=x;var I=function(){function e(e,t,n,r,i,o,s,a){this.parent=e,this.depth=this.parent?this.parent.depth+1:1,this.ruleId=t,this._enterPos=n,this._anchorPos=r,this.beginRuleCapturedEOL=i,this.endRule=o,this.nameScopesList=s,this.contentNameScopesList=a;}return e._structuralEquals=function(e,t){for(;;){if(e===t)return !0;if(!e&&!t)return !0;if(!e||!t)return !1;if(e.depth!==t.depth||e.ruleId!==t.ruleId||e.endRule!==t.endRule)return !1;e=e.parent,t=t.parent;}},e._equals=function(e,t){return e===t||!!this._structuralEquals(e,t)&&e.contentNameScopesList.equals(t.contentNameScopesList)},e.prototype.clone=function(){return this},e.prototype.equals=function(t){return null!==t&&e._equals(this,t)},e._reset=function(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent;},e.prototype.reset=function(){e._reset(this);},e.prototype.pop=function(){return this.parent},e.prototype.safePop=function(){return this.parent?this.parent:this},e.prototype.push=function(t,n,r,i,o,s,a){return new e(this,t,n,r,i,o,s,a)},e.prototype.getEnterPos=function(){return this._enterPos},e.prototype.getAnchorPos=function(){return this._anchorPos},e.prototype.getRule=function(e){return e.getRule(this.ruleId)},e.prototype._writeString=function(e,t){return this.parent&&(t=this.parent._writeString(e,t)),e[t++]="("+this.ruleId+", TODO-"+this.nameScopesList+", TODO-"+this.contentNameScopesList+")",t},e.prototype.toString=function(){var e=[];return this._writeString(e,0),"["+e.join(",")+"]"},e.prototype.setContentNameScopesList=function(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)},e.prototype.setEndRule=function(t){return this.endRule===t?this:new e(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,t,this.nameScopesList,this.contentNameScopesList)},e.prototype.hasSameRuleAs=function(e){return this.ruleId===e.ruleId},e.NULL=new e(null,0,0,0,!1,null,null,null),e}();t.StackElement=I;var A=function(e,t){this.scopes=e,this.endPos=t;};t.LocalStackElement=A;var T=function(){function e(e,t,n){this._emitBinaryTokens=e,this._tokenTypeOverrides=n,s.DebugFlags.InDebugMode?this._lineText=t:this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0;}return e.prototype.produce=function(e,t){this.produceFromScopes(e.contentNameScopesList,t);},e.prototype.produceFromScopes=function(e,t){if(!(this._lastTokenEndIndex>=t)){if(this._emitBinaryTokens){for(var n=e.metadata,r=0,i=this._tokenTypeOverrides;r<i.length;r++){var o=i[r];o.matcher(e.generateScopes())&&(n=P.set(n,0,L(o.type),-1,0,0));}return this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===n||(this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(n)),void(this._lastTokenEndIndex=t)}var a=e.generateScopes();if(s.DebugFlags.InDebugMode){console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,t).replace(/\n$/,"\\n")+"|");for(var c=0;c<a.length;c++)console.log("      * "+a[c]);}this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:t,scopes:a}),this._lastTokenEndIndex=t;}},e.prototype.getResult=function(e,t){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===t-1&&this._tokens.pop(),0===this._tokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._tokens[this._tokens.length-1].startIndex=0),this._tokens},e.prototype.getBinaryResult=function(e,t){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===t-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),0===this._binaryTokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._binaryTokens[this._binaryTokens.length-2]=0);for(var n=new Uint32Array(this._binaryTokens.length),r=0,i=this._binaryTokens.length;r<i;r++)n[r]=this._binaryTokens[r];return n},e}();function L(e){switch(e){case 4:return 4;case 2:return 2;case 1:return 1;case 0:default:return 8}}},function(e,t,n){function r(e){return Array.isArray(e)?function(e){for(var t=[],n=0,i=e.length;n<i;n++)t[n]=r(e[n]);return t}(e):"object"==typeof e?function(e){var t={};for(var n in e)t[n]=r(e[n]);return t}(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.clone=function(e){return r(e)},t.mergeObjects=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.forEach((function(t){for(var n in t)e[n]=t[n];})),e},t.basename=function e(t){var n=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return 0===n?t:~n==t.length-1?e(t.substring(0,t.length-1)):t.substr(1+~n)};var i=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/,o=function(){function e(){}return e.hasCaptures=function(e){return null!==e&&i.test(e)},e.replaceCaptures=function(e,t,n){return e.replace(i,(function(e,r,i,o){var s=n[parseInt(r||i,10)];if(!s)return e;for(var a=t.substring(s.start,s.end);"."===a[0];)a=a.substring(1);switch(o){case"downcase":return a.toLowerCase();case"upcase":return a.toUpperCase();default:return a}}))},e}();t.RegexSource=o;},function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.DebugFlags={InDebugMode:void 0!==e&&!!e.env.VSCODE_TEXTMATE_DEBUG};}).call(this,n(7));},function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e));}catch(e){o(e);}}function a(e){try{c(r.throw(e));}catch(e){o(e);}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(s,a);}c((r=r.apply(e,t||[])).next());}))},i=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s);}catch(e){o=[6,e],r=0;}finally{n=i=0;}if(5&o[0])throw o[1];return {value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),s=n(8),a=n(11),c=n(0),u=function(){function e(e){this._options=e,this._syncRegistry=new o.SyncRegistry(a.Theme.createFromRawTheme(e.theme,e.colorMap),e.onigLib),this._ensureGrammarCache=new Map;}return e.prototype.dispose=function(){this._syncRegistry.dispose();},e.prototype.setTheme=function(e,t){this._syncRegistry.setTheme(a.Theme.createFromRawTheme(e,t));},e.prototype.getColorMap=function(){return this._syncRegistry.getColorMap()},e.prototype.loadGrammarWithEmbeddedLanguages=function(e,t,n){return this.loadGrammarWithConfiguration(e,t,{embeddedLanguages:n})},e.prototype.loadGrammarWithConfiguration=function(e,t,n){return this._loadGrammar(e,t,n.embeddedLanguages,n.tokenTypes)},e.prototype.loadGrammar=function(e){return this._loadGrammar(e,0,null,null)},e.prototype._doLoadSingleGrammar=function(e){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return [4,this._options.loadGrammar(e)];case 1:return (t=r.sent())&&(n="function"==typeof this._options.getInjections?this._options.getInjections(e):void 0,this._syncRegistry.addGrammar(t,n)),[2]}}))}))},e.prototype._loadSingleGrammar=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this._ensureGrammarCache.has(e)||this._ensureGrammarCache.set(e,this._doLoadSingleGrammar(e)),[2,this._ensureGrammarCache.get(e)]}))}))},e.prototype._collectDependenciesForDep=function(e,t,n){var r=this._syncRegistry.lookup(n.scopeName);if(r){n instanceof c.FullScopeDependency?c.collectDependencies(t,this._syncRegistry.lookup(e),r):c.collectSpecificDependencies(t,this._syncRegistry.lookup(e),r,n.include);var i=this._syncRegistry.injections(n.scopeName);if(i)for(var o=0,s=i;o<s.length;o++){var a=s[o];t.add(new c.FullScopeDependency(a));}}else if(n.scopeName===e)throw new Error("No grammar provided for <"+e+">")},e.prototype._loadGrammar=function(e,t,n,o){return r(this,void 0,void 0,(function(){var r,s,a,u,l,h,p,f,d,g,m,_,y=this;return i(this,(function(i){switch(i.label){case 0:r=new Set,s=new Set,r.add(e),a=[new c.FullScopeDependency(e)],i.label=1;case 1:return a.length>0?(u=a,a=[],[4,Promise.all(u.map((function(e){return y._loadSingleGrammar(e.scopeName)})))]):[3,3];case 2:for(i.sent(),l=new c.ScopeDependencyCollector,h=0,p=u;h<p.length;h++)_=p[h],this._collectDependenciesForDep(e,l,_);for(f=0,d=l.full;f<d.length;f++)_=d[f],r.has(_.scopeName)||(r.add(_.scopeName),a.push(_));for(g=0,m=l.partial;g<m.length;g++)_=m[g],r.has(_.scopeName)||s.has(_.toKey())||(s.add(_.toKey()),a.push(_));return [3,1];case 3:return [2,this.grammarForScopeName(e,t,n,o)]}}))}))},e.prototype.addGrammar=function(e,t,n,o){return void 0===t&&(t=[]),void 0===n&&(n=0),void 0===o&&(o=null),r(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return this._syncRegistry.addGrammar(e,t),[4,this.grammarForScopeName(e.scopeName,n,o)];case 1:return [2,r.sent()]}}))}))},e.prototype.grammarForScopeName=function(e,t,n,r){return void 0===t&&(t=0),void 0===n&&(n=null),void 0===r&&(r=null),this._syncRegistry.grammarForScopeName(e,t,n,r)},e}();t.Registry=u,t.INITIAL=c.StackElement.NULL,t.parseRawGrammar=s.parseRawGrammar;},function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e));}catch(e){o(e);}}function a(e){try{c(r.throw(e));}catch(e){o(e);}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t);}))).then(s,a);}c((r=r.apply(e,t||[])).next());}))},i=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s);}catch(e){o=[6,e],r=0;}finally{n=i=0;}if(5&o[0])throw o[1];return {value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),s=function(){function e(e,t){this._theme=e,this._grammars={},this._rawGrammars={},this._injectionGrammars={},this._onigLibPromise=t;}return e.prototype.dispose=function(){for(var e in this._grammars)this._grammars.hasOwnProperty(e)&&this._grammars[e].dispose();},e.prototype.setTheme=function(e){var t=this;this._theme=e,Object.keys(this._grammars).forEach((function(e){t._grammars[e].onDidChangeTheme();}));},e.prototype.getColorMap=function(){return this._theme.getColorMap()},e.prototype.addGrammar=function(e,t){this._rawGrammars[e.scopeName]=e,t&&(this._injectionGrammars[e.scopeName]=t);},e.prototype.lookup=function(e){return this._rawGrammars[e]},e.prototype.injections=function(e){return this._injectionGrammars[e]},e.prototype.getDefaults=function(){return this._theme.getDefaults()},e.prototype.themeMatch=function(e){return this._theme.match(e)},e.prototype.grammarForScopeName=function(e,t,n,s){return r(this,void 0,void 0,(function(){var r,a,c,u,l;return i(this,(function(i){switch(i.label){case 0:return this._grammars[e]?[3,2]:(r=this._rawGrammars[e])?(a=this._grammars,c=e,u=o.createGrammar,l=[r,t,n,s,this],[4,this._onigLibPromise]):[2,null];case 1:a[c]=u.apply(void 0,l.concat([i.sent()])),i.label=2;case 2:return [2,this._grammars[e]]}}))}))},e}();t.SyncRegistry=s;},function(e,t,n){var r,i=this&&this.__extends||(r=function(e,t){return (r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);})(e,t)},function(e,t){function n(){this.constructor=e;}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=/\\(\d+)/,a=/\\(\d+)/g,c=function(){function e(e,t,n){this.debugRegExps=t,this.rules=n,this.scanner=e.createOnigScanner(t);}return e.prototype.dispose=function(){"function"==typeof this.scanner.dispose&&this.scanner.dispose();},e}();t.CompiledRule=c;var u=function(){function e(e,t,n,r){this.$location=e,this.id=t,this._name=n||null,this._nameIsCapturing=o.RegexSource.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=o.RegexSource.hasCaptures(this._contentName);}return Object.defineProperty(e.prototype,"debugName",{get:function(){var e=this.$location?o.basename(this.$location.filename)+":"+this.$location.line:"unknown";return this.constructor.name+"#"+this.id+" @ "+e},enumerable:!0,configurable:!0}),e.prototype.getName=function(e,t){return this._nameIsCapturing&&null!==this._name&&null!==e&&null!==t?o.RegexSource.replaceCaptures(this._name,e,t):this._name},e.prototype.getContentName=function(e,t){return this._contentNameIsCapturing&&null!==this._contentName?o.RegexSource.replaceCaptures(this._contentName,e,t):this._contentName},e}();t.Rule=u;var l=function(e){function t(t,n,r,i,o){var s=e.call(this,t,n,r,i)||this;return s.retokenizeCapturedWithRuleId=o,s}return i(t,e),t.prototype.dispose=function(){},t.prototype.collectPatternsRecursive=function(e,t,n){throw new Error("Not supported!")},t.prototype.compile=function(e,t,n,r){throw new Error("Not supported!")},t}(u);t.CaptureRule=l;var h=function(){function e(e,t,n){if(void 0===n&&(n=!0),n)if(e){for(var r=e.length,i=0,o=[],a=!1,c=0;c<r;c++){if("\\"===e.charAt(c)&&c+1<r){var u=e.charAt(c+1);"z"===u?(o.push(e.substring(i,c)),o.push("$(?!\\n)(?<!\\n)"),i=c+2):"A"!==u&&"G"!==u||(a=!0),c++;}}this.hasAnchor=a,0===i?this.source=e:(o.push(e.substring(i,r)),this.source=o.join(""));}else this.hasAnchor=!1,this.source=e;else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=t,this.hasBackReferences=s.test(this.source);}return e.prototype.clone=function(){return new e(this.source,this.ruleId,!0)},e.prototype.setSource=function(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()));},e.prototype.resolveBackReferences=function(e,t){var n=t.map((function(t){return e.substring(t.start,t.end)}));return a.lastIndex=0,this.source.replace(a,(function(e,t){return (n[parseInt(t,10)]||"").replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")}))},e.prototype._buildAnchorCache=function(){var e,t,n,r,i=[],o=[],s=[],a=[];for(e=0,t=this.source.length;e<t;e++)n=this.source.charAt(e),i[e]=n,o[e]=n,s[e]=n,a[e]=n,"\\"===n&&e+1<t&&("A"===(r=this.source.charAt(e+1))?(i[e+1]="￿",o[e+1]="￿",s[e+1]="A",a[e+1]="A"):"G"===r?(i[e+1]="￿",o[e+1]="G",s[e+1]="￿",a[e+1]="G"):(i[e+1]=r,o[e+1]=r,s[e+1]=r,a[e+1]=r),e++);return {A0_G0:i.join(""),A0_G1:o.join(""),A1_G0:s.join(""),A1_G1:a.join("")}},e.prototype.resolveAnchors=function(e,t){return this.hasAnchor&&this._anchorCache?e?t?this._anchorCache.A1_G1:this._anchorCache.A1_G0:t?this._anchorCache.A0_G1:this._anchorCache.A0_G0:this.source},e}();t.RegExpSource=h;var p=function(){function e(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null};}return e.prototype.dispose=function(){this._disposeCaches();},e.prototype._disposeCaches=function(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null);},e.prototype.push=function(e){this._items.push(e),this._hasAnchors=this._hasAnchors||e.hasAnchor;},e.prototype.unshift=function(e){this._items.unshift(e),this._hasAnchors=this._hasAnchors||e.hasAnchor;},e.prototype.length=function(){return this._items.length},e.prototype.setSource=function(e,t){this._items[e].source!==t&&(this._disposeCaches(),this._items[e].setSource(t));},e.prototype.compile=function(e,t,n){if(this._hasAnchors)return t?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G0);if(!this._cached){var r=this._items.map((function(e){return e.source}));this._cached=new c(e,r,this._items.map((function(e){return e.ruleId})));}return this._cached},e.prototype._resolveAnchors=function(e,t,n){var r=this._items.map((function(e){return e.resolveAnchors(t,n)}));return new c(e,r,this._items.map((function(e){return e.ruleId})))},e}();t.RegExpSourceList=p;var f=function(e){function t(t,n,r,i,o){var s=e.call(this,t,n,r,null)||this;return s._match=new h(i,s.id),s.captures=o,s._cachedCompiledPatterns=null,s}return i(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);},Object.defineProperty(t.prototype,"debugMatchRegExp",{get:function(){return ""+this._match.source},enumerable:!0,configurable:!0}),t.prototype.collectPatternsRecursive=function(e,t,n){t.push(this._match);},t.prototype.compile=function(e,t,n,r){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0)),this._cachedCompiledPatterns.compile(e,n,r)},t}(u);t.MatchRule=f;var d=function(e){function t(t,n,r,i,o){var s=e.call(this,t,n,r,i)||this;return s.patterns=o.patterns,s.hasMissingPatterns=o.hasMissingPatterns,s._cachedCompiledPatterns=null,s}return i(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);},t.prototype.collectPatternsRecursive=function(e,t,n){var r,i;for(r=0,i=this.patterns.length;r<i;r++)e.getRule(this.patterns[r]).collectPatternsRecursive(e,t,!1);},t.prototype.compile=function(e,t,n,r){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0)),this._cachedCompiledPatterns.compile(e,n,r)},t}(u);t.IncludeOnlyRule=d;var g=function(e){function t(t,n,r,i,o,s,a,c,u,l){var p=e.call(this,t,n,r,i)||this;return p._begin=new h(o,p.id),p.beginCaptures=s,p._end=new h(a||"￿",-1),p.endHasBackReferences=p._end.hasBackReferences,p.endCaptures=c,p.applyEndPatternLast=u||!1,p.patterns=l.patterns,p.hasMissingPatterns=l.hasMissingPatterns,p._cachedCompiledPatterns=null,p}return i(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);},Object.defineProperty(t.prototype,"debugBeginRegExp",{get:function(){return ""+this._begin.source},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"debugEndRegExp",{get:function(){return ""+this._end.source},enumerable:!0,configurable:!0}),t.prototype.getEndWithResolvedBackReferences=function(e,t){return this._end.resolveBackReferences(e,t)},t.prototype.collectPatternsRecursive=function(e,t,n){if(n){var r,i=void 0;for(i=0,r=this.patterns.length;i<r;i++)e.getRule(this.patterns[i]).collectPatternsRecursive(e,t,!1);}else t.push(this._begin);},t.prototype.compile=function(e,t,n,r){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0),this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)),this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,t):this._cachedCompiledPatterns.setSource(0,t)),this._cachedCompiledPatterns.compile(e,n,r)},t}(u);t.BeginEndRule=g;var m=function(e){function t(t,n,r,i,o,s,a,c,u){var l=e.call(this,t,n,r,i)||this;return l._begin=new h(o,l.id),l.beginCaptures=s,l.whileCaptures=c,l._while=new h(a,-2),l.whileHasBackReferences=l._while.hasBackReferences,l.patterns=u.patterns,l.hasMissingPatterns=u.hasMissingPatterns,l._cachedCompiledPatterns=null,l._cachedCompiledWhilePatterns=null,l}return i(t,e),t.prototype.dispose=function(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null);},Object.defineProperty(t.prototype,"debugBeginRegExp",{get:function(){return ""+this._begin.source},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"debugWhileRegExp",{get:function(){return ""+this._while.source},enumerable:!0,configurable:!0}),t.prototype.getWhileWithResolvedBackReferences=function(e,t){return this._while.resolveBackReferences(e,t)},t.prototype.collectPatternsRecursive=function(e,t,n){if(n){var r,i=void 0;for(i=0,r=this.patterns.length;i<r;i++)e.getRule(this.patterns[i]).collectPatternsRecursive(e,t,!1);}else t.push(this._begin);},t.prototype.compile=function(e,t,n,r){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new p,this.collectPatternsRecursive(e,this._cachedCompiledPatterns,!0)),this._cachedCompiledPatterns.compile(e,n,r)},t.prototype.compileWhile=function(e,t,n,r){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new p,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,t||"￿"),this._cachedCompiledWhilePatterns.compile(e,n,r)},t}(u);t.BeginWhileRule=m;var _=function(){function e(){}return e.createCaptureRule=function(e,t,n,r,i){return e.registerRule((function(e){return new l(t,e,n,r,i)}))},e.getCompiledRuleId=function(t,n,r){return t.id||n.registerRule((function(i){if(t.id=i,t.match)return new f(t.$vscodeTextmateLocation,t.id,t.name,t.match,e._compileCaptures(t.captures,n,r));if(void 0===t.begin){t.repository&&(r=o.mergeObjects({},r,t.repository));var s=t.patterns;return void 0===s&&t.include&&(s=[{include:t.include}]),new d(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,e._compilePatterns(s,n,r))}return t.while?new m(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,e._compileCaptures(t.beginCaptures||t.captures,n,r),t.while,e._compileCaptures(t.whileCaptures||t.captures,n,r),e._compilePatterns(t.patterns,n,r)):new g(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,e._compileCaptures(t.beginCaptures||t.captures,n,r),t.end,e._compileCaptures(t.endCaptures||t.captures,n,r),t.applyEndPatternLast,e._compilePatterns(t.patterns,n,r))})),t.id},e._compileCaptures=function(t,n,r){var i=[];if(t){var o=0;for(var s in t){if("$vscodeTextmateLocation"!==s)(c=parseInt(s,10))>o&&(o=c);}for(var a=0;a<=o;a++)i[a]=null;for(var s in t)if("$vscodeTextmateLocation"!==s){var c=parseInt(s,10),u=0;t[s].patterns&&(u=e.getCompiledRuleId(t[s],n,r)),i[c]=e.createCaptureRule(n,t[s].$vscodeTextmateLocation,t[s].name,t[s].contentName,u);}}return i},e._compilePatterns=function(t,n,r){var i=[];if(t)for(var o=0,s=t.length;o<s;o++){var a=t[o],c=-1;if(a.include)if("#"===a.include.charAt(0)){var u=r[a.include.substr(1)];u&&(c=e.getCompiledRuleId(u,n,r));}else if("$base"===a.include||"$self"===a.include)c=e.getCompiledRuleId(r[a.include],n,r);else {var l=null,h=null,p=a.include.indexOf("#");p>=0?(l=a.include.substring(0,p),h=a.include.substring(p+1)):l=a.include;var f=n.getExternalGrammar(l,r);if(f)if(h){var _=f.repository[h];_&&(c=e.getCompiledRuleId(_,n,f.repository));}else c=e.getCompiledRuleId(f.repository.$self,n,f.repository);}else c=e.getCompiledRuleId(a,n,r);if(-1!==c){var y=n.getRule(c),v=!1;if((y instanceof d||y instanceof g||y instanceof m)&&y.hasMissingPatterns&&0===y.patterns.length&&(v=!0),v)continue;i.push(c);}}return {patterns:i,hasMissingPatterns:(t?t.length:0)!==i.length}},e}();t.RuleFactory=_;},function(e,t,n){function r(e){return !!e&&!!e.match(/[\w\.:]+/)}Object.defineProperty(t,"__esModule",{value:!0}),t.createMatchers=function(e,t){for(var n,i,o,s=[],a=(o=(i=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(n=e),{next:function(){if(!o)return null;var e=o[0];return o=i.exec(n),e}}),c=a.next();null!==c;){var u=0;if(2===c.length&&":"===c.charAt(1)){switch(c.charAt(0)){case"R":u=1;break;case"L":u=-1;break;default:console.log("Unknown priority "+c+" in scope selector");}c=a.next();}var l=p();if(s.push({matcher:l,priority:u}),","!==c)break;c=a.next();}return s;function h(){if("-"===c){c=a.next();var e=h();return function(t){return !!e&&!e(t)}}if("("===c){c=a.next();var n=function(){var e=[],t=p();for(;t&&(e.push(t),"|"===c||","===c);){do{c=a.next();}while("|"===c||","===c);t=p();}return function(t){return e.some((function(e){return e(t)}))}}();return ")"===c&&(c=a.next()),n}if(r(c)){var i=[];do{i.push(c),c=a.next();}while(r(c));return function(e){return t(i,e)}}return null}function p(){for(var e=[],t=h();t;)e.push(t),t=h();return function(t){return e.every((function(e){return e(t)}))}}};},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o;}catch(e){n=o;}try{r="function"==typeof clearTimeout?clearTimeout:s;}catch(e){r=s;}}();var c,u=[],l=!1,h=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f());}function f(){if(!l){var e=a(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length;}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e);}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e);}}function d(e,t){this.fun=e,this.array=t;}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||a(f);},d.prototype.run=function(){this.fun.apply(null,this.array);},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return []},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return "/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=n(2),o=n(10);t.parseRawGrammar=function(e,t){return void 0===t&&(t=null),null!==t&&/\.json$/.test(t)?function(e,t){if(i.DebugFlags.InDebugMode)return o.parse(e,t,!0);return JSON.parse(e)}(e,t):function(e,t){if(i.DebugFlags.InDebugMode)return r.parseWithLocation(e,t,"$vscodeTextmateLocation");return r.parse(e)}(e,t)};},function(e,t,n){function r(e,t,n){var r=e.length,i=0,o=1,s=0;function a(t){if(null===n)i+=t;else for(;t>0;){10===e.charCodeAt(i)?(i++,o++,s=0):(i++,s++),t--;}}function c(e){null===n?i=e:a(e-i);}function u(){for(;i<r;){var t=e.charCodeAt(i);if(32!==t&&9!==t&&13!==t&&10!==t)break;a(1);}}function l(t){return e.substr(i,t.length)===t&&(a(t.length),!0)}function h(t){var n=e.indexOf(t,i);c(-1!==n?n+t.length:r);}function p(t){var n=e.indexOf(t,i);if(-1!==n){var o=e.substring(i,n);return c(n+t.length),o}o=e.substr(i);return c(r),o}r>0&&65279===e.charCodeAt(0)&&(i=1);var f=0,d=null,g=[],m=[],_=null;function y(e,t){g.push(f),m.push(d),f=e,d=t;}function v(){if(0===g.length)return b("illegal state stack");f=g.pop(),d=m.pop();}function b(t){throw new Error("Near offset "+i+": "+t+" ~~~"+e.substr(i,50)+"~~~")}var C,w,k,R=function(){if(null===_)return b("missing <key>");var e={};null!==n&&(e[n]={filename:t,line:o,char:s}),d[_]=e,_=null,y(1,e);},S=function(){if(null===_)return b("missing <key>");var e=[];d[_]=e,_=null,y(2,e);},P=function(){var e={};null!==n&&(e[n]={filename:t,line:o,char:s}),d.push(e),y(1,e);},x=function(){var e=[];d.push(e),y(2,e);};function I(){if(1!==f)return b("unexpected </dict>");v();}function A(){return 1===f||2!==f?b("unexpected </array>"):void v()}function T(e){if(1===f){if(null===_)return b("missing <key>");d[_]=e,_=null;}else 2===f?d.push(e):d=e;}function L(e){if(isNaN(e))return b("cannot parse float");if(1===f){if(null===_)return b("missing <key>");d[_]=e,_=null;}else 2===f?d.push(e):d=e;}function M(e){if(isNaN(e))return b("cannot parse integer");if(1===f){if(null===_)return b("missing <key>");d[_]=e,_=null;}else 2===f?d.push(e):d=e;}function G(e){if(1===f){if(null===_)return b("missing <key>");d[_]=e,_=null;}else 2===f?d.push(e):d=e;}function D(e){if(1===f){if(null===_)return b("missing <key>");d[_]=e,_=null;}else 2===f?d.push(e):d=e;}function N(e){if(1===f){if(null===_)return b("missing <key>");d[_]=e,_=null;}else 2===f?d.push(e):d=e;}function E(e){if(e.isClosed)return "";var t=p("</");return h(">"),t.replace(/&#([0-9]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,10))})).replace(/&#x([0-9a-f]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,16))})).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,(function(e){switch(e){case"&amp;":return "&";case"&lt;":return "<";case"&gt;":return ">";case"&quot;":return '"';case"&apos;":return "'"}return e}))}for(;i<r&&(u(),!(i>=r));){var O=e.charCodeAt(i);if(a(1),60!==O)return b("expected <");if(i>=r)return b("unexpected end of input");var j=e.charCodeAt(i);if(63!==j)if(33!==j){if(47===j){if(a(1),u(),l("plist")){h(">");continue}if(l("dict")){h(">"),I();continue}if(l("array")){h(">"),A();continue}return b("unexpected closed tag")}var F=(w=void 0,k=void 0,w=p(">"),k=!1,47===w.charCodeAt(w.length-1)&&(k=!0,w=w.substring(0,w.length-1)),{name:w.trim(),isClosed:k});switch(F.name){case"dict":1===f?R():2===f?P():(d={},null!==n&&(d[n]={filename:t,line:o,char:s}),y(1,d)),F.isClosed&&I();continue;case"array":1===f?S():2===f?x():y(2,d=[]),F.isClosed&&A();continue;case"key":C=E(F),1!==f?b("unexpected <key>"):null!==_?b("too many <key>"):_=C;continue;case"string":T(E(F));continue;case"real":L(parseFloat(E(F)));continue;case"integer":M(parseInt(E(F),10));continue;case"date":G(new Date(E(F)));continue;case"data":D(E(F));continue;case"true":E(F),N(!0);continue;case"false":E(F),N(!1);continue}if(!/^plist/.test(F.name))return b("unexpected opened tag "+F.name)}else {if(a(1),l("--")){h("--\x3e");continue}h(">");}else a(1),h("?>");}return d}Object.defineProperty(t,"__esModule",{value:!0}),t.parseWithLocation=function(e,t,n){return r(e,t,n)},t.parse=function(e){return r(e,null,null)};},function(e,t,n){function r(e,t){throw new Error("Near offset "+e.pos+": "+t+" ~~~"+e.source.substr(e.pos,50)+"~~~")}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=function(e,t,n){var a=new i(e),c=new o,u=0,l=null,h=[],p=[];function f(){h.push(u),p.push(l);}function d(){u=h.pop(),l=p.pop();}function g(e){r(a,e);}for(;s(a,c);){if(0===u){if(null!==l&&g("too many constructs in root"),3===c.type){l={},n&&(l.$vscodeTextmateLocation=c.toLocation(t)),f(),u=1;continue}if(2===c.type){l=[],f(),u=4;continue}g("unexpected token in root");}if(2===u){if(5===c.type){d();continue}if(7===c.type){u=3;continue}g("expected , or }");}if(1===u||3===u){if(1===u&&5===c.type){d();continue}if(1===c.type){var m=c.value;if(s(a,c)&&6===c.type||g("expected colon"),s(a,c)||g("expected value"),u=2,1===c.type){l[m]=c.value;continue}if(8===c.type){l[m]=null;continue}if(9===c.type){l[m]=!0;continue}if(10===c.type){l[m]=!1;continue}if(11===c.type){l[m]=parseFloat(c.value);continue}if(2===c.type){var _=[];l[m]=_,f(),u=4,l=_;continue}if(3===c.type){var y={};n&&(y.$vscodeTextmateLocation=c.toLocation(t)),l[m]=y,f(),u=1,l=y;continue}}g("unexpected token in dict");}if(5===u){if(4===c.type){d();continue}if(7===c.type){u=6;continue}g("expected , or ]");}if(4===u||6===u){if(4===u&&4===c.type){d();continue}if(u=5,1===c.type){l.push(c.value);continue}if(8===c.type){l.push(null);continue}if(9===c.type){l.push(!0);continue}if(10===c.type){l.push(!1);continue}if(11===c.type){l.push(parseFloat(c.value));continue}if(2===c.type){_=[];l.push(_),f(),u=4,l=_;continue}if(3===c.type){y={};n&&(y.$vscodeTextmateLocation=c.toLocation(t)),l.push(y),f(),u=1,l=y;continue}g("unexpected token in array");}g("unknown state");}return 0!==p.length&&g("unclosed constructs"),l};var i=function(e){this.source=e,this.pos=0,this.len=e.length,this.line=1,this.char=0;},o=function(){function e(){this.value=null,this.type=0,this.offset=-1,this.len=-1,this.line=-1,this.char=-1;}return e.prototype.toLocation=function(e){return {filename:e,line:this.line,char:this.char}},e}();function s(e,t){t.value=null,t.type=0,t.offset=-1,t.len=-1,t.line=-1,t.char=-1;for(var n,i=e.source,o=e.pos,s=e.len,a=e.line,c=e.char;;){if(o>=s)return !1;if(32!==(n=i.charCodeAt(o))&&9!==n&&13!==n){if(10!==n)break;o++,a++,c=0;}else o++,c++;}if(t.offset=o,t.line=a,t.char=c,34===n){for(t.type=1,o++,c++;;){if(o>=s)return !1;if(n=i.charCodeAt(o),o++,c++,92!==n){if(34===n)break}else o++,c++;}t.value=i.substring(t.offset+1,o-1).replace(/\\u([0-9A-Fa-f]{4})/g,(function(e,t){return String.fromCodePoint(parseInt(t,16))})).replace(/\\(.)/g,(function(t,n){switch(n){case'"':return '"';case"\\":return "\\";case"/":return "/";case"b":return "\b";case"f":return "\f";case"n":return "\n";case"r":return "\r";case"t":return "\t";default:r(e,"invalid escape sequence");}throw new Error("unreachable")}));}else if(91===n)t.type=2,o++,c++;else if(123===n)t.type=3,o++,c++;else if(93===n)t.type=4,o++,c++;else if(125===n)t.type=5,o++,c++;else if(58===n)t.type=6,o++,c++;else if(44===n)t.type=7,o++,c++;else if(110===n){if(t.type=8,o++,c++,117!==(n=i.charCodeAt(o)))return !1;if(o++,c++,108!==(n=i.charCodeAt(o)))return !1;if(o++,c++,108!==(n=i.charCodeAt(o)))return !1;o++,c++;}else if(116===n){if(t.type=9,o++,c++,114!==(n=i.charCodeAt(o)))return !1;if(o++,c++,117!==(n=i.charCodeAt(o)))return !1;if(o++,c++,101!==(n=i.charCodeAt(o)))return !1;o++,c++;}else if(102===n){if(t.type=10,o++,c++,97!==(n=i.charCodeAt(o)))return !1;if(o++,c++,108!==(n=i.charCodeAt(o)))return !1;if(o++,c++,115!==(n=i.charCodeAt(o)))return !1;if(o++,c++,101!==(n=i.charCodeAt(o)))return !1;o++,c++;}else for(t.type=11;;){if(o>=s)return !1;if(!(46===(n=i.charCodeAt(o))||n>=48&&n<=57||101===n||69===n||45===n||43===n))break;o++,c++;}return t.len=o-t.offset,null===t.value&&(t.value=i.substr(t.offset,t.len)),e.pos=o,e.line=a,e.char=c,!0}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n,r,i,o){this.scope=e,this.parentScopes=t,this.index=n,this.fontStyle=r,this.foreground=i,this.background=o;};function i(e){return !!/^#[0-9a-f]{6}$/i.test(e)||(!!/^#[0-9a-f]{8}$/i.test(e)||(!!/^#[0-9a-f]{3}$/i.test(e)||!!/^#[0-9a-f]{4}$/i.test(e)))}function o(e){if(!e)return [];if(!e.settings||!Array.isArray(e.settings))return [];for(var t=e.settings,n=[],o=0,s=0,a=t.length;s<a;s++){var c=t[s];if(c.settings){var u=void 0;if("string"==typeof c.scope)u=c.scope.replace(/^[,]+/,"").replace(/[,]+$/,"").split(",");else u=Array.isArray(c.scope)?c.scope:[""];var l=-1;if("string"==typeof c.settings.fontStyle){l=0;for(var h=0,p=(g=c.settings.fontStyle.split(" ")).length;h<p;h++){switch(g[h]){case"italic":l|=1;break;case"bold":l|=2;break;case"underline":l|=4;}}}var f=null;"string"==typeof c.settings.foreground&&i(c.settings.foreground)&&(f=c.settings.foreground);var d=null;"string"==typeof c.settings.background&&i(c.settings.background)&&(d=c.settings.background);for(h=0,p=u.length;h<p;h++){var g,m=(g=u[h].trim().split(" "))[g.length-1],_=null;g.length>1&&(_=g.slice(0,g.length-1)).reverse(),n[o++]=new r(m,_,s,l,f,d);}}}return n}function s(e,t){e.sort((function(e,t){var n=u(e.scope,t.scope);return 0!==n||0!==(n=l(e.parentScopes,t.parentScopes))?n:e.index-t.index}));for(var n=0,r="#000000",i="#ffffff";e.length>=1&&""===e[0].scope;){var o=e.shift();-1!==o.fontStyle&&(n=o.fontStyle),null!==o.foreground&&(r=o.foreground),null!==o.background&&(i=o.background);}for(var s=new a(t),f=new h(0,null,n,s.getId(r),s.getId(i)),d=new p(new h(0,null,-1,0,0),[]),g=0,m=e.length;g<m;g++){var _=e[g];d.insert(0,_.scope,_.parentScopes,_.fontStyle,s.getId(_.foreground),s.getId(_.background));}return new c(s,f,d)}t.ParsedThemeRule=r,t.parseTheme=o;var a=function(){function e(e){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(e)){this._isFrozen=!0;for(var t=0,n=e.length;t<n;t++)this._color2id[e[t]]=t,this._id2color[t]=e[t];}else this._isFrozen=!1;}return e.prototype.getId=function(e){if(null===e)return 0;e=e.toUpperCase();var t=this._color2id[e];if(t)return t;if(this._isFrozen)throw new Error("Missing color in color map - "+e);return t=++this._lastColorId,this._color2id[e]=t,this._id2color[t]=e,t},e.prototype.getColorMap=function(){return this._id2color.slice(0)},e}();t.ColorMap=a;var c=function(){function e(e,t,n){this._colorMap=e,this._root=n,this._defaults=t,this._cache={};}return e.createFromRawTheme=function(e,t){return this.createFromParsedTheme(o(e),t)},e.createFromParsedTheme=function(e,t){return s(e,t)},e.prototype.getColorMap=function(){return this._colorMap.getColorMap()},e.prototype.getDefaults=function(){return this._defaults},e.prototype.match=function(e){return this._cache.hasOwnProperty(e)||(this._cache[e]=this._root.match(e)),this._cache[e]},e}();function u(e,t){return e<t?-1:e>t?1:0}function l(e,t){if(null===e&&null===t)return 0;if(!e)return -1;if(!t)return 1;var n=e.length,r=t.length;if(n===r){for(var i=0;i<n;i++){var o=u(e[i],t[i]);if(0!==o)return o}return 0}return n-r}t.Theme=c,t.strcmp=u,t.strArrCmp=l;var h=function(){function e(e,t,n,r,i){this.scopeDepth=e,this.parentScopes=t,this.fontStyle=n,this.foreground=r,this.background=i;}return e.prototype.clone=function(){return new e(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)},e.cloneArr=function(e){for(var t=[],n=0,r=e.length;n<r;n++)t[n]=e[n].clone();return t},e.prototype.acceptOverwrite=function(e,t,n,r){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,-1!==t&&(this.fontStyle=t),0!==n&&(this.foreground=n),0!==r&&(this.background=r);},e}();t.ThemeTrieElementRule=h;var p=function(){function e(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={}),this._mainRule=e,this._rulesWithParentScopes=t,this._children=n;}return e._sortBySpecificity=function(e){return 1===e.length||e.sort(this._cmpBySpecificity),e},e._cmpBySpecificity=function(e,t){if(e.scopeDepth===t.scopeDepth){var n=e.parentScopes,r=t.parentScopes,i=null===n?0:n.length,o=null===r?0:r.length;if(i===o)for(var s=0;s<i;s++){var a=n[s].length,c=r[s].length;if(a!==c)return c-a}return o-i}return t.scopeDepth-e.scopeDepth},e.prototype.match=function(t){if(""===t)return e._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));var n,r,i=t.indexOf(".");return -1===i?(n=t,r=""):(n=t.substring(0,i),r=t.substring(i+1)),this._children.hasOwnProperty(n)?this._children[n].match(r):e._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))},e.prototype.insert=function(t,n,r,i,o,s){if(""!==n){var a,c,u,l=n.indexOf(".");-1===l?(a=n,c=""):(a=n.substring(0,l),c=n.substring(l+1)),this._children.hasOwnProperty(a)?u=this._children[a]:(u=new e(this._mainRule.clone(),h.cloneArr(this._rulesWithParentScopes)),this._children[a]=u),u.insert(t+1,c,r,i,o,s);}else this._doInsertHere(t,r,i,o,s);},e.prototype._doInsertHere=function(e,t,n,r,i){if(null!==t){for(var o=0,s=this._rulesWithParentScopes.length;o<s;o++){var a=this._rulesWithParentScopes[o];if(0===l(a.parentScopes,t))return void a.acceptOverwrite(e,n,r,i)}-1===n&&(n=this._mainRule.fontStyle),0===r&&(r=this._mainRule.foreground),0===i&&(i=this._mainRule.background),this._rulesWithParentScopes.push(new h(e,t,n,r,i));}else this._mainRule.acceptOverwrite(e,n,r,i);},e}();t.ThemeTrieElement=p;}])}));

}(main));

const themes = [
    'dark-plus',
    'github-dark',
    'github-light',
    'light-plus',
    'material-darker',
    'material-default',
    'material-lighter',
    'material-ocean',
    'material-palenight',
    'min-dark',
    'min-light',
    'monokai',
    'nord',
    'poimandres',
    'slack-dark',
    'slack-ochin',
    'solarized-dark',
    'solarized-light'
];

const languages = [
    {
        id: 'abap',
        scopeName: 'source.abap',
        path: 'abap.tmLanguage.json'
    },
    {
        id: 'actionscript-3',
        scopeName: 'source.actionscript.3',
        path: 'actionscript-3.tmLanguage.json'
    },
    {
        id: 'ada',
        scopeName: 'source.ada',
        path: 'ada.tmLanguage.json'
    },
    {
        id: 'apache',
        scopeName: 'source.apacheconf',
        path: 'apache.tmLanguage.json'
    },
    {
        id: 'apex',
        scopeName: 'source.apex',
        path: 'apex.tmLanguage.json'
    },
    {
        id: 'apl',
        scopeName: 'source.apl',
        path: 'apl.tmLanguage.json',
        embeddedLangs: ['html', 'xml', 'css', 'javascript', 'json']
    },
    {
        id: 'applescript',
        scopeName: 'source.applescript',
        path: 'applescript.tmLanguage.json'
    },
    {
        id: 'asm',
        scopeName: 'source.asm.x86_64',
        path: 'asm.tmLanguage.json'
    },
    {
        id: 'awk',
        scopeName: 'source.awk',
        path: 'awk.tmLanguage.json'
    },
    {
        id: 'bat',
        scopeName: 'source.batchfile',
        path: 'bat.tmLanguage.json',
        aliases: ['batch']
    },
    {
        id: 'c',
        scopeName: 'source.c',
        path: 'c.tmLanguage.json',
        samplePath: 'c.sample'
    },
    {
        id: 'clojure',
        scopeName: 'source.clojure',
        path: 'clojure.tmLanguage.json',
        aliases: ['clj']
    },
    {
        id: 'cobol',
        scopeName: 'source.cobol',
        path: 'cobol.tmLanguage.json',
        embeddedLangs: ['sql', 'html', 'java']
    },
    {
        id: 'coffee',
        scopeName: 'source.coffee',
        path: 'coffee.tmLanguage.json',
        embeddedLangs: ['javascript']
    },
    {
        id: 'cpp',
        scopeName: 'source.cpp',
        path: 'cpp.tmLanguage.json',
        embeddedLangs: ['sql']
    },
    {
        id: 'crystal',
        scopeName: 'source.crystal',
        path: 'crystal.tmLanguage.json',
        embeddedLangs: ['html', 'sql', 'css', 'c', 'javascript', 'shellscript']
    },
    {
        id: 'csharp',
        scopeName: 'source.cs',
        path: 'csharp.tmLanguage.json',
        aliases: ['c#']
    },
    {
        id: 'css',
        scopeName: 'source.css',
        path: 'css.tmLanguage.json',
        samplePath: 'css.sample'
    },
    {
        id: 'd',
        scopeName: 'source.d',
        path: 'd.tmLanguage.json'
    },
    {
        id: 'dart',
        scopeName: 'source.dart',
        path: 'dart.tmLanguage.json'
    },
    {
        id: 'diff',
        scopeName: 'source.diff',
        path: 'diff.tmLanguage.json'
    },
    {
        id: 'docker',
        scopeName: 'source.dockerfile',
        path: 'docker.tmLanguage.json'
    },
    {
        id: 'elixir',
        scopeName: 'source.elixir',
        path: 'elixir.tmLanguage.json',
        embeddedLangs: ['html']
    },
    {
        id: 'elm',
        scopeName: 'source.elm',
        path: 'elm.tmLanguage.json'
    },
    {
        id: 'erb',
        scopeName: 'text.html.erb',
        path: 'erb.tmLanguage.json',
        embeddedLangs: ['html', 'ruby']
    },
    {
        id: 'erlang',
        scopeName: 'source.erlang',
        path: 'erlang.tmLanguage.json'
    },
    {
        id: 'fsharp',
        scopeName: 'source.fsharp',
        path: 'fsharp.tmLanguage.json',
        aliases: ['f#'],
        embeddedLangs: ['markdown']
    },
    {
        id: 'gherkin',
        scopeName: 'text.gherkin.feature',
        path: 'gherkin.tmLanguage.json'
    },
    {
        id: 'git-commit',
        scopeName: 'text.git-commit',
        path: 'git-commit.tmLanguage.json',
        embeddedLangs: ['diff']
    },
    {
        id: 'git-rebase',
        scopeName: 'text.git-rebase',
        path: 'git-rebase.tmLanguage.json',
        embeddedLangs: ['shellscript']
    },
    {
        id: 'gnuplot',
        scopeName: 'source.gnuplot',
        path: 'gnuplot.tmLanguage.json'
    },
    {
        id: 'go',
        scopeName: 'source.go',
        path: 'go.tmLanguage.json',
        samplePath: 'go.sample'
    },
    {
        id: 'graphql',
        scopeName: 'source.graphql',
        path: 'graphql.tmLanguage.json',
        embeddedLangs: ['javascript', 'typescript', 'jsx', 'tsx']
    },
    {
        id: 'groovy',
        scopeName: 'source.groovy',
        path: 'groovy.tmLanguage.json'
    },
    {
        id: 'hack',
        scopeName: 'source.hack',
        path: 'hack.tmLanguage.json',
        embeddedLangs: ['html', 'sql']
    },
    {
        id: 'haml',
        scopeName: 'text.haml',
        path: 'haml.tmLanguage.json',
        embeddedLangs: ['ruby', 'javascript', 'sass', 'coffee', 'markdown', 'css']
    },
    {
        id: 'handlebars',
        scopeName: 'text.html.handlebars',
        path: 'handlebars.tmLanguage.json',
        aliases: ['hbs'],
        embeddedLangs: ['html', 'css', 'javascript', 'yaml']
    },
    {
        id: 'haskell',
        scopeName: 'source.haskell',
        path: 'haskell.tmLanguage.json'
    },
    {
        id: 'hcl',
        scopeName: 'source.hcl',
        path: 'hcl.tmLanguage.json'
    },
    {
        id: 'hlsl',
        scopeName: 'source.hlsl',
        path: 'hlsl.tmLanguage.json'
    },
    {
        id: 'html',
        scopeName: 'text.html.basic',
        path: 'html.tmLanguage.json',
        samplePath: 'html.sample',
        embeddedLangs: ['javascript', 'css']
    },
    {
        id: 'ini',
        scopeName: 'source.ini',
        path: 'ini.tmLanguage.json'
    },
    {
        id: 'java',
        scopeName: 'source.java',
        path: 'java.tmLanguage.json',
        samplePath: 'java.sample'
    },
    {
        id: 'javascript',
        scopeName: 'source.js',
        path: 'javascript.tmLanguage.json',
        samplePath: 'javascript.sample',
        aliases: ['js']
    },
    {
        id: 'jinja-html',
        scopeName: 'text.html.jinja',
        path: 'jinja-html.tmLanguage.json',
        embeddedLangs: ['html']
    },
    {
        id: 'json',
        scopeName: 'source.json',
        path: 'json.tmLanguage.json'
    },
    {
        id: 'jsonc',
        scopeName: 'source.json.comments',
        path: 'jsonc.tmLanguage.json'
    },
    {
        id: 'jsonnet',
        scopeName: 'source.jsonnet',
        path: 'jsonnet.tmLanguage.json'
    },
    {
        id: 'jsx',
        scopeName: 'source.js.jsx',
        path: 'jsx.tmLanguage.json'
    },
    {
        id: 'julia',
        scopeName: 'source.julia',
        path: 'julia.tmLanguage.json',
        embeddedLangs: ['cpp', 'python', 'javascript', 'r', 'sql']
    },
    {
        id: 'kotlin',
        scopeName: 'source.kotlin',
        path: 'kotlin.tmLanguage.json'
    },
    {
        id: 'latex',
        scopeName: 'text.tex.latex',
        path: 'latex.tmLanguage.json',
        embeddedLangs: ['tex', 'css', 'html', 'java', 'javascript', 'typescript', 'lua', 'python', 'julia', 'ruby', 'xml', 'yaml', 'cpp', 'haskell', 'scala', 'gnuplot']
    },
    {
        id: 'less',
        scopeName: 'source.css.less',
        path: 'less.tmLanguage.json',
        embeddedLangs: ['css']
    },
    {
        id: 'lisp',
        scopeName: 'source.lisp',
        path: 'lisp.tmLanguage.json'
    },
    {
        id: 'logo',
        scopeName: 'source.logo',
        path: 'logo.tmLanguage.json'
    },
    {
        id: 'lua',
        scopeName: 'source.lua',
        path: 'lua.tmLanguage.json',
        embeddedLangs: ['c']
    },
    {
        id: 'make',
        scopeName: 'source.makefile',
        path: 'make.tmLanguage.json',
        aliases: ['makefile']
    },
    {
        id: 'markdown',
        scopeName: 'text.html.markdown',
        path: 'markdown.tmLanguage.json',
        aliases: ['md'],
        embeddedLangs: ['css', 'html', 'ini', 'java', 'lua', 'make', 'perl', 'r', 'ruby', 'php', 'sql', 'vb', 'xml', 'xsl', 'yaml', 'bat', 'clojure', 'coffee', 'c', 'cpp', 'diff', 'docker', 'git-commit', 'git-rebase', 'go', 'groovy', 'pug', 'javascript', 'json', 'jsonc', 'less', 'objective-c', 'swift', 'scss', 'raku', 'powershell', 'python', 'rust', 'scala', 'shellscript', 'typescript', 'tsx', 'csharp', 'fsharp', 'dart', 'handlebars', 'erlang', 'elixir']
    },
    {
        id: 'matlab',
        scopeName: 'source.matlab',
        path: 'matlab.tmLanguage.json'
    },
    {
        id: 'mdx',
        scopeName: 'text.html.markdown.jsx',
        path: 'mdx.tmLanguage.json',
        embeddedLangs: ['jsx', 'markdown']
    },
    {
        id: 'nginx',
        scopeName: 'source.nginx',
        path: 'nginx.tmLanguage.json'
    },
    {
        id: 'nim',
        scopeName: 'source.nim',
        path: 'nim.tmLanguage.json',
        embeddedLangs: ['c', 'html', 'xml', 'javascript', 'css', 'markdown']
    },
    {
        id: 'nix',
        scopeName: 'source.nix',
        path: 'nix.tmLanguage.json'
    },
    {
        id: 'objective-c',
        scopeName: 'source.objc',
        path: 'objective-c.tmLanguage.json',
        aliases: ['objc']
    },
    {
        id: 'objective-cpp',
        scopeName: 'source.objcpp',
        path: 'objective-cpp.tmLanguage.json'
    },
    {
        id: 'ocaml',
        scopeName: 'source.ocaml',
        path: 'ocaml.tmLanguage.json'
    },
    {
        id: 'pascal',
        scopeName: 'source.pascal',
        path: 'pascal.tmLanguage.json'
    },
    {
        id: 'perl',
        scopeName: 'source.perl',
        path: 'perl.tmLanguage.json',
        embeddedLangs: ['html', 'xml', 'css', 'javascript', 'sql']
    },
    {
        id: 'php',
        scopeName: 'source.php',
        path: 'php.tmLanguage.json',
        embeddedLangs: ['html', 'xml', 'sql', 'javascript', 'json', 'css']
    },
    {
        id: 'plsql',
        scopeName: 'source.plsql.oracle',
        path: 'plsql.tmLanguage.json'
    },
    {
        id: 'postcss',
        scopeName: 'source.css.postcss',
        path: 'postcss.tmLanguage.json'
    },
    {
        id: 'powershell',
        scopeName: 'source.powershell',
        path: 'powershell.tmLanguage.json',
        aliases: ['ps', 'ps1']
    },
    {
        id: 'prolog',
        scopeName: 'source.prolog',
        path: 'prolog.tmLanguage.json'
    },
    {
        id: 'pug',
        scopeName: 'text.pug',
        path: 'pug.tmLanguage.json',
        aliases: ['jade'],
        embeddedLangs: ['javascript', 'css', 'sass', 'stylus', 'coffee', 'html']
    },
    {
        id: 'puppet',
        scopeName: 'source.puppet',
        path: 'puppet.tmLanguage.json'
    },
    {
        id: 'purescript',
        scopeName: 'source.purescript',
        path: 'purescript.tmLanguage.json'
    },
    {
        id: 'python',
        scopeName: 'source.python',
        path: 'python.tmLanguage.json',
        samplePath: 'python.sample',
        aliases: ['py']
    },
    {
        id: 'r',
        scopeName: 'source.r',
        path: 'r.tmLanguage.json'
    },
    {
        id: 'raku',
        scopeName: 'source.perl.6',
        path: 'raku.tmLanguage.json',
        aliases: ['perl6']
    },
    {
        id: 'razor',
        scopeName: 'text.aspnetcorerazor',
        path: 'razor.tmLanguage.json',
        embeddedLangs: ['html', 'csharp']
    },
    {
        id: 'riscv',
        scopeName: 'source.riscv',
        path: 'riscv.tmLanguage.json'
    },
    {
        id: 'ruby',
        scopeName: 'source.ruby',
        path: 'ruby.tmLanguage.json',
        samplePath: 'ruby.sample',
        aliases: ['rb'],
        embeddedLangs: ['html', 'xml', 'sql', 'css', 'c', 'javascript', 'shellscript', 'lua']
    },
    {
        id: 'rust',
        scopeName: 'source.rust',
        path: 'rust.tmLanguage.json'
    },
    {
        id: 'sas',
        scopeName: 'source.sas',
        path: 'sas.tmLanguage.json',
        embeddedLangs: ['sql']
    },
    {
        id: 'sass',
        scopeName: 'source.sass',
        path: 'sass.tmLanguage.json'
    },
    {
        id: 'scala',
        scopeName: 'source.scala',
        path: 'scala.tmLanguage.json'
    },
    {
        id: 'scheme',
        scopeName: 'source.scheme',
        path: 'scheme.tmLanguage.json'
    },
    {
        id: 'scss',
        scopeName: 'source.css.scss',
        path: 'scss.tmLanguage.json',
        embeddedLangs: ['css']
    },
    {
        id: 'shaderlab',
        scopeName: 'source.shaderlab',
        path: 'shaderlab.tmLanguage.json',
        aliases: ['shader'],
        embeddedLangs: ['hlsl']
    },
    {
        id: 'shellscript',
        scopeName: 'source.shell',
        path: 'shellscript.tmLanguage.json',
        aliases: ['shell', 'bash', 'sh', 'zsh'],
        embeddedLangs: ['ruby', 'python', 'applescript', 'html', 'markdown']
    },
    {
        id: 'smalltalk',
        scopeName: 'source.smalltalk',
        path: 'smalltalk.tmLanguage.json'
    },
    {
        id: 'solidity',
        scopeName: 'source.solidity',
        path: 'solidity.tmLanguage.json'
    },
    {
        id: 'sparql',
        scopeName: 'source.sparql',
        path: 'sparql.tmLanguage.json',
        samplePath: 'sparql.sample',
        embeddedLangs: ['turtle']
    },
    {
        id: 'sql',
        scopeName: 'source.sql',
        path: 'sql.tmLanguage.json'
    },
    {
        id: 'ssh-config',
        scopeName: 'source.ssh-config',
        path: 'ssh-config.tmLanguage.json'
    },
    {
        id: 'stylus',
        scopeName: 'source.stylus',
        path: 'stylus.tmLanguage.json',
        aliases: ['styl']
    },
    {
        id: 'svelte',
        scopeName: 'source.svelte',
        path: 'svelte.tmLanguage.json',
        embeddedLangs: ['javascript', 'typescript', 'coffee', 'stylus', 'sass', 'css', 'scss', 'less', 'postcss', 'pug', 'markdown']
    },
    {
        id: 'swift',
        scopeName: 'source.swift',
        path: 'swift.tmLanguage.json'
    },
    {
        id: 'system-verilog',
        scopeName: 'source.systemverilog',
        path: 'system-verilog.tmLanguage.json'
    },
    {
        id: 'tcl',
        scopeName: 'source.tcl',
        path: 'tcl.tmLanguage.json'
    },
    {
        id: 'tex',
        scopeName: 'text.tex',
        path: 'tex.tmLanguage.json',
        embeddedLangs: ['r']
    },
    {
        id: 'toml',
        scopeName: 'source.toml',
        path: 'toml.tmLanguage.json'
    },
    {
        id: 'tsx',
        scopeName: 'source.tsx',
        path: 'tsx.tmLanguage.json',
        samplePath: 'tsx.sample'
    },
    {
        id: 'turtle',
        scopeName: 'source.turtle',
        path: 'turtle.tmLanguage.json',
        samplePath: 'turtle.sample'
    },
    {
        id: 'twig',
        scopeName: 'text.html.twig',
        path: 'twig.tmLanguage.json',
        embeddedLangs: ['css', 'javascript', 'php', 'python', 'ruby']
    },
    {
        id: 'typescript',
        scopeName: 'source.ts',
        path: 'typescript.tmLanguage.json',
        aliases: ['ts']
    },
    {
        id: 'vb',
        scopeName: 'source.asp.vb.net',
        path: 'vb.tmLanguage.json',
        aliases: ['cmd']
    },
    {
        id: 'verilog',
        scopeName: 'source.verilog',
        path: 'verilog.tmLanguage.json'
    },
    {
        id: 'vhdl',
        scopeName: 'source.vhdl',
        path: 'vhdl.tmLanguage.json'
    },
    {
        id: 'viml',
        scopeName: 'source.viml',
        path: 'viml.tmLanguage.json'
    },
    {
        id: 'vue',
        scopeName: 'source.vue',
        path: 'vue.tmLanguage.json',
        embeddedLangs: ['json', 'markdown', 'pug', 'haml', 'sass', 'scss', 'less', 'stylus', 'postcss', 'css', 'typescript', 'coffee', 'javascript']
    },
    {
        id: 'wasm',
        scopeName: 'source.wat',
        path: 'wasm.tmLanguage.json'
    },
    {
        id: 'wenyan',
        scopeName: 'source.wenyan',
        path: 'wenyan.tmLanguage.json',
        aliases: ['文言']
    },
    {
        id: 'xml',
        scopeName: 'text.xml',
        path: 'xml.tmLanguage.json',
        embeddedLangs: ['java']
    },
    {
        id: 'xsl',
        scopeName: 'text.xml.xsl',
        path: 'xsl.tmLanguage.json',
        embeddedLangs: ['xml']
    },
    {
        id: 'yaml',
        scopeName: 'source.yaml',
        path: 'yaml.tmLanguage.json'
    }
];

// This is a generated file. Do not edit.
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;

var unicode = {
	Space_Separator: Space_Separator,
	ID_Start: ID_Start,
	ID_Continue: ID_Continue
};

var util = {
    isSpaceSeparator (c) {
        return typeof c === 'string' && unicode.Space_Separator.test(c)
    },

    isIdStartChar (c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c === '$') || (c === '_') ||
        unicode.ID_Start.test(c)
        )
    },

    isIdContinueChar (c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9') ||
        (c === '$') || (c === '_') ||
        (c === '\u200C') || (c === '\u200D') ||
        unicode.ID_Continue.test(c)
        )
    },

    isDigit (c) {
        return typeof c === 'string' && /[0-9]/.test(c)
    },

    isHexDigit (c) {
        return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
    },
};

let source;
let parseState;
let stack;
let pos;
let line;
let column;
let token;
let key;
let root;

var parse = function parse (text, reviver) {
    source = String(text);
    parseState = 'start';
    stack = [];
    pos = 0;
    line = 1;
    column = 0;
    token = undefined;
    key = undefined;
    root = undefined;

    do {
        token = lex();

        // This code is unreachable.
        // if (!parseStates[parseState]) {
        //     throw invalidParseState()
        // }

        parseStates[parseState]();
    } while (token.type !== 'eof')

    if (typeof reviver === 'function') {
        return internalize({'': root}, '', reviver)
    }

    return root
};

function internalize (holder, name, reviver) {
    const value = holder[name];
    if (value != null && typeof value === 'object') {
        for (const key in value) {
            const replacement = internalize(value, key, reviver);
            if (replacement === undefined) {
                delete value[key];
            } else {
                value[key] = replacement;
            }
        }
    }

    return reviver.call(holder, name, value)
}

let lexState;
let buffer;
let doubleQuote;
let sign;
let c;

function lex () {
    lexState = 'default';
    buffer = '';
    doubleQuote = false;
    sign = 1;

    for (;;) {
        c = peek();

        // This code is unreachable.
        // if (!lexStates[lexState]) {
        //     throw invalidLexState(lexState)
        // }

        const token = lexStates[lexState]();
        if (token) {
            return token
        }
    }
}

function peek () {
    if (source[pos]) {
        return String.fromCodePoint(source.codePointAt(pos))
    }
}

function read$1 () {
    const c = peek();

    if (c === '\n') {
        line++;
        column = 0;
    } else if (c) {
        column += c.length;
    } else {
        column++;
    }

    if (c) {
        pos += c.length;
    }

    return c
}

const lexStates = {
    default () {
        switch (c) {
        case '\t':
        case '\v':
        case '\f':
        case ' ':
        case '\u00A0':
        case '\uFEFF':
        case '\n':
        case '\r':
        case '\u2028':
        case '\u2029':
            read$1();
            return

        case '/':
            read$1();
            lexState = 'comment';
            return

        case undefined:
            read$1();
            return newToken('eof')
        }

        if (util.isSpaceSeparator(c)) {
            read$1();
            return
        }

        // This code is unreachable.
        // if (!lexStates[parseState]) {
        //     throw invalidLexState(parseState)
        // }

        return lexStates[parseState]()
    },

    comment () {
        switch (c) {
        case '*':
            read$1();
            lexState = 'multiLineComment';
            return

        case '/':
            read$1();
            lexState = 'singleLineComment';
            return
        }

        throw invalidChar(read$1())
    },

    multiLineComment () {
        switch (c) {
        case '*':
            read$1();
            lexState = 'multiLineCommentAsterisk';
            return

        case undefined:
            throw invalidChar(read$1())
        }

        read$1();
    },

    multiLineCommentAsterisk () {
        switch (c) {
        case '*':
            read$1();
            return

        case '/':
            read$1();
            lexState = 'default';
            return

        case undefined:
            throw invalidChar(read$1())
        }

        read$1();
        lexState = 'multiLineComment';
    },

    singleLineComment () {
        switch (c) {
        case '\n':
        case '\r':
        case '\u2028':
        case '\u2029':
            read$1();
            lexState = 'default';
            return

        case undefined:
            read$1();
            return newToken('eof')
        }

        read$1();
    },

    value () {
        switch (c) {
        case '{':
        case '[':
            return newToken('punctuator', read$1())

        case 'n':
            read$1();
            literal('ull');
            return newToken('null', null)

        case 't':
            read$1();
            literal('rue');
            return newToken('boolean', true)

        case 'f':
            read$1();
            literal('alse');
            return newToken('boolean', false)

        case '-':
        case '+':
            if (read$1() === '-') {
                sign = -1;
            }

            lexState = 'sign';
            return

        case '.':
            buffer = read$1();
            lexState = 'decimalPointLeading';
            return

        case '0':
            buffer = read$1();
            lexState = 'zero';
            return

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            buffer = read$1();
            lexState = 'decimalInteger';
            return

        case 'I':
            read$1();
            literal('nfinity');
            return newToken('numeric', Infinity)

        case 'N':
            read$1();
            literal('aN');
            return newToken('numeric', NaN)

        case '"':
        case "'":
            doubleQuote = (read$1() === '"');
            buffer = '';
            lexState = 'string';
            return
        }

        throw invalidChar(read$1())
    },

    identifierNameStartEscape () {
        if (c !== 'u') {
            throw invalidChar(read$1())
        }

        read$1();
        const u = unicodeEscape();
        switch (u) {
        case '$':
        case '_':
            break

        default:
            if (!util.isIdStartChar(u)) {
                throw invalidIdentifier()
            }

            break
        }

        buffer += u;
        lexState = 'identifierName';
    },

    identifierName () {
        switch (c) {
        case '$':
        case '_':
        case '\u200C':
        case '\u200D':
            buffer += read$1();
            return

        case '\\':
            read$1();
            lexState = 'identifierNameEscape';
            return
        }

        if (util.isIdContinueChar(c)) {
            buffer += read$1();
            return
        }

        return newToken('identifier', buffer)
    },

    identifierNameEscape () {
        if (c !== 'u') {
            throw invalidChar(read$1())
        }

        read$1();
        const u = unicodeEscape();
        switch (u) {
        case '$':
        case '_':
        case '\u200C':
        case '\u200D':
            break

        default:
            if (!util.isIdContinueChar(u)) {
                throw invalidIdentifier()
            }

            break
        }

        buffer += u;
        lexState = 'identifierName';
    },

    sign () {
        switch (c) {
        case '.':
            buffer = read$1();
            lexState = 'decimalPointLeading';
            return

        case '0':
            buffer = read$1();
            lexState = 'zero';
            return

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            buffer = read$1();
            lexState = 'decimalInteger';
            return

        case 'I':
            read$1();
            literal('nfinity');
            return newToken('numeric', sign * Infinity)

        case 'N':
            read$1();
            literal('aN');
            return newToken('numeric', NaN)
        }

        throw invalidChar(read$1())
    },

    zero () {
        switch (c) {
        case '.':
            buffer += read$1();
            lexState = 'decimalPoint';
            return

        case 'e':
        case 'E':
            buffer += read$1();
            lexState = 'decimalExponent';
            return

        case 'x':
        case 'X':
            buffer += read$1();
            lexState = 'hexadecimal';
            return
        }

        return newToken('numeric', sign * 0)
    },

    decimalInteger () {
        switch (c) {
        case '.':
            buffer += read$1();
            lexState = 'decimalPoint';
            return

        case 'e':
        case 'E':
            buffer += read$1();
            lexState = 'decimalExponent';
            return
        }

        if (util.isDigit(c)) {
            buffer += read$1();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalPointLeading () {
        if (util.isDigit(c)) {
            buffer += read$1();
            lexState = 'decimalFraction';
            return
        }

        throw invalidChar(read$1())
    },

    decimalPoint () {
        switch (c) {
        case 'e':
        case 'E':
            buffer += read$1();
            lexState = 'decimalExponent';
            return
        }

        if (util.isDigit(c)) {
            buffer += read$1();
            lexState = 'decimalFraction';
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalFraction () {
        switch (c) {
        case 'e':
        case 'E':
            buffer += read$1();
            lexState = 'decimalExponent';
            return
        }

        if (util.isDigit(c)) {
            buffer += read$1();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    decimalExponent () {
        switch (c) {
        case '+':
        case '-':
            buffer += read$1();
            lexState = 'decimalExponentSign';
            return
        }

        if (util.isDigit(c)) {
            buffer += read$1();
            lexState = 'decimalExponentInteger';
            return
        }

        throw invalidChar(read$1())
    },

    decimalExponentSign () {
        if (util.isDigit(c)) {
            buffer += read$1();
            lexState = 'decimalExponentInteger';
            return
        }

        throw invalidChar(read$1())
    },

    decimalExponentInteger () {
        if (util.isDigit(c)) {
            buffer += read$1();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    hexadecimal () {
        if (util.isHexDigit(c)) {
            buffer += read$1();
            lexState = 'hexadecimalInteger';
            return
        }

        throw invalidChar(read$1())
    },

    hexadecimalInteger () {
        if (util.isHexDigit(c)) {
            buffer += read$1();
            return
        }

        return newToken('numeric', sign * Number(buffer))
    },

    string () {
        switch (c) {
        case '\\':
            read$1();
            buffer += escape();
            return

        case '"':
            if (doubleQuote) {
                read$1();
                return newToken('string', buffer)
            }

            buffer += read$1();
            return

        case "'":
            if (!doubleQuote) {
                read$1();
                return newToken('string', buffer)
            }

            buffer += read$1();
            return

        case '\n':
        case '\r':
            throw invalidChar(read$1())

        case '\u2028':
        case '\u2029':
            separatorChar(c);
            break

        case undefined:
            throw invalidChar(read$1())
        }

        buffer += read$1();
    },

    start () {
        switch (c) {
        case '{':
        case '[':
            return newToken('punctuator', read$1())

        // This code is unreachable since the default lexState handles eof.
        // case undefined:
        //     return newToken('eof')
        }

        lexState = 'value';
    },

    beforePropertyName () {
        switch (c) {
        case '$':
        case '_':
            buffer = read$1();
            lexState = 'identifierName';
            return

        case '\\':
            read$1();
            lexState = 'identifierNameStartEscape';
            return

        case '}':
            return newToken('punctuator', read$1())

        case '"':
        case "'":
            doubleQuote = (read$1() === '"');
            lexState = 'string';
            return
        }

        if (util.isIdStartChar(c)) {
            buffer += read$1();
            lexState = 'identifierName';
            return
        }

        throw invalidChar(read$1())
    },

    afterPropertyName () {
        if (c === ':') {
            return newToken('punctuator', read$1())
        }

        throw invalidChar(read$1())
    },

    beforePropertyValue () {
        lexState = 'value';
    },

    afterPropertyValue () {
        switch (c) {
        case ',':
        case '}':
            return newToken('punctuator', read$1())
        }

        throw invalidChar(read$1())
    },

    beforeArrayValue () {
        if (c === ']') {
            return newToken('punctuator', read$1())
        }

        lexState = 'value';
    },

    afterArrayValue () {
        switch (c) {
        case ',':
        case ']':
            return newToken('punctuator', read$1())
        }

        throw invalidChar(read$1())
    },

    end () {
        // This code is unreachable since it's handled by the default lexState.
        // if (c === undefined) {
        //     read()
        //     return newToken('eof')
        // }

        throw invalidChar(read$1())
    },
};

function newToken (type, value) {
    return {
        type,
        value,
        line,
        column,
    }
}

function literal (s) {
    for (const c of s) {
        const p = peek();

        if (p !== c) {
            throw invalidChar(read$1())
        }

        read$1();
    }
}

function escape () {
    const c = peek();
    switch (c) {
    case 'b':
        read$1();
        return '\b'

    case 'f':
        read$1();
        return '\f'

    case 'n':
        read$1();
        return '\n'

    case 'r':
        read$1();
        return '\r'

    case 't':
        read$1();
        return '\t'

    case 'v':
        read$1();
        return '\v'

    case '0':
        read$1();
        if (util.isDigit(peek())) {
            throw invalidChar(read$1())
        }

        return '\0'

    case 'x':
        read$1();
        return hexEscape()

    case 'u':
        read$1();
        return unicodeEscape()

    case '\n':
    case '\u2028':
    case '\u2029':
        read$1();
        return ''

    case '\r':
        read$1();
        if (peek() === '\n') {
            read$1();
        }

        return ''

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        throw invalidChar(read$1())

    case undefined:
        throw invalidChar(read$1())
    }

    return read$1()
}

function hexEscape () {
    let buffer = '';
    let c = peek();

    if (!util.isHexDigit(c)) {
        throw invalidChar(read$1())
    }

    buffer += read$1();

    c = peek();
    if (!util.isHexDigit(c)) {
        throw invalidChar(read$1())
    }

    buffer += read$1();

    return String.fromCodePoint(parseInt(buffer, 16))
}

function unicodeEscape () {
    let buffer = '';
    let count = 4;

    while (count-- > 0) {
        const c = peek();
        if (!util.isHexDigit(c)) {
            throw invalidChar(read$1())
        }

        buffer += read$1();
    }

    return String.fromCodePoint(parseInt(buffer, 16))
}

const parseStates = {
    start () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        push();
    },

    beforePropertyName () {
        switch (token.type) {
        case 'identifier':
        case 'string':
            key = token.value;
            parseState = 'afterPropertyName';
            return

        case 'punctuator':
            // This code is unreachable since it's handled by the lexState.
            // if (token.value !== '}') {
            //     throw invalidToken()
            // }

            pop();
            return

        case 'eof':
            throw invalidEOF()
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    afterPropertyName () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator' || token.value !== ':') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        parseState = 'beforePropertyValue';
    },

    beforePropertyValue () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        push();
    },

    beforeArrayValue () {
        if (token.type === 'eof') {
            throw invalidEOF()
        }

        if (token.type === 'punctuator' && token.value === ']') {
            pop();
            return
        }

        push();
    },

    afterPropertyValue () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        switch (token.value) {
        case ',':
            parseState = 'beforePropertyName';
            return

        case '}':
            pop();
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    afterArrayValue () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'punctuator') {
        //     throw invalidToken()
        // }

        if (token.type === 'eof') {
            throw invalidEOF()
        }

        switch (token.value) {
        case ',':
            parseState = 'beforeArrayValue';
            return

        case ']':
            pop();
        }

        // This code is unreachable since it's handled by the lexState.
        // throw invalidToken()
    },

    end () {
        // This code is unreachable since it's handled by the lexState.
        // if (token.type !== 'eof') {
        //     throw invalidToken()
        // }
    },
};

function push () {
    let value;

    switch (token.type) {
    case 'punctuator':
        switch (token.value) {
        case '{':
            value = {};
            break

        case '[':
            value = [];
            break
        }

        break

    case 'null':
    case 'boolean':
    case 'numeric':
    case 'string':
        value = token.value;
        break

    // This code is unreachable.
    // default:
    //     throw invalidToken()
    }

    if (root === undefined) {
        root = value;
    } else {
        const parent = stack[stack.length - 1];
        if (Array.isArray(parent)) {
            parent.push(value);
        } else {
            parent[key] = value;
        }
    }

    if (value !== null && typeof value === 'object') {
        stack.push(value);

        if (Array.isArray(value)) {
            parseState = 'beforeArrayValue';
        } else {
            parseState = 'beforePropertyName';
        }
    } else {
        const current = stack[stack.length - 1];
        if (current == null) {
            parseState = 'end';
        } else if (Array.isArray(current)) {
            parseState = 'afterArrayValue';
        } else {
            parseState = 'afterPropertyValue';
        }
    }
}

function pop () {
    stack.pop();

    const current = stack[stack.length - 1];
    if (current == null) {
        parseState = 'end';
    } else if (Array.isArray(current)) {
        parseState = 'afterArrayValue';
    } else {
        parseState = 'afterPropertyValue';
    }
}

// This code is unreachable.
// function invalidParseState () {
//     return new Error(`JSON5: invalid parse state '${parseState}'`)
// }

// This code is unreachable.
// function invalidLexState (state) {
//     return new Error(`JSON5: invalid lex state '${state}'`)
// }

function invalidChar (c) {
    if (c === undefined) {
        return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
    }

    return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
}

function invalidEOF () {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
}

// This code is unreachable.
// function invalidToken () {
//     if (token.type === 'eof') {
//         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
//     }

//     const c = String.fromCodePoint(token.value.codePointAt(0))
//     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
// }

function invalidIdentifier () {
    column -= 5;
    return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`)
}

function separatorChar (c) {
    console.warn(`JSON5: '${formatChar(c)}' in strings is not valid ECMAScript; consider escaping`);
}

function formatChar (c) {
    const replacements = {
        "'": "\\'",
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
        '\v': '\\v',
        '\0': '\\0',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029',
    };

    if (replacements[c]) {
        return replacements[c]
    }

    if (c < ' ') {
        const hexString = c.charCodeAt(0).toString(16);
        return '\\x' + ('00' + hexString).substring(hexString.length)
    }

    return c
}

function syntaxError (message) {
    const err = new SyntaxError(message);
    err.lineNumber = line;
    err.columnNumber = column;
    return err
}

var stringify = function stringify (value, replacer, space) {
    const stack = [];
    let indent = '';
    let propertyList;
    let replacerFunc;
    let gap = '';
    let quote;

    if (
        replacer != null &&
        typeof replacer === 'object' &&
        !Array.isArray(replacer)
    ) {
        space = replacer.space;
        quote = replacer.quote;
        replacer = replacer.replacer;
    }

    if (typeof replacer === 'function') {
        replacerFunc = replacer;
    } else if (Array.isArray(replacer)) {
        propertyList = [];
        for (const v of replacer) {
            let item;

            if (typeof v === 'string') {
                item = v;
            } else if (
                typeof v === 'number' ||
                v instanceof String ||
                v instanceof Number
            ) {
                item = String(v);
            }

            if (item !== undefined && propertyList.indexOf(item) < 0) {
                propertyList.push(item);
            }
        }
    }

    if (space instanceof Number) {
        space = Number(space);
    } else if (space instanceof String) {
        space = String(space);
    }

    if (typeof space === 'number') {
        if (space > 0) {
            space = Math.min(10, Math.floor(space));
            gap = '          '.substr(0, space);
        }
    } else if (typeof space === 'string') {
        gap = space.substr(0, 10);
    }

    return serializeProperty('', {'': value})

    function serializeProperty (key, holder) {
        let value = holder[key];
        if (value != null) {
            if (typeof value.toJSON5 === 'function') {
                value = value.toJSON5(key);
            } else if (typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }
        }

        if (replacerFunc) {
            value = replacerFunc.call(holder, key, value);
        }

        if (value instanceof Number) {
            value = Number(value);
        } else if (value instanceof String) {
            value = String(value);
        } else if (value instanceof Boolean) {
            value = value.valueOf();
        }

        switch (value) {
        case null: return 'null'
        case true: return 'true'
        case false: return 'false'
        }

        if (typeof value === 'string') {
            return quoteString(value)
        }

        if (typeof value === 'number') {
            return String(value)
        }

        if (typeof value === 'object') {
            return Array.isArray(value) ? serializeArray(value) : serializeObject(value)
        }

        return undefined
    }

    function quoteString (value) {
        const quotes = {
            "'": 0.1,
            '"': 0.2,
        };

        const replacements = {
            "'": "\\'",
            '"': '\\"',
            '\\': '\\\\',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\v',
            '\0': '\\0',
            '\u2028': '\\u2028',
            '\u2029': '\\u2029',
        };

        let product = '';

        for (let i = 0; i < value.length; i++) {
            const c = value[i];
            switch (c) {
            case "'":
            case '"':
                quotes[c]++;
                product += c;
                continue

            case '\0':
                if (util.isDigit(value[i + 1])) {
                    product += '\\x00';
                    continue
                }
            }

            if (replacements[c]) {
                product += replacements[c];
                continue
            }

            if (c < ' ') {
                let hexString = c.charCodeAt(0).toString(16);
                product += '\\x' + ('00' + hexString).substring(hexString.length);
                continue
            }

            product += c;
        }

        const quoteChar = quote || Object.keys(quotes).reduce((a, b) => (quotes[a] < quotes[b]) ? a : b);

        product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);

        return quoteChar + product + quoteChar
    }

    function serializeObject (value) {
        if (stack.indexOf(value) >= 0) {
            throw TypeError('Converting circular structure to JSON5')
        }

        stack.push(value);

        let stepback = indent;
        indent = indent + gap;

        let keys = propertyList || Object.keys(value);
        let partial = [];
        for (const key of keys) {
            const propertyString = serializeProperty(key, value);
            if (propertyString !== undefined) {
                let member = serializeKey(key) + ':';
                if (gap !== '') {
                    member += ' ';
                }
                member += propertyString;
                partial.push(member);
            }
        }

        let final;
        if (partial.length === 0) {
            final = '{}';
        } else {
            let properties;
            if (gap === '') {
                properties = partial.join(',');
                final = '{' + properties + '}';
            } else {
                let separator = ',\n' + indent;
                properties = partial.join(separator);
                final = '{\n' + indent + properties + ',\n' + stepback + '}';
            }
        }

        stack.pop();
        indent = stepback;
        return final
    }

    function serializeKey (key) {
        if (key.length === 0) {
            return quoteString(key)
        }

        const firstChar = String.fromCodePoint(key.codePointAt(0));
        if (!util.isIdStartChar(firstChar)) {
            return quoteString(key)
        }

        for (let i = firstChar.length; i < key.length; i++) {
            if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
                return quoteString(key)
            }
        }

        return key
    }

    function serializeArray (value) {
        if (stack.indexOf(value) >= 0) {
            throw TypeError('Converting circular structure to JSON5')
        }

        stack.push(value);

        let stepback = indent;
        indent = indent + gap;

        let partial = [];
        for (let i = 0; i < value.length; i++) {
            const propertyString = serializeProperty(String(i), value);
            partial.push((propertyString !== undefined) ? propertyString : 'null');
        }

        let final;
        if (partial.length === 0) {
            final = '[]';
        } else {
            if (gap === '') {
                let properties = partial.join(',');
                final = '[' + properties + ']';
            } else {
                let separator = ',\n' + indent;
                let properties = partial.join(separator);
                final = '[\n' + indent + properties + ',\n' + stepback + ']';
            }
        }

        stack.pop();
        indent = stepback;
        return final
    }
};

const JSON5 = {
    parse,
    stringify,
};

var lib = JSON5;

function trimEndSlash(str) {
    if (str.endsWith('/') || str.endsWith('\\'))
        return str.slice(0, -1);
    return str;
}
function trimStartDot(str) {
    if (str.startsWith('./'))
        return str.slice(2);
    return str;
}
function dirname(str) {
    const parts = str.split(/[\/\\]/g);
    return parts[parts.length - 2];
}
function join(...parts) {
    return parts.map(trimEndSlash).map(trimStartDot).join('/');
}

const isBrowser = typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof fetch !== 'undefined';
// to be replaced by rollup
let CDN_ROOT = '';
let _onigasmPromise = null;
async function getOnigasm() {
    if (!_onigasmPromise) {
        let loader;
        if (isBrowser) {
            loader = loadWASM(_resolvePath('dist/onigasm.wasm'));
        }
        else {
            const path = require('path');
            const onigasmPath = path.join(require.resolve('onigasm'), '../onigasm.wasm');
            const fs = require('fs');
            const wasmBin = fs.readFileSync(onigasmPath).buffer;
            loader = loadWASM(wasmBin);
        }
        _onigasmPromise = loader.then(() => {
            return {
                createOnigScanner(patterns) {
                    return new OnigScanner(patterns);
                },
                createOnigString(s) {
                    return new OnigString(s);
                }
            };
        });
    }
    return _onigasmPromise;
}
function _resolvePath(filepath) {
    if (isBrowser) {
        {
            console.warn('[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`');
        }
        return `${CDN_ROOT}${filepath}`;
    }
    else {
        const path = require('path');
        if (path.isAbsolute(filepath)) {
            return filepath;
        }
        else {
            return path.resolve(__dirname, '..', filepath);
        }
    }
}
/**
 * @param filepath assert path related to ./packages/shiki
 */
async function _fetchAssets(filepath) {
    const path = _resolvePath(filepath);
    if (isBrowser) {
        return await fetch(path).then(r => r.text());
    }
    else {
        const fs = require('fs');
        return await fs.promises.readFile(path, 'utf-8');
    }
}
async function _fetchJSONAssets(filepath) {
    return lib.parse(await _fetchAssets(filepath));
}
/**
 * @param themePath related path to theme.json
 */
async function fetchTheme(themePath) {
    let theme = await _fetchJSONAssets(themePath);
    const shikiTheme = toShikiTheme(theme);
    if (shikiTheme.include) {
        const includedTheme = await fetchTheme(join(dirname(themePath), shikiTheme.include));
        if (includedTheme.settings) {
            shikiTheme.settings = includedTheme.settings.concat(shikiTheme.settings);
        }
        if (includedTheme.bg && !shikiTheme.bg) {
            shikiTheme.bg = includedTheme.bg;
        }
        if (includedTheme.colors) {
            shikiTheme.colors = Object.assign(Object.assign({}, includedTheme.colors), shikiTheme.colors);
        }
        delete shikiTheme.include;
    }
    return shikiTheme;
}
async function fetchGrammar(filepath) {
    return await _fetchJSONAssets(filepath);
}
function repairTheme(theme) {
    // Has the default no-scope setting with fallback colors
    if (!theme.settings)
        theme.settings = [];
    if (theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope) {
        return;
    }
    // Push a no-scope setting with fallback colors
    theme.settings.unshift({
        settings: {
            foreground: theme.fg,
            background: theme.bg
        }
    });
}
function toShikiTheme(rawTheme) {
    const type = rawTheme.type || 'dark';
    const shikiTheme = Object.assign(Object.assign({ name: rawTheme.name, type }, rawTheme), getThemeDefaultColors(rawTheme));
    if (rawTheme.include) {
        shikiTheme.include = rawTheme.include;
    }
    if (rawTheme.tokenColors) {
        shikiTheme.settings = rawTheme.tokenColors;
        delete shikiTheme.tokenColors;
    }
    repairTheme(shikiTheme);
    return shikiTheme;
}
/**
 * https://github.com/microsoft/vscode/blob/f7f05dee53fb33fe023db2e06e30a89d3094488f/src/vs/platform/theme/common/colorRegistry.ts#L258-L268
 */
const VSCODE_FALLBACK_EDITOR_FG = { light: '#333333', dark: '#bbbbbb' };
const VSCODE_FALLBACK_EDITOR_BG = { light: '#fffffe', dark: '#1e1e1e' };
function getThemeDefaultColors(theme) {
    var _a, _b, _c, _d, _e, _f;
    let fg, bg;
    /**
     * First try:
     * Theme might contain a global `tokenColor` without `name` or `scope`
     * Used as default value for foreground/background
     */
    let settings = theme.settings ? theme.settings : theme.tokenColors;
    const globalSetting = settings
        ? settings.find(s => {
            return !s.name && !s.scope;
        })
        : undefined;
    if ((_a = globalSetting === null || globalSetting === void 0 ? void 0 : globalSetting.settings) === null || _a === void 0 ? void 0 : _a.foreground) {
        fg = globalSetting.settings.foreground;
    }
    if ((_b = globalSetting === null || globalSetting === void 0 ? void 0 : globalSetting.settings) === null || _b === void 0 ? void 0 : _b.background) {
        bg = globalSetting.settings.background;
    }
    /**
     * Second try:
     * If there's no global `tokenColor` without `name` or `scope`
     * Use `editor.foreground` and `editor.background`
     */
    if (!fg && ((_d = (_c = theme) === null || _c === void 0 ? void 0 : _c.colors) === null || _d === void 0 ? void 0 : _d['editor.foreground'])) {
        fg = theme.colors['editor.foreground'];
    }
    if (!bg && ((_f = (_e = theme) === null || _e === void 0 ? void 0 : _e.colors) === null || _f === void 0 ? void 0 : _f['editor.background'])) {
        bg = theme.colors['editor.background'];
    }
    /**
     * Last try:
     * If there's no fg/bg color specified in theme, use default
     */
    if (!fg) {
        fg = theme.type === 'light' ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
    }
    if (!bg) {
        bg = theme.type === 'light' ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
    }
    return {
        fg,
        bg
    };
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
class Resolver {
    constructor(onigLibPromise, onigLibName) {
        this.languagesPath = 'languages/';
        this.languageMap = {};
        this.scopeToLangMap = {};
        this._onigLibPromise = onigLibPromise;
        this._onigLibName = onigLibName;
    }
    get onigLib() {
        return this._onigLibPromise;
    }
    getOnigLibName() {
        return this._onigLibName;
    }
    getLangRegistration(langIdOrAlias) {
        return this.languageMap[langIdOrAlias];
    }
    async loadGrammar(scopeName) {
        const lang = this.scopeToLangMap[scopeName];
        if (!lang) {
            return null;
        }
        if (lang.grammar) {
            return lang.grammar;
        }
        const g = await fetchGrammar(languages.includes(lang) ? `${this.languagesPath}${lang.path}` : lang.path);
        lang.grammar = g;
        return g;
    }
    addLanguage(l) {
        this.languageMap[l.id] = l;
        if (l.aliases) {
            l.aliases.forEach(a => {
                this.languageMap[a] = l;
            });
        }
        this.scopeToLangMap[l.scopeName] = l;
    }
}

class StackElementMetadata {
    static toBinaryStr(metadata) {
        let r = metadata.toString(2);
        while (r.length < 32) {
            r = '0' + r;
        }
        return r;
    }
    static printMetadata(metadata) {
        let languageId = StackElementMetadata.getLanguageId(metadata);
        let tokenType = StackElementMetadata.getTokenType(metadata);
        let fontStyle = StackElementMetadata.getFontStyle(metadata);
        let foreground = StackElementMetadata.getForeground(metadata);
        let background = StackElementMetadata.getBackground(metadata);
        console.log({
            languageId: languageId,
            tokenType: tokenType,
            fontStyle: fontStyle,
            foreground: foreground,
            background: background
        });
    }
    static getLanguageId(metadata) {
        return (metadata & 255 /* LANGUAGEID_MASK */) >>> 0 /* LANGUAGEID_OFFSET */;
    }
    static getTokenType(metadata) {
        return (metadata & 1792 /* TOKEN_TYPE_MASK */) >>> 8 /* TOKEN_TYPE_OFFSET */;
    }
    static getFontStyle(metadata) {
        return (metadata & 14336 /* FONT_STYLE_MASK */) >>> 11 /* FONT_STYLE_OFFSET */;
    }
    static getForeground(metadata) {
        return (metadata & 8372224 /* FOREGROUND_MASK */) >>> 14 /* FOREGROUND_OFFSET */;
    }
    static getBackground(metadata) {
        return (metadata & 4286578688 /* BACKGROUND_MASK */) >>> 23 /* BACKGROUND_OFFSET */;
    }
    static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
        let _languageId = StackElementMetadata.getLanguageId(metadata);
        let _tokenType = StackElementMetadata.getTokenType(metadata);
        let _fontStyle = StackElementMetadata.getFontStyle(metadata);
        let _foreground = StackElementMetadata.getForeground(metadata);
        let _background = StackElementMetadata.getBackground(metadata);
        if (languageId !== 0) {
            _languageId = languageId;
        }
        if (tokenType !== 0 /* Other */) {
            _tokenType =
                tokenType === 8 /* MetaEmbedded */ ? 0 /* Other */ : tokenType;
        }
        if (fontStyle !== -1 /* NotSet */) {
            _fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            _foreground = foreground;
        }
        if (background !== 0) {
            _background = background;
        }
        return (((_languageId << 0 /* LANGUAGEID_OFFSET */) |
            (_tokenType << 8 /* TOKEN_TYPE_OFFSET */) |
            (_fontStyle << 11 /* FONT_STYLE_OFFSET */) |
            (_foreground << 14 /* FOREGROUND_OFFSET */) |
            (_background << 23 /* BACKGROUND_OFFSET */)) >>>
            0);
    }
}

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
function tokenizeWithTheme(theme, colorMap, fileContents, grammar, options) {
    let lines = fileContents.split(/\r\n|\r|\n/);
    let ruleStack = main.exports.INITIAL;
    let actual = [];
    let final = [];
    for (let i = 0, len = lines.length; i < len; i++) {
        let line = lines[i];
        if (line === '') {
            actual = [];
            final.push([]);
            continue;
        }
        let resultWithScopes;
        let tokensWithScopes;
        let tokensWithScopesIndex;
        if (options.includeExplanation) {
            resultWithScopes = grammar.tokenizeLine(line, ruleStack);
            tokensWithScopes = resultWithScopes.tokens;
            tokensWithScopesIndex = 0;
        }
        let result = grammar.tokenizeLine2(line, ruleStack);
        let tokensLength = result.tokens.length / 2;
        for (let j = 0; j < tokensLength; j++) {
            let startIndex = result.tokens[2 * j];
            let nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
            if (startIndex === nextStartIndex) {
                continue;
            }
            let metadata = result.tokens[2 * j + 1];
            let foreground = StackElementMetadata.getForeground(metadata);
            let foregroundColor = colorMap[foreground];
            let fontStyle = StackElementMetadata.getFontStyle(metadata);
            let explanation = [];
            if (options.includeExplanation) {
                let offset = 0;
                while (startIndex + offset < nextStartIndex) {
                    let tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
                    let tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
                    offset += tokenWithScopesText.length;
                    explanation.push({
                        content: tokenWithScopesText,
                        scopes: explainThemeScopes(theme, tokenWithScopes.scopes)
                    });
                    tokensWithScopesIndex++;
                }
            }
            actual.push({
                content: line.substring(startIndex, nextStartIndex),
                color: foregroundColor,
                fontStyle,
                explanation: explanation
            });
        }
        final.push(actual);
        actual = [];
        ruleStack = result.ruleStack;
    }
    return final;
}
function explainThemeScopes(theme, scopes) {
    let result = [];
    for (let i = 0, len = scopes.length; i < len; i++) {
        let parentScopes = scopes.slice(0, i);
        let scope = scopes[i];
        result[i] = {
            scopeName: scope,
            themeMatches: explainThemeScope(theme, scope, parentScopes)
        };
    }
    return result;
}
function matchesOne(selector, scope) {
    let selectorPrefix = selector + '.';
    if (selector === scope || scope.substring(0, selectorPrefix.length) === selectorPrefix) {
        return true;
    }
    return false;
}
function matches(selector, selectorParentScopes, scope, parentScopes) {
    if (!matchesOne(selector, scope)) {
        return false;
    }
    let selectorParentIndex = selectorParentScopes.length - 1;
    let parentIndex = parentScopes.length - 1;
    while (selectorParentIndex >= 0 && parentIndex >= 0) {
        if (matchesOne(selectorParentScopes[selectorParentIndex], parentScopes[parentIndex])) {
            selectorParentIndex--;
        }
        parentIndex--;
    }
    if (selectorParentIndex === -1) {
        return true;
    }
    return false;
}
function explainThemeScope(theme, scope, parentScopes) {
    let result = [], resultLen = 0;
    for (let i = 0, len = theme.settings.length; i < len; i++) {
        let setting = theme.settings[i];
        let selectors;
        if (typeof setting.scope === 'string') {
            selectors = setting.scope.split(/,/).map(scope => scope.trim());
        }
        else if (Array.isArray(setting.scope)) {
            selectors = setting.scope;
        }
        else {
            continue;
        }
        for (let j = 0, lenJ = selectors.length; j < lenJ; j++) {
            let rawSelector = selectors[j];
            let rawSelectorPieces = rawSelector.split(/ /);
            let selector = rawSelectorPieces[rawSelectorPieces.length - 1];
            let selectorParentScopes = rawSelectorPieces.slice(0, rawSelectorPieces.length - 1);
            if (matches(selector, selectorParentScopes, scope, parentScopes)) {
                // match!
                result[resultLen++] = setting;
                // break the loop
                j = lenJ;
            }
        }
    }
    return result;
}

const FONT_STYLE_TO_CSS = {
    [1 /* Italic */]: 'font-style: italic',
    [2 /* Bold */]: 'font-weight: bold',
    [4 /* Underline */]: 'text-decoration: underline'
};
function renderToHtml(lines, options = {}) {
    const bg = options.bg || '#fff';
    let html = '';
    html += `<pre class="shiki" style="background-color: ${bg}">`;
    if (options.langId) {
        html += `<div class="language-id">${options.langId}</div>`;
    }
    html += `<code>`;
    lines.forEach((l) => {
        html += `<span class="line">`;
        l.forEach(token => {
            const cssDeclarations = [`color: ${token.color || options.fg}`];
            if (token.fontStyle > 0 /* None */) {
                cssDeclarations.push(FONT_STYLE_TO_CSS[token.fontStyle]);
            }
            html += `<span style="${cssDeclarations.join('; ')}">${escapeHtml(token.content)}</span>`;
        });
        html += `</span>\n`;
    });
    html = html.replace(/\n*$/, ''); // Get rid of final new lines
    html += `</code></pre>`;
    return html;
}
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
function escapeHtml(html) {
    return html.replace(/[&<>"']/g, chr => htmlEscapes[chr]);
}

class Registry extends main.exports.Registry {
    constructor(_resolver) {
        super(_resolver);
        this._resolver = _resolver;
        this.themesPath = 'themes/';
        this._resolvedThemes = {};
        this._resolvedGrammars = {};
    }
    getTheme(theme) {
        if (typeof theme === 'string') {
            return this._resolvedThemes[theme];
        }
        else {
            return theme;
        }
    }
    async loadTheme(theme) {
        if (typeof theme === 'string') {
            if (!this._resolvedThemes[theme]) {
                this._resolvedThemes[theme] = await fetchTheme(`${this.themesPath}${theme}.json`);
            }
            return this._resolvedThemes[theme];
        }
        else {
            theme = toShikiTheme(theme);
            if (theme.name) {
                this._resolvedThemes[theme.name] = theme;
            }
            return theme;
        }
    }
    async loadThemes(themes) {
        return await Promise.all(themes.map(theme => this.loadTheme(theme)));
    }
    getLoadedThemes() {
        return Object.keys(this._resolvedThemes);
    }
    getGrammer(name) {
        return this._resolvedGrammars[name];
    }
    async loadLanguage(lang) {
        const g = await this.loadGrammar(lang.scopeName);
        this._resolvedGrammars[lang.id] = g;
        if (lang.aliases) {
            lang.aliases.forEach(la => {
                this._resolvedGrammars[la] = g;
            });
        }
    }
    async loadLanguages(langs) {
        for (const lang of langs) {
            this._resolver.addLanguage(lang);
        }
        for (const lang of langs) {
            await this.loadLanguage(lang);
        }
    }
    getLoadedLanguages() {
        return Object.keys(this._resolvedGrammars);
    }
}

function resolveLang(lang) {
    return typeof lang === 'string'
        ? languages.find(l => { var _a; return l.id === lang || ((_a = l.aliases) === null || _a === void 0 ? void 0 : _a.includes(lang)); })
        : lang;
}
function resolveOptions(options) {
    var _a;
    let _languages = languages;
    let _themes = options.themes || [];
    if ((_a = options.langs) === null || _a === void 0 ? void 0 : _a.length) {
        _languages = options.langs.map(resolveLang);
    }
    if (options.theme) {
        _themes.unshift(options.theme);
    }
    if (!_themes.length) {
        _themes = ['nord'];
    }
    return { _languages, _themes };
}
async function getHighlighter(options) {
    var _a, _b;
    const { _languages, _themes } = resolveOptions(options);
    const _resolver = new Resolver(getOnigasm(), 'onigasm');
    const _registry = new Registry(_resolver);
    if ((_a = options.paths) === null || _a === void 0 ? void 0 : _a.themes) {
        _registry.themesPath = options.paths.themes;
    }
    if ((_b = options.paths) === null || _b === void 0 ? void 0 : _b.languages) {
        _resolver.languagesPath = options.paths.languages;
    }
    const themes = await _registry.loadThemes(_themes);
    const _defaultTheme = themes[0];
    let _currentTheme;
    await _registry.loadLanguages(_languages);
    function getTheme(theme) {
        const _theme = theme ? _registry.getTheme(theme) : _defaultTheme;
        if (!_theme) {
            throw Error(`No theme registration for ${theme}`);
        }
        if (!_currentTheme || _currentTheme.name !== _theme.name) {
            _registry.setTheme(_theme);
            _currentTheme = _theme;
        }
        const _colorMap = _registry.getColorMap();
        return { _theme, _colorMap };
    }
    function getGrammer(lang) {
        const _grammer = _registry.getGrammer(lang);
        if (!_grammer) {
            throw Error(`No language registration for ${lang}`);
        }
        return { _grammer };
    }
    function codeToThemedTokens(code, lang = 'text', theme, options = { includeExplanation: true }) {
        if (isPlaintext(lang)) {
            return [[{ content: code }]];
        }
        const { _grammer } = getGrammer(lang);
        const { _theme, _colorMap } = getTheme(theme);
        return tokenizeWithTheme(_theme, _colorMap, code, _grammer, options);
    }
    function codeToHtml(code, lang = 'text', theme) {
        const tokens = codeToThemedTokens(code, lang, theme, {
            includeExplanation: false
        });
        const { _theme } = getTheme(theme);
        return renderToHtml(tokens, {
            fg: _theme.fg,
            bg: _theme.bg
        });
    }
    async function loadTheme(theme) {
        await _registry.loadTheme(theme);
    }
    async function loadLanguage(lang) {
        const _lang = resolveLang(lang);
        _resolver.addLanguage(_lang);
        await _registry.loadLanguage(_lang);
    }
    function getLoadedThemes() {
        return _registry.getLoadedThemes();
    }
    function getLoadedLanguages() {
        return _registry.getLoadedLanguages();
    }
    function getBackgroundColor(theme) {
        const { _theme } = getTheme(theme);
        return _theme.bg;
    }
    function getForegroundColor(theme) {
        const { _theme } = getTheme(theme);
        return _theme.fg;
    }
    return {
        codeToThemedTokens,
        codeToHtml,
        getTheme: (theme) => {
            return getTheme(theme)._theme;
        },
        loadTheme,
        loadLanguage,
        getBackgroundColor,
        getForegroundColor,
        getLoadedThemes,
        getLoadedLanguages
    };
}
function isPlaintext(lang) {
    return !lang || ['plaintext', 'txt', 'text'].includes(lang);
}

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

const blade = {
    id: 'blade',
    scopeName: 'text.html.php.blade',
    path: 'blade.tmLanguage.json' // or `plist`
};

(() => {
    if (argv._[0] === 'languages') {
        const languages$1 = languages;
        languages$1.push(blade);
        process.stdout.write(JSON.stringify(languages$1));
        return;
    }

    if (argv._[0] === 'themes') {
        process.stdout.write(JSON.stringify(themes));
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

    getHighlighter({
        theme,
        paths: {
            themes: 'dist/themes/',
            languages: 'dist/languages/'
        }
    }).then((highlighter) => {
            highlighter.loadLanguage(blade).then(() => {
                process.stdout.write(highlighter.codeToHtml(argv._[0], language));
            });
        });
})();
