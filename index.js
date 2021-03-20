void function WA() {
    //'(C) Basel.Al_hajeri?.MBH?.()'
    'use strict';
    let wat = 
        String.raw`;;(C (MBH))
(module
  (func $iadd (export "iadd") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add))
`;
    let wasm_data = [
        0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0x7, 0x1, 0x60, 0x2, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x2, 0x1, 0x0, 0x7, 0x8, 0x1, 0x4, 0x69, 0x61, 0x64, 0x64, 0x0, 0x0, 0xa, 0x9, 0x1, 0x7, 0x0, 0x20, 0x0, 0x20, 0x1, 0x6a, 0xb, 0x0, 0x17, 0x4, 0x6e, 0x61, 0x6d, 0x65, 0x1, 0x7, 0x1, 0x0, 0x4, 0x69, 0x61, 0x64, 0x64, 0x2, 0x7, 0x1, 0x0, 0x2, 0x0, 0x0, 0x1, 0x0
    ];
    let iadd, modules, $exports;
    if (typeof WebAssembly==='object') {
        let buffer = new ArrayBuffer(wasm_data.length);
        let uint8 = new Uint8Array(buffer);
        for (let i = 0; i !== wasm_data.length; i++) {
            uint8[ i ] = wasm_data[ i ];
        }
        modules = new WebAssembly.Module(
            buffer
        );
        $exports = new WebAssembly.Instance(
            modules,
            {}
        ).exports;
        iadd = $exports.iadd;
    }
        else {
            iadd = function iadd(i32$a, i32$b) {
                'use asm';
                i32$a = i32$a | 0;
                i32$b = i32$b | 0;
                return (i32$a + i32$b) | 0;
            };
        }
    Math.iadd = iadd;
    
    if(typeof module!=='undefined' && module.exports) {
        module.exports = Math;
    }
    
    // =======================
    if (false)
    for(let tests = [
        [1, 1],
        [8, 10],
        [256, 256],
        [0xFFFFFFFF, 0xFFFFFFFF]
    ], i = 0, quiz = tests[ i ], leng = tests.length; i !== leng; quiz = tests[ i++ ], console.log(
        `Math.iadd(${quiz}): ${Math.iadd(
            ...quiz
        )}`
    ));
}();

