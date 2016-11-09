//file1
window.console = window.console || (function(){
      var c = {};
      c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
      return c;
    })();
var app = angular.module('myApp',[
    'ngRoute',
    'ngStorage'
  ]);

// global variables
app.constant('tbConfig', {
  urlPaypal : "https://www.sandbox.paypal.com",
  //urlPaypal : "https://www.paypal.com",
  //urlAjax : "http://localhost:8080",

  // urlAjax : "",// for .com
  // urlAjax : "http://10.1.10.21:8080",//sherry pc
  urlAjax : "http://10.1.10.26:8080",//sherry pc
  //urlAjax : "http://takebus.us",
  //urlAjax : "https://takebus.com"

});

  var isValid = function (s, l, m) {
    if (s != null && s.length >= l && s.length <= m) {
      var r, re;
      re = /\d*/i; //\d means num, * means marching multiple nums
      r = s.match(re);
      return (r == s) ? true : false;
    }
    return false;
  };

  var email_pattern = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

  /*first name && last name valid*/
  var password_pattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
  var firstName_pattern = /^[a-zA-Z.\s]{1,26}$/i;
  var lastName_pattern = /^[a-zA-Z.\s]{1,26}$/i;
  // var address_pattern = /^[a-zA-Z0-9\s.-]{5,95}$/i;
  // var address_pattern = /^[ \w]{3,}([A-Za-z\.\,])?([ \w]*\#\d+)?(\r\n| )[ \w]{3,}?$/;
  var address_pattern = /^[A-Za-z0-9\.\,\#\s.-]{5,95}$/i;
  var city_pattern = /^[a-zA-Z\s]{1,35}$/i;
  var zip_pattern = /^[0-9]{5}$/i;
  var phoneNumber_pattern = /^\d{10}/;
// var phoneNumber_pattern = /^\d{3}[-]?\d{3}[-]?\d{4}$/i;
  var fullname_pattern = /^[a-zA-Z.\s]{2,52}$/i;

$(document).ready(function() {
  $("header").show();
  $("show").hide();
});