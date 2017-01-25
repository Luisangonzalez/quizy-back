export const getOne = (model) => {
  return new Promise(function (resolve, reject) {
    model.findOne().exec((err, model) => {
      if (err) {
        reject(err);
      } else {
        resolve(model);
      }
    });
  });
};
