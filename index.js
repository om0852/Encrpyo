//range of ascii code 33-126

const Encrypt = (data) => {
    console.log(data.length)
    let str = "";
    let NewCode = 0;
    console.log("Encrpt")
    for (let i = 0; i < data.length; i++) {
        let AsciiCode = data.charCodeAt(i);
        // console.log(AsciiCode);

        if (data.charAt(0) == data[i]) {
            if ((AsciiCode + data.length) > 126) {
                NewCode = (AsciiCode + data.length) - 126;
                if (NewCode < 33) {
                    NewCode += 33;
                }
            }
            else {
                NewCode = AsciiCode + data.length;
            }
        }
        else {
            if ((AsciiCode + NewCode) > 126) {
                NewCode = (AsciiCode + NewCode) - 126;
                if (NewCode < 33) {
                    NewCode += 33;
                }
            }
            else {
                NewCode = AsciiCode + NewCode;
            }
        }
        str += String.fromCharCode(NewCode);
        console.log(AsciiCode, NewCode);

    }
    return str;


}
// const Decrypt = (data) => {
//     // alert(data.length);
//     console.log("dencrpt")

//     let str = "";
//     let oldCode = 0;
//     let NewCode = 0;
//     for (let i = 0; i < data.length; i++) {
//         let AsciiCode = data.charCodeAt(i);
//         console.log(AsciiCode, NewCode);

//         if (data.charAt(0) == data[i]) {
//             oldCode = AsciiCode;
//             if ((AsciiCode - data.length) < 0) {
//                 NewCode = (AsciiCode - data.length) + 126;
//             }
//             else {
//                 NewCode = AsciiCode - data.length;
//             }
//             // console.log("if", NewCode)
//         }
//         else {
//             if ((AsciiCode - NewCode) < 0) {
//                 NewCode = (AsciiCode + 126 - oldCode);
//             }
//             else {
//                 NewCode = AsciiCode - oldCode;
//             }
//             // console.log("Else", NewCode)
//             oldCode = AsciiCode;

//         }
//         str += String.fromCharCode(NewCode);
//     }
//     return str;


// }
const Decrypt = (data) => {
    console.log("Decrypt");

    let str = "";
    let oldCode = 0;
    let NewCode = 0;
    for (let i = 0; i < data.length; i++) {
        let AsciiCode = data.charCodeAt(i);

        if (data.charAt(0) == data[i]) {
            NewCode = AsciiCode - data.length + 126 - 33;
        }
        else {
            if ((AsciiCode + 126 - oldCode) < 126) {
                NewCode = (AsciiCode + 126 - oldCode);
            }
            else {
                NewCode = AsciiCode - oldCode + 126 - 33;
            }
        }
        if (NewCode == 125) {
            str += " ";

        }
        else {
            str += String.fromCharCode(NewCode);
        }
        console.log(AsciiCode, oldCode, NewCode);
        oldCode = AsciiCode

    }
    return str;
}

let data = Encrypt("112")
// let data = Encrypt("om salunke is a nice boy om saknkwsndk wkcdnkwho wdkendlwe")
document.write(data);
console.log(Decrypt(data));








// //range of ascii code 33-126

// const Encrypt = (data) => {
//     console.log(data.length)
//     let str = "";
//     let NewCode = 0;
//     console.log("Encrpt")
//     for (let i = 0; i < data.length; i++) {
//         let AsciiCode = data.charCodeAt(i);
//         // console.log(AsciiCode, NewCode);

//         if (data.charAt(0) == data[i]) {
//             if ((AsciiCode + data.length) > 126) {
//                 NewCode = (AsciiCode + data.length) - 126;
//                 if (NewCode < 33) {
//                     NewCode += 33;
//                 }
//             }
//             else {
//                 NewCode = AsciiCode + data.length;
//             }
//         }
//         else {
//             if ((AsciiCode + NewCode) > 126) {
//                 NewCode = (AsciiCode + NewCode) - 126;
//                 if (NewCode < 33) {
//                     NewCode += 33;
//                 }
//             }
//             else {
//                 NewCode = AsciiCode + NewCode;
//             }
//         }
//         console.log(String.fromCharCode(NewCode));
//         str += String.fromCharCode(NewCode);
//     }
//     return str;


// }
// const Decrypt = (data) => {
//     // alert(data.length);
//     console.log("dencrpt")

//     let str = "";
//     let oldCode = 0;
//     let NewCode = 0;
//     for (let i = 0; i < data.length; i++) {
//         let AsciiCode = data.charCodeAt(i);
//         console.log(AsciiCode, NewCode);

//         if (data.charAt(0) == data[i]) {
//             oldCode = AsciiCode;
//             if ((AsciiCode - data.length) < 0) {
//                 NewCode = (AsciiCode - data.length) + 126;
//             }
//             else {
//                 NewCode = AsciiCode - data.length;
//             }
//             // console.log("if", NewCode)
//         }
//         else {
//             if ((AsciiCode - NewCode) < 0) {
//                 NewCode = (AsciiCode + 126 - oldCode);
//             }
//             else {
//                 NewCode = AsciiCode - oldCode;
//             }
//             // console.log("Else", NewCode)
//             oldCode = AsciiCode;

//         }
//         str += String.fromCharCode(NewCode);
//     }
//     return str;


// }
// let data = Encrypt("om salunke is a nice b shdchs sklhfsh")
// document.write(data);
// // console.log(Decrypt(data));