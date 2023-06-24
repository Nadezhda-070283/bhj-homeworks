const loader=document.getElementById('loader');
const itemsContainer=document.getElementById('items');

function showLoader(){
    loader.classList.add ('loader_active');
}

function hideLoader(){
    loader.classList.remove ('loader_active');
}
function displayItems(data){
    itemsContainer.innerHTML='';

    for (const currencyCode in data) {
        if (data.hasOwnProperty(currencyCode)) {
            const currency = data[currencyCode];
            const item = document.createElement('div');
            item.className='item';
            item.innerHTML=`
            <div class="item__code">${currency.CharCode}</div>
            <div class="item__value">${currency.Value}</div>
            <div class="item__currency"> руб.</div>`;

     itemsContainer.appendChild(item);
        }
    }
}

function loadCurrency(){
    showLoader();
    const catchedData = localStorage.getItem('currencyData');

    fetch ('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('currencyData', JSON.stringify(data.response.Valute));
            hideLoader();
            displayItems(data.response.Valute);
        })
        .catch(error => console.log(error));
    }

loadCurrency();