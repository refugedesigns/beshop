export const getProductByCategory = async(category) => {

    let products 
    try {
        const response = await fetch(`/api/v1/products?filterItems=${category}&limit=20`)
        const result = await response.json()
    
        products = result.products.map(product => ({...product, link: `/${product._id}`}))
        
    } catch (error) {
        console.error(error)
        products = []
    }

    return products
}

