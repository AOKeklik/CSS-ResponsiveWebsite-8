// ----- mobile nav bar
const header = document.getElementsByClassName("header")[0]
const nav = document.getElementsByClassName("btn-mobile-nav")[0]

nav.addEventListener("click", function () {
	header.classList.toggle("nav-open")
})

// ---- current year
const year = document.getElementsByClassName("year")[0]
const currentYear = new Date().getFullYear()
year.textContent = currentYear

// ---- smooth scroll
const allLinks = document.querySelectorAll("a:link")

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault()
		const href = link.getAttribute("href")

		// Scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})

		// Scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href)
			sectionEl.scrollIntoView({ behavior: "smooth" })
		}

		// Close mobile naviagtion
		if (link.classList.contains("main-nav-link"))
			header.classList.toggle("nav-open")
	})
})

// ---- sticky
const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0]
		console.log(ent)

		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky")
		}

		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky")
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
)
obs.observe(sectionHeroEl)

// ----- flex gap
function checkFlexGap() {
	const flex = document.createElement("div")
	const body = document.body

	flex.style.display = "flex"
	flex.style.flexDirection = "column"
	flex.style.gap = "1px"
	flex.style.backgroundColor = "red"
	flex.appendChild(document.createElement("div"))
	flex.appendChild(document.createElement("div"))
	body.appendChild(flex)
	const isSupported = flex.scrollHeight
	flex.parentNode.removeChild(flex)

	console.log(isSupported)

	if (!isSupported) body.classList.add("no-flexgap")
}

checkFlexGap()
