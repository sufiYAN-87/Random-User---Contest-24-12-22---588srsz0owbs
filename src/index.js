// javascript code goes here
let disp = document.getElementById("blank");
async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api/'); 
    const data = await response.json();
    const user = data.results[0];
    display(user);

}
function display(user){
    let name = document.getElementById("name")
    name.innerText = `${user.name.first + " " + user.name.last}`

    let img = document.getElementById("img");
    img.setAttribute('src', `${user.picture.large}`)

    let age = document.getElementById("age");
    age.addEventListener('click' , () =>{
        disp.innerHTML= `${user.dob.age}`
    })

    let email = document.getElementById("email");
    email.addEventListener('click' , () =>{
        disp.innerHTML= `${user.email}`
    })

    let phone = document.getElementById("phone");
    phone.addEventListener('click' , () =>{
        disp.innerHTML= `${user.phone}`
    })
}
        getRandomUser();
        let newu = document.getElementById("getUser");
    newu.addEventListener('click' , () =>{
        getRandomUser()
        disp.innerText = "";
    })
