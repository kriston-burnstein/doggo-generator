const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL) 
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        const breedsObject = data.message
        console.log(breedsObject)
        const breedsArray = Object.keys(breedsObject)
        console.log(breedsArray)
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option') //<option></option>
            option.value = breedsArray[i] //<option value='{each breed as it iterates through}'>
            option.innerText = breedsArray[i] //adds the breed text inside option tags as it iterates through
            select.appendChild(option) //append each option to the const select above (which is the <select> dropdown box)
        }   
    })

    select.addEventListener('change', event => {
        console.log(event)
        console.log(event.target.value)
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
    })

    const img = document.querySelector('.dog-image')

    const getDoggoImg = url => {
        fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {    
                console.log(data.message)     
                img.src = data.message      
            })
    }


//////////////////////////////////////////////////////////////////
//fetch template

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://dog.ceo/api/breed/${breedChoice}/images/random`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.message)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
