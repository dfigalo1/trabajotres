// // Variables de cada select y creacion de UL
//  var listSelectOne,selectSeller,selectSucur,selectMonth,printUl
// // variable que guarda los resultados a imprimir
// var printAccion = []

var local = {
  sellers: ["Ada", "Grace", "Hedy", "Sheryl"],

  sales: [
  { date: new Date(2019, 1, 4), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] , office: "Centro"},
  { date: new Date(2019, 0, 1), sellerName: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] , office: "Centro"},
  { date: new Date(2019, 0, 2), sellerName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] , office: "Centro"},
  { date: new Date(2019, 0, 10), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] , office: "Centro"},
  { date: new Date(2019, 0, 12), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], office: "Centro" },
  { date: new Date(2019, 2, 12), sellerName: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], office: "Centro"},
  { date: new Date(2019, 2, 24), sellerNameme: "Sheryl", components: ["HDD Wezter Dishital", "Motherboard ASUS 1500"], office: "Caballito"},
  { date: new Date(2019, 2, 01), sellerName: "Ada", components: ["Motherboard MZI", "RAM Quinston Fury"], office: "Centro"},
  { date: new Date(2019, 2, 11), sellerName: "Grace", components: ["Monitor ASC 543", "RAM Quinston"], office: "Caballito"},
  { date: new Date(2019, 2, 15), sellerName: "Ada", components: ["Motherboard ASUS 1200", "RAM Quinston Fury"], office: "Centro"},
  { date: new Date(2019, 2, 12), sellerName: "Hedy", components: ["Motherboard ASUS 1500", "HDD Toyiva"], office: "Caballito"},
  { date: new Date(2019, 2, 21), sellerName: "Grace", components: ["Motherboard MZI", "RAM Quinston"], office: "Centro"},
  { date: new Date(2019, 2, 08), sellerName: "Sheryl", components: ["Monitor ASC 543", "HDD Wezter Dishital"], office: "Centro"},
  { date: new Date(2019, 2, 16), sellerName: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston Fury"], office: "Centro"},
  { date: new Date(2019, 2, 27), sellerName: "Hedy", components: ["Motherboard ASUS 1200", "HDD Toyiva"], office: "Caballito"},
  { date: new Date(2019, 2, 22), sellerName: "Grace", components: ["Monitor ASC 543", "HDD Wezter Dishital"], office: "Centro"},
  { date: new Date(2019, 2, 05), sellerName: "Ada", components: ["Motherboard ASUS 1500", "RAM Quinston"], office: "Centro"},
  { date: new Date(2019, 2, 01), sellerName: "Grace", components: ["Motherboard MZI", "HDD Wezter Dishital"], office: "Centro"},
  { date: new Date(2019, 2, 07), sellerName: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston"], office: "Centro"},
  { date: new Date(2019, 2, 14), sellerName: "Ada", components: ["Motherboard ASUS 1200", "HDD Toyiva"], office: "Centro"}
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

// arrayComponentes
const componentArray = local.prices.map(({ component }) => component)




// SELECT DE COMPONENTES (1)
/*
const selectComponent = () =>{
  let listSelectOne = document.getElementById('selectOne')
  listSelectOne.innerHTML = '' // lo vacio para que no se vuelva a imprimir
  let firstOption = document.createElement('option')
  firstOption.innerText = 'Elija un componente'
  listSelectOne.appendChild(firstOption)
  local.prices.forEach(function(e){
    let opcComp = document.createElement('option')
    opcComp.innerText = e.component
    listSelectOne.appendChild(opcComp)
  })
}

*/

// 1) precioMaquina(componentes)

const machinePrice = sale => {
let machinePrice = 0
sale.forEach(e => {
  const componentName = local.prices.find(({component}) => e === component) 
  machinePrice = machinePrice + componentName.price
})
return machinePrice
}

//console.log(machinePrice(["Monitor ASC 543","Motherboard ASUS 1200" ]))


let product = ["Monitor ASC 543" ,  "Motherboard ASUS 1200"]
console.log(`El precio total de ${product} es de ARS ${machinePrice(product)}`)


// 2) cantidadVentasComponente(componente)

const componentsSoldCount = (e) => {
let count = 0 
local.sales.forEach(sale => { 
  sale.components.forEach(componentName => { if(componentName === e){ count++ }})})
return count
}
//console.log(componentsSoldCount("Monitor GPRS 3000"))

let component = "Monitor GPRS 3000"
console.log(`El componente ${component} fue vendido ${componentsSoldCount(component)} veces`)


// 3) vendedoraDelMes(mes, anio)

const sellerOfTheMonth = (month, year) => {
  let countSeller = []
  let sellerName
  local.sellers.forEach(e => {
    local.sales.filter(i => {
      if(year === i.date.getFullYear() && month === i.date.getMonth() && e === i.sellerName){
        countSeller.push(machinePrice(i.components))
        let countMaxSeller = Math.max.apply(null, countSeller)
        if(machinePrice(i.components) === countMaxSeller){
          sellerName = e
        }
      }
    })
  })
  return sellerName
}
console.log(`La vendedora del mes es ${sellerOfTheMonth(1, 2019)}`)


// 4) ventas de un mes - devuelve el valor total en plata
// RECORDAR mejorar este codigo - con un for each quizas
const salesMonth = (month, year, data = local.sales) => {
  let list = []
  data.forEach(e => {
     if (year === e.date.getFullYear() && month === e.date.getMonth() + 1) {
        list.push(machinePrice(e.components))
     }
  })
  let total = list.length ? list.reduce((a, b) => a + b) : 0
  return total
 }

console.log(salesMonth(1, 2019))
console.log(`La suma de las ventas del mes dan ARS $${salesMonth(1,2019)} `)

// 5) ventasVendedora(nombre) y 8) ventasSucursal(sucursal)

const salesPerSellerOrOffice = (param) => {
  let sellerOrOffice = 0
  local.sales.forEach( e => {
    if(e.sellerName === param || e.office === param){
      let totalSales = machinePrice(e.components)
      sellerOrOffice += totalSales
    }
  })
  return sellerOrOffice
 // console.log(sellerOrOffice)
}

salesPerSellerOrOffice("Caballito")
console.log('Funcion ventas por sucursal y vendedora' , salesPerSellerOrOffice('Grace'))

// 6) componenteMasVendido()

const mostSoldComponent = () => {
  let componentSold = [] 
  local.prices.map(({component}) => {
   let compObj = {componentString: component, total: componentsSoldCount(component)}
   componentSold.push(compObj)
  })
  
  let aux = Math.max(...componentSold.map(({total}) => total))
  let finalComponent ;
  componentSold.map(({componentString, total}) =>{
   if (aux === total) finalComponent = componentString
  }) 
  
  console.log(`El componente más vendido es ${finalComponent}`)
  }
  
  mostSoldComponent() 

// 7) huboVentas(mes, anio)

const wereThereSales = (month, year) => {
return salesMonth(month, year) > 0;
}

console.log('hubo ventas?:' , wereThereSales(3, 2019));

// 9) sucursalDelMes(mes, anio)

const bestOfficeMonth = (year, month) => {
  let counterOffice = []
  let officeName
  local.offices.forEach(e => {
    local.sales.filter(j => {
      if(year === j.date.getFullYear() && month === j.date.getMonth() && e === j.office){
        counterOffice.push(machinePrice(j.components))
        let countMaxOffice = Math.max.apply(null, counterOffice)
        // el math max toma dos parametros y busca el mayor
        if(machinePrice(j.components) === countMaxOffice){
          officeName = e
        }
      }
    })
  })
  return officeName
}

console.log(`La oficina que más generó ganancias este mes fue la oficina de ${bestOfficeMonth(2019, 1)}`)

// 10) render por mes: Muestra una lista ordenada del importe total vendido por cada mes/año

const renderPerMonth = () => {
    
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let monthsNum= [1,2,3,4,5,6,7,8,9,10,11,12]
let perMonth = 0 
for (let i= 0; i< months.length; i++) {
  
  perMonth = (`Total de ${months[i]} : $ ${salesMonth(monthsNum[i], 2019)}`);
}
 return perMonth  
  
}

renderPerMonth()

//console.log(renderPerMonth())


// 11) renderPorSucursal()

const renderPerOffice = () => {
  let saleOffice
  local.offices.forEach(office => {
    saleOffice = salesPerSellerOrOffice(office)
    console.log(`El importe total vendido en la sucursal de ${office} es: $${saleOffice}`)
  })
  return saleOffice
}

renderPerOffice()

// 12) render total

// vendedora que generó más ingresos (para este render)
const theBestSeller = () =>{
  let maxCount = 0
  let bestSeller = ''
  local.sellers.map(seller =>{
      let count = 0
    local.sales.map(e=>{
      if(e.sellerName === seller){
        count = count + machinePrice(e.components)
      }
    })
    if(count > maxCount){
      maxCount = count
      bestSeller = seller
    }
  })
  
  return bestSeller
  
}

console.log(theBestSeller())