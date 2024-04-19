document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.food-1');
        const productName = product.querySelector('h2').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('₹', ''));
        const cartTotal = document.querySelector('.toatal-money');
        const cartItem = document.createElement('div');
        cartItem.classList.add('product-item');
        cartItem.innerHTML = `
            <img src="${product.querySelector('img').src}">
            <h3>${productName}</h3>
            <p class="money">${productPrice}</p>
        `;
        document.querySelector('.cart').insertBefore(cartItem, cartTotal);
        updateTotal();
    });
});

function updateTotal() {
    const prices = document.querySelectorAll('.money');
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.innerText);
    });
    document.querySelector('.toatal-money').innerText = total;
}
