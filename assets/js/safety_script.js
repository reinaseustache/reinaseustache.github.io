
//Adults
var arrAdults = ["https://www.youtube.com/embed/hxHoQAedqbQ","https://www.youtube.com/embed/kYIObVAeVTo","https://www.youtube.com/embed/0CGWhgBhUBE","https://www.youtube.com/embed/nhif-kPDBME","https://www.youtube.com/embed/nhif-kPDBME",
"https://www.youtube.com/embed/S78s_DAh0Xc","https://www.youtube.com/embed/PRibJKhcVuQ","https://www.youtube.com/embed/FPWzUO-P7GI","https://www.youtube.com/embed/qPoptbtBjkg","https://www.youtube.com/embed/IM4SvY_1d4k",
"https://www.youtube.com/embed/fdbwTNNsF1E","https://www.youtube.com/embed/gQYH7tIhLYM","https://www.youtube.com/embed/Rd1QTxxVCDU","https://www.youtube.com/embed/3PmVJQUCm4E","https://www.youtube.com/embed/Dpe8aoMtfXU",
"https://www.youtube.com/embed/wHieprExQ7A"];

//Children
var arrChildren = ["https://www.youtube.com/embed/TSkEwdzGbCA","https://www.youtube.com/embed/IO8C3q55d1o","https://www.youtube.com/embed/i-wWz_SUyb4","https://www.youtube.com/embed/uH1oGgNaA3Q",
"https://www.youtube.com/embed/arN3ZfxcNf4","https://www.youtube.com/embed/8z9BsKpCJY0","https://www.youtube.com/embed/GoXxmzKdick","https://www.youtube.com/embed/xc0BD0gZMik",
"https://www.youtube.com/embed/vTCMYddbIPs","https://www.youtube.com/embed/FqaXBtSaiUE","https://www.youtube.com/embed/UV3TP-LiIKo","https://www.youtube.com/embed/iacXPXq01AI",
"https://www.youtube.com/embed/mDRKT4JrBAM","https://www.youtube.com/embed/u3Dl9pTBFfo","https://www.youtube.com/embed/6lJQ123_4e8","https://www.youtube.com/embed/lnP-uMn6q_U"];

//Pets
var arrPets  = ["https://www.youtube.com/embed/KHMYC5Comio","https://www.youtube.com/embed/igSLQJRZ4hk",
"https://www.youtube.com/embed/vMOFdWJ1lb4","https://www.youtube.com/embed/c5xTHsusxhw", "https://www.youtube.com/embed/I2wuPF3i1a0","https://www.youtube.com/embed/3Aa79GsOMKA",
"https://www.youtube.com/embed/Epue-xDd3Rk","https://www.youtube.com/embed/SgcpaZUdNPY","https://www.youtube.com/embed/ZmVI2xvMd3w","https://www.youtube.com/embed/dT304c55DV4",
"https://www.youtube.com/embed/ZHvnpm0iDWc","https://www.youtube.com/embed/V4jw47bKQfw","https://www.youtube.com/embed/y-rVeeYGj38",
"https://www.youtube.com/embed/3DUjMfhanpI","https://www.youtube.com/embed/N2nErmXzVSw","https://www.youtube.com/embed/YP4P89h0POY"]

//If a link is clicked then the links will be set with the appropriate array
function loadAdultsSrc()
{
  //Make the adult one active
  // document.getElementById("children_nav").removeClass("active");
  // document.getElementById("pets_nav").removeClass("active");
// var element =  document.getElementById("adult_nav");
// element.classList.add("active");
var i;
var id;
var iFrame;
document.getElementById('selected_video').src =  arrAdults[0];
for( i = 0;i< arrAdults.length;i++)
{
   id ='vid_' + i
  //Change the source
 document.getElementById(id).src= arrAdults[i];
// iframe.contentWindow.location.reload(true);

}
}

function loadChildrenSrc()
{
  //Make the child one active
  // document.getElementById("adult_nav").removeClass("active");
  // document.getElementById("pets_nav").removeClass("active");
  // var element =  document.getElementById("children_nav");
  // element.classList.add("active");
  var i;
  var id;
  var iFrame;

  document.getElementById('selected_video').src =  arrChildren[0];
  for( i = 0;i< arrChildren.length;i++)
  {
    id ='vid_' + i
    //Change the source
   document.getElementById(id).src = arrChildren[i];
  // iframe.contentWindow.location.reload(true);
  }
}



function loadPetSrc()
{
  //Make the Pet one active
  // document.getElementById("adult_nav").removeClass("active");
  // // document.getElementById("children_nav").removeClass("active");
  // document.getElementById("pets_nav").addClass("active");
  //Pets

document.getElementById('selected_video').src =  arrPets[0];

  var i;
  var id;
  var iFrame;
  for( i = 0;i< arrPets.length; i++)
  {
    id ='vid_' + i
    //Change the source
  iFrame = document.getElementById(id).src = arrPets[i];
  // iFrame.id = "vid_" + i;
  // if((i != 15)||(i !=6))
  // {
  //   iFrame.width= "560";
  //   iFrame.Height = "315";
  // }else {
  //   iFrame.width= "420";
  //   iFrame.Height = "315";
  // }
  // //iFrame.contentWindow.location.reload(true);
  // iFrame.allowfullscreen;
  // }
}
}


function setSelectedVideo(id)
{
  var iFrameId = id.slice(0, -1);//Remove last character
  console.log("Id" + iFrameId);
  var src = document.getElementById(iFrameId).src;
  document.getElementById('selected_video').src =  src;
}
