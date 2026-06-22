import './style.css'

const STORAGE_KEY = 'ai-lab-notes'
const form = document.querySelector('#notes-form')
const notesContainer = document.querySelector('#saved-notes')
const clearButton = document.querySelector('#clear-notes')
const saveStatus = document.querySelector('#save-status')
const dateInput = form.elements.date

dateInput.value = new Date().toISOString().slice(0, 10)

function getNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

function createNoteCard(note) {
  const article = document.createElement('article')
  article.className = 'note'

  const heading = document.createElement('div')
  heading.className = 'note-heading'

  const title = document.createElement('h4')
  title.textContent = note.title

  const date = document.createElement('time')
  date.dateTime = note.date
  date.textContent = new Date(`${note.date}T00:00:00`).toLocaleDateString()

  heading.append(title, date)
  article.append(heading)

  const details = [
    ['Idea', note.prompt],
    ['Observations', note.observations],
    ['Next step', note.nextStep],
  ]

  details.forEach(([label, value]) => {
    if (!value) return
    const paragraph = document.createElement('p')
    const strong = document.createElement('strong')
    strong.textContent = `${label}: `
    paragraph.append(strong, value)
    article.append(paragraph)
  })

  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.className = 'button-text'
  deleteButton.textContent = 'Delete note'
  deleteButton.addEventListener('click', () => {
    saveNotes(getNotes().filter((savedNote) => savedNote.id !== note.id))
    renderNotes()
  })
  article.append(deleteButton)

  return article
}

function renderNotes() {
  const notes = getNotes()
  notesContainer.replaceChildren()
  clearButton.hidden = notes.length === 0

  if (notes.length === 0) {
    const emptyMessage = document.createElement('p')
    emptyMessage.className = 'empty-message'
    emptyMessage.textContent = 'No notes yet. Save your first fictional experiment above.'
    notesContainer.append(emptyMessage)
    return
  }

  notes.forEach((note) => notesContainer.append(createNoteCard(note)))
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(form)
  const note = {
    id: crypto.randomUUID(),
    title: formData.get('title').trim(),
    date: formData.get('date'),
    prompt: formData.get('prompt').trim(),
    observations: formData.get('observations').trim(),
    nextStep: formData.get('nextStep').trim(),
  }

  saveNotes([note, ...getNotes()])
  form.reset()
  dateInput.value = new Date().toISOString().slice(0, 10)
  saveStatus.textContent = 'Note saved in this browser.'
  window.setTimeout(() => {
    saveStatus.textContent = ''
  }, 3000)
  renderNotes()
})

clearButton.addEventListener('click', () => {
  if (window.confirm('Delete all saved lab notes?')) {
    localStorage.removeItem(STORAGE_KEY)
    renderNotes()
  }
})

renderNotes()
