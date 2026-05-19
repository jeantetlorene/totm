$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    const publication = $(this).closest("li");
    publication.find(".abstract.pub-hidden").toggleClass("open");
    publication.find(".award.pub-hidden.open").toggleClass("open");
    publication.find(".bibtex.pub-hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    const publication = $(this).closest("li");
    publication.find(".abstract.pub-hidden.open").toggleClass("open");
    publication.find(".award.pub-hidden").toggleClass("open");
    publication.find(".bibtex.pub-hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    const publication = $(this).closest("li");
    publication.find(".abstract.pub-hidden.open").toggleClass("open");
    publication.find(".award.pub-hidden.open").toggleClass("open");
    publication.find(".bibtex.pub-hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
