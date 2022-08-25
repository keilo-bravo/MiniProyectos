const card = document.getElementsByClassName('card')
const front = document.getElementsByClassName('front')[0]
const back = document.getElementsByClassName('back')[0]
document.addEventListener('click',function(dato) {
    if (dato.composedPath()[0]==front) {
        front.style.transform =  'perspective(500px) rotateY(180deg)';
        back.style.transform =  'perspective(500px) rotateY(360deg)';
    }
    if (dato.composedPath()[0]==back) {
        front.style.transform =  'perspective(500px) rotateY(0deg)';
        back.style.transform =  'perspective(500px) rotateY(180deg)';
    }
})