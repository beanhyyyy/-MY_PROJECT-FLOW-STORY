// import muliExtraLight from '../fonts/Mulish/Mulish-ExtraLight.ttf'; // 200
import muliLightItalic from '../fonts/Mulish/Mulish-LightItalic.ttf'; // 300
import muliLight from '../fonts/Mulish/Mulish-Light.ttf'; // 300
import muliItalic from '../fonts/Mulish/Mulish-Italic.ttf'; // 400
import muliRegular from '../fonts/Mulish/Mulish-Regular.ttf'; // 400
import muliMediumItalic from '../fonts/Mulish/Mulish-MediumItalic.ttf'; // 500
import muliMedium from '../fonts/Mulish/Mulish-Medium.ttf'; // 500
// import muliSemibold from '../fonts/Mulish/Mulish-SemiBold.ttf'; // 600
import muliBoldItalic from '../fonts/Mulish/Mulish-BoldItalic.ttf'; // 700
import muliBold from '../fonts/Mulish/Mulish-Bold.ttf'; // 700
// import muliExtrabold from '../fonts/Mulish/Mulish-ExtraBold.ttf'; // 800
import muliBlackItalic from '../fonts/Mulish/Mulish-BlackItalic.ttf'; // 900
import muliBlack from '../fonts/Mulish/Mulish-Black.ttf'; // 900

/* https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap */
/* các mã unicode của vietnam, latin-ext, latin */
const unicodeVn =
  'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
const unicodeLatinExt =
  'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
const unicodeLatin =
  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';

/* các font, bao gồm: fontWeight và fontStyle của nó */
const fonts = [
  {
    fontWeight: 300,
    fontStyles: {
      italic: muliLightItalic,
      normal: muliLight,
    },
  },
  {
    fontWeight: 400,
    fontStyles: {
      italic: muliItalic,
      normal: muliRegular,
    },
  },
  {
    fontWeight: 500,
    fontStyles: {
      italic: muliMediumItalic,
      normal: muliMedium,
    },
  },
  {
    fontWeight: 700,
    fontStyles: {
      italic: muliBoldItalic,
      normal: muliBold,
    },
  },
  {
    fontWeight: 900,
    fontStyles: {
      italic: muliBlackItalic,
      normal: muliBlack,
    },
  },
];
/* Fix load font: https://web.dev/font-display/ */

// format('truetype') nếu font dạng .ttf
// format('woff2') nếu font .woff2
// https://stackoverflow.com/questions/56286422/implement-self-hosted-font-in-material-ui-custom-theme-reactjs
/* trả về mảng các fontfaces dùng để đưa vào createMuiTheme() overrides lại fontface của MUI */
function getFontfacesArray() {
  const unicodeArray = [unicodeVn, unicodeLatinExt, unicodeLatin]; // các mã unicode cần có
  let allFontfaces = []; // mảng chứa toàn bộ fontface

  fonts.forEach(thisFont => {
    const { fontWeight, fontStyles } = thisFont; // lấy thông tin weight, style của font
    const fontStyleKeys = Object.keys(fontStyles); // lấy các style của font này

    let thisFontfaces = []; // mảng chứa các fontface của font này

    fontStyleKeys.forEach(fontStyleKey => {
      const fontfaceByUnicode = unicodeArray.map(unicode => ({
        fontWeight,
        fontStyle: fontStyleKey,
        fontFamily: 'Mulish',
        fontDisplay: 'swap',
        src: `
            local('${fontStyles[fontStyleKey]}'), 
            url(${fontStyles[fontStyleKey]}) format('truetype')`,
        unicodeRange: unicode,
      })); // các fontface của font này theo chuẩn unicode
      thisFontfaces = thisFontfaces.concat(fontfaceByUnicode); // gom lại về font
    });

    allFontfaces = allFontfaces.concat(thisFontfaces); // gom vào mảng tổng
  });

  // console.error('allFontfaces : ', allFontfaces);
  return allFontfaces;
}

const mulishFontfaces = getFontfacesArray(); /* mảng các font-face */

export default mulishFontfaces;
