const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const generateSocialImage = ({
  title,
  date = "",
  imagePublicId,
  twitterName,
  titleFont = "ABeeZee",
  titleWeight = "bold",
  imageWidth = 1200,
  imageHeight = 630,
  textAreaWidth = 630,
  textAreaHeight = 450,
  textLeftOffset = 45,
  textBottomOffset = 50,
  dateLeftOffset = 45,
  dateBottomOffset = 160,
  dateFontSize = 30,
  twitterBorderWidth = "5px",
  twitterWidth = 130,
  twitterHeight = 130,
  twitterLeftOffset = 45,
  twitterBottomOffset = 75,
  textColor = "FFFFFF",
  titleFontSize = 60,
}) => {
  return cloudinary.url(imagePublicId, {
    transformation: [
      {
        width: imageWidth,
        height: imageHeight,
        fetch_format: "auto",
        crop: "fill",
      },
      // Twitter Image Overlay
      {
        overlay: `twitter_name:${twitterName}`,
      },
      {
        width: twitterWidth,
        height: twitterHeight,
        crop: "thumb",
        gravity: "faces",
        radius: "max",
        border: `${twitterBorderWidth}_solid_rgb:${textColor}`,
      },
      {
        flags: "layer_apply",
        gravity: "north_west",
        x: twitterLeftOffset,
        y: twitterBottomOffset,
      },
      // Text Overlay
      {
        overlay: {
          font_family: titleFont,
          font_size: titleFontSize,
          font_weight: titleWeight,
          text: title,
        },
        width: textAreaWidth,
        height: textAreaHeight,
        crop: "fit",
        color: `#${textColor}`,
      },
      {
        flags: "layer_apply",
        gravity: "west",
        x: textLeftOffset,
        y: textBottomOffset,
      },
    ],
  });
};
