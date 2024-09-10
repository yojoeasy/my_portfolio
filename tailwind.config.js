tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto' : 'repeat(auto-fit , minmax(200px,1fr))'
            },
            fontFamily :{
                Outfit :["Outfit", "sans-serif"],
                Ova : ["Ova", "serif"]
            },
            animation:{
                spin_slow :'spin 6s linear infinite',
            },
            colors:{
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
                darkTheme : '#11001F'
            },
            boxShadow:{
                'shadowBlack' : '4px 4px 0 #000',
                'shadowWhite' : '4px 4px 0 #fff'
            }
            
    }
    },
    darkMode:'selector'
}