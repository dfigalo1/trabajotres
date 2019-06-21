var local = {
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],

    sales: [
        { date: new Date(2019, 1, 4), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { date: new Date(2019, 0, 1), sellerName: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { date: new Date(2019, 0, 2), sellerName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] },
        { date: new Date(2019, 0, 10), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { date: new Date(2019, 0, 12), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    prices: [
        { id: "0001", component: "Monitor GPRS 3000", price: 200 },
        { id: "0002", component: "Motherboard ASUS 1500", price: 120 },
        { id: "0003", component: "Monitor ASC 543", price: 250 },
        { id: "0004", component: "Motherboard ASUS 1200", price: 100 },
        { id: "0005", component: "Motherboard MZI", price: 30 },
        { id: "0006", component: "HDD Toyiva", price: 90 },
        { id: "0007", component: "HDD Wezter Dishital", price: 75 },
        { id: "0008", component: "RAM Quinston", price: 110 },
        { id: "0009", component: "RAM Quinston Fury", price: 230 }
      ],

    offices: ['Centro', 'Caballito'],  
    };

/* 1) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar
 con esos componentes, que es la suma de los precios de cada componente incluido.

console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 
($200 del monitor + $120 del motherboard)

*/

const machinePrice = sale => {
  let machinePrice = 0
  sale.forEach(e => {
    const componentName = local.prices.find(({component}) => e === component)
    machinePrice = machinePrice + componentName.price
  })
  return machinePrice
}

console.log(machinePrice(["Monitor ASC 543","Motherboard ASUS 1200" ]))

// sale no refiere al array SALES, es un parametro para identificar cada venta
//e es cada elemento del array, o sea cada componente

let product = ["Monitor ASC 543" ,  "Motherboard ASUS 1200"]

console.log(`El precio total de ${product} es de ARS ${machinePrice(product)}`)

// pensar en cómo hacer para que imprima el precio de cada uno de los componentes - en el caso de que haya más de uno

/* 2) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea
 que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está 
 identificada por la variable ventas.

console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2

*/

const componentsSoldCount = (e) => {
  let count = 0 
  local.sales.forEach(sale => { 
    sale.components.forEach(componentName => { 
      if(componentName === e){
        count++
      }
    })
  })
  return count
}
console.log(componentsSoldCount("Monitor GPRS 3000"))


/* en esta función recorrí la lista de ventas, por cada elemento (sale/venta) recorre el array de componentes
vendidos, y comparo el nombre del componente (string) con el elemento que estaba buscando (e), y por cada vez que
aparezca, se incrementa en un numero */ 

let component = "Monitor GPRS 3000"

// la funcion espera que le pase como parametro un string asi que a esta variable tenia que igualarla a un string

console.log(`El componente ${component} fue vendido ${componentsSoldCount(component)} veces`)


/* 3) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre 
de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero
hasta el 12 (diciembre).

console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)
*/



// 4) ventas de un mes - ya anda!

const ventasMes = (month, year) => {
  let ventasMes = 0;
  for (let i = 0; i < local.sales.length; i++) {
      if ((month == (local.sales[i].date.getMonth() + 1)) && (year == local.sales[i].date.getFullYear())) {
          ventasMes += machinePrice(local.sales[i].components);
      }
  }
  return ventasMes
}

console.log( ventasMes(1,2019) )

console.log(`La suma de las ventas del mes dan ARS $${ventasMes(1,2019)} `)