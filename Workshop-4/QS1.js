function getFruit(fruit) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fruit === "watermelon") {
          reject("Sorry, we're out of watermelons");
        } else {
          resolve(`Here is your ${fruit}`);
        }
      }, 1000);
    });
  }

  
  getFruit("apple")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

  getFruit("watermelon")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
