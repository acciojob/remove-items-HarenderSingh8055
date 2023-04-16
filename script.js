let button = document.querySelector("[type=button]");
let color = document.querySelector("#colorSelect");
let colorOption = color.children;
let colorOptionArr = Array.from(colorOption);

button.addEventListener("click",function(){
    let colorValue = color.value;
    colorOptionArr.forEach((item,index) => {
        if(colorValue===item.value){
            colorOptionArr.splice(index,1);
            color.removeChild(color[index]);
        }
    });
})