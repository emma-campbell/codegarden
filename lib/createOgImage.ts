// https://delba.dev/blog/next-blog-generate-og-image

// double escape for commas and slashes
const encode = (str: string) => encodeURIComponent(encodeURIComponent(str));

export const generateSocialImage = ({
  title,
  cloudName,
  imagePublicId,
  twitterName,
  cloudinaryBase = "https://res.cloudinary.com",
  version = null,
  titleFont = "Montserrat",
  titleWeight = "_medium",
  imageWidth = 1200,
  imageHeight = 630,
  textAreaWidth = 630,
  textAreaHeight = 450,
  textLeftOffset = 45,
  textBottomOffset = 0,
  textColor = "FFFFFF",
  titleFontSize = 60,
}) => {
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    "c_fill",
    "f_auto",
  ].join(",");

  const titleConfig = [
    `w_${textAreaWidth}`,
    `h_${textAreaHeight}`,
    "c_fit",
    `co_rgb:${textColor}`,
    "g_west",
    `x_${textLeftOffset}`,
    `y_${textBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}${titleWeight}:${encodeURIComponent(
      title
    )}`,
  ].join(",");

  const socialImageConfig = [
    `l_twitter_name:${twitterName}`,
    `c_thumb,g_face,r_max,w_130,h_130`,
    `fl_layer_apply,g_north_west,x_45,y_75`,
  ].join(",");

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryBase,
    cloudName,
    "image",
    "upload",
    imageConfig,
    socialImageConfig,
    titleConfig,
    version,
    imagePublicId,
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join("/");
};
