void async function WA() {
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
    let iadd;
    await new Promise(
        resolve => resolve(
            wasm_data
        )
    ).then(
        byte => {
            let buffer = new ArrayBuffer(byte.length);
            let uint8 = new Uint8Array(buffer);
            for (let i = 0; i !== byte.length; i++) {
                uint8[ i ] = byte[ i ];
            }
            return buffer
        }
    ).then(
        buffer => WebAssembly.compile(
            buffer
        )
    ).then(
        modules => new WebAssembly.Instance(
            modules,
            {}
        ).exports
    ).then(
        exports =>
            iadd = exports.iadd
    ).catch(
        ()=>{
            iadd = function iadd(i32a, i32b) {
                'use asm';
                i32a = i32a | 0;
                i32b = i32b | 0;
                return (i32a + i32b) | 0;
            };
        }
    );
    Math.iadd = iadd;
    
    // =======================
    let test = false;
    if(test)
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

