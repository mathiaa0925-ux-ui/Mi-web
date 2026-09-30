// Magnetic button effect: elements with the .btn-magnetic class get pulled
// toward the cursor while hovered. No CSS transition during mousemove so
// the movement tracks the cursor directly instead of trailing behind it;
// a springy transition is added only for the release/reset.
(function () {
  function initMagnetic(selector, strength) {
    strength = strength || 0.35;
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.transition = "transform 0.15s ease-out";
        el.style.transform = "translate(" + x * strength + "px, " + y * strength + "px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
        el.style.transform = "translate(0px, 0px)";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMagnetic(".btn-magnetic");
  });
})();
