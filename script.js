// function matDisplay() {
//     for (var i = 0; i < matrixDivs.length; i++) {
//       matrixDivs[i].style.display = "block";
//     }
//     for (var i = 0; i < vectorDivs.length; i++) {
//         vectorDivs[i].style.display = "none"
//     }
//     for (var i = 0; i < trigDivs.length; i++) {
//         trigDivs[i].style.display = "none";
//       }
//       for (var i = 0; i < calcDivs.length; i++) {
//         calcDivs[i].style.display = "none";
//       }
// }
// function vectDisplay(){
//     for (var i = 0; i < mat_wrap.length; i++) {
//         mat_wrap[i].style.display = "none";
//       }
//       for (var i = 0; i < vectorDivs.length; i++) {
//           vectorDivs[i].style.display = "block"
//       }
//       for (var i = 0; i < trigDivs.length; i++) {
//           trigDivs[i].style.display = "none";
//         }
//         for (var i = 0; i < calcDivs.length; i++) {
//           calcDivs[i].style.display = "none";
//         }
// }
// function trigDisplay(){
//     for (var i = 0; i < matrixDivs.length; i++) {
//         matrixDivs[i].style.display = "none";
//       }
//       for (var i = 0; i < vectorDivs.length; i++) {
//           vectorDivs[i].style.display = "none"
//       }
//       for (var i = 0; i < trigDivs.length; i++) {
//           trigDivs[i].style.display = "block";
//         }
//         for (var i = 0; i < calcDivs.length; i++) {
//           calcDivs[i].style.display = "none";
//         }
// }
// function calcDisplay(){
//     for (var i = 0; i < matrixDivs.length; i++) {
//         matrixDivs[i].style.display = "none";
//       }
//       for (var i = 0; i < vectorDivs.length; i++) {
//           vectorDivs[i].style.display = "none"
//       }
//       for (var i = 0; i < trigDivs.length; i++) {
//           trigDivs[i].style.display = "none";
//         }
//         for (var i = 0; i < calcDivs.length; i++) {
//           calcDivs[i].style.display = "block";
//         }
// }
// function basicDisplay(){
//     basic.style.display='block'
//     for (var i = 0; i < bas_els.length; i++) {
//         bas_els[i].style.display = "block";
//       }
//     bas_els.style.display='block'
// }
// input navigation with arrow keys
// var inputs = document.querySelectorAll('input');
// document.addEventListener('keydown', (event) => {
//   var key = event.key;
//   let currentIndex = Array.from(inputs).findIndex((input) => input === document.activeElement);
//   if (key === 'ArrowUp' && currentIndex > 0) {
//     inputs[currentIndex - 1].focus();
//   } else if (key === 'ArrowDown' && currentIndex < inputs.length - 1) {
//     inputs[currentIndex + 1].focus();
//   } else if (key === 'ArrowLeft' && document.activeElement.selectionStart === 0 && currentIndex > 0) {
//     inputs[currentIndex - 1].focus();
//   } else if (key === 'ArrowRight' && document.activeElement.selectionEnd === document.activeElement.value.length && currentIndex < inputs.length - 1) {
//      inputs[currentIndex + 1].focus();
//   }
// });

function cal2(num){
    var a11=parseInt(document.getElementById("a11-2").value);
    var a12=parseInt(document.getElementById("a12-2").value);
    var a21=parseInt(document.getElementById("a21-2").value);
    var a22=parseInt(document.getElementById("a22-2").value);
    var b11=parseInt(document.getElementById("b11-2").value);
    var b12=parseInt(document.getElementById("b12-2").value);
    var b21=parseInt(document.getElementById("b21-2").value);
    var b22=parseInt(document.getElementById("b22-2").value);
    if (num===1){
        var r11=a11+b11;
        var r12=a12+b12;
        var r21=a21+b21;
        var r22=a22+b22;
    }
    else if (num===2){
        var r11=a11-b11;
        var r12=a12-b12;
        var r21=a21-b21;
        var r22=a22-b22;
    }
    else if (num===3){
        var r11=(a11*b11)+(a12*b21);
        var r12=(a11*b12)+(a12*b22);
        var r21=(a21*b11)+(a22*b21);
        var r22=(a21*b12)+(a22*b22);
    }
    else if (num===4){
        var temp=b12;
        b12=b21;
        b21=temp;
        var r11=(a11*b11)+(a12*b21);
        var r12=(a11*b12)+(a12*b22);
        var r21=(a21*b11)+(a22*b21);
        var r22=(a21*b12)+(a22*b22);
    }
    else if (num===5){
        var r11 = a11*a11 + a12*a21;
        var r12 = a11*a12 + a12*a22;
        var r21 = a21*a11 + a22*a21;
        var r22 = a21*a12 + a22*a22;
    }
    else if (num===6){
        var r11_2 = a11*a11 + a12*a21;
        var r12_2 = a11*a12 + a12*a22;
        var r21_2 = a21*a11 + a22*a21;
        var r22_2 = a21*a12 + a22*a22;
        var r11=(a11*r11_2)+(a12*r21_2);
        var r12=(a11*r12_2)+(a12*r22_2);
        var r21=(a21*r11_2)+(a22*r21_2);
        var r22=(a21*r12_2)+(a22*r22_2);
    }
    else if (num===7){
        var inp_a11=document.getElementById("a11-2");
        var inp_a12=document.getElementById("a12-2");
        var inp_a21=document.getElementById("a21-2");
        var inp_a22=document.getElementById("a22-2");
        var inp_b11=document.getElementById("b11-2");
        var inp_b12=document.getElementById("b12-2");
        var inp_b21=document.getElementById("b21-2");
        var inp_b22=document.getElementById("b22-2");
        [inp_a11.value,inp_b11.value]=[inp_b11.value,inp_a11.value];
        [inp_a12.value,inp_b12.value]=[inp_b12.value,inp_a12.value];
        [inp_a21.value,inp_b21.value]=[inp_b21.value,inp_a21.value];
        [inp_a22.value,inp_b22.value]=[inp_b22.value,inp_a22.value];
        return
    }
    else if (num===8){
        document.getElementById("a11-2").value=''
        document.getElementById("a12-2").value=''
        document.getElementById("a21-2").value=''
        document.getElementById("a22-2").value=''
        return
    }
    else if (num===9){
        document.getElementById("b11-2").value=''
        document.getElementById("b12-2").value=''
        document.getElementById("b21-2").value=''
        document.getElementById("b22-2").value=''
        return
    }
    document.getElementById("r11-2").value=r11;
    document.getElementById("r12-2").value=r12;
    document.getElementById("r21-2").value=r21;
    document.getElementById("r22-2").value=r22;
}
function cal3(num){
    var a11=parseInt(document.getElementById("a11-3").value);
    var a12=parseInt(document.getElementById("a12-3").value);
    var a13=parseInt(document.getElementById("a13-3").value);
    var a21=parseInt(document.getElementById("a21-3").value);
    var a22=parseInt(document.getElementById("a22-3").value);
    var a23=parseInt(document.getElementById("a23-3").value);
    var a31=parseInt(document.getElementById("a31-3").value);
    var a32=parseInt(document.getElementById("a32-3").value);
    var a33=parseInt(document.getElementById("a33-3").value);
    var b11=parseInt(document.getElementById("b11-3").value);
    var b12=parseInt(document.getElementById("b12-3").value);
    var b13=parseInt(document.getElementById("b13-3").value);
    var b21=parseInt(document.getElementById("b21-3").value);
    var b22=parseInt(document.getElementById("b22-3").value);
    var b23=parseInt(document.getElementById("b23-3").value);
    var b31=parseInt(document.getElementById("b31-3").value);
    var b32=parseInt(document.getElementById("b32-3").value);
    var b33=parseInt(document.getElementById("b33-3").value);

    if (num===1){
        var r11=a11+b11;
        var r12=a12+b12;
        var r13=a13+b13;
        var r21=a21+b21;
        var r22=a22+b22;
        var r23=a23+b23;
        var r31=a31+b31;
        var r32=a32+b32;
        var r33=a33+b33;
    }
    else if (num===2){
        var r11=a11-b11;
        var r12=a12-b12;
        var r13=a13-b13;
        var r21=a21-b21;
        var r22=a22-b22;
        var r23=a23-b23;
        var r31=a31-b31;
        var r32=a32-b32;
        var r33=a33-b33;
    }
    else if (num===3){
        var r11 = a11*b11 + a12*b21 + a13*b31;
        var r12 = a11*b12 + a12*b22 + a13*b32;
        var r13 = a11*b13 + a12*b23 + a13*b33;
        var r21 = a21*b11 + a22*b21 + a23*b31;
        var r22 = a21*b12 + a22*b22 + a23*b32;
        var r23 = a21*b13 + a22*b23 + a23*b33;
        var r31 = a31*b11 + a32*b21 + a33*b31;
        var r32 = a31*b12 + a32*b22 + a33*b32;
        var r33 = a31*b13 + a32*b23 + a33*b33;
    }
    else if(num===5){
        var r11 = a11*a11 + a12*a21 + a13*a31;
        var r12 = a11*a12 + a12*a22 + a13*a32;
        var r13 = a11*a13 + a12*a23 + a13*a33;
        var r21 = a21*a11 + a22*a21 + a23*a31;
        var r22 = a21*a12 + a22*a22 + a23*a32;
        var r23 = a21*a13 + a22*a23 + a23*a33;
        var r31 = a31*a11 + a32*a21 + a33*a31;
        var r32 = a31*a12 + a32*a22 + a33*a32;
        var r33 = a31*a13 + a32*a23 + a33*a33;
    }
    else if(num===6){
        var r11_3 = a11*a11 + a12*a21 + a13*a31;
        var r12_3 = a11*a12 + a12*a22 + a13*a32;
        var r13_3 = a11*a13 + a12*a23 + a13*a33;
        var r21_3 = a21*a11 + a22*a21 + a23*a31;
        var r22_3 = a21*a12 + a22*a22 + a23*a32;
        var r23_3 = a21*a13 + a22*a23 + a23*a33;
        var r31_3 = a31*a11 + a32*a21 + a33*a31;
        var r32_3 = a31*a12 + a32*a22 + a33*a32;
        var r33_3 = a31*a13 + a32*a23 + a33*a33;

        var r11 = a11*r11_3 + a12*r21_3 + a13*r31_3;
        var r12 = a11*r12_3 + a12*r22_3 + a13*r32_3;
        var r13 = a11*r13_3 + a12*r23_3 + a13*r33_3;
        var r21 = a21*r11_3 + a22*r21_3 + a23*r31_3;
        var r22 = a21*r12_3 + a22*r22_3 + a23*r32_3;
        var r23 = a21*r13_3 + a22*r23_3 + a23*r33_3;
        var r31 = a31*r11_3 + a32*r21_3 + a33*r31_3;
        var r32 = a31*r12_3 + a32*r22_3 + a33*r32_3;
        var r33 = a31*r13_3 + a32*r23_3 + a33*r33_3;
    }
    else if (num===7){
        var inp_a11=document.getElementById("a11-3");
        var inp_a12=document.getElementById("a12-3");
        var inp_a13=document.getElementById("a13-3");
        var inp_a21=document.getElementById("a21-3");
        var inp_a22=document.getElementById("a22-3");
        var inp_a23=document.getElementById("a23-3");
        var inp_a31=document.getElementById("a31-3");
        var inp_a32=document.getElementById("a32-3");
        var inp_a33=document.getElementById("a33-3");
        var inp_b11=document.getElementById("b11-3");
        var inp_b12=document.getElementById("b12-3");
        var inp_b13=document.getElementById("b13-3");
        var inp_b21=document.getElementById("b21-3");
        var inp_b22=document.getElementById("b22-3");
        var inp_b23=document.getElementById("b23-3");
        var inp_b31=document.getElementById("b31-3");
        var inp_b32=document.getElementById("b32-3");
        var inp_b33=document.getElementById("b33-3");
        [inp_a11.value,inp_b11.value]=[inp_b11.value,inp_a11.value];
        [inp_a12.value,inp_b12.value]=[inp_b12.value,inp_a12.value];
        [inp_a13.value,inp_b13.value]=[inp_b13.value,inp_a13.value];
        [inp_a21.value,inp_b21.value]=[inp_b21.value,inp_a21.value];
        [inp_a22.value,inp_b22.value]=[inp_b22.value,inp_a22.value];
        [inp_a23.value,inp_b23.value]=[inp_b23.value,inp_a23.value];
        [inp_a31.value,inp_b31.value]=[inp_b31.value,inp_a31.value];
        [inp_a32.value,inp_b32.value]=[inp_b32.value,inp_a32.value];
        [inp_a33.value,inp_b33.value]=[inp_b33.value,inp_a33.value];
        return
    }
    else if (num===8){
        document.getElementById("a11-3").value=''
        document.getElementById("a12-3").value=''
        document.getElementById("a13-3").value=''
        document.getElementById("a21-3").value=''
        document.getElementById("a22-3").value=''
        document.getElementById("a23-3").value=''
        document.getElementById("a31-3").value=''
        document.getElementById("a32-3").value=''
        document.getElementById("a33-3").value=''
        return
    }
    else if (num===9){
        document.getElementById("b11-3").value=''
        document.getElementById("b12-3").value=''
        document.getElementById("b13-3").value=''
        document.getElementById("b21-3").value=''
        document.getElementById("b22-3").value=''
        document.getElementById("b23-3").value=''
        document.getElementById("b31-3").value=''
        document.getElementById("b32-3").value=''
        document.getElementById("b33-3").value=''
        return
    }
    else{
        let temp=b12;
        b12=b21;
        b21=temp;
        temp=b13;
        b13=b31;
        b31=temp;
        temp=b23;
        b23=b32;
        b32=temp;
        var r11 = a11*b11 + a12*b21 + a13*b31;
        var r12 = a11*b12 + a12*b22 + a13*b32;
        var r13 = a11*b13 + a12*b23 + a13*b33;
        var r21 = a21*b11 + a22*b21 + a23*b31;
        var r22 = a21*b12 + a22*b22 + a23*b32;
        var r23 = a21*b13 + a22*b23 + a23*b33;
        var r31 = a31*b11 + a32*b21 + a33*b31;
        var r32 = a31*b12 + a32*b22 + a33*b32;
        var r33 = a31*b13 + a32*b23 + a33*b33;
    }
    document.getElementById("r11-3").value=r11;
    document.getElementById("r12-3").value=r12;
    document.getElementById("r13-3").value=r13;
    document.getElementById("r21-3").value=r21;
    document.getElementById("r22-3").value=r22;
    document.getElementById("r23-3").value=r23;
    document.getElementById("r31-3").value=r31;
    document.getElementById("r32-3").value=r32;
    document.getElementById("r33-3").value=r33;
}
function cal4(num){
    var a11=parseInt(document.getElementById("a11-4").value);
    var a12=parseInt(document.getElementById("a12-4").value);
    var a13=parseInt(document.getElementById("a13-4").value);
    var a14=parseInt(document.getElementById("a14-4").value);
    var a21=parseInt(document.getElementById("a21-4").value);
    var a22=parseInt(document.getElementById("a22-4").value);
    var a23=parseInt(document.getElementById("a23-4").value);
    var a24=parseInt(document.getElementById("a24-4").value);
    var a31=parseInt(document.getElementById("a31-4").value);
    var a32=parseInt(document.getElementById("a32-4").value);
    var a33=parseInt(document.getElementById("a33-4").value);
    var a34=parseInt(document.getElementById("a34-4").value);
    var a41=parseInt(document.getElementById("a41-4").value);
    var a42=parseInt(document.getElementById("a42-4").value);
    var a43=parseInt(document.getElementById("a43-4").value);
    var a44=parseInt(document.getElementById("a44-4").value);
    var b11=parseInt(document.getElementById("b11-4").value);
    var b12=parseInt(document.getElementById("b12-4").value);
    var b13=parseInt(document.getElementById("b13-4").value);
    var b14=parseInt(document.getElementById("b14-4").value);
    var b21=parseInt(document.getElementById("b21-4").value);
    var b22=parseInt(document.getElementById("b22-4").value);
    var b23=parseInt(document.getElementById("b23-4").value);
    var b24=parseInt(document.getElementById("b24-4").value);
    var b31=parseInt(document.getElementById("b31-4").value);
    var b32=parseInt(document.getElementById("b32-4").value);
    var b33=parseInt(document.getElementById("b33-4").value);
    var b34=parseInt(document.getElementById("b34-4").value);
    var b41=parseInt(document.getElementById("b41-4").value);
    var b42=parseInt(document.getElementById("b42-4").value);
    var b43=parseInt(document.getElementById("b43-4").value);
    var b44=parseInt(document.getElementById("b44-4").value);

    if (num===1){
        var r11=a11+b11;
        var r12=a12+b12;
        var r13=a13+b13;
        var r14=a14+b14;
        var r21=a21+b21;
        var r22=a22+b22;
        var r23=a23+b23;
        var r24=a24+b24;
        var r31=a31+b31;
        var r32=a32+b32;
        var r33=a33+b33;
        var r34=a34+b34;
        var r41=a41+b41;
        var r42=a42+b42;
        var r43=a43+b43;
        var r44=a44+b44;
    }
    else if (num===2){
        var r11=a11-b11;
        var r12=a12-b12;
        var r13=a13-b13;
        var r14=a14-b14;
        var r21=a21-b21;
        var r22=a22-b22;
        var r23=a23-b23;
        var r24=a24-b24;
        var r31=a31-b31;
        var r32=a32-b32;
        var r33=a33-b33;
        var r34=a34-b34;
        var r41=a41-b41;
        var r42=a42-b42;
        var r43=a43-b43;
        var r44=a44-b44;
    }
    else if (num===3){
        var r11 = a11*b11 + a12*b21 + a13*b31 + a14*b41
        var r12 = a11*b12 + a12*b22 + a13*b32 + a14*b42
        var r13 = a11*b13 + a12*b23 + a13*b33 + a14*b43
        var r14 = a11*b14 + a12*b24 + a13*b34 + a14*b44
        var r21 = a21*b11 + a22*b21 + a23*b31 + a24*b41
        var r22 = a21*b12 + a22*b22 + a23*b32 + a24*b42
        var r23 = a21*b13 + a22*b23 + a23*b33 + a24*b43
        var r24 = a21*b14 + a22*b24 + a23*b34 + a24*b44
        var r31 = a31*b11 + a32*b21 + a33*b31 + a34*b41
        var r32 = a31*b12 + a32*b22 + a33*b32 + a34*b42
        var r33 = a31*b13 + a32*b23 + a33*b33 + a34*b43
        var r34 = a31*b14 + a32*b24 + a33*b34 + a34*b44
        var r41 = a41*b11 + a42*b21 + a43*b31 + a44*b41
        var r42 = a41*b12 + a42*b22 + a43*b32 + a44*b42
        var r43 = a41*b13 + a42*b23 + a43*b33 + a44*b43
        var r44 = a41*b14 + a42*b24 + a43*b34 + a44*b44
    }
    else if (num===4){
        let temp=b12;
        b12=b21;
        b21=temp;
        temp=b13;
        b13=b31;
        b31=temp;
        temp=b14;
        b14=b41;
        b41=temp;
        temp=b23;
        b23=b32;
        b32=temp;
        temp=b24;
        b24=b42;
        b42=temp;
        temp=b34;
        b34=b43;
        b43=temp;
        var r11 = a11*b11 + a12*b21 + a13*b31 + a14*b41
        var r12 = a11*b12 + a12*b22 + a13*b32 + a14*b42
        var r13 = a11*b13 + a12*b23 + a13*b33 + a14*b43
        var r14 = a11*b14 + a12*b24 + a13*b34 + a14*b44
        var r21 = a21*b11 + a22*b21 + a23*b31 + a24*b41
        var r22 = a21*b12 + a22*b22 + a23*b32 + a24*b42
        var r23 = a21*b13 + a22*b23 + a23*b33 + a24*b43
        var r24 = a21*b14 + a22*b24 + a23*b34 + a24*b44
        var r31 = a31*b11 + a32*b21 + a33*b31 + a34*b41
        var r32 = a31*b12 + a32*b22 + a33*b32 + a34*b42
        var r33 = a31*b13 + a32*b23 + a33*b33 + a34*b43
        var r34 = a31*b14 + a32*b24 + a33*b34 + a34*b44
        var r41 = a41*b11 + a42*b21 + a43*b31 + a44*b41
        var r42 = a41*b12 + a42*b22 + a43*b32 + a44*b42
        var r43 = a41*b13 + a42*b23 + a43*b33 + a44*b43
        var r44 = a41*b14 + a42*b24 + a43*b34 + a44*b44
    }
    else if (num===5) {

    }
    else if(num===6){

    }
    else if (num===6){

    }
    else if (num===7){
        var inp_a11=document.getElementById("a11-3");
        var inp_a12=document.getElementById("a12-3");
        var inp_a13=document.getElementById("a13-3");
        var inp_a21=document.getElementById("a21-3");
        var inp_a22=document.getElementById("a22-3");
        var inp_a23=document.getElementById("a23-3");
        var inp_a31=document.getElementById("a31-3");
        var inp_a32=document.getElementById("a32-3");
        var inp_a33=document.getElementById("a33-3");
        var inp_b11=document.getElementById("b11-3");
        var inp_b12=document.getElementById("b12-3");
        var inp_b13=document.getElementById("b13-3");
        var inp_b21=document.getElementById("b21-3");
        var inp_b22=document.getElementById("b22-3");
        var inp_b23=document.getElementById("b23-3");
        var inp_b31=document.getElementById("b31-3");
        var inp_b32=document.getElementById("b32-3");
        var inp_b33=document.getElementById("b33-3");
        [inp_a11.value,inp_b11.value]=[inp_b11.value,inp_a11.value];
        [inp_a12.value,inp_b12.value]=[inp_b12.value,inp_a12.value];
        [inp_a13.value,inp_b13.value]=[inp_b13.value,inp_a13.value];
        [inp_a21.value,inp_b21.value]=[inp_b21.value,inp_a21.value];
        [inp_a22.value,inp_b22.value]=[inp_b22.value,inp_a22.value];
        [inp_a23.value,inp_b23.value]=[inp_b23.value,inp_a23.value];
        [inp_a31.value,inp_b31.value]=[inp_b31.value,inp_a31.value];
        [inp_a32.value,inp_b32.value]=[inp_b32.value,inp_a32.value];
        [inp_a33.value,inp_b33.value]=[inp_b33.value,inp_a33.value];
        return
    }
    document.getElementById("r11-4").value=r11;
    document.getElementById("r12-4").value=r12;
    document.getElementById("r13-4").value=r13;
    document.getElementById("r14-4").value=r14;
    document.getElementById("r21-4").value=r21;
    document.getElementById("r22-4").value=r22;
    document.getElementById("r23-4").value=r23;
    document.getElementById("r24-4").value=r24;
    document.getElementById("r31-4").value=r31;
    document.getElementById("r32-4").value=r32;
    document.getElementById("r33-4").value=r33;
    document.getElementById("r34-4").value=r34;
    document.getElementById("r41-4").value=r41;
    document.getElementById("r42-4").value=r42;
    document.getElementById("r43-4").value=r43;
    document.getElementById("r44-4").value=r44;
}
