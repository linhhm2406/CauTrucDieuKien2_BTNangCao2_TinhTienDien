let used_capacity=parseInt(prompt('Nhap vao so dien thuc te su dung'));

let level1=1678;
let level2=1734;
let level3=2014;
let level4=2536;
let level5=2834;
let level6=2927;

let price=null;

if (used_capacity>400){
    price= (((used_capacity-400)*level6)+(100*level5)+(100*level4)+(100*level3)+(50*level2)+(50*level1));
}else if(used_capacity>300){
    price=(((used_capacity-300)*level5)+(100*level4)+(100*level3)+(50*level2)+(50*level1));
}else if(used_capacity>200){
    price=(((used_capacity-200)*level4)+(100*level3)+(50*level2)+(50*level1));
}else if(used_capacity>100){
    price=(((used_capacity-100)*level3)+(50*level2)+(50*level1));
}else if(used_capacity>50){
    price=(((used_capacity-50)*level2)+(50*level1));
}else {
    price=used_capacity*level1;
}

alert('So tien phai tra la '+price+' VND');