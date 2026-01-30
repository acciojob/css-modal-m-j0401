//your JS code here. If required.

let d_one=document.querySelector(".modal");
let btn=document.querySelector("#openModal");
let c_btn=document.querySelector(".close-modal")
btn.addEventListener("click",()=>{
	d_one.style.display="block";
	document.body.style.backgroundColor="darkgray";
});
c_btn.addEventListener("click",()=>{
	d_one.style.display="none";
	document.body.style.backgroundColor="white";
})
