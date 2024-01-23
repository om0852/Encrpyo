const Encrypt = (data) => {
    let str = "";
    let NewCode = 0;
    for (let i = 0; i < data.length; i++) {
        let AsciiCode = data.charCodeAt(i);
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
    }
    return str;


}
const Decrypt = (data) => {

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
        oldCode = AsciiCode

    }
    return str;
}
module.exports = { Encrypt, Decrypt };