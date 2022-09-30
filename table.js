const border = document.querySelectorAll(".border");
const columns = document.querySelectorAll(".table__header-row-cell")
const table = document.querySelector(".table");

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

for (let i = 0; i < border.length; i++) {
  if (i == 0) {
    border[i].style.left = `${table.offsetLeft + columns[i].offsetWidth}px`;
  }
  else {
    border[i].style.left = `${border[i - 1].offsetLeft + columns[i].offsetWidth}px`;
  }
}

function resize() {
  for (let i = 0; i < border.length; i++) {
    if (i == 0) {
      border[i].style.left = `${table.offsetLeft + columns[i].offsetWidth}px`;
    }
    else {
      border[i].style.left = `${border[i - 1].offsetLeft + columns[i].offsetWidth}px`;
    }
  }
}

document.getElementsByTagName("BODY")[0].onresize = () => resize();

function dragStart(event, borderNumber) {
  const minWidth = 100;
  const mouseStart = event.clientX;
  var borderNum = borderNumber;
  var leftColumn = columns[borderNum];
  var leftColumnWidth = columns[borderNum].offsetWidth;
  var previousColumsWidth = 0;
  var rightColumn = columns[borderNum + 1];
  var rightColumnWidth = columns[borderNum + 1].offsetWidth;

  if (borderNumber > 0) {
    for (let i = 0; i < borderNumber; i++) {
      previousColumsWidth += columns[i].offsetWidth;
    }
  }

  function mouseMove(event) {
    var mouseEnd = event.clientX;
    var mouseDifference = mouseStart - mouseEnd;
    var leftBorder = leftColumnWidth < minWidth && event.clientX >= (previousColumsWidth + minWidth);
    var outOfBorder = event.clientX < (previousColumsWidth + minWidth) || event.clientX > (previousColumsWidth + leftColumnWidth + (rightColumnWidth - minWidth));
    var rightBorder = rightColumnWidth < minWidth && event.clientX <= (previousColumsWidth + leftColumnWidth + minWidth);

    if (leftBorder) {
      border[borderNum].style.left = `${mouseEnd}px`;
      leftColumn.style.width = `${leftColumnWidth + mouseDifference}px`;
      rightColumn.style.width = `${rightColumnWidth - mouseDifference}px`;
    }
    else if (rightBorder) {
      border[borderNum].style.left = `${mouseEnd}px`;
      leftColumn.style.width = `${leftColumnWidth - mouseDifference}px`;
      rightColumn.style.width = `${rightColumnWidth + mouseDifference}px`;
    }
    else if (outOfBorder) {
      return false;
    }
    else {
      border[borderNum].style.left = `${mouseEnd}px`;
      leftColumn.style.width = `${leftColumnWidth - mouseDifference}px`;
      rightColumn.style.width = `${rightColumnWidth + mouseDifference}px`;
    }
  }

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", (event) => {
    document.removeEventListener("mousemove", mouseMove)
  })
}
