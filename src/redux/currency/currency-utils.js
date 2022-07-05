export const filterData = (products, currentCurrency) => {
        products.map(product => { 
            product.prices = product.prices.filter((price) => { 
                return price.currency.symbol === currentCurrency
            }); 
            return product
        })
    }