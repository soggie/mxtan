var grid = document.querySelector('.masonry-grid')

var masonry = new Masonry(grid, {
	itemSelector: '.grid-item',
	// columnWidth: 200,
	percentPosition: true,
})