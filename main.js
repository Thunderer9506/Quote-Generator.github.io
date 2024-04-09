let quoteAuthor = document.querySelectorAll('p')

async function fetchData(){
    try{
        const response = await fetch("https://api.quotable.io/random")
        const data = await response.json()
        quoteAuthor[0].innerText = data.author
        quoteAuthor[1].innerText = data.content
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
fetchData()