const scriptURL = 'web app url/link'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
})


let sheet=SpreatsheetApp.openBYurl(URlCOPYANDPASTE)
let sheetname=sheet.getsheetbyname['Sheet1']
function def(e){
 data = e.parameter;
}