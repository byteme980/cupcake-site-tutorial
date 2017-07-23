$(document).ready(function () {

  $('#order-button').click(function () {
    var orderType = $('#order-type').find(":selected").text();
    var orderAmount = $('#order-amount').find(":selected").text();

    var successMessage = 'Congratulations! You just ordered ' + orderAmount + ' ' + orderType;
    var orderSuccess = '<div class=\'order-success\'>' + successMessage + '!' + '<div';

    $('#order-confirm-container').append(orderSuccess)

    $('.order-success').fadeOut(4000);
  });
});
