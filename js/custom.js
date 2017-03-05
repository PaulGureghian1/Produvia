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

// Amplitude
(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");r.type="text/javascript";
r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-3.0.1-min.gz.js";
r.onload=function(){e.amplitude.runQueuedFunctions()};var i=t.getElementsByTagName("script")[0];
i.parentNode.insertBefore(r,i);function s(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
return this}}var o=function(){this._q=[];return this};var a=["add","append","clearAll","prepend","set","setOnce","unset"];
for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[];return this;
};var p=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];
for(var l=0;l<p.length;l++){s(c,p[l])}n.Revenue=c;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId"];
function v(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
}}for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){e=(!e||e.length===0?"$default_instance":e).toLowerCase();
if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]};e.amplitude=n;
})(window,document);

amplitude.getInstance().init("6e37ef5b6d5f144f750ddfc716518af1");

$( document ).ready(function() {
	$( ".menu-home" ).click(function() {
		analytics.track("CLICKED_HOME", {});
	});
	$( ".menu-services" ).click(function() {
		analytics.track("CLICKED_SERVICES", {});
	});
	$( ".menu-solutions" ).click(function() {
		analytics.track("CLICKED_SOLUTIONS", {});
	});
	$( ".menu-about-us" ).click(function() {
		analytics.track("CLICKED_ABOUT_US", {});
	});
	$( ".menu-blog" ).click(function() {
		analytics.track("CLICKED_BLOG", {});
	});
	$( ".menu-start-project-home" ).click(function() {
		analytics.track("CLICKED_START_PROJECT_FROM_HOME", {});
	});
	$( ".menu-start-project-services" ).click(function() {
		analytics.track("CLICKED_START_PROJECT_FROM_SERVICES", {});
	});
	$( ".menu-start-project-solutions" ).click(function() {
		analytics.track("CLICKED_START_PROJECT_FROM_SOLUTIONS", {});
	});
	$( ".menu-start-project-about-us" ).click(function() {
		analytics.track("CLICKED_START_PROJECT_FROM_ABOUT_US", {});
	});
	$( ".intercom-notification-channels-input" ).click(function() {
		alert('clicked submit button');
	});
});
