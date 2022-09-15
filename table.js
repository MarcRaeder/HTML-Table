const border = document.querySelectorAll(".border");
const columns = document.querySelectorAll(".table-headerRow__body")
const table = document.querySelector(".table");

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

function dragstart(event, borderNumber) {
  const minWidth = 100;
  const mousestart = event.clientX;
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

  function mousemove(event) {
    var mouseend = event.clientX;
    var mouseDifference = mousestart - mouseend;
    var leftborder = leftColumnWidth < minWidth && event.clientX >= (previousColumsWidth + minWidth);
    var outOfBorder = event.clientX < (previousColumsWidth + minWidth) || event.clientX > (previousColumsWidth + leftColumnWidth + (rightColumnWidth - minWidth));
    var rightborder = rightColumnWidth < minWidth && event.clientX <= (previousColumsWidth + leftColumnWidth + minWidth);

    if (leftborder) {
      border[borderNum].style.left = `${mouseend}px`;
      leftColumn.style.width = `${leftColumnWidth + mouseDifference}px`;
      rightColumn.style.width = `${rightColumnWidth - mouseDifference}px`;
    }
    else if (rightborder) {
      border[borderNum].style.left = `${mouseend}px`;
      leftColumn.style.width = `${leftColumnWidth - mouseDifference}px`;
      rightColumn.style.width = `${rightColumnWidth + mouseDifference}px`;
    }
    else if (outOfBorder) {
      return false;
    }
    else {
      border[borderNum].style.left = `${mouseend}px`;
      leftColumn.style.width = `${leftColumnWidth - mouseDifference}px`;
      rightColumn.style.width = `${rightColumnWidth + mouseDifference}px`;
    }
  }

  document.addEventListener("mousemove", mousemove);
  document.addEventListener("mouseup", (event) => {
    document.removeEventListener("mousemove", mousemove)
  })
}
