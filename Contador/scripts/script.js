const datos = {
    'cont': 0 
}
const span = document.getElementsByTagName('span')[0]
 document.addEventListener('click', function (bttn) {
    const action = bttn.composedPath()[0].value
    switch (action) {
        case 'up':
            ++datos.cont
            span.textContent=datos.cont
            break;
        case 'down':
            --datos.cont
            span.textContent=datos.cont
            break;
        case 'reset':
            datos.cont = 0
            span.textContent=datos.cont
            break;
        default:
            break;
    }
 })