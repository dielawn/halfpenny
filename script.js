const bio = `Jim is an author, scientist, educator whose interest in COLD (altitudinal, latitudinal, and seasonal) has taken him to all seven continents and Greenland. Jim's specialities include environmental ecology, animal tracking, and carnivores; his greatest academic love, bears, led to 20 years studying black, grizzly and polar bears. He also works with wolverine, lynx, cougar and wolves. Jim has written over 25 books and videos including his latest, Yellowstone Bears in the Wild and Track Plates for Mammals. He led the American East Greenland expeditions in 1975 and 1976 and is a Fellow of the Explorer's Club and received the Antarctic Service medal. Jim is past Chairman of the Board of Directors, senior instructor, and administrative liason officer of the National Outdoor Leadership School. Currently Jim is President of A Naturalist's World, an ecological education company. A past Research Fellow of the Institute of Arctic and Alpine Research, Jim was Director of the Mountain Research Station and the Long-Term Ecological Research program in the Alpine. He is listed in Who's Who in the World 1989-1993, Who's Who in Emerging Leaders 1989-1996, Who's Who in Western America 1987-1997 and Who's Who In Science. A Vietnam veteran, Jim received the Navy Achievement Medal with Combat "V" and Vietnamese Gallantry Cross with Palm. Jim received his Ph.D. in 1980 in Biology, Ecology, & Mammalogy from the University of Colorado. His B.S. in 1969 and M.S. in 1970 both in Botany & Ecology from the University of Wyoming. At the University of Wyoming, Jim was on the President's Academic Honor Roll, University of Wyoming and a four-year letterman in diving, swimming and water polo.`

const books = [
    {
        title: "A Fied Guide to Mammal Tracking in North America",
        authors: ["James Halfpenny"],
        imgCredit: "Elizabeth Biesiot",
        year: '1986',
        img: 'images/mammalTrackingBk.jpeg',
        desc: "Currently out of print and a collector's item.",
        id: 'mammalTracking',
    },
    {
        title: "Track Plates for Mammals A How to Manual & Aid to Footprint Identification",
        authors: ["James Halfpenny, Ph.D.", "Meghan Walla-Murphy, M.A.", "Elizabeth Rodgers Ph.D.", "Dave Tiller, B.S."],
        imgCredit: null,
        year: '2009',
        img: 'images/track-platesBk.jpg',
        desc: 'Designing and using track plates to obtain footprints.',
        id: 'trackPlates',
    },
    {
        title: "Tracker's Notebook",
        authors: authors = ["James Halfpenny"],
        imgCredit: null,
        year: '1994',
        img: 'images/trackers-padBk.jpeg',
        desc: 'A preformatted field book for taking notes on plasticized paper.',
        id: 'trackersNotebook',
    },
    {
        title: "Tracking Canids",
        authors: authors = ["James Halfpenny, Ph.D.", "Darren S. Ireland", "Lara N. Bonn", "Diann Thompson, BSN"],
        imgCredit: null,
        year: '1994',
        img: 'images/trackers-padBk.jpeg',
        desc: 'Database of footprints from red foxes, coyotes, wolves and many dog breeds.',
        id: 'trackingCanids',
    },
    {
        title: "Tracking Cougars",
        authors: authors = ["James Halfpenny, Ph.D.", "Darren S. Ireland", "Lara N. Bonn", "Diann Thompson, BSN"],
        imgCredit: null,
        year: '1997 & 2007',
        img: 'images/tracking-cougarsBk.jpeg',
        desc: "Jim's slide show made into a book.",
        id: 'trackingCougars',
    },
    {
        title: "Tracking Wolves The Basics",
        authors: authors = ["James Halfpenny, Ph.D.", "Darren S. Ireland", "Lara N. Bonn", "Diann Thompson, BSN"],
        imgCredit: null,
        year: '2010',
        img: 'images/tracking-wolvesBk.jpg',
        desc: "The essential guide to understanding wolf footprints, trails and other signs in North America.",
        id: 'trackingWolves',
    },

]
const containerDiv = document.getElementById('container')
function SuperElement(parent, type, content, className, id) {
    this.el = document.createElement(type)
    this.el.innerText = content
    this.el.classList.add(className)
    this.el.id = id
    parent.appendChild(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el.id)
    })
} 

SuperElement(containerDiv, 'div', '', 'navDiv', 'navDiv')
const navDiv = document.getElementById('navDiv')

SuperElement(navDiv, 'img', '', 'icon', 'treesIcon')
const treesIcon = document.getElementById('treesIcon')
treesIcon.src = 'images/forest_FILL0_wght400_GRAD0_opsz48.png'

