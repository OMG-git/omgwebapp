// 検索機能
const searchInput = document.getElementById("search");
const appList = document.getElementById("app-list");

// オートコンプリートリスト
const autocompleteList = document.getElementById("autocomplete-list");

// オートコンプリート候補の取得
const autocompleteOptions = [
    "10秒間のクリック回数を測定するアプリ",
    "素数判定アプリ"
  ];
  
  // オートコンプリート機能
  searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
  
    // オートコンプリート候補をフィルタリングする
    const filteredOptions = autocompleteOptions.filter(option => option.toLowerCase().includes(searchTerm));
  
    // オートコンプリートリストに候補を表示する
    autocompleteList.innerHTML = "";
    for (let i = 0; i < filteredOptions.length; i++) {
      const option = filteredOptions[i];
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", function() {
        // オートコンプリート候補をクリックすると、アプリに移動する
        if (option === "10秒間のクリック回数を測定するアプリ") {
          window.location.href = `./clickchecker/clickchecker.html`;
        } else if (option === "素数判定アプリ") {
          window.location.href = `./sosuapp/sosuapp.html`;
        }
      });
      autocompleteList.appendChild(li);
    }
  
    // オートコンプリートリストを表示する
    if (filteredOptions.length > 0) {
      autocompleteList.style.display = "block";
    } else {
      autocompleteList.style.display = "none";
    }
  });