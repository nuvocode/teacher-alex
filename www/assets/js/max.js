const userName = document.getElementsByClassName("user_name");
const userNameInput = document.getElementsByClassName("user_name_input");
const changename = document.getElementsByClassName("changename");
const vn_1 = document.getElementsByClassName("vn_1");
const vn_2 = document.getElementsByClassName("vn_2");
$(document).ready(function() {
    console.log('Loaded Max scripts');
	if ( localStorage.visitorName === '' || localStorage.visitorName === undefined ) {
		$(userName).hide();
		$(userNameInput).show();
		$(changename).hide();
		$(vn_2).hide();
		$(vn_1).show();
		console.log('Nothing was entered so showing name input');
	  } else {
		var value = localStorage.visitorName;
		$(userName).show();
		$("span.user_name").html(value + "");
		$(userNameInput).hide();
		console.log('Showing userName value');
		$(changename).show();
		$(vn_1).hide();
		$(vn_2).show();
	  }
});
$(function() {
	$(".link_howto1").on("click", function(){
        window.open('midjourney_realistic_self_portraits_and_selfies.html','_self' );
	});
	$(".logo_btn").on("click", function(){
        window.open('index.html','_self' );
	});
	$(".link_portfolio").on("click", function(){
        window.open('portfolio.html','_self' );
	});
	$(".link_merch").on("click", function(){
        window.open('merch.html','_self' );
	});
	$(".link_blog").on("click", function(){
        window.open('blog.html','_self' );
	});
	$(".link_ctn").on("click", function(){
        alert('Website is no longer available.');
	});
	$(".link_thrival").on("click", function(){
        alert('Please request demo to view this app');
	});
	$(".link_fpr_events").on("click", function(){
        window.open('https://fpr-events.web.app','_blank' );
	});
	$(".link_fpr").on("click", function(){
        window.open('https://foundationforpuertorico.org','_blank' );
	});
	$(".link_goshare").on("click", function(){
        window.open('https://goshare360.com','_blank' );
	});
	$(".link_maritime").on("click", function(){
        window.open('https://www.maritimemuseum.org/','_blank' );
	});
	$(".link_taylor").on("click", function(){
        window.open('https://taylorbigred.com','_blank' );
	});
	$(".link_wcrp").on("click", function(){
        window.open('https://wcrp-pr.org','_blank' );
	});
	$(".link_dl_resources").on("click", function(){
		// timeoutID = window.setTimeout(targetFuncion, 100);
        window.open('https://firebasestorage.googleapis.com/v0/b/max-knox.appspot.com/o/2022%2Fdownloads%2Fresources%2Fresources.zip?alt=media&token=261935ba-979a-4920-bb67-45b7bcd8f046','_blank' );
	});
	$(".user_name_input").on("submit", function(event){
		event.preventDefault(); // prevent the form from submitting
		var value = $("#validateUserName").val();
		localStorage.visitorName = value;
		$(userName).show();
		$("span.user_name").html(value + "");
		$(userNameInput).hide();
		$(changename).show();
		$(vn_1).hide();
		$(vn_2).show();
	  });
	  $("#update_username").on("click", function(){
		$(userName).hide();
		$(userNameInput).show();
		$(changename).hide();
		$(vn_2).hide();
		$(vn_1).show();
	  });
});
function targetFuncion() {
 // function
}