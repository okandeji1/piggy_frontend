// Next.js API route support: https://nextjs.org/docs/api-routes/introductionimport nextConnect from "next-connect";
import multer from "multer";
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
export default function handler(req, res) {
  const DIR = "../../public/uploads";
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, "-" + fileName);
    },
  });

  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });
  if (req.method === "POST") {
    // Process a POST request
    let file = req.body.file;
    upload.single("file");
    res.json({
      success: true,
      data: req.body.file,
    });
  } else {
    // Handle any other HTTP method
  }
}
