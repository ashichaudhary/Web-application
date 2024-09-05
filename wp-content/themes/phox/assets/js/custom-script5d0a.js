/**********************

 Author:  WHMCSdes
 Template: Phox - WMHCS & HTML Web Hosting Theme
 Version: 1.0
 Author URI: whmcsdes.com

 ***************************/
(function ($) {
  "use strict";

  function plugins() {
    var iframe = jQuery("#elementor-preview-iframe").contents();

    // Tooltip operator
    if (typeof window.bootstrap === "object") {
      iframe.find('[data-toggle="tooltip"]').tooltip();
    }

    // iframe.find('#featuresTab li:last-child a').tab('show')
  }

  function wdes_google_maps($el) {
    var wrapper = $el;

    var mapOptions = {
      zoom: wrapper.data("zoom"),

      center: new google.maps.LatLng(wrapper.data("lat"), wrapper.data("ing")), // New York

      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
      ],
    };

    var map = new google.maps.Map($el[0], mapOptions);

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        wrapper.data("lat"),
        wrapper.data("ing")
      ),
      map: map,
      title: "Phox",
    });
  }

  function wdes_data_center(el) {
    var targetSVG =
      "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    var planeSVG =
      "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

    var worldMap = AmCharts.makeChart("chartdiv", {
      type: "map",
      theme: "light",

      projection: "winkel3",
      dataProvider: {
        map: "worldLow",

        lines: [
          // Active Lines
          {
            id: "line1",
            arc: -0.85,
            alpha: 0.3,
            latitudes: [
              el.data("lat1"),
              el.data("lat2"),
              el.data("lat3"),
              el.data("lat4"),
            ],
            longitudes: [
              el.data("long1"),
              el.data("long2"),
              el.data("long3"),
              el.data("long4"),
            ],
          },
          // Lines Shadow
          {
            id: "line2",
            alpha: 0,
            color: "#000000",
            latitudes: [
              el.data("lat1"),
              el.data("lat2"),
              el.data("lat3"),
              el.data("lat4"),
            ],
            longitudes: [
              el.data("long1"),
              el.data("long2"),
              el.data("long3"),
              el.data("long4"),
            ],
          },
        ],
        // Locations
        images: [
          {
            svgPath: targetSVG,
            title: el.data("name1"),
            latitude: el.data("lat1"),
            longitude: el.data("long1"),
          },
          {
            svgPath: targetSVG,
            title: el.data("name2"),
            latitude: el.data("lat2"),
            longitude: el.data("long2"),
          },
          {
            svgPath: targetSVG,
            title: el.data("name3"),
            latitude: el.data("lat3"),
            longitude: el.data("long3"),
          },
          {
            svgPath: targetSVG,
            title: el.data("name4"),
            latitude: el.data("lat4"),
            longitude: el.data("long4"),
          },
          // Plan Shadow Style
          {
            svgPath: planeSVG,
            positionOnLine: 0,
            color: "#000000",
            alpha: 0.1,
            animateAlongLine: true,
            lineId: "line2",
            flipDirection: true,
            loop: true,
            scale: 0.03,
            positionScale: 1.3,
          },
          // Plane Style
          {
            svgPath: planeSVG,
            positionOnLine: 0,
            color: "#C51E3A",
            animateAlongLine: true,
            lineId: "line1",
            flipDirection: true,
            loop: true,
            scale: 0.03,
            positionScale: 1.8,
          },
        ],
      },

      // Maps Background
      areasSettings: {
        unlistedAreasColor: "#e7e7e7",
      },

      // Location Style
      imagesSettings: {
        color: "#C51E3A",
        rollOverColor: "#C51E3A",
        selectedColor: "#C51E3A",
        pauseDuration: 0.2,
        animationDuration: 4,
        adjustAnimationSpeed: true,
      },

      // Lines
      linesSettings: {
        color: "#C51E3A",
        alpha: 0.4,
      },

      export: {
        enabled: true,
      },
    });
  }
  // Mega Menu
  jQuery(".wdes-menu-navbar ul li.wdes-dropdown").on("click", function (e) {
    jQuery(this).find(".dropdown-content:first").toggleClass("display-menu");
    e.stopPropagation();
  });
  jQuery(".wdes-menu-navbar .mega-w li.heading a").append(
    "<span class='divider-heading-mega'></span>"
  );

  // Toggle Mobile Bars
  jQuery(document).ready(function () {
    jQuery(".wdes-btn-mob-toggle").on("click", function (e) {
      e.preventDefault();
      jQuery(this).toggleClass("wdes-menu-is-active");
      jQuery("html").toggleClass("overflow");
      // Padding
      jQuery(".menu-d-mob").toggleClass("menu-toggle-op");
    });
  });

  // Responsive Mega Menu Close Button Apperance
  jQuery(document).ready(function () {
    if (jQuery("#wpadminbar").length) {
      jQuery("body").append(
        '<style type="text/css">@media screen and (max-width: 960px){ .wdes-menu-navbar ul.default-drop {padding-top: 90px} .toggle-menu-close{top: 60px;} }</style>'
      );
    }
  });

  // Close Mega Menu in case link start with # [Mobile]
  jQuery(".wdes-btn-mob-toggle").on("click", function (e) {
    let menuItemsList = $(".wdes-menu-navbar ul.default-drop li");
    menuItemsList.each(function (i, li) {
      let item = $(li);
      let itemLink = item.find("a")[0].attributes[0].value;
      if (itemLink.startsWith("#") && itemLink.length > 1) {
        item.find("a").on("click", function () {
          $(".wdes-btn-mob-toggle").trigger("click");
        });
      }
    });
  });

  // Sticky Header
  jQuery(window).scroll(function () {
    var header = document.getElementById("Top_bar");
    var checkSticky = document.getElementsByClassName(
      "alternate-sticky-header"
    );
    if (checkSticky.length === 1) {
      if (jQuery(window).scrollTop() >= 300) {
        jQuery("#Top_bar").addClass("sticky-header");
      } else {
        jQuery("#Top_bar").removeClass("sticky-header");
      }
    }
  });

  $(window).load(function () {
    plugins();
  });

  $(document).ajaxComplete(function () {
    plugins();
  });

  jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/wdes-map-widget.default",
      function ($s) {
        var layout = $s.find(".wdes-container-map").data("layout");

        if (layout === "map") {
          if (typeof google !== "undefined") {
            var map = wdes_google_maps($s.find("#map"));
          }
        } else {
          var map_data = wdes_data_center($s.find(".datacenter-map"));
        }
      }
    );
  });
})(jQuery);
