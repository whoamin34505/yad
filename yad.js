document.querySelector('.btn1').onclick = myClick;

function myClick() {
let radio = document.querySelectorAll('.nn');
for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
        data = radio[i].value;
        break;
    }
}
let elements = ["https://whoamin34505.github.io/p1","https://whoamin34505.github.io/p2","https://whoamin34505.github.io/p3","https://whoamin34505.github.io/p4"]
window.location.href = elements [data-1];
}