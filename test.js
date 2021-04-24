//............. bai 1.....................
function findOppositeNumber(n, inputNumber) {
    if (inputNumber >= n / 2) {
        return inputNumber - n / 2
    } else {
        return inputNumber + n / 2
    }
}
console.log("_____________________BAI 1 _____________________");
console.log(findOppositeNumber(10, 5));
console.log(findOppositeNumber(10, 9));
console.log("_______________________________________________");

//.................. bai 2....................
console.log("_____________________BAI 2_____________________");
console.log(merge2String('abc', '123'))
console.log(merge2String('abc', '0123'))
console.log(merge2String('abcd', '123'))
console.log("_______________________________________________");



function merge2String(s1, s2) {
    let string = '';
    if (s1.length != s2.length) {
        let doDaiChuoi = s1.length;
        if (s1.length > s2.length) doDaiChuoi = s2.length
        for (let i = 0; i < doDaiChuoi; i++) {
            string += s1[i] + s2[i]
        }
        if (doDaiChuoi == s2.length)
            string += s1.split(`${s1[doDaiChuoi - 1]}`)[1]
        else
            string += s2.split(`${s2[doDaiChuoi - 1]}`)[1]
        return string
    } else {
        for (let i = 0; i < s1.length; i++) {
            string += s1[i] + s2[i]
        }
        return string
    }
}

//.................. bai 3....................
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let soMayman = 0;
let dem = 0;

btn.addEventListener('click', function() {
    soMayman = Math.floor(Math.random() * 10)+1;
    if(dem >2){
        alert('Ban da het luot quay')
        btn.style.cursor = 'not-allowed'
    }else{
        if(input.value < 1 || input.value >10){
            alert("bạn phải nhập số tù 1 đén 10 ")
        }
        else{
            if(input.value  == soMayman){
                        alert(`Ban da trung thuong con so may man cua ban la ${input.value}`)
            }
            else{
                alert(`Chuc ban may man lan sau ! Hay nhap lai , So  may man la ${soMayman}`)
            }
        }
    }
    dem++;
})