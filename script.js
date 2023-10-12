// API key: rLqUJVwPzH52wBuNr7wzv83YApYZsqspmwlhdI4bDpd5NxIYRrncVTl6

const loadButton = document.getElementById('load-button')
const img = document.querySelectorAll('img')
const loadButtonSecondary = document.getElementById('load-secondary')

const loadImages = function () {}
fetch('https://api.pexels.com/v1/search?query=games', {
  headers: {
    Authorization: 'rLqUJVwPzH52wBuNr7wzv83YApYZsqspmwlhdI4bDpd5NxIYRrncVTl6',
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nel caricamento del'immagine")
    }
  })
  .then((loadData) => {
    for (let i = 0; i < loadData.photos.length; i++) {
      const row = document.getElementById('card-row')
      const column = document.createElement('div')
      column.classList.add('col', 'col-md-4')

      column.innerHTML = `<div class="card mb-4 shadow-sm" id='card'>
        <img
          src=${loadData.photos[i].src.medium}
          class="bd-placeholder-img card-img-top"
        />
        <div class="card-body"> 
          <h5 class="card-title">Lorem Ipsum</h5> 
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
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
                id='hide'
              >
                Hide
              </button> 
            </div> 
             <small class="text-muted">${loadData.photos[i].id}</small>`
      row.appendChild(column)

      // NASCONDERE LA CARD
      const hideButton = document.getElementById('hide')
      const cardDiv = document.getElementById('card')

      const hideCard = function () {
        cardDiv.classList.add('d-none')
      }
      hideButton.addEventListener('click', hideCard)
    }
  })
  .catch((err) => {
    console.log('ERRORE', err)
  })

loadButton.addEventListener('click', loadImages)

const loadImages2 = function () {
  fetch('https://api.pexels.com/v1/search?query=dogs', {
    headers: {
      Authorization: 'rLqUJVwPzH52wBuNr7wzv83YApYZsqspmwlhdI4bDpd5NxIYRrncVTl6',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nel caricamento del'immagine")
      }
    })
    .then((loadData2) => {
      for (let i = 0; i < loadData2.photos.length; i++) {
        const row = document.getElementById('card-row')
        const column = document.createElement('div')
        column.classList.add('col-md-4')
        row.appendChild(column)
        column.innerHTML = `<div class="card mb-4 shadow-sm" id='card'>
            <img
              src=${loadData2.photos[i].src.medium}
              class="bd-placeholder-img card-img-top"
            />`
      }
    })
    .catch((err) => {
      console.log('ERRORE', err)
    })
}

loadButtonSecondary.addEventListener('click', loadImages2)

//   1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina:
// https://api.pexels.com/v1/search?query=[your-query] X
// 2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:https://api.pexels.com/v1/search?query=[your-secondary-query]
// 3) Il tasto "Edit" andrà sostituito con un tasto "Hide". X
// 4) Quando si preme "Hide", l'intera card dovrebbe scomparire.
// 5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente. X
// 6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.
// 7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.

// 8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.
// 9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.
