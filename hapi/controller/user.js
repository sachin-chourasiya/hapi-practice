const { save } = require('../service/user');

exports.save = async (request, h) => {
  console.log("test-------------");
  try {
    const userData = await save({
      name: request.payload.name,
      age: request.payload.age,
      city: request.payload.city,
      email: request.payload.email
    });
    return h.userData;
    
  } catch (err) {
    console.log(err);
  }

}