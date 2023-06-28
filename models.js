


export class UI{


    mostrasProductos(productos){
        const contenedorProductos=document.getElementById('products')
        for(let i=0;i<productos.length;i++){
            let producto=productos[i]
            let [nombre,precio]=[producto[0],producto[1]]
            let div=document.createElement('div')
            div.className='producto'
            div.innerHTML=`
            <p>${nombre}</p>
            <p>$${precio}</p>
            `
            contenedorProductos.appendChild(div)
            div.addEventListener('click',()=>{
                this.mostrarCompras(nombre,precio)})
            
        }
    }

    
    numeroLinea=0
    mostrarCompras(compra,precio){
        const lista=document.getElementById('list')
        const lineas=lista.children
        let linea=lineas[this.numeroLinea]
        let suma=0
        
        
        let p=document.createElement('p')
        p.innerHTML=`<p>${compra}</p>`
        linea.appendChild(p)
        
        for(let i=0;i<linea.children.length;i++){
            suma+=linea.children[i].offsetWidth
        }
        if(suma>=250){
            this.numeroLinea++
        } 
        console.log(suma)
        
        // this.suma(precio)
    }
    sumar(){}


}