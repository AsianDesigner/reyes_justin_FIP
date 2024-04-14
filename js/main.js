console.log('LETS GOOOOOOOOO!')

let nestedObjectBtns = document.querySelectorAll('.show-details'),
    nestedObjectList = document.querySelector('.product-card-cont ul');

let details ={
    vodka: {
        Flavor: 'Blueberry',
        Alcohol: 'Vodka',
        Size: '6.8 oz'
    },
    gin: {
        Flavor: 'Raspberry',
        Alcohol: 'Gin',
        Size: '6.8 oz'
    },
    tequila: {
        Flavor: 'Mango and Pineapple',
        Alcohol: 'Tequila',
        Size: '6.8 oz'
    }
};

function showDetail() {
    let parentContainer = this.closest('.product-card-cont');

    let nestedObjectList = parentContainer.querySelector('ul');
    nestedObjectList.innerHTML = '';

    for (item in details[this.dataset.detail]) {
        let newItem = document.createElement('li');
        newItem.textContent = details[this.dataset.detail][item];

        nestedObjectList.appendChild(newItem);
    }
}

nestedObjectBtns.forEach(detailButton => detailButton.addEventListener('click', showDetail));