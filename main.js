console.log("this is working");

const searchBar = document.getElementById('searchBar');

document.getElementById("menu").addEventListener('click', openMenu);
document.getElementById("menu2").addEventListener('click', openMenu2);
document.getElementById("menu3").addEventListener('click', openMenu3);
document.getElementById("menu4").addEventListener('click', openMenu4);
document.getElementById("menu5").addEventListener('click', openMenu5);
document.getElementById("menu6").addEventListener('click', openMenu6);
document.getElementById("menu7").addEventListener('click', openMenu7);
document.getElementById("menu8").addEventListener('click', openMenu8);

//Add event listner
function openMenu() {
    document.getElementById("dropdown").classList.toggle("active");
}
function openMenu2() {
    document.getElementById("dropdown2").classList.toggle("active");
}
function openMenu3() {
    document.getElementById("dropdown3").classList.toggle("active");
}
function openMenu4() {
    document.getElementById("dropdown4").classList.toggle("active");
}
function openMenu5() {
    document.getElementById("dropdown5").classList.toggle("active");
}
function openMenu6() {
    document.getElementById("dropdown6").classList.toggle("active");
}
function openMenu7() {
    document.getElementById("dropdown7").classList.toggle("active");
}
function openMenu8() {
    document.getElementById("dropdown8").classList.toggle("active");
}

searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value)
})



// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
   // if (!event.target.matches('.dropbtn')) {
     //   var dropdowns = document.getElementsByClassName("dropdown-content");
       // var i;
        // for (i = 0; i < dropdowns.length; i++) {
           // var openDropdown = dropdowns[i];
           // if (openDropdown.classList.contains('show')) {
              //  openDropdown.classList.remove('show');
            //}
       // }
  //  }
//}

