function openView(viewId){

document.querySelectorAll(".view").forEach(v=>{
v.classList.remove("active")
})

document.getElementById(viewId).classList.add("active")

}
