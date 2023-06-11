const bio = `Jim is an author, scientist, educator whose interest in COLD (altitudinal, latitudinal, and seasonal) has taken him to all seven continents and Greenland. Jim's specialities include environmental ecology, animal tracking, and carnivores; his greatest academic love, bears, led to 20 years studying black, grizzly and polar bears. He also works with wolverine, lynx, cougar and wolves. Jim has written over 25 books and videos including his latest, Yellowstone Bears in the Wild and Track Plates for Mammals. He led the American East Greenland expeditions in 1975 and 1976 and is a Fellow of the Explorer's Club and received the Antarctic Service medal. Jim is past Chairman of the Board of Directors, senior instructor, and administrative liason officer of the National Outdoor Leadership School. Jim is President of A Naturalist's World, an ecological education company. A past Research Fellow of the Institute of Arctic and Alpine Research, Jim was Director of the Mountain Research Station and the Long-Term Ecological Research program in the Alpine. He is listed in Who's Who in the World 1989-1993, Who's Who in Emerging Leaders 1989-1996, Who's Who in Western America 1987-1997 and Who's Who In Science. A Vietnam veteran, Jim received the Navy Achievement Medal with Combat "V" and Vietnamese Gallantry Cross with Palm. Jim received his Ph.D. in 1980 in Biology, Ecology, & Mammalogy from the University of Colorado. His B.S. in 1969 and M.S. in 1970 both in Botany & Ecology from the University of Wyoming. At the University of Wyoming, Jim was on the President's Academic Honor Roll, University of Wyoming and a four-year letterman in diving, swimming and water polo.`
const aiBio = `Jim is a remarkable individual, a scientist, educator, and author with a profound fascination for the intriguing aspects of cold environments. His insatiable curiosity has led him to explore all seven continents, including Greenland, in his pursuit of understanding altitudinal, latitudinal, and seasonal variations. With a focus on environmental ecology, animal tracking, and carnivores, Jim has dedicated over two decades of his academic career to studying black, grizzly, and polar bears, nurturing a deep affection for these majestic creatures.<br><br>
Not limited to bears alone, Jim's expertise extends to other captivating species such as wolverines, lynxes, cougars, and wolves. His contributions to the field of wildlife research are evident in the extensive collection of over 25 books and videos he has authored, including his latest works, "Yellowstone Bears in the Wild" and "Track Plates for Mammals."<br><br>
In addition to his scientific pursuits, Jim has played instrumental roles in various expeditions and organizations. He led the American East Greenland expeditions in 1975 and 1976, receiving recognition as a Fellow of the Explorer's Club and the Antarctic Service Medal. As a past Chairman of the Board of Directors, senior instructor, and administrative liaison officer of the National Outdoor Leadership School, Jim has actively shaped and influenced the next generation of outdoor enthusiasts.<br><br>
Jim's commitment to ecological education led him to establish A Naturalist's World, a company dedicated to fostering environmental awareness. He served as a Research Fellow of the Institute of Arctic and Alpine Research and held positions as Director of the Mountain Research Station and the Long-Term Ecological Research program in the Alpine. His accomplishments have earned him listings in prominent publications such as Who's Who in the World 1989-1993, Who's Who in Emerging Leaders 1989-1996, Who's Who in Western America 1987-1997, and Who's Who In Science.<br><br>
As a Vietnam veteran, Jim's contributions extended beyond the realm of academia. He was honored with the Navy Achievement Medal with Combat "V" and Vietnamese Gallantry Cross with Palm for his service. Jim's educational journey culminated in the attainment of a Ph.D. in Biology, Ecology, & Mammalogy from the University of Colorado in 1980, building upon his earlier academic achievements—a B.S. in 1969 and M.S. in 1970 in Botany & Ecology from the University of Wyoming. Throughout his time at the University of Wyoming, Jim showcased his academic prowess, earning a place on the President's Academic Honor Roll and distinguishing himself as a four-year letterman in diving, swimming, and water polo.
With his extensive expertise and unwavering passion for the natural world, Jim remains a prominent figure in the scientific and educational communities, leaving an indelible impact on the North Range of Yellowstone National Park and beyond.<br>`
const books = [
    {
        title: "A Fied Guide to Mammal Tracking in North America",
        authors: ["James Halfpenny"],
        imgCredit: "Elizabeth Biesiot",
        year: '1986',
        img: 'images/tracking-mammal.jpg',
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
        img: 'images/tracking-canids.jpg',
        desc: 'Database of footprints from red foxes, coyotes, wolves and many dog breeds.',
        id: 'trackingCanids',
    },
    {
        title: "Tracking Cougars",
        authors: authors = ["James Halfpenny, Ph.D.", "Darren S. Ireland", "Lara N. Bonn", "Diann Thompson, BSN"],
        imgCredit: null,
        year: '1997 & 2007',
        img: 'images/tracking-cougars.jpg',
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
    this.el.innerHTML = content
    this.el.classList.add(className)
    this.el.id = id
    parent.appendChild(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el.id)
    })
} 

SuperElement(containerDiv, 'div', '', 'navDiv', 'navDiv')
const navDiv = document.getElementById('navDiv')
SuperElement(navDiv, 'span', 'forest', 'material-symbols-outlined', 'treesIcon')
SuperElement(navDiv, 'h1', 'Jim Halfpenny', 'navTitle', 'navTitle')
SuperElement(navDiv, 'div', '', 'linksDiv', 'linksDiv')
const navLinksDiv = document.getElementById('linksDiv')
const navLinks = [ 'Home', 'Resume', 'Gallery']
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

SuperElement(transitionDiv, 'div', '', 'iconTxtDiv', 'iconTxtDiv1')
const iconTxtDiv1 = document.getElementById('iconTxtDiv1')

SuperElement(iconTxtDiv1, 'span', 'landscape', 'material-symbols-outlined', 'mountainIcon' )
SuperElement(iconTxtDiv1, 'h4', 'Ph.D. 1980 Biology, Ecology, & Mammalogy University of Colorado', 'transitionTxt', 'phdTxt')

SuperElement(transitionDiv, 'div', '', 'iconTxtDiv', 'iconTxtDiv2')
const iconTxtDiv2 = document.getElementById('iconTxtDiv2')
SuperElement(iconTxtDiv2, 'span', 'eco', 'material-symbols-outlined', 'leafIcon')
SuperElement(iconTxtDiv2, 'h4', 'M.S. 1970 Botany & Ecology University of Wyoming', 'transitionTxt', 'mastersTxt')

SuperElement(transitionDiv, 'div', '', 'iconTxtDiv', 'iconTxtDiv3')
const iconTxtDiv3 = document.getElementById('iconTxtDiv3')
SuperElement(iconTxtDiv3, 'span', 'pets', 'material-symbols-outlined', 'pawIcon')
SuperElement(iconTxtDiv3, 'h4', "President of A Naturalist's World, an ecological education company.", 'transitionTxt', 'naturalistTxt')
SuperElement(containerDiv, 'div', '', 'bioDiv', 'bioDiv' )

const bioDiv = document.getElementById('bioDiv')
// SuperElement(bioDiv, 'h2', "Bio", 'titleTxt', 'bioHeader')
const naturalistWrldDescTxt = `Thank you for visiting our field class listing and product information site. A Naturalist's World is dedicated to providing educational programs and materials about natural history and ecology.Classes include tracking, carnivore ecology, wildlife observation, rare species, northern lights, and alpine and winter ecology. Instructional programs vary from 1 day to 2 weeks. Programs provided at locations across North America. Special Events and Offerings are listed below.For other materials and to register for classes go to the top of this page, select a topic, and visit the new page to view offerings.A Naturalist's World is permitted operator in Yellowstone National Park Authorized Permittee of the Yellowstone National Park`
SuperElement(bioDiv, 'p', aiBio, 'bioTxt', 'bioTxt')
SuperElement(containerDiv, 'div', '', 'headerDiv', 'bookHeaderDiv')
const bookHeaderDiv = document.getElementById('bookHeaderDiv')
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

SuperElement(containerDiv, 'div', ``, 'natWrldDiv', 'natWrldDiv')
const natWrldDiv = document.getElementById('natWrldDiv')
SuperElement(natWrldDiv, 'p', `A Naturalist World`, 'natWrldTxt', 'natWrldTxt')

const natWrldDesc = `Enhance your knowledge and skills of the natural arena!<br>
With an academic, field-experience mentored by Dr. Jim Halfpenny<br><br>
<em>Animal tracking<br><br>
Cold weather ecology<br><br>
General natural history<br><br>
Mammal ecology and behavior</em><br><br>
To learn more or register for a Residency, `

SuperElement(natWrldDiv, 'div', natWrldDesc, 'ntWrldDesc', 'ntWrldDesc')
const ntWrldDesc = document.getElementById('ntWrldDesc')
const natLinkElement = SuperElement(ntWrldDesc, 'a', 'Click Here', 'ntrWrldLink', 'ntrWrldLink')

const ntrWrldLink = document.getElementById('ntrWrldLink')
ntrWrldLink.href = 'https://www.tracknature.com/x/home.php#appSection'

SuperElement(containerDiv, 'div', '', 'footerDiv', 'footerDiv')
const footerDiv = document.getElementById('footerDiv')
SuperElement(footerDiv, 'div', '', 'contactDiv', 'contactDiv')
const contactDiv = document.getElementById('contactDiv')
SuperElement(contactDiv, 'p', `James Halfpenny, Ph.D.`, 'txt', 'footerTxt')

const phoneNum = '4068489458'
let displayedNumber = 
phoneNum.slice(0, 3) + '-' + 
phoneNum.slice(3, 6) + '-' + 
phoneNum.slice(6)

SuperElement(contactDiv, 'a', displayedNumber, 'phoneElem', 'phoneElem')
const phoneLink = document.getElementById('phoneElem')
phoneLink.href = `tel:${phoneNum}`

const email = `trackdoctor@tracknature.com`
const stAddress = `9 Jardine Rd.<br> Gardiner, MT 59030`
const mailAddress = `PO Box 989,<br> Gardiner, MT 59030`
SuperElement(contactDiv, 'button', email, 'emailBtn', 'emailBtn')
const emailBtn = document.getElementById('emailBtn')
emailBtn.addEventListener('click', () => {
    window.open(`mailto:${email}`);
})
SuperElement(contactDiv, 'p', `A Naturalist's World`, 'txt', 'footerTxt')
SuperElement(contactDiv, 'p', mailAddress, 'mailAddress', 'mailAddress')

const locationLink = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5847722006697!2d-110.70640732333031!3d45.033353971070234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534fd0e08713ecf7%3A0x5723ae3c6e18ad06!2s9%20Jardine%20Rd%2C%20Gardiner%2C%20MT%2059030!5e0!3m2!1sen!2sus!4v1686431265409!5m2!1sen!2sus" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
SuperElement(footerDiv, 'div', locationLink, 'locationDiv', 'locationDiv')