SuperElement(navDiv, 'h1', 'Jim Halfpenny', 'navTitle', 'navTitle')

const navLinks = [ 'Home', 'Education', 'About']

const createLinks = (array) => {
    array.map(item => {
        return new SuperElement(navDiv, 'h3', item, 'navLinks', item +'Link')
    })
}

createLinks(navLinks)

SuperElement(containerDiv, 'div', '', 'bannerDiv', 'bannerDiv')
const bannerDiv = document.getElementById('bannerDiv')

SuperElement(bannerDiv, 'img', '', 'jimBoatImg', 'jimBoatImg')
const jimBoatImg = document.getElementById('jimBoatImg')
jimBoatImg.src = 'images/jim-boat-deck.jpg'

SuperElement(containerDiv, 'div', '', 'transitionDiv', 'transitionDiv')
const transitionDiv = document.getElementById('transitionDiv')
SuperElement(transitionDiv, 'img', '', 'icon', 'mountainIcon')
const mountainIcon = document.getElementById('mountainIcon')
mountainIcon.src = 'images/landscape_FILL0_wght400_GRAD0_opsz48.png'
SuperElement(transitionDiv, 'h4', 'Ph.D. 1980 Biology, Ecology, & Mammalogy University of Colorado', 'transitionTxt', 'phdTxt')
SuperElement(transitionDiv, 'img', '', 'icon', 'leafIcon')
const leafIcon = document.getElementById('leafIcon')
leafIcon.src = 'images/eco_FILL0_wght400_GRAD0_opsz48.png'
SuperElement(transitionDiv, 'h4', 'M.S. 1970 Botany & Ecology University of Wyoming', 'transitionTxt', 'mastersTxt')
SuperElement(transitionDiv, 'h4', "Currently Jim is President of A Naturalist's World, an ecological education company.", 'transitionTxt', 'naturalistTxt')

SuperElement(containerDiv, 'div', '', 'naturalistWrldDiv', 'naturalistWrldDiv' )
const naturalistWrldDiv = document.getElementById('naturalistWrldDiv')
SuperElement(naturalistWrldDiv, 'h1', "A Naturalist's World", 'headerTxt', '')
const naturalistWrldDescTxt = `Thank you for visiting our field class listing and product information site. A Naturalist's World is dedicated to providing educational programs and materials about natural history and ecology.Classes include tracking, carnivore ecology, wildlife observation, rare species, northern lights, and alpine and winter ecology. Instructional programs vary from 1 day to 2 weeks. Programs provided at locations across North America. Special Events and Offerings are listed below.For other materials and to register for classes go to the top of this page, select a topic, and visit the new page to view offerings.A Naturalist's World is permitted operator in Yellowstone National Park Authorized Permittee of the Yellowstone National Park`
SuperElement(naturalistWrldDiv, 'p', naturalistWrldDescTxt, 'naturalistWrldDescTxt', 'naturalistWrldDescTxt')



SuperElement(containerDiv, 'div', '', 'headerDiv', 'bookHeaderDiv')
const bookHeaderDiv = document.getElementById('bookHeaderDiv')
// SuperElement(bookHeaderDiv, 'img', '', 'icon', 'pawIcon')
// const pawIcon = document.getElementById('pawIcon')
// pawIcon.src = 'images/pets_FILL0_wght400_GRAD0_opsz48.png'
SuperElement(bookHeaderDiv, 'h2', 'Books', 'headerTxt', 'booksHeader')

SuperElement(containerDiv, 'div', '', 'bookDiv', 'bookDiv')
const bookDiv = document.getElementById('bookDiv')

const renderBookCards = () => {
    
  books.forEach(book => {
        SuperElement(bookDiv, 'div', '', 'bookCard', `${book.id}Card`)
        const cardId = book.id+'Card'
        const cardDiv = document.getElementById(cardId)
        SuperElement(cardDiv, 'h4', book.title, 'bookTitleTxt', '')
        const bookId = book.id + 'Img'
        SuperElement(cardDiv, 'img', '', 'bookImg', bookId)        
        const bookImg = document.getElementById(bookId)
        bookImg.src = book.img
        
        book.authors.map(item => {
            return new SuperElement(cardDiv, 'p', item, 'authorTxt', '')
        })
        if(book.imgCredit != null) {
            SuperElement(cardDiv, 'p', `Illustrations by ${book.imgCredit}`, 'imgCreditTxt', '')
        }
   })
}
renderBookCards()



