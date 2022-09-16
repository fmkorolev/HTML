function showName() {
    user_name = prompt("Введите имя");
    document.getElementById("result").innerHTML = ""
    document.getElementById("result").append(`Your name: ${user_name}`);
}