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
	$( ".clicked-lostbot-from-portfolio" ).click(function() {
		analytics.track("CLICKED_LOSTBOT_FROM_PORTFOLIO", {});
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

// Drift
!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('hnp3thc57t73');

// Drift Open Chat
// https://devdocs.drift.com/v1.2/docs/start-chat-with-any-link-or-button
(function() {
    /* Add this class to any elements you want to use to open Drift.
     *
     * Examples:
     * - <a class="drift-open-chat">Questions? We're here to help!</a>
     * - <button class="drift-open-chat">Chat now!</button>
     *
     * You can have any additional classes on those elements that you
     * would ilke.
     */
    var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
    /* http://youmightnotneedjquery.com/#ready */
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn();
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
      } else {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState != 'loading')
            fn();
        });
      }
    }
    /* http://youmightnotneedjquery.com/#each */
    function forEachElement(selector, fn) {
      var elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
    }
    function openSidebar(driftApi, event) {
      event.preventDefault();
      driftApi.sidebar.open();
      return false;
    }
    ready(function() {
      drift.on('ready', function(api) {
        var handleClick = openSidebar.bind(this, api)
        forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
          el.addEventListener('click', handleClick);
        });
      });
    });
  })();
