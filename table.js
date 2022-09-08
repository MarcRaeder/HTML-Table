function ShowHide(title) {

  if (title == 1) {
    let title_data = document.querySelectorAll(".table-contentRow__name");
    CheckIfShowOrHide(title_data);
  }

  else if (title == 2) {
    let title_data = document.querySelectorAll(".table-contentRow__age");
    CheckIfShowOrHide(title_data);
  }
  else if (title == 3) {
    let title_data = document.querySelectorAll(".table-contentRow__country");
    CheckIfShowOrHide(title_data);
  }
  else if (title == 4) {
    let title_data = document.querySelectorAll(".table-contentRow__color");
    CheckIfShowOrHide(title_data);
  }
}

function CheckIfShowOrHide(title_data) {
  title_data.forEach((data) => {
    if (data.style.color != "transparent") {
      data.style.color = "transparent";
    }
    else if (data.style.color == "transparent") {
      data.style.color = "black";
    }
  })
}
