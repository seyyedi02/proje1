(function () {
  let res_menu = document.getElementById("responsive_menu");
  let exit_btn_res_menu = document.getElementById("exit_responsive_menu");
  res_menu.onclick = function (ev) {
    ev.preventDefault();
    document.getElementById("header_responsive").style.display = "block";
    document.getElementById("container").style.display = "none";
  };
  exit_btn_res_menu.onclick = function (ev) {
    ev.preventDefault();
    document.getElementById("header_responsive").style.display = "none";
    document.getElementById("container").style.display = "block";
  };
})();
