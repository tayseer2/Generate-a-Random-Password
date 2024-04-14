let input = document.getElementById("password");
let copy = document.getElementById("copy");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const length = 14;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    input.value = password;
})

copy.addEventListener("click", function () {
    input.select()
    document.execCommand("copy");
})