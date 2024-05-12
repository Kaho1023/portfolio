"use strict";
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

$(window).on("load", function () {
  $("body").removeClass("fadeout");
});

$(function () {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on("click", function (e) {
    e.preventDefault(); // ナビゲートをキャンセル
    var url = $(this).attr("href"); // 遷移先のURLを取得
    if (url && url !== "") {
      $("body").addClass("fadeout"); // bodyに class="fadeout"を挿入
      setTimeout(function () {
        window.location.href = url; // 取得したURLに遷移
      }, 800); // 0.8秒後に遷移
    }
    return false;
  });
});

// nav-barクリックで×にする

// $(".openbtn").click(function () {
//   //ボタンがクリックされたら
//   $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
//   $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
// });

// $("#g-nav a").click(function () {
//   //ナビゲーションのリンクがクリックされたら
//   $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
//   $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
// });

$(document).ready(function () {
  $(".openbtn").click(function (event) {
    event.stopPropagation(); // イベントの伝播を停止
    $(this).toggleClass("active");
    $("#g-nav").toggleClass("panelactive");
  });

  $("#g-nav").click(function (event) {
    event.stopPropagation(); // イベントの伝播を停止
  });

  // ウィンドウ全体にクリックイベントをリッスン
  $(document).click(function () {
    $(".openbtn").removeClass("active");
    $("#g-nav").removeClass("panelactive");
  });

  // ナビゲーション内のリンクがクリックされた時にナビゲーションが閉じるのを防ぐ
  $("#g-nav a").click(function (event) {
    event.stopPropagation(); // イベントの伝播を停止
  });
});
