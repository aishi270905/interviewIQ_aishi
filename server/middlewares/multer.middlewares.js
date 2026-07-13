import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public")
    },
    filename: function(req, file, cb){
        const filename = Date.now() + "-" + file.originalname;
        cb(null, filename)
    }
})

/*its a middleware that is used to set the storage through multer
  now through this upload function we can put the storage inside the multer
  so where ever we put this upload in the middleware, the file we get from there will be uploaded to the public folder*/

//the function of the upload => (to upload the resume file to the public folder in backend )
//AI will go to the public folder and start to read the resume file for analysing
export const upload = multer({
    storage, //it will take the destination and the filename of the file
    limits: {fileSize: 5 * 1024 * 1024} //5MB max file size
})