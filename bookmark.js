const tuggleBtn = document.querySelector(".menu");
const btn = tuggleBtn.querySelector("i");
const dropmenu = document.querySelector(".dropdown_menu");

tuggleBtn.onclick = function () {
  dropmenu.classList.toggle("open");
  const isOpen = dropmenu.classList.contains("open");
  btn.classList.toggle("fa-bars", !isOpen);
  btn.classList.toggle("fa-x", isOpen);
};

const heading = document.getElementById("bookmark_heading");
const subHeading = document.getElementById("bk_subheading");
const dymanicimage = document.querySelector(".dynamicimage");
const redline1 = document.querySelector(".red_hr1")
const redline2 = document.querySelector(".red_hr2")
const redline3 = document.querySelector(".red_hr3")



function simple() {
  dymanicimage.classList.add("dynamicimage")
  dymanicimage.classList.remove("dynamicimage1")
  dymanicimage.classList.remove("dynamicimage2")
  heading.innerHTML = "Bookmark in one click";
  subHeading.innerHTML =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    redline2.classList.remove('secondadd')
    redline3.classList.remove('thirdadd')
    redline1.classList.add("firstadd1")
}
function speedy() {
  dymanicimage.classList.add("dynamicimage1")
  dymanicimage.classList.remove("dynamicimage2")
  dymanicimage.classList.remove("dynamicimage")
  heading.innerHTML = "Intellient search";
  subHeading.innerHTML =
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    redline3.classList.remove('thirdadd')
    redline2.classList.add('secondadd')
    redline1.classList.add('firstadd')
    redline1.classList.remove("firstadd1")

}
function easy() {
  dymanicimage.classList.add("dynamicimage2")
  dymanicimage.classList.remove("dynamicimage")
  dymanicimage.classList.remove("dynamicimage1")
  redline3.classList.remove('thirdadd')

  heading.innerHTML = " Share your bookmarks";
  subHeading.innerHTML =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    redline3.classList.add('thirdadd')
    redline1.classList.add('firstadd')
    redline2.classList.remove('secondadd')
    redline1.classList.remove("firstadd1")
}



const faqflex = document.querySelector(".faq_flex");
const icon = faqflex.querySelector("i")
const faqflex2 = document.querySelector(".faq_flex2");
const icon2 = faqflex2.querySelector("i")
const faqflex3 = document.querySelector(".faq_flex3");
const icon3 = faqflex3.querySelector("i")
const faqflex4 = document.querySelector(".faq_flex4");
const icon4 = faqflex4.querySelector("i")
const arrow1 = document.querySelector(".lorem_faq");
const arrow2 = document.querySelector(".lorem_faq2")
const arrow3 = document.querySelector(".lorem_faq3")
const arrow4 = document.querySelector(".lorem_faq4")


function arrow() {
  arrow1.classList.toggle("faq");
  const isOpen = arrow1.classList.contains("faq");
  icon.classList.toggle("fa-chevron-up", !isOpen);
  icon.classList.toggle("fa-chevron-down", isOpen);
};

function arrowTwo() {
  arrow2.classList.toggle("faq2");
  const isOpen2 = arrow2.classList.contains("faq2");
  icon2.classList.toggle("fa-chevron-up", !isOpen2);
  icon2.classList.toggle("fa-chevron-down", isOpen2);
}

function arrowthree(){
  arrow3.classList.toggle("faq3");
  const isOpen3 = arrow3.classList.contains("faq3");
 icon3.classList.toggle("fa-chevron-up", !isOpen3);
  icon3.classList.toggle("fa-chevron-down", isOpen3);
}

function arrowfour(){
  arrow4.classList.toggle("faq4");
  const isOpen4 = arrow4.classList.contains("faq4");
  icon4.classList.toggle("fa-chevron-up", !isOpen4);
  icon4.classList.toggle("fa-chevron-down", isOpen4);
}



var button = document.getElementById("contact_btn");
var errormes = document.querySelector(".whoops")
var img = document.querySelector(".errorimage")


button.addEventListener("click", function (e) {
  e.preventDefault()
  var valid = document.getElementById("validemail").value

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valid)) {
  errormes.innerHTML = "Sign up Sucessful"
  // errormes.classList.add("whoops")
  return true;
} else {
  errormes.innerHTML = "Sign up not Sucessful"
  img.classList.add("show")

  // errormes.classList.add("wooerroes")
  return false;
}
})
  
