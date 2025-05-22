import process from 'process'

const args = process.argv

async function start(args) {
    try {
        switch (args[2]) 
{
    case "GET":
    {
        const product = args[3].slice(9,args[3].length)        
        
        if (product!="")
        {
           await  fetch(`https://fakestoreapi.com/products/${product}`)
            .then(response => response.json())
            .then(d => {
                
                const products = 
                `Producto: ${d.id}
                Titulo: ${d.title}
                Price: ${d.price}`
                console.log(products)
                })
        } else
        {
            await fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                data.forEach(d => {
                     const products = 
                `Producto: ${d.id}
                Titulo: ${d.title}
                Price: ${d.price}`
                console.log(products)})
               })
                
        }
        break
    }
    case "POST":
    {
        
        const product = 
        {
            title : args[5],
            price :  args[6],
            category : args[7]
        }         
         await fetch('https://fakestoreapi.com/products',
        {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json' 
        },
            body: JSON.stringify(product)  
        }).then(response => response.json())
        .then(d => {
             const products = 
                `Producto: ${d.id}
                Titulo: ${d.title}
                Price: ${d.price}`
                console.log(products)
        })
        break
    }
    case "DELETE":
    {
        const product = args[3].slice(9,args[3].length)        
        await fetch(`https://fakestoreapi.com/products/${product}`,
        {
            method: 'DELETE'
        }).then(response => response.json())
        .then(d=> {
             const products = 
                `Producto: ${d.id}
                Titulo: ${d.title}
                Price: ${d.price}`
                console.log(products)
        })  
        break
    }
        
    default:
        break;
}    
    } catch (error) {
     console.log(`ERROR ${error}`)
    }
}

start(args)