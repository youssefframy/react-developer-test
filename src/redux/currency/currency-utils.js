export const filterProducts = (data, currentCurrency) => {
    data.category.products.map(product => { 
        const filteredProduct = product.prices.filter((price) => { 
            return price.currency.symbol === currentCurrency
    });
    return (filteredProduct, product);
})
}