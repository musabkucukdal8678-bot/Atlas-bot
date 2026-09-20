// Kodun en altına hata yakalayıcı ekleyelim:
process.on('unhandledRejection', error => {
    console.error('Yakalanmayan hata:', error);
});
