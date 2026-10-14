// Konfigurasi bersama untuk index.html dan upload.html.
// Jika URL deployment Apps Script berubah, cukup ganti di sini.
const APP_CONFIG = {
    apiURL: 'https://script.google.com/macros/s/AKfycbwFuBr8bsJmEFbpcgIoYyPfzEUIy2vePUftdWPrNMph6c9-yRsocVlqHh4KAVWGGZYB6Q/exec',
    // Kunci penanda: upload.html menulisnya setelah sukses, index.html membacanya untuk refresh otomatis
    syncKey: 'festive:lastUpload'
};
