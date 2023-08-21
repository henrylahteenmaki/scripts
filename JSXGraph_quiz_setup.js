function defineCSS() {
  let style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
        pre .jxgbox {
            border-style: none;
            background: none;
            border-radius: 0px;
            -webkit-border-radius: 0px;
        }
    `;
  document.getElementsByTagName("head")[0].appendChild(style);
}

function setJSXGraphDefaults(JXG) {
  window.lt = function (a, b) {
    return a < b;
  };
  window.gt = function (a, b) {
    return a > b;
  };
  window.leq = function (a, b) {
    return a <= b;
  };
  window.geq = function (a, b) {
    return a >= b;
  };
  window.and = function (a, b) {
    return a && b;
  };

  window.plotColours = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
  ];
  window.shadowGrey = "#7f7f7f";
  window.shadowGray = "#7f7f7f";
  window.dashAxis = 1;
  window.dashAsymp = 2;
  window.widthDynamic = 4;
  window.attrToAxis = { strokeWidth: 1, dash: 1, color: "#000" };
  window.attrAsymp = { strokeWidth: 1, dash: 2, color: "#000" };
  window.attrFixedPoint = {
    withLabel: false,
    size: 2,
    fixed: true,
    color: "#000",
    highlight: false,
  };
  window.attrHiddenPoint = {
    withLabel: false,
    size: 0,
    fixed: true,
    highlight: false,
  };
  window.quizBackground = "#f6faff";
  window.feedbackBackground = "#fcefdc";
  window.labelPointTop = { offset: [0, 15], anchorx: "middle" };
  window.labelPointBottom = { offset: [0, -15], anchorx: "middle" };
  window.labelPointAbove = { offset: [0, 15], anchorx: "middle" };
  window.labelPointBelow = { offset: [0, -15], anchorx: "middle" };
  window.labelPointLeft = {
    offset: [-8, 0],
    anchorx: "right",
    anchory: "middle",
  };
  window.labelPointRight = {
    offset: [8, 0],
    anchorx: "left",
    anchory: "middle",
  };
  window.labelLineOn = {
    cssstyle: `background-color: ${quizBackground};`,
    position: "middle",
    offset: [0, 0],
    anchorX: "middle",
    anchorY: "middle",
  };
  window.labelLineBeside = function (p1, p2, d) {
    if (d === undefined) {
      d = 12;
    }
    return {
      position: "middle",
      anchorX: "middle",
      anchorY: "middle",
      offset: function () {
        let dx = p1.X() - p2.X(),
          dy = p1.Y() - p2.Y();
        let l = Math.sqrt(dx * dx + dy * dy);
        dx /= l;
        dy /= l;
        return [-dy * d, dx * d];
      },
    };
  };
  window.plotArrowDefault = { type: 2, size: 5 };
  window.plotArrowSmall = { type: 2, size: 4 };
  JXG.Options.axis.highlight = false;
  JXG.Options.axis.lastArrow = { type: 2, size: 10 };
  JXG.Options.text.highlight = false;
  JXG.Options.line.highlight = false;
  if (JXG.Options.arrow !== undefined) {
    //STACK on Learn Moodle 3 uses an old JSXGraph, 0.99.7, which doesn't have this
    JXG.Options.arrow.touchLastPoint = true;
    JXG.Options.arrow.lastArrow = { type: 2, size: 5 };
  }
  JXG.Options.curve.highlight = false;
  JXG.Options.point.showInfoBox = false;
  JXG.Options.point.fillColor = "#8f0";
  JXG.Options.point.strokeColor = "#5a0";
  JXG.Options.point.highlightFillColor = "#f00";
  JXG.Options.point.highlightStrokeColor = "#f00";
  JXG.Options.curve.strokeWidth = 2;
  JXG.Options.line.strokeWidth = 2;
  JXG.Options.text.fontSize = 15;
  JXG.Options.text.parse = false;
  JXG.Options.label.parse = false;
  JXG.Options.board.showCopyright = false;
  JXG.Options.board.showNavigation = false;
}

function formatJSXGraphLatex(BOARDID) {
  if (MathJax && MathJax.Hub) {
    console.log("trying to queue mathjax on board id", BOARDID);
    document.querySelectorAll(`#${BOARDID} .nolink`).forEach(function (e, i) {
      e.outerHTML = "\\" + e.innerText;
    });
    MathJax.Hub.Queue([
      "Typeset",
      MathJax.Hub,
      document.getElementById(BOARDID),
    ]);
  } else {
    setTimeout(() => formatJSXGraphLatex(BOARDID), 500);
  }
}

(function () {
  if (window.setupDone === true) {
    return;
  }

  defineCSS();

  window.setupDone = true;
})();
