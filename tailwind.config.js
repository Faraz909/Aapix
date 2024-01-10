/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {

      keyframes: {
        movit: {
          '0%': { transform:'translateX(100px)'},
          '100%': { opacity:'translateX(0px)'},
        },
      },
      keyframes: {
        movittop: {
          '0%': { transform:'translateX(100px)'},
          '100%': { opacity:'translateX(0px)'},
        },
      },
      keyframes: {
        movittop: {
          '0%': { transform:'translateY(100px)',opacity:'0'},
          '100%': { transform:'translateY(0px)',opacity:'1'},
        },
      },
      keyframes: {
        crawl: {
          '0%': { transform:'translateX(200px)'},
          '100%': { transform:'translateX(-500px)'},
        },
      },
      // keyframes: {
      //   movittopd: {
      //     '0%': { transform:'translateY(100px)',opacity:'0'},
      //     '100%': { transform:'translateY(0px)',opacity:'1'},
      //   },
      // },

      
    //    keyframes: {
    //   fadeIn: {
    //     '0%': { opacity:'0'},
    //     '100%': {opacity:'1' },
    //   },
    // },
    animation:{
      fadeIn: 'fadeIn 3s ease-in-out',
      crawl: 'crawl 3s ease-in-out infinite',
      spin: 'spin 6s infinite ',
      movit:'movit 2s ease-in-out infinite',
      movittop:'movittop 2s ease-in-out  ',
      // movittopd:'movittopd 2s ease-in-out ',
      bounce:'bounce 9s ease-in-out infinite',
    },
    },
  },
  plugins: [],
}

