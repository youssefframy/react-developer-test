export const filterProducts = (products, currentCurrency) => {
        products.map(product => { 
            product.prices = product.prices.filter((price) => { 
                return price.currency.symbol === currentCurrency
            });
            console.log(product);
            return product;   
        })
    }