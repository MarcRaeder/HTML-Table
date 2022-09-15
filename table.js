function ShowHide(columnClass) {
  let columnData = document.querySelectorAll("." + columnClass);
  CheckIfShowOrHide(columnData);
}

function CheckIfShowOrHide(columnData) {
  columnData.forEach((data) => {
    if (data.style.color != "transparent") {
      data.style.color = "transparent";
    }
    else if (data.style.color == "transparent") {
      data.style.color = "black";
    }
  })
}
