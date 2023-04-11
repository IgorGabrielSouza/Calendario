function colirirData(){

    let day = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calender = document.getElementById('calender');
    //forma 1 - soluçao
    let putColor = calender.getElementsByTagName('td')[parseInt(day)+5];
    putColor.style.backgroundColor = color;
}