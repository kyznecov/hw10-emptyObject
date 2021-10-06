function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  };


 let user1 = {
     firsName: "vasya",
     age: 33,
 };

 let user2 = {};

 console.log(isEmpty(user1));