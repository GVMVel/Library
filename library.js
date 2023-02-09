// let button1 = document.getElementsByClassName("button2");
// let butt = document.getElementsByClassName("click1");
// let input1 = document.getElementById("bname").value;
// let input2 = document.getElementById("author").value;
// console.log(input1);
// console.log(input2);
// button1.addEventListener("click",(event)=>{
    function addrow(){
      let input1 = document.getElementById("bname").value;
      let input2 = document.getElementById("author").value;
    
      console.log(input1);
      console.log(input2);
      var table = document.getElementById("show");
      var row = table.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerText = input1;
      cell2.innerHTML = input2;
      if ((input1 && input2)=="") {
        table.deleteRow(2);
      }
// button1.append(table);
// event.preventDefault();
};
function click12() {
  let uname = document.getElementsByClassName("input4").value;
  let pwd = document.getElementsByClassName("input41").value;
  if ((uname &&pwd) ==" ") {
    alert("Please Enter your name and password")
  }
};