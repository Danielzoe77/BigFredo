/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img' :"url('./src/assets/professional-cleaning-service-people-working-together-office.jpg')" ,
        'work-img' :"url('./src/assets/danny-min.jpg')"
      },
      fontFamily: {
        'primary' : ['Poppins', 'sans-serif'],
        'secondary' : ['Syne', 'sans-serif'] 
      },
      backgroundColor: {
        'mobile': "url('./src/assets/mmoble.png')",
        'desktop': "url('./src/assets/2148222311.jpg')",
      },
      colors: {
        // 'heroBg': '#00639b',
        'heroBg': '#bg-gradient-to-r from-[#77ABFF] from-30% to-[#77ABFF] to-100% ',
        "newHeroBg": '#bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ',
        'para' : 'rgb(0 0 0 / 0.8)',
        'primary' : '#00639b',
        // 'primary' : '#06a055',
    }
  },
  plugins: [],
}
}

