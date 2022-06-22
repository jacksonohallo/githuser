const API_URL = "https://api.github.com/users/";
const main = document.getElementsByClassName("main");
const form = document.getElementsByClassName("form");
const search = document.getElementsByClassName("search");
getUser("jacksonohallo");

async function getUser(username) {
    const res = await fetch(API_URL + username);
    const resData = await Response.json();
    createUserCard(resData);
    getRespos(username);
}