const apiKey = 'rLqUJVwPzH52wBuNr7wzv83YApYZsqspmwlhdI4bDpd5NxIYRrncVTl6'

const loadButton = document.getElementById('load-button')
const img = document.querySelectorAll('img')
const loadButtonSecondary = document.getElementById('load-secondary')

const getImages = function (query) {}
fetch('https://api.pexels.com/v1/search?query=' + query, {
  headers: {
    Authorization: apiKey,
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nel caricamento del'immagine")
    }
  })
  .then((data) => {
    for (let i = 0; i < data.photos.length; i++) {
      const row = document.getElementById('card-row')
      const column = document.createElement('div')
      column.classList.add('col', 'col-md-4', 'my-3')

      column.innerHTML = `<div class="card mb-4 shadow-sm h-100" id='card'>
              <img
                src=${data.photos[i].src.medium}
                class="bd-placeholder-img card-img-top h-50"
              />
              <div class="card-body"> 
                <h5 class="card-title">${data.photos[i].alt}</h5> 
                <p class="card-text">
                  ${data.photos[i].photographer}
                </p>
                <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button> 
                  </div> 
                   <small class="text-muted">${data.photos[i].id}</small>`
      row.appendChild(column)
    }
  })
  .catch((err) => {
    console.log('ERRORE', err)
  })

loadButton.addEventListener('click', () => getImages('games'))
loadButtonSecondary.addEventListener('click', () => getImages('comics'))

const editButtons = document.querySelectorAll('.card .btn:nth-of-type(2)')
editButtons.forEach((button) => {
  button.innerText = 'Hide'
  button.addEventListener('click', function (e) {
    e.target.closest('.col').remove()
  })
})

const searchForm = document.getElementById('custom-search')
searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const searchBar = document.getElementById('search-filed')
  const searchValue = searchBar.searchValue
  getImages(searchValue)
})

// 1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina:
// https://api.pexels.com/v1/search?query=[your-query] X
// 2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:https://api.pexels.com/v1/search?query=[your-secondary-query]
// 3) Il tasto "Edit" andrà sostituito con un tasto "Hide". X
// 4) Quando si preme "Hide", l'intera card dovrebbe scomparire. X
// 5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente. X
// 6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti. X
// 7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.

// 8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.
// 9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.
