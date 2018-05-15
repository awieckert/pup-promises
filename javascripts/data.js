const dom = require('./dom.js');

// const getAllPups = () => {
//   let allThePups = [];
//   $.get('../db/pup1.json').done((data1) => {
//     allThePups = [...data1.pup1,];
//     $.get('../db/pup2.json').done((data2) => {
//       allThePups = [...allThePups,...data2.pup2,];
//     })
//       .fail((error2) => {
//         console.error('Poop2!');
//       });
//     $.get('../db/pup3.json').done((data3) => {
//       allThePups = [...allThePups,...data3.pup3,];
//       dom(allThePups);
//     })
//       .fail((error3) => {
//         console.error('Poop3!');
//       });
//   })
//     .fail((error1) => {
//       console.error('Poop!');
//     });
// };

const firstPupJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/pup1.json').done((data) => {
      resolve(data.pup1);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const secondPupJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/pup2.json').done((data2) => {
      resolve(data2.pup2);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const thirdPupJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/pup3.json').done((data3) => {
      resolve(data3.pup3);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON().then((result) => {
//     dogos = [...result,];
//     return secondPupJSON();
//   }).then((result2) => {
//     dogos = [...dogos, ...result2,];
//     return thirdPupJSON();
//   }).then((result3) => {
//     dogos = [...dogos, ...result3,];
//     return Promise.resolve(dogos);
//   }).catch((errorMSG) => {
//     console.error(errorMSG);
//   });
// };

const firstFoodJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/food1.json').done((data) => {
      resolve(data.food1);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const secondFoodJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/food2.json').done((data2) => {
      resolve(data2.food2);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const thirdFoodJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/food3.json').done((data3) => {
      resolve(data3.food3);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const getAllPups = () => {
  return Promise.all([firstPupJSON(), secondPupJSON(), thirdPupJSON(),])
    .then((results) => {
      const dogos = [...results[0], ...results[1], ...results[2],];
      return Promise.resolve(dogos);
    }).catch((error) => {
      console.error(error);
    });
};

const getAllFoods = () => {
  return Promise.all([firstFoodJSON(), secondFoodJSON(), thirdFoodJSON(),])
    .then((results) => {
      const foods = [...results[0], ...results[1], ...results[2],];
      return Promise.resolve(foods);
    }).catch((error) => {
      console.error(error);
    });
};

const singlePup = () => {
  let pup = {};
  getAllPups().then((pups) => {
    pup = pups[0];
    return getAllFoods();
  }).then((foodz) => {
    pup.favFoods = foodz;
  });
};

const initializer = () => {
  getAllPups().then((dogos) => {
    dom(dogos);
  });
  singlePup();
};

module.exports = {
  initializer,
  singlePup,
};
