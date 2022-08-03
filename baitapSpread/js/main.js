let string = "Hover Me !"
//sử dụng spread Operator để tách các ký tự của text "Hover Me !"
let chars= [...string]
console.log(chars)

let html = '';
//thêm thẻ span vào thẻ h2
const themThe = (chars) =>{
    let html = '';
    for (const value of chars) {
        html += `<span>${value}</span>`;
       
        
        document.querySelector('h2').innerHTML= html;
    }
}
//khi trang web hiện lên thì các thẻ span chứa các ký tự được hiện
window.onload = function(){
    themThe(chars);
    
  }

