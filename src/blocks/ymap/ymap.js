import $ from "jquery";

var spinner = $(".ymap").children(".loader");

var check_if_load = false;
var myMapTemp, myPlacemarkTemp;

function init() {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.730138, 37.594238],
    zoom: 7,
    controls: ["zoomControl", "fullscreenControl"],
  });
  var myPlacemarkTemp = new ymaps.Placemark(
    [55.730138, 37.594238],
    {
      balloonContent: "Здесь может быть ваш адрес",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "img/map-marker.png",
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -50],
    }
  );
  myMapTemp.geoObjects.add(myPlacemarkTemp);
  var layer = myMapTemp.layers.get(0).get(0);
  waitForTilesLoad(layer).then(function () {
    spinner.removeClass("is-active");
  });
}

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer),
      readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function () {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
        layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback) {
  var script = document.createElement("script");

  if (script.readyState) {
    // IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Другие браузеры
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

var ymap = function () {
  $(".ymap").on("mouseenter", function () {
    if (!check_if_load) {
      check_if_load = true;

      spinner.addClass("is-active");

      loadScript(
        "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1",
        function () {
          ymaps.load(init);
        }
      );
    }
  });
};

$(function () {
  ymap();
});
