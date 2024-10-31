

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')                    
}

window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()  =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true  // Anomation repeat
})
const sr2 = ScrollReveal({
    origin: 'top',
    distance: '6px',
    duration: 2500,
    delay: 400,
    reset: true  // Anomation repeat
})

sr.reveal(`.home__data, .products__data, .steps__content,
            .footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr2.reveal(`.products__card`, {interval: 100})
sr.reveal(`.about__img, .testimonial__img`, {origin: 'right'})
sr.reveal(`.about__data, .testimonial__data`, {origin: 'left'})

const jsonAm = {
    "home__title": "ጊዜው ለጥሩ ቡና",
    "home__subtitle":"ልዩ ጥራት",
    "home__description": "እያንዳንዱ የተመረጠ የቡና ፍሬ ምርጡን ቡና ወደ ጠረጴዛዎ የሚያመጡት ለፔሩ ቡና አብቃዮች ያለንን ቁርጠኝነት ያንፀባርቃል።"
    "products__button":"ወደ ታች ሸብልል",
    "products__description":"ከገበሬዎች ጋር ጥልቅ ትብብር ለመፍጠር እንጥራለን።  እይታን ለመፍጠር ከመላው አለም  አንድ ላይ እና ጤናማ የስራ ግንኙነት ይመሰርታሉ በመተማመን እና በመከባበር ላይ የተገነባ."}
  
  const jsonEN = {
    "home__title": "It's time for a good coffee",
    "home__subtitle":"EXCEPTIONAL QUALITY",
    "home__description": "Each select coffee bean reflects our commitment to Peruvian coffee growers, who bring the best select coffee to your table.",
    "products__button":" Scroll Down",
    "products__description":"We strive to form deep partnerships with farmers from all over the world to create perspective  together and form healthy working relationships built on trust and respect.",
  };
  
  document.querySelector('#language').addEventListener("change", function() {
    const selectedLanguage = this.value;
    const translations = selectedLanguage === "en" ? jsonEN : jsonAm;
  
    for (let key in translations) {
      const element = document.querySelector('.' + key);
      if (element) {
        element.textContent = translations[key];
      }
    }
  });
  

