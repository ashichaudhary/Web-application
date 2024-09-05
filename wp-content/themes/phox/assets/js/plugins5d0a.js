/**********************

Author:  WHMCSdes
Template: Phox - WMHCS & HTML Web Hosting Theme
Version: 1.0
Author URI: whmcsdes.com

***************************/

/*global jQuery, var, $ */

(function ($) {
  "use strict";

  // Layout width
  $(".wide-layout").on("click", function () {
    $(".layout-width").css({
      width: "100%",
      margin: "0",
    });
  });

  $(".boxed-layout").on("click", function () {
    $(".layout-width").css({
      width: "1200px",
      margin: "50px auto",
    });
  });

  // Tooltip operator
  if (typeof window.bootstrap === "object") {
    $('[data-toggle="tooltip"]').tooltip();
  }

  var wHeight = window.innerHeight;
  //search bar middle alignment
  $("#wdes-fullscreen-searchform").css("top", wHeight / 2);
  //reform search bar
  jQuery(window).resize(function () {
    $("#wdes-fullscreen-searchform").css("top", wHeight / 2);
  });
  // Search
  $("#search-button").on("click", function () {
    $("div.wdes-fullscreen-search-overlay").addClass(
      "wdes-fullscreen-search-overlay-show"
    );
  });
  $("a.wdes-fullscreen-close").on("click", function () {
    $("div.wdes-fullscreen-search-overlay").removeClass(
      "wdes-fullscreen-search-overlay-show"
    );
  });

  // Loading Screen
  const loadingClass = $(".wdes-loading"),
    removeFLow = $("html,body").css("overflow", "auto");

  if (loadingClass.length === 1) {
    $(window).on("load", function () {
      loadingClass.fadeOut();
      removeFLow;
    });
  }

  /* ---------------------------------------------------------------------------
   * Chat Platforms
   * --------------------------------------------------------------------------- */

  //InterCom code snippet
  function intercomSnippet(intercomUser) {
    var w = window;
    var ic = w.Intercom;
    w.intercomSettings = intercomUser;

    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;
      var l = function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src =
          "https://widget.intercom.io/widget/" + w.intercomSettings.app_id;
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      };
      if (w.attachEvent) {
        w.attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    }
  }

  //Tawk code snippet
  function tawkSnippet(tawkUser) {
    var restSrc = "";
    if (tawkUser.chatLink.search("https://tawk.to/chat/") === 0) {
      restSrc = tawkUser.chatLink.split("https://tawk.to/chat/")[1];
    } else if (tawkUser.chatLink.search("/") > 0) {
      restSrc = tawkUser.chatLink;
    } else {
      restSrc = tawkUser.chatLink + "/default";
    }

    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/" + restSrc;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  }

  //Fire the interCom
  if (typeof intercomUser !== "undefined" && intercomUser.length != 0) {
    intercomSnippet(intercomUser);
  }

  //Fire the Twak
  if (typeof tawkUser !== "undefined" && tawkUser.length != 0) {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    tawkSnippet(tawkUser);
  }

  // BackToTop Button
  if ($("#wdes-back-to-top").length > 0) {
    const backToTopBtn = $("#wdes-back-to-top");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        backToTopBtn.addClass("show");
      } else {
        backToTopBtn.removeClass("show");
      }
    });
    backToTopBtn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  }
})(jQuery);
