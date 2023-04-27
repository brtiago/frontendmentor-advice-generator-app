const adviceAPI = 'https://api.adviceslip.com/advice';
const getQuote = document.querySelector('.get-quote');
const adviceNumber = document.querySelector('.advice');
const quote = document.querySelector('.quote');

getQuote.addEventListener('click', () => {
    
    let randomNumber = Math.floor(Math.random() * 200) + 1;
    const slipID = parseInt(randomNumber);
    const adviceByID = `${adviceAPI}/${slipID}`;
    
    console.log('>[Obtendo citação]...' + randomNumber);

    fetch(adviceByID)
    .then(response => response.json())
    .then(data => {
        adviceNumber.textContent = `ADVICE #${slipID}`;
        quote.textContent = data.slip.advice;
    })
    .catch(error => console.error(error));
    
    console.log('>[Obtendo citação] Done!');
});