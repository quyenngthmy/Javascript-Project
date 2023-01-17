const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#DEF5D9",
    200: "#AEE4AD",
    300: "#73C686",
    400: "#28A745",
    500: "#008E39",
  },
  info: {
    100: "#E2F1FF",
    200: "#ADD9FF",
    300: "#72B7FB",
    400: "#28A745",
    500: "#006EEF",
  },
  warning: {
    100: "#FFF6D9",
    200: "#FFE1A8",
    300: "#FDC66E",
    400: "#F0A328",
    500: "#E99208",
  },
  error: {
    100: "#FDECEF",
    200: "#FFABB5",
    300: "#FA8091",
    400: "#EA3E53",
    500: "#DA072D",
  },
  primary: {
    1: '#FEF2E4',
    2: '#CDC7F4',
    3: '#AFA4EF',
    4: '#8B77EA',
    5: '#5928E5',
  },
  secondary: {
    1: '#FEF2E4',
    2: '#FFF0F0',
    3: '#FFE8E8',
    4: '#FFE1E1',
    5: '#FFD9D9',
  },
  'neutral-1': {
    900: '#161C24',
    800: '#212B36',
    700: '#454F5B',
    600: '#637381',
    500: '#919EAB',
    400: '#C4CDD5',
    300: '#DFE3E8',
    200: '#F4F6F8',
    100: '#F9FAFB',
  },
  'neutral-2': {
    300: '#DAE0E6',
    200: '#E2E7ED',
    100: '#E9EDF2',
    50: '#F2F4F7',
  },
  'neutral-3': {
    300: '#E3E6E9',
    200: '#EBEDEF',
    100: '#F0F1F3',
    50: '#F8F9FB',
  },
  
  gradient: {
    1: {
      start: "#5928E5",
      // mid:'',
      end: "#FEDDDE",
    },
  },


}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
        'display-1': ['120px', 'auto'],
        'heading-2': ['70px', '48px'],
        'heading-3': ['53px', '48px'],
        'heading-4': ['40px', '48px'],
        'heading-5': ['48px', '48px'],
        'title-1': ['20px', '24px'],
        'title-2': ['24px', '36px'],
        'title-3': ['24px', '32px'],
        'title-4': ['32px', '48px'],
        'title-5': ['32px', 'auto'],
        'title-6': ['20px', '32px'],
        'body-1': ['16px', '24px'],
        'body-2': ['16px', '24px'],
        'body-3': ['18px', '24px'],
        'body-4': ['18px', '36px'],
        'body-5': ['18px', 'auto'],
        'body-6': ['18px', '24px'],
        'body-7': ['18px', '24px'],
        'body-8': ['16px', '24px'],
        'caption-1': ['14px', '24px'], 
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        beVietnamPro: ['BeVietnamPro', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        svnGilroy: ['SVN-Gilroy', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': "linear-gradient(360deg, rgba(255, 217, 217, 0.1) 2.49%, rgba(247, 166, 166, 0.1) 21.95%, rgba(247, 166, 166, 0.1) 83.08%, rgba(255, 217, 217, 0.1) 97.61%)",
        'gradient-3': "linear-gradient(86.58deg, #5928E5 37.02%, #FEDDDE 174.15%)",
        'text': "linear-gradient(86.58deg, #5928E5 37.02%, #FEDDDE 174.15%)",
        'gradient-2': "linear-gradient(0deg, #FCEDF2 -56.3%, rgba(255, 252, 253, 0) 100%)",
        'intro1': "url('/src/img/home/image3.png')",
        'intro2': "url('/src/img/home/image4.png')",
        'intro3': "url('/src/img/home/image5.png')",
        'intro-opa': "linear-gradient(180deg, rgba(255, 255, 255, 0) 59.12%, #343434 100%)",
        'teacher': "linear-gradient(86.58deg, #5928E5 37.02%, #FEDDDE 174.15%)",
        'form': "url('/src/img/home/bgTeacher.png')",
        'courseIntroMob': "url('/src/img/courses/bgIntroMob.png')",
        'courseIntroTab': "url('/src/img/courses/bgIntroTab.png')",
        'courseIntro': "url('/src/img/courses/bgIntro.jpg')",
        // 'block' : "url('/src/img/home/block.png')",
        'block' : "radial-gradient(58.22% 58.22% at 56.05% 39.71%, #5928E5 11%, rgba(104, 145, 221, 0.15) 100%)",
      },
      animation: {
        'header': 'spin 300ms ease-in-out infinite',
      },
      boxShadow: {
        primary: "0px 0px 0px 3px rgba(40, 167, 69, 0.2)",
        success: "0px 0px 0px 3px rgba(40, 167, 69, 0.2)",
        error: "0px 0px 0px 3px rgba(235, 59, 91, 0.2)",
        info: "0px 0px 0px 3px rgba(35, 149, 255, 0.2)",
        warning: "0px 0px 0px 3px rgba(255, 193, 7, 0.2)",
        "1-lg": "0px 1px 10px rgba(29, 45, 73, 0.102)",
        "1-sm": "0px 4px 18px rgba(93, 79, 255, 0.1)",
        "1-md": "0px 1px 3px rgba(29, 45, 73, 0.102)",
        "2-md": "0px 1px 6px rgba(29, 45, 73, 0.102)",
        "1-xl": "0px 1px 15px rgba(29, 45, 73, 0.14)",
        input:"0px 4px 30px rgba(40, 53, 51, 0.15)",
      },
      dropShadow: {
        '1-md': "0px 1px 6px rgba(29, 45, 73, 0.102)",
      },
      spacing: {
        '15' : "60px",
      },
      gridTemplateColumns: {
        'imagesColMob' : '200px 146px 174px 240px 168px 130px 76px 55px 98px 56px',
        'imagesCol' : '320px 276px 320px 406px 288px 230px 80px 152px 108px 152px',
      },
      gridTemplateRows: {
        'imagesRowMob' : '8px 4px 44px 4px 4px 64px 28px 50px 30px 32px 32px 56px',
        'imagesRow' : '30px 40px 20px 6px 168px 32px 60px 154px 42px 18px 32px',
      },
      transitionProperty: {
        'bg-size' : 'background-size',
      },
      backgroundPosition:{
        'circle' : '50% 50%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};