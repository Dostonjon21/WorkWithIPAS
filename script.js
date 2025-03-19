// let obj = {
//     get propName() {
//       // геттер, срабатывает при чтении obj.propName
//     },
  
//     set propName(value) {
//       // сеттер, срабатывает при записи obj.propName = value
//     }
//   };
//   console.log(obj);
  

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  alert(user.fullName); 