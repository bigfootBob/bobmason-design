export const SOCIALS = {
  LINKEDIN: 'https://www.linkedin.com/in/robert-bob-mason/',
  GITHUB: 'https://github.com/BigfootBob', 
  EMAIL: 'mailto:bob.j.mason+resume@gmail.com' 
};

export const CLOUDINARY_CONFIG = {
  CLOUD_NAME: 'BobMasonDesign',
  BASE_URL: 'https://res.cloudinary.com/BobMasonDesign/image/upload/',
  DEFAULT_TRANSFORM: 'f_auto,q_auto/' 
};

export const getCloudinaryUrl = (path, transformations = '') => {
  const transformString = transformations ? `${transformations}/` : '';
  return `${CLOUDINARY_CONFIG.BASE_URL}${CLOUDINARY_CONFIG.DEFAULT_TRANSFORM}${transformString}${path}`;
};