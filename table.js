function showHideData(columnClass) {
  let columnData = document.querySelectorAll("." + columnClass);
  columnData.forEach((data) => {
    if (data.style.color != "transparent") {
      data.style.color = "transparent";
    }
    else if (data.style.color == "transparent") {
      data.style.color = "black";
    }
  })
}
