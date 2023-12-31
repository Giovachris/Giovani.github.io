const ratio = .1
const option = {
    root:null,
    rootMargin:'0px',
    threshold: ratio 
}
const handlIntersect = function (entries,observer) {
    entries.forEach( function (entry) {
        if (entry.intersectionRatio > ratio ) {
            entry.target.classList.add('reveal-in')
            observer.unobserver(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handlIntersect,option);
document.querySelectorAll('.reveal').forEach (function (r) {
    observer.observe(r)
})