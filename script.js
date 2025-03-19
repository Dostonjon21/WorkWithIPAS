// let obj = {
//     get propName() {
//       // геттер, срабатывает при чтении obj.propName
//     },
  
//     set propName(value) {
//       // сеттер, срабатывает при записи obj.propName = value
//     }
//   };
//   console.log(obj);
  

// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   alert(user.fullName); 


// async function showAvatar() {

//     // запрашиваем JSON с данными пользователя
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
  
//     // запрашиваем информацию об этом пользователе из github
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();
  
//     // отображаем аватар пользователя
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
  
//     // ждём 3 секунды и затем скрываем аватар
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
//     img.remove();
  
//     return githubUser;
//   }
  
//   showAvatar();
//   console.log('end');
  

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
  
    return loadJson(`https://api.github.com/users/${name}`)
      .then(user => {
        alert(`Полное имя: ${user.name}.`);
        return user;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }
  
  demoGithubUser();