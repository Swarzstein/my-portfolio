const info = {
  intro: {
    eng: "Hello, I'm",
    spa: "Hola, soy",
    classicalSpaAlj: "Hola, soy",
    modernSpaAlj: "Hola, soy",
    uySpa: "Hola, soy",
    faSpa: "Hola, soy",
    kuEng: "Hello, I'm",
  },
  aboutMe: {
    eng: "I'm a software developer with a passion for creating and developing web applications.",
    spa: "Soy un desarrollador de software con pasión por crear y desarrollar aplicaciones web.",
    classicalSpaAlj: "Soy un desarrollador de software con pasión por crear y desarrollar aplicaciones web.",
    modernSpaAlj: "Soy un desarrollador de software con pasión por crear y desarrollar aplicaciones web.",
    uySpa: "Soy un desarrollador de software con pasión por crear y desarrollar aplicaciones web.",
    faSpa: "Soy un desarrollador de software con pasión por crear y desarrollar aplicaciones web.",
    kuEng: "I'm a software developer with a passion for creating and developing web applications.",
  },
  socialMedia: [
    {
      name: 'GitHub',
      url: '',
    },
  ],
  projects: [
    {
      name: {
        eng: "Portfolio",
        spa: "Portafolio",
        classicalSpaAlj: "Portafolio",
        modernSpaAlj: "Portafolio",
        uySpa: "Portafolio",
        faSpa: "Portafolio",
        kuEng: "Portfolio",
      },
      description: {
        eng: "This is my portfolio, where I showcase my projects and skills.",
        spa: "Este es mi portafolio, donde muestro mis proyectos y habilidades.",
        classicalSpaAlj: "Este es mi portafolio, donde muestro mis proyectos y habilidades.",
        modernSpaAlj: "Este es mi portafolio, donde muestro mis proyectos y habilidades.",
        uySpa: "Este es mi portafolio, donde muestro mis proyectos y habilidades.",
        faSpa: "Este es mi portafolio, donde muestro mis proyectos y habilidades.",
        kuEng: "This is my portfolio, where I showcase my projects and skills.",
      },
      image: {
        desktop: {
          src: 'images/portfolio-desktop.png',
          alt: 'Portfolio desktop',
        },
        mobile: {
          src: 'images/portfolio-mobile.png',
          alt: 'Portfolio mobile',
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      source: '',
      demo: '',
    },
    {
      name: {
        eng: "Weather App",
        spa: "App del Clima",
        classicalSpaAlj: "App del Clima",
        modernSpaAlj: "App del Clima",
        uySpa: "App del Clima",
        faSpa: "App del Clima",
        kuEng: "Weather App",
      },
      description: {
        eng: "This is a weather app that shows the current weather and the forecast for the next 7 days.",
        spa: "Esta es una app del clima que muestra el clima actual y el pronóstico para los próximos 7 días.",
        classicalSpaAlj: "Esta es una app del clima que muestra el clima actual y el pronóstico para los próximos 7 días.",
        modernSpaAlj: "Esta es una app del clima que muestra el clima actual y el pronóstico para los próximos 7 días.",
        uySpa: "Esta es una app del clima que muestra el clima actual y el pronóstico para los próximos 7 días.",
        faSpa: "Esta es una app del clima que muestra el clima actual y el pronóstico para los próximos 7 días.",
        kuEng: "This is a weather app that shows the current weather and the forecast for the next 7 days.",
      },
      image: {
        desktop: {
          src: 'images/weather-app-desktop.png',
          alt: 'Weather app desktop',
        },
        mobile: {
          src: 'images/weather-app-mobile.png',
          alt: 'Weather app mobile',
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      source: '',
      demo: '',
    },
    {
      name: {
        eng: "Calculator",
        spa: "Calculadora",
        classicalSpaAlj: "Calculadora",
        modernSpaAlj: "Calculadora",
        uySpa: "Calculadora",
        faSpa: "Calculadora",
        kuEng: "Calculator",
      },
      description: {
        eng: "This is a calculator app that can perform basic arithmetic operations.",
        spa: "Esta es una calculadora que puede realizar operaciones aritméticas básicas.",
        classicalSpaAlj: "Esta es una calculadora que puede realizar operaciones aritméticas básicas.",
        modernSpaAlj: "Esta es una calculadora que puede realizar operaciones aritméticas básicas.",
        uySpa: "Esta es una calculadora que puede realizar operaciones aritméticas básicas.",
        faSpa: "Esta es una calculadora que puede realizar operaciones aritméticas básicas.",
        kuEng: "This is a calculator app that can perform basic arithmetic operations.",
      },
      image: {
        desktop: {
          src: 'images/calculator-desktop.png',
          alt: 'Calculator desktop',
        },
        mobile: {
          src: 'images/calculator-mobile.png',
          alt: 'Calculator mobile',
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      source: '',
      demo: '',
    },
  ],
}

const toSpanish = () => {
  const headline = document.getElementById('headline').querySelectorAll('div');
  headline[0].querySelector('h1').textContent = info.intro.spa;
  
}