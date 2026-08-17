fetch('https://economia.awesomeapi.com.br/json/last/BTC-BRL').then(resposta => {
    return resposta.json();
}).then(economia => {
    console.log(economia)
    document.getElementById('valorBitcoin').innerHTML = "R$: " + economia.BTCBRL.bid
});