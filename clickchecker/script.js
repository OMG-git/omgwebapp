// 変数の宣言
var button = document.getElementById("button"); // ボタンの要素
var timer = document.getElementById("timer"); // 残り時間の要素
var count = document.getElementById("count"); // クリック回数の要素
var average = document.getElementById("average"); // 一秒間の平均回数の要素
var history = document.getElementById("history"); // クリック回数の履歴の要素
var table = document.getElementById("table"); // テーブルの要素
var time = 10; // 残り時間の初期値
var clicks = 0; // クリック回数の初期値
var interval; // タイマーのインターバル

// ボタンをクリックしたときの関数
function clickButton() {
  // クリック回数を増やす
  clicks++;
  // クリック回数を表示する
  count.textContent = "クリック回数: " + clicks;
  // 一秒間の平均回数を計算する
  var avg = clicks / (10 - time);
  // 一秒間の平均回数を表示する
  average.textContent = "一秒間の平均回数: " + avg.toFixed(2);
  // タイマーが動いていない場合
  if (!interval) {
    // タイマーを開始する
    startTimer();
  }
}

// タイマーを開始する関数
function startTimer() {
  // タイマーのインターバルを設定する
  interval = setInterval(updateTimer, 1000); // 1秒ごとにupdateTimer関数を実行する
}

// タイマーを更新する関数
function updateTimer() {
  // 残り時間を減らす
  time--;
  // 残り時間を表示する
  timer.textContent = "残り時間: " + time + "秒";
  // 残り時間が0になった場合
  if (time == 0) {
    // タイマーを停止する
    stopTimer();
  }
}

// タイマーを停止する関数
function stopTimer() {
  // タイマーのインターバルをクリアする
  clearInterval(interval);
  // タイマーのインターバルをリセットする
  interval = null;
  // ボタンを無効にする
  button.disabled = true;
  // クリック回数の履歴に追加する
  history.textContent += clicks + ", ";
  // テーブルに行を追加する
  addRow();
  // 3秒後にリセットする
  setTimeout(reset, 3000);
}

// テーブルに行を追加する関数
function addRow() {
  // 現在の日時を取得する
  var date = new Date();
  // 日時のフォーマットを整える
  var dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  // 一秒間の平均回数を計算する
  var avg = clicks / (10 - time);
  // テーブルに行を作成する
  var row = table.insertRow(-1);
  // 行にセルを作成する
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  // セルに値を設定する
  cell1.textContent = dateString;
  cell2.textContent = clicks;
  cell3.textContent = avg.toFixed(2);
}

// リセットする関数
function reset() {
  // 残り時間を初期値に戻す
  time = 10;
  // クリック回数を初期値に戻す
  clicks = 0;
  // 残り時間を表示する
  timer.textContent = "残り時間: " + time + "秒";
  // クリック回数を表示する
  count.textContent = "クリック回数: " + clicks;
  // 一秒間の平均回数を表示する
  average.textContent = "一秒間の平均回数: 0";
  // ボタンを有効にする
  button.disabled = false;
}
// 戻るボタンのイベントリスナーを追加
const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function() {
  // ホームページに戻る
  window.location.href = "../index.html";
});