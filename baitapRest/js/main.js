const tinhDiemTB = (...param) =>{
  let diemTB = 0
  for(let i = 0; i<param.length; i++){
    diemTB += param[i]/param.length
  }
  return diemTB
}

document.querySelector('#btnKhoi1').onclick =() => {
    const diemToan=Number( document.querySelector('#inpToan').value)
    const diemLy= Number(document.querySelector('#inpLy').value)
    const diemHoa= Number(document.querySelector('#inpHoa').value)
    const diemKhoi1 = tinhDiemTB(diemToan,diemLy,diemHoa)
    document.querySelector('#tbKhoi1').innerHTML= diemKhoi1
      
      
 }

 document.querySelector('#btnKhoi2').onclick =() => {
   const diemVan= Number(document.querySelector('#inpVan').value)
  const diemSu= Number(document.querySelector('#inpSu').value)
  const diemDia= Number(document.querySelector('#inpDia').value)
  const diemEnglish= Number(document.querySelector('#inpEnglish').value)
  const diemKhoi2 = tinhDiemTB(diemVan,diemSu,diemDia,diemEnglish)
  document.querySelector('#tbKhoi2').innerHTML= diemKhoi2
    
    
}
  