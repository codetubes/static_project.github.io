let users = [
    {
        name:"Arman Avetisyan",
        country:"Armenia",
        age:25,
        gender:"male",
    },
    {
        name:"John Smith",
        country:"USA",
        age:33,
        gender:"male",
    },

    {
        name:"Julie",
        country:"USA",
        age:24,
        gender:"female",
    },

    {
        name:"Natasha Antonovna",
        country:"Russia",
        age:45,
        gender:"female",
    },
];

let usersBox = document.querySelector("#users-box");
let searchButton = document.querySelector("#search-button");
let searchText = document.querySelector("#search-text");
let filtersNav = document.querySelector("#filters-nav");
let updateFiltersBtn = document.querySelector("#update-filters");
let loginBtns = document.querySelectorAll(".login-btn");
let emailInput = document.querySelector("#email");


emailInput.addEventListener("keyup",function(){
    let emailMessage = document.querySelector("#email-message");
    if (emailInput.value.includes("@"))
    {
        emailMessage.innerHTML="OK";
        emailMessage.style.color = "white";
    }else {
        emailMessage.innerHTML = "invalid Email address";
        emailMessage.style.color = "red";
    }
});

loginBtns[0].addEventListener("click",openHideLogin);
loginBtns[1].addEventListener("click",openHideLogin);

function openHideLogin()
{

    let loginBox = document.querySelector("#login-box");
    if(loginBox.style.display === "" || loginBox.style.display ==="none")
    {
        loginBox.style.display = "block";
    }else {
        loginBox.style.display = "none";

    }


}


updateFiltersBtn.addEventListener("click",function(){
    let currentCountry = document.querySelector("#country-filter").value.toLocaleLowerCase();
    let currentGender = document.querySelector("#gender-filter").value.toLocaleLowerCase();

    let filteredUsers = users.filter(function(user){
        return (user.country.toLocaleLowerCase().includes(currentCountry) && 
                user.gender.toLocaleLowerCase().includes(currentGender) &&
                user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
            );
    });

    usersBox.innerHTML = "";

    for (user of filteredUsers)
    {
        let userElement = document.createElement("DIV");
        userElement.classList.add("user-item");
        userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
        `;

        usersBox.appendChild(userElement);

    }
});

filtersNav.addEventListener("click",function(){
    let filtersBox = document.querySelector("#filters");

    if(filtersBox.style.display === '' || filtersBox.style.display === 'none')
    {
        filtersBox.style.display = 'block';
    }else {
        filtersBox.style.display = 'none';
    }
});

searchButton.addEventListener("click",function(){

    let filteredUsers = users.filter(function(user){
            return user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase());
    });

    usersBox.innerHTML = "";

    for (user of filteredUsers)
    {
        let userElement = document.createElement("DIV");
        userElement.classList.add("user-item");
        userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
        `;

        usersBox.appendChild(userElement);

    }



});

for (user of users)
{
    let userElement = document.createElement("DIV");
    userElement.classList.add("user-item");
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Country: ${user.country}</p>
    <p>Age: ${user.age}</p>
    <p>Gender: ${user.gender}</p>
    `;

    usersBox.appendChild(userElement);

}