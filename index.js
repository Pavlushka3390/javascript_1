while (true) {
    let n = Math.floor(Math.random() * 1000);
    console.log('Загадано:', n);
    let guess = prompt('Введите число:'); 
    console.log('Введено:' , guess);
    if (guess === 'q') {
        break;
    }
    if (isNaN(guess)) {
        alert('Вы ввели не число');
    }else if (n === parseInt(guess)) {
        alert('Вы угадали');
         break;
    } else if (n > parseInt(guess)) {
        alert('надо больше');
    } else if (n < parseInt(guess)) {
        alert('надо меньше');
    }
}