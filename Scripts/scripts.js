const menuNav = document.querySelector(".menu")
const menuCheck = document.querySelector("#checkbox-menu")

// menuNav.style.display = 'none'

menuCheck.addEventListener('change', function(){
    if(this.checked){
        menuNav.removeAttribute('style')
       console.log('sim')
    }
})