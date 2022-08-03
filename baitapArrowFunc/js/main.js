const colorList =["pallet", "viridian","pewter","cerulean","vermillion", "lavender","celadon", "saffron","fuschia","cinnabar"];
const  addButton = (colorList) =>{
    let html = '';
    for (const value of colorList) {
        console.log(value)
        html += `
        <button class="color-button ${value} " onclick ="change('${value}')" ></button>
        `;
    }
    document.querySelector('#colorContainer').innerHTML= html;
}

/// nhấn nút đổi màu
const change = (color)=>{ 
    let   stringColor =  document.getElementById('house'); 
          stringColor.classList.add(color);
  }

//khi trang web hiện lên thì các thẻ button được hiện

window.onload = function(){
  
  addButton(colorList);
  
}


