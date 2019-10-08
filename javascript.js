window.onload=function() {
    var htmlyear = document.querySelector("#htmlYear");
    var year = new Date().getFullYear();
    var yearString = year.toString();
    htmlyear.textContent = yearString;

    const selection = document.querySelector("#selection");
    const root = document.documentElement;

    function test(){
        var index = selection.selectedIndex;
        switch(index){
            case 0:
                root.style.setProperty('--color-red', '#fa2742');
                root.style.setProperty('--color-black', '#373833');
                root.style.setProperty('--color-grey', '#ebeae3');
                break;
            case 1:
                root.style.setProperty('--color-red', '#997300');
                root.style.setProperty('--color-black', '#3366cc');
                root.style.setProperty('--color-grey', '#ebeae3');
                break;
            case 2:
                root.style.setProperty('--color-red', '#b3b300');
                root.style.setProperty('--color-black', '#000099');
                root.style.setProperty('--color-grey', '#ebeae3');
                break;
            case 3:
                root.style.setProperty('--color-red', '#fa2742');
                root.style.setProperty('--color-black', '#006666');
                root.style.setProperty('--color-grey', '#ebeae3');
                break;
            case 4:
                root.style.setProperty('--color-red', '#333333');
                root.style.setProperty('--color-black', '#000000');
                root.style.setProperty('--color-grey', 'bbbbbb');
                break;
        }
    }

    function changeColor(){
        console.log("test"); 
    } 

    selection.addEventListener("change", test);
}