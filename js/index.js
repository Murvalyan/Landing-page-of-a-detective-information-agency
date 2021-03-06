const menu = document.querySelector('.burger')
const headerNav = document.querySelector('.header__nav')
const body = document.querySelector('body')
const servicesCard__title = []
const header = document.querySelector('.header')
const navList = document.querySelectorAll('.nav__list')
const modal = document.querySelector('.popUp')
const buttonExit = document.querySelector('.popUp__exit')
const feedback = document.querySelectorAll('.feedback')
const contact = document.querySelector('.contact')

document.querySelectorAll('.servicesCard__title').forEach(item => {
	servicesCard__title.push(item)
})

menu.addEventListener('click', (e) => {
	menu.classList.toggle('header__burger_active')
	headerNav.classList.toggle('header__nav_active')
	body.classList.toggle('_lock')
})

navList.forEach((elem) => {
	elem.addEventListener('click', () => {
		menu.classList.remove('header__burger_active')
		headerNav.classList.remove('header__nav_active')
		body.classList.remove('_lock')
	})
})

feedback.forEach(elem => {
	if (!elem.classList.contains('contact__feedback')) {
		elem.addEventListener('click', () => {
			modal.style.left = '0'
			body.classList.add('_lock')
		})
	}
})

buttonExit.addEventListener('click', () => {
	modal.style.left = '-100%'
	body.classList.remove('_lock')
})

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 60
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const slider = new Splide('.splide', {
	type: 'slide',
	perPage: 4,
	perMove: 1,
	gap: '10px',
	mediaQuery: 'min',
	easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
	padding: { right: '20px' },
	speed: 700,
	arrows: false,
	pagination: false,
	breakpoints: {
		320: {
			perPage: 1,
		},
		600: {
			perPage: 2,
		},
		1024: {
			perPage: 3,
			arrows: true,
		},
		1280: {
			perPage: 4,
		}
	},

	classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows servicesCard__wrapperArrow',
		arrow: 'splide__arrow servicesCard__arrow',
		prev: 'splide__arrow--prev servicesCard__arrowPrev',
		next: 'splide__arrow--next servicesCard__arrowNext'

		// // Add classes for pagination.
		// pagination: 'splide__pagination your-class-pagination', // container
		// page: 'splide__pagination__page your-class-page', // each button
	},
})

// slider.on('pagination:mounted', function (data) {
// 	// You can add your class to the UL element
// 	data.list.classList.add('servicesCard__pagination_custom')

// 	// `items` contains all dot items
// 	data.items.forEach(function (item, index) {
// 		item.button.textContent = servicesCard__title[index].textContent
// 	})
// })

slider.mount()

