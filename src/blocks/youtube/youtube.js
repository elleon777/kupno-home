import $ from "jquery";

function loadIframeYouTube(url, width, height) {
  $(this).html(
    '<iframe width="' +
      width +
      '" height="' +
      height +
      '" src="https://www.youtube.com/embed/' +
      url +
      '?autoplay=1&loop=1&rel=0&wmode=transparent&mute=1" frameborder="0" allowfullscreen wmode="Opaque"></iframe>'
  );
}

$(function () {
  $(".youtube").each(async function () {
    const youtubeUrl =
      $(this)
        .attr("data-url")
        .match(/(?<=\?v=)[^&$]+/g) ||
      $(this)
        .attr("data-url")
        .match(/(?<=embed\/).+/g);
    $(this)
      .append("<img src=https://img.youtube.com/vi/" + youtubeUrl + "/0.jpg>")
      .append("<span class='play'></span>");
    await new Promise((resolve, reject) => {
      const img = $(this).find("img")[0];
      img.onload = () => resolve();
    });
    $(this).on("click", function () {
      loadIframeYouTube.call(
        this,
        youtubeUrl,
        $(this).width(),
        $(this).height()
      );
    });
  });
});
