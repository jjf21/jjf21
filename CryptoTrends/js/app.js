

var key_pv = 'Zp7GRidYdK38p8aK2Scf8ZbeS1jIG3jnInqejhMsLEeGcikips';
var key_pb = 'stEL5n97QHMUroakxQBh4r26a';
var query = 'https://api.twitter.com/1.1/search/tweets.json?q=%24NEM%20or%20%24xem';



$(function(){

  $.ajax({
    url: query,
    type: "GET",
    data: { cursor: "-1", 
            screen_name: "twitterapi" },
    cache: false,
    dataType: 'json',

    success: function(data) { alert('hello!'); console.log(data);},
    error: function(html) { alert(html); },
    beforeSend: function(xhr){
      xhr.setRequestHeader("OAuth oauth_consumer_key='stEL5n97QHMUroakxQBh4r26a', oauth_nonce='kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg', oauth_signature='tnnArxj06cWHq44gCs1OSKk%2FjLY%3D', oauth_signature_method='HMAC-SHA1', oauth_timestamp='1318622958', oauth_token='370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb', oauth_version='1.0'");
      //xhr.setRequestHeader("OAuth oauth_consumer_key='DC0sePOBbQ8bYdC8r4Smg',oauth_signature_method='HMAC-SHA1',oauth_timestamp='1501787398',oauth_nonce='2663088675',oauth_version='1.0',oauth_token='856230434904182784-CsTTPjvUmZC8SBfCj1cFEq52iRhgntL',oauth_signature='odBNEuEEzHEqKhPTmY5k%2F5RgWes%3D'");
    }
  });

  // API COIN MARKETCAP
  // $.ajax({
  //   url: 'https://api.coinmarketcap.com/v1/ticker/?limit=5',
  //   success: function(data){
  //     data.forEach(function(currency){
  //       var row = "<tr role='row'><td class='no-wrap text-left'>"+currency.name+"</td><td class='no-wrap text-right'>"+currency.price_usd+" $</td><td class='no-wrap text-right'>"+currency.price_btc+" BTC</td><td class='no-wrap text-right'>"+currency.percent_change_1h + "%</td><td class='no-wrap text-right'>"+currency.percent_change_24h + "%</td><td class='no-wrap text-right'>"+currency.percent_change_7d + "%</td></tr>";
  //       $('tbody').append(row);
  //     });
  //   }

  // });




});

