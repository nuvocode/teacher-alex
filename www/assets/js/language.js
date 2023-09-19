var spanishElements = document.getElementsByClassName("es");
var englishElements = document.getElementsByClassName("en");
$(document).ready(function() {
    console.log('Loaded English vars');
     if ( localStorage.usrLang === 'en' ) {
        $(spanishElements).hide();
        $(englishElements).show();
        console.log('Language was detected as english, so hiding all spanish items');
     } else if ( localStorage.usrLang === 'es' ) {
        $(spanishElements).show();
        $(englishElements).hide();
        console.log('Language was detected as spanish, so hiding all english items');
     } else {
        $(spanishElements).hide();
        $(englishElements).show();
        localStorage.usrLang = "en";
        console.log('No Language was set, so setting Language to English as default');
     }
});
$(function() {
    $(".enButton").on("click", function(){
        $(spanishElements).hide();
        $(englishElements).show();
        localStorage.usrLang = "en";
        console.log('Language is now English');
    });
    $(".esButton").on("click", function(){
        $(spanishElements).show();
        $(englishElements).hide();
        localStorage.usrLang = "es";
        console.log('Language is now Spanish');
    });
});