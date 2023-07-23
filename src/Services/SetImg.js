import { baseUrlImg } from './MoviesAPI';
import defaultImg from '../Images/defaultUser.jpg';
export default function SetImg(imgPath) {
  //   console.log('imgPath: ', imgPath);

  if (imgPath === null || imgPath.includes('secure.gravatar')) {
    return defaultImg;
  } else {
    return `${baseUrlImg}${imgPath}`;
  }
}
