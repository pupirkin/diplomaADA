// Cache some selectors
const $expandableSearch = document.getElementById('expandable-search')
const $expandableSearchBtn = $expandableSearch.querySelector('.search__btn-submit')
const $expandableSearchInput = $expandableSearch.querySelector('.search__input')

// Attach click event handler on search icon
$expandableSearchBtn.addEventListener('click', function (e) {

  e.preventDefault()

  const expanded = $expandableSearch.getAttribute('data-expanded')

  // Toggle expanded state class and store in data attribute
  if (expanded === null || expanded === 'false') {
    $expandableSearch.setAttribute('data-expanded', 'true')
    $expandableSearch.classList.add('search--expanded')
    $expandableSearchInput.focus()
  } else {
    $expandableSearch.setAttribute('data-expanded', 'false')
    $expandableSearch.classList.remove('search--expanded')
  }
})
