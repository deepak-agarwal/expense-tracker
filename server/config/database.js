const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/expense-tracker", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connection Established with db");
  })
  .catch(err => {
    console.log(err);
  });

// const GridFsStorage = require('multer-gridfs-storage');

// const storage = new GridFsStorage({
//   url: "mongodb://localhost/My_DB",
//   file: (req, file) => {
//     return {
//       filename: 'file_' + Date.now()
//     };
//   }
// });
module.exports = mongoose;
