tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
         orange:'#F40404',
          copy:'#6C6C6C',
        },
        maxWidth:{
            'container':'1100px'
        },
        fontFamily:{
          'poppins': ['Poppins', 'sans-serif']
          
        },
        backgroundImage: {
          'banner': "url('./images/banner.png')",
         'ourimg':"url('./images/ourimg.png')",
         'lorem1':"url('./images/lorem1.png')",
         'lorem2':"url('./images/lorem2.png')",
         'lorem2':"url('./images/lorem.png')",
         
        },
        fontWeight:{
          normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
        }
      }
    }
  }