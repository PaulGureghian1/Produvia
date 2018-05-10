// Hotjar Analytics
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:204824,hjsv:5};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'http://static.hotjar.com/c/hotjar-','.js?sv=');

// Segment
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("CtsIiKDoEvbyUVdYsEmtcrOVsvG7kIMY");
analytics.page();
}}();

// Segment - Track Clicks
$( document ).ready(function() {
	$( ".clicked-index" ).click(function() {
		analytics.track("CLICKED_INDEX", {});
	});
	$( ".clicked-services" ).click(function() {
		analytics.track("CLICKED_SERVICES", {});
	});
	$( ".clicked-portfolio" ).click(function() {
		analytics.track("CLICKED_PORTFOLIO", {});
	});
	$( ".clicked-products" ).click(function() {
		analytics.track("CLICKED_PRODUCTS", {});
	});
	$( ".clicked-about-us" ).click(function() {
		analytics.track("CLICKED_ABOUT_US", {});
	});
	$( ".clicked-blog" ).click(function() {
		analytics.track("CLICKED_BLOG", {});
	});
	$( ".clicked-talent-pool" ).click(function() {
		analytics.track("CLICKED_TALENT_POOL", {});
	});
	$( ".clicked-playbook-from-about-us" ).click(function() {
		analytics.track("CLICKED_PLAYBOOK_FROM_ABOUT_US", {});
	});
	$( ".clicked-contact-us-from-index" ).click(function() {
		analytics.track("CLICKED_CONTACT_US_FROM_INDEX", {});
	});
	$( ".clicked-contact-us-from-services" ).click(function() {
		analytics.track("CLICKED_CONTACT_US_FROM_SERVICES", {});
	});
	$( ".clicked-contact-us-from-portfolio" ).click(function() {
		analytics.track("CLICKED_CONTACT_US_FROM_PORTFOLIO", {});
	});
	$( ".clicked-contact-us-from-products" ).click(function() {
		analytics.track("CLICKED_CONTACT_US_FROM_PRODUCTS", {});
	});
	$( ".clicked-contact-us-from-about-us" ).click(function() {
		analytics.track("CLICKED_CONTACT_US_FROM_ABOUT_US", {});
	});
	// Track Social Media Clicks
	$( ".clicked-linkedin" ).click(function() {
		analytics.track("CLICKED_LINKEDIN", {});
	});
	$( ".clicked-twitter" ).click(function() {
		analytics.track("CLICKED_TWITTER", {});
	});
	$( ".clicked-instagram" ).click(function() {
		analytics.track("CLICKED_INSTAGRAM", {});
	});
	$( ".clicked-twitter-kryptos" ).click(function() {
		analytics.track("CLICKED_TWITTER_KRYPTOS", {});
	});
	$( ".clicked-twitter-mapo" ).click(function() {
		analytics.track("CLICKED_TWITTER_MAPO", {});
	});
});

// Segment - Generate GUID
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

/* MailChimp Subscription Alert */
/* http://designmodo.com/slides-mailchimp-jquery/ */
$(function(){
  $('#subscribe-predicting-mineral-deposits').ajaxChimp({
    url: 'https://produvia.us7.list-manage.com/subscribe/post?u=9dc7369eb3ba4f36408e9fd1a&amp;id=78c6ee84f1',
    callback: mailChimpCallback
  });

  function mailChimpCallback(resp) {
      console.log('MailChimp Response:');
      $('#signUpText').html(resp.msg);
      console.log(resp);

  }
  });
