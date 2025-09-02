let password=document.getElementById('pass');
let btn=document.getElementById('clicks');

let count=0;

if(password>=8 && password>='A'  && password<='Z'&& password>='a' && password>='z' ){
    count++;
   btn.addEventListener(Element =>{
    Element.document.writeln=" Valid Password";
   });
}
else{
      btn.document.writeln.innerHTML="Invalid Password";  
}