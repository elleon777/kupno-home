import $ from "jquery";
import debounce from "lodash.debounce";

const dataMap = [
  {
    id: 1,
    lgbs: "Шахунья",
    lgbs_designated: [2, 3],
    specialization: "Социальная",
  },
  {
    id: 2,
    lgbs: "Тоншаево",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 3,
    lgbs: "Ветлуга",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 4,
    lgbs: "Урень",
    lgbs_designated: [32, 33],
    specialization: "Кадры",
  },
  {
    id: 5,
    lgbs: "Семенов",
    lgbs_designated: [43, 44],
    specialization: "Народные промыслы",
  },
  {
    id: 6,
    lgbs: "Воскресенское",
    lgbs_designated: [50],
    specialization: "Туризм",
  },
  {
    id: 7,
    lgbs: "Городец",
    lgbs_designated: [28],
    specialization: "Сельское хозяйство и предпринимательство",
  },
  {
    id: 8,
    lgbs: "Балахна",
    lgbs_designated: [49],
    specialization: "Муниципальное управление",
  },
  {
    id: 9,
    lgbs: "Бор",
    lgbs_designated: [],
    specialization: "Предпринимательство",
  },
  {
    id: 10,
    lgbs: "Лысково",
    lgbs_designated: [38, 39],
    specialization: "Экономика",
  },
  {
    id: 11,
    lgbs: "Княгинино",
    lgbs_designated: [47, 48],
    specialization: "Демография",
  },
  {
    id: 12,
    lgbs: "Сергач",
    lgbs_designated: [40, 41, 42],
    specialization: "Образование",
  },
  {
    id: 13,
    lgbs: "Перевоз",
    lgbs_designated: [45, 46],
    specialization: "Экология",
  },
  {
    id: 14,
    lgbs: "Б. Болдино",
    lgbs_designated: [34, 35, 36, 37],
    specialization: "Культурное наследие",
  },
  {
    id: 15,
    lgbs: "Арзамас",
    lgbs_designated: [25, 26, 27],
    specialization: "Муниципальное управление",
  },
  {
    id: 16,
    lgbs: "Павлово",
    lgbs_designated: [22, 23, 24],
    specialization: "Предпринимательство",
  },
  {
    id: 17,
    lgbs: "Нижний Новгород",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 18,
    lgbs: "Дзержинск",
    lgbs_designated: [31],
    specialization: "Финансы",
  },
  {
    id: 19,
    lgbs: "Кстово",
    lgbs_designated: [],
    specialization: "Благоустройство и ЖКХ",
  },
  {
    id: 20,
    lgbs: "Выкса",
    lgbs_designated: [29, 21, 30],
    specialization: "Муниципальное управление",
  },
  {
    id: 21,
    lgbs: "Вознесенское",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 22,
    lgbs: "Богородск",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 23,
    lgbs: "Сосновое",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 24,
    lgbs: "Вача",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 25,
    lgbs: "Ардатов",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 26,
    lgbs: "Дивеево",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 27,
    lgbs: "Шатки",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 28,
    lgbs: "Сокольское",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 29,
    lgbs: "Кулебаки",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 30,
    lgbs: "Навашино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 31,
    lgbs: "Володарск",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 32,
    lgbs: "Тонкино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 33,
    lgbs: "Шаранга",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 34,
    lgbs: "Первомайск",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 35,
    lgbs: "Лукоянов",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 36,
    lgbs: "Починки",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 37,
    lgbs: "Гагино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 38,
    lgbs: "Спасское",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 39,
    lgbs: "Воротынец",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 40,
    lgbs: "Пильна",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 41,
    lgbs: "Сеченово",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 42,
    lgbs: "Уразовка",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 43,
    lgbs: "Ковернино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 44,
    lgbs: "Варнавино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 45,
    lgbs: "Д. Константиново",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 46,
    lgbs: "Вад",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 47,
    lgbs: "Б. Мурашкино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 48,
    lgbs: "Бутурлино",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 49,
    lgbs: "Чкаловск",
    lgbs_designated: [],
    specialization: "",
  },
  {
    id: 50,
    lgbs: "Красные Баки",
    lgbs_designated: [],
    specialization: "",
  },
];

$(function () {
  function createSVGLine({ x1, y1, x2, y2 }) {
    const newLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    newLine.classList.add("created_line");
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "#D48055");
    newLine.setAttribute("stroke-width", "2");
    return newLine;
  }
  function createEventsOnMap() {
    dataMap.forEach((mapItem) => {
      if (
        mapItem.lgbs_designated.length === 0 &&
        mapItem.specialization.length === 0
      ) {
        return;
      }
      $(`.main-map__content g[id="${mapItem.id}"]`).css("cursor", "pointer");
    });
    $(".main-map__content g[style='cursor: pointer;']").on(
      "mouseenter",
      function () {
        const currentElem = $(this);
        const elemId = Number(currentElem.attr("id"));
        const mapItem = dataMap.find((item) => item.id === elemId);
        const currentCoords = currentElem[0].getBBox();

        if ($(this).is(".active")) {
          return;
        }
        clearMapContent();
        $(this).addClass("active");
        mapItem.lgbs_designated.forEach((id) => {
          const childElem = $(`.main-map__content g[id="${id}"]`);
          const childCoords = childElem[0].getBBox();
          const attrs = {
            x1: currentCoords.x + currentCoords.width / 2,
            y1: currentCoords.y + currentCoords.height / 2,
            x2: childCoords.x + childCoords.width / 2,
            y2: childCoords.y + childCoords.height / 2,
          };
          const newLine = createSVGLine(attrs);
          $(this).closest("svg").prepend(newLine);
          childElem.addClass("active");

        });
        renderPopupOnMap(elemId);
      }
    );

    $(".main-map__content g[style='cursor: pointer;']").on(
      "mouseleave",
      function () {
        clearMapContent();
        removePopupOnMap();
      }
    );

    $(document).on("click", function (e) {
      //main-map__item
      const isClickMapListItem =
        !$(e.target).closest(".main-map__item").is(".main-map__item") ||
        !$(e.target).is(".main-map__item");
      console.log($(e.target).closest(".main-map__item").is(".main-map__item"));
      if (isClickMapListItem) {
        return;
      }
      if (!$(e.target).closest("g.active").is("g.active")) {
        $(".main-map__content .active").removeClass("active");
        $(".created_line").remove();
      }
    });
  }
  function clearMapContent() {
        $(".created_line").remove();
        $(".main-map__content .active").removeClass("active");
  }
  function mapListItem({ id, lgbs, lgbs_designated, specialization }) {
    if (lgbs_designated.length === 0) {
      return "";
    }
    const lgbsDesignated = lgbs_designated.map(
      (id) => dataMap.find((item) => id === item.id).lgbs
    );
    const city = [lgbs, ...lgbsDesignated].join(", ");
    return `
      <div id="${id}" class="main-map__item">
        <div class="main-map__title">${specialization}</div>
        <div class="main-map__city">
        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>
        </svg>
        <span>${city}</span> 
        </div>
      </div>
    `;
  }
  function renderMapList(searchValue) {
    cleanMapList();
    let mapList = "";

    dataMap
      .filter(({ specialization, lgbs, lgbs_designated }) => {
        if (!searchValue) {
          return true;
        }
        const lgbsDesignated = lgbs_designated.map(
          (id) => dataMap.find((item) => id === item.id).lgbs
        );
        const cites = [lgbs, ...lgbsDesignated].join(", ");
        return (
          specialization.toLowerCase().includes(searchValue.toLowerCase()) ||
          cites.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
      .forEach((item) => (mapList += mapListItem(item)));
    $(".main-map__wrapper").append(mapList);
    onClickMapListItem();
  }
  function cleanMapList() {
    $(".main-map__wrapper").children().remove();
  }
  function onClickMapListItem() {
    $(".main-map__item").on("click", function () {
      const id = Number($(this).attr("id"));
      $(`g[id="${id}"]`).trigger("mouseenter");
      renderPopupOnMap(id);
    });
  }
  function renderPopupOnMap(itemId) {
    removePopupOnMap();
    const dataPopup = dataMap.find(({ id }) => id === itemId);
    const popupHtml = mapListItem(dataPopup);
    $(".main-map__img").append(popupHtml);
    const dotOnMap = $(`.main-map__img svg g[id="${itemId}"]`);
    const popup = $(".main-map__img .main-map__item");
    const parentPos = $(`.main-map__img`)[0].getBoundingClientRect();
    const popupPos = dotOnMap[0].getBoundingClientRect();
    const coords = {
      top: popupPos.top - parentPos.top - popup.height() - 32,
      left: popupPos.left - parentPos.left - popup.width() / 2,
    };

    popup.css(coords);
    popup.css("opacity", 1);
  }
  function removePopupOnMap() {
    $(".main-map__img .main-map__item").remove();
  }
  const debounceRenderMapList = debounce(renderMapList, 300);
  $(".main-map__search > input").on("keyup", function (e) {
    debounceRenderMapList(e.target.value);
  });

  createEventsOnMap();
  renderMapList();
});
