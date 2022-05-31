module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen:{
      sm: "576",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
      fontFamily:{
        poppins:"'Poppins',sans-serif",
        roboto:"'Roboto',sans-serif "
      },
      colors:{
        'primary': "#fD3D57"
      },
      
    },
  },
 
  plugins: [require('@tailwindcss/forms')],
}