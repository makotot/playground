(function () {
  var apiUrl = 'http://api.fixer.io/latest?callback=?';

  $.ajax({
    url: apiUrl,
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function (res) {
    console.log(res);
  });
})();
