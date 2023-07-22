var markName = document.getElementById("bookmarkName");
var markURL = document.getElementById("bookmarkURL");

var bookMarkUrlList = [];

function addBookMark() {
  var bookMark = {
    namMark: markName.value,
    urlBook: markURL.value,
  };

  bookMarkUrlList.push(bookMark);
  bookMarkDisplay();
}

function bookMarkDisplay() {
  var trs = ``;
  for (var i = 0; i < bookMarkUrlList.length; i++) {
    trs += `
 <tr>
 <td>${i + 1}</td>
 <td>${bookMarkUrlList[i].namMark}</td>  
 <td><a class="btn btn-success" id="btn-visit" href="${
   bookMarkUrlList[i].urlBook
 }" target="_blank"><i class="fa-solid fa-eye pe-2"></i> Visit</a></td>
 <td><button class="btn btn-danger" onclick="delte(${i})"><i class="fa-solid fa-trash"></i>delete</button></td>  
 </tr>
 `;
  }
  document.getElementById("tableContent").innerHTML = trs;
}

function delte(index) {
  bookMarkUrlList.splice(index, 1);
  bookMarkDisplay();
}
