const multer = require('multer');
const path = require('path');

//Multer Config

module.exports = multer({
 //limits: { fileSize: 1024 * 1024 },
    storage: multer.diskStorage({}),
    filename: function (req, file, cb) {
        cb(null,`${path.extname(file.originalname)}-${Date.now()}`)
    }
    // fileFilter: (req, file, cb) => {
    //     let ext = path.extname(file.originalname); 
    //     // if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    //     //     cb(new Error('File type us not supported'), false);
    //     //     return
    //     // }
    //     cb(null, true);
  //  },
});