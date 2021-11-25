
var age = prompt('Cклько вам лет?')

if (age < 18) {
    alert('Вы ещё молоды. Вам надо учиться')
} else if(age < 50) {
    alert('Вам надо работать')
} else if(age < 59) {
    alert('Вам скоро на пеньсию')
} else if(age < 150) {
    alert('Вам пеньсионер')
} else {
    alert('Что-то пошло не так')
}



var time = +prompt('Введите время в цифрах');

switch(time) {
    case 0:
        alert('12 часов ночи');
        break
    case 1:
        alert('1 ночи');
        break;
    case 2:
        alert('2 ночи');
        break;
    case 3:
        alert('3 ночи');
        break;
    case 4:
        alert('4 утра');
        break;
    case 5:
        alert('5 утра');
        break;
    case 6:
        alert('6 утра');
        break;
    case 7:
        alert('7 утра');
        break;
    case 8:
        alert('8 утра');
        break;
    case 9:
        alert('9 утра');
        break;
    case 10:
        alert('10 утра');
        break;
    case 11:
        alert('11 утра');
        break;
    case 12:
        alert('12 дня');
        break;
    case 13:
        alert('1 дня');
        break;
    case 14:
        alert('2 дня');
        break;
    case 15:
        alert('3 дня');
        break;
    case 16:
        alert('4 дня');
        break;
    case 17:
        alert('5 дня');
        break;
    case 18:
        alert('6 вечера');
        break;
    case 19:
        alert('7 вечера');
        break;
    case 20:
        alert('8 вечера');
        break;
    case 21:
        alert('9 вечера');
        break;
    case 22:
        alert('10 вечера');
        break;
    case 23:
        alert('11 ночи');
        break;
    case 00:
        alert('12 ночи');
        break;
    default:
        alert('такого времени не существует')
        break;
}



function middleNumber(a,b,c){
    var arr=[];

    arr[1]=a;
    arr[2]=b;
    arr[3]=c;

    arr.sort();
    return arr[1]; 
}

alert(middleNumber(1,2,3));