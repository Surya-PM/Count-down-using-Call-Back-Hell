var res=document.createElement('div');
res.setAttribute('style','text-align:center;');
res.style.margin="25%";
res.style.fontSize="300%"
res.style.fontWeight="bold"
function print(data){
res.innerHTML=data;
document.body.append(res);
};

setTimeout(()=>{
    print("10");
},
(setTimeout(()=>{
    print("9");
},1000)),(setTimeout(()=>{
    print("8");
},2000)),
(setTimeout(()=>{
    print("7");
},3000)),
(setTimeout(()=>{
    print("6");
},4000)),
(setTimeout(()=>{
    print("5");
},5000)),
(setTimeout(()=>{
    print("4");
},6000)),
(setTimeout(()=>{
    print("3");
},7000)),
(setTimeout(()=>{
    print("2");
},8000)),
(setTimeout(()=>{
    print("1");
},9000)),
(setTimeout(()=>{
    print("Happy Independence Day");
},10000)),
);
