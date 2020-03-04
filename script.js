const grayscale = document.querySelector("#grayscale")
const contrast = document.querySelector("#contrast")
const brightness = document.querySelector("#brightness")
const sepia = document.querySelector("#sepia")
const saturate = document.querySelector("#saturate")
const reset = document.querySelector("#reset")
const img = document.querySelector("img")
const imgUrl =document.querySelector("#img-url")

grayscale.addEventListener("input", changeFilter)
contrast.addEventListener("input", changeFilter)
brightness.addEventListener("input", changeFilter)
sepia.addEventListener("input", changeFilter)
saturate.addEventListener("input", changeFilter)

reset.addEventListener("click", defaultFilterFunc)
imgUrl.addEventListener("change", changePhoto)




const defaultFilter={
    grayscale:0,
    contrast:100,
    brightness:100,
    sepia:0,
    saturate:100
}

function changeFilter(){
    
    reset.disabled = false

   img.style.filter =`
   grayscale(${grayscale.value}%)
   contrast(${contrast.value}%)
   brightness(${brightness.value}%)
   sepia(${sepia.value}%)
   saturate(${saturate.value}%)
   `
}



function defaultFilterFunc(){

    img.style.filter =`
   grayscale(${defaultFilter.grayscale}%)
   contrast(${defaultFilter.contrast}%)
   brightness(${defaultFilter.brightness}%)
   sepia(${defaultFilter.sepia}%)
   saturate(${defaultFilter.saturate}%)
   `
    
grayscale.value=defaultFilter.grayscale
contrast.value=defaultFilter.contrast
brightness.value=defaultFilter.brightness
sepia.value=defaultFilter.sepia
saturate.value=defaultFilter.saturate

reset.disabled = true

}


function changePhoto(){
    const newImgUrl = imgUrl.value
    img.setAttribute("src", newImgUrl)
}