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

// Segment - Track Top Menu Clicks
$( document ).ready(function() {
	$( ".clicked-home" ).click(function() {
		analytics.track("CLICKED_HOME", {});
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
	$( ".clicked-chat" ).click(function() {
		analytics.track("CLICKED_CHAT", {});
	});
	$( ".clicked-chat-from-index" ).click(function() {
		analytics.track("CLICKED_CHAT_FROM_INDEX", {});
	});
	$( ".clicked-chat-from-services" ).click(function() {
		analytics.track("CLICKED_CHAT_FROM_SERVICES", {});
	});
	$( ".clicked-chat-from-portfolio" ).click(function() {
		analytics.track("CLICKED_CHAT_FROM_PORTFOLIO", {});
	});
	$( ".clicked-chat-from-about-us" ).click(function() {
		analytics.track("CLICKED_CHAT_FROM_ABOUT_US", {});
	});
});

// Segment - Store User Email using Intercom
$(window).load(function() {
	var iFrameCheckIntId = setInterval(function(){
		if($('.intercom-launcher-frame').length > 0) {
			clearInterval(iFrameCheckIntId);
			var iFrameDoc = $('.intercom-launcher-frame')[0].contentDocument;
			$(iFrameDoc).find('.intercom-launcher').click(function(e) {
				setTimeout(function(){
					var iFrameDoc2 = $('#intercom-container .intercom-messenger-frame').find('iframe')[0].contentDocument;
					var intId = setInterval(function(){
						var disabled = $(iFrameDoc2).find('[name=intercom-channel-collector]').attr('disabled');
						if(disabled == "disabled") {
							var newGuid = guid();
							var userEmail = $(iFrameDoc2).find('[name=intercom-channel-collector]').val();
							clearInterval(intId);
							analytics.identify(newGuid, {
							  email: userEmail,
							});
						}
					},100);
				}, 500);
			});
		}
	},100);
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
