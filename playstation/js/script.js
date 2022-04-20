const menuList = document.getElementById("menu-list")
    menuList.style.maxHeight = "0px"
let image = document.getElementById("menu-icon")

    function showMenu(){
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "120px"
    
        }else{
            menuList.style.maxHeight = "0px"
        }
    }





