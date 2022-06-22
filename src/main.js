const API_URL = "https://api.github.com/users/";
const main = document.getElementsByClassName("main");
const form = document.getElementsByClassName("form");
const search = document.getElementsByClassName("search");
getUser("jacksonohallo");


function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.forEach((repo) => {
          const repoEl = document.createElement("a");
          repoEl.classList.add("repo");
          repoEl.href = repo.html_url;
          repoEl.target = "_blank";
          repoEl.innerText = repo.name;
          reposEl.appendChild(repoEl);
      });
}
function createUserCard(user) {
  const cardHTML = `
      <div class="card">
          <div>
              <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
          </div>
          <div class="user-info">
              <h2>${user.name}</h2>
              <p>${user.bio}</p>
              <ul class="info">
                  <li><strong>Followers :</strong>${user.followers}</li>
                  <li><strong>Following :</strong>${user.following}</li>
                  <li><strong>Repos :</strong>${user.public_repos}</li>
                  <li><strong>Twitter :</strong> ${user.twitter_username}</li>
                  <li><strong>Location :</strong>${user.location}</li>
              </ul>
              <div id="repos"></div>
          </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}
