let displayEle = document.getElementById('display');
let bttn = Array.from(document.getElementsByTagName('button'));
let changeBtn =document.getElementById('change')

bttn.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case 'C':
                displayEle.value = '';
                break;
            case "DEL":
                if (displayEle.value) {
                    displayEle.value = displayEle.value.slice(0, -1);
                }
                break;
            case '=':
                try {
                    displayEle.value = eval(displayEle.value);
                } catch {
                    displayEle.value = 'Error!';
                }
                break;
            case '%':
                displayEle.value = displayEle.value/100;
                break;
            default:
                displayEle.value += e.target.textContent;
        }
    })
})

