var local = {
  sellers: ["Ada", "Grace", "Hedy", "Sheryl"],

  sales: [
  { date: new Date(2019, 1, 4), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] , office: "Centro"},
  { date: new Date(2019, 0, 1), sellerName: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] , office: "Centro"},
  { date: new Date(2019, 0, 2), sellerName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"] , office: "Centro"},
  { date: new Date(2019, 0, 10), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"] , office: "Centro"},
  { date: new Date(2019, 0, 12), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], office: "Centro" },
  { date: new Date(2019, 2, 12), sellerName: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], office: "Centro"},
  { date: new Date(2019, 2, 24), sellerName: "Sheryl", components: ["HDD Wezter Dishital", "Motherboard ASUS 1500"], office: "Caballito"},
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

  //obtener info del option
  const createSale = () => {
   let sale = { date: new Date(), sellerName: "", components:[], office: "", machinePrice: "" }
   let agent = document.getElementById("agent")
   let component = document.getElementById("component")
   let saleStore = document.getElementById("store")
   sale.sellerName = agent.value 
   agent.value = "0"
   sale.components.push(component.value)
   component.value = "0"
   sale.office = saleStore.value
   saleStore.value = "0"
   sale.machinePrice = machinePrice(sale.components)
   if (sale.sellerName && sale.components && sale.office != "0" && ["0"]) 
   {local.sales.push(sale) && createTr(local.sales)} else 
   {alert("Selecciona tu opcion para continuar")}
}

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


// 4) ventas de un mes - devuelve el valor total en plata
// RECORDAR mejorar este codigo - con un for each quizas
const salesMonth = (month, year) => {
let salesMonth = 0;
for (let i = 0; i < local.sales.length; i++) {
    if ((month == (local.sales[i].date.getMonth() + 1)) && (year == local.sales[i].date.getFullYear())) {
        salesMonth += machinePrice(local.sales[i].components);
    }
}
return salesMonth
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
 //console.log(sellerOrOffice)
}

salesPerSellerOrOffice("Caballito")
console.log('Funcion ventas por sucursal y vendedora' , salesPerSellerOrOffice('Grace'))

let toggleFunction = () => {
  let element = document.getElementById("toggle");
  element.classList.toggle("togle");
}

// 6) componenteMasVendido()

// RECORDAR cambiar los nombres
const mostSoldComponent = () => {
let componentSold = [] 
local.prices.map(({component}) => {
 let algo = {componente: component, total: componentsSoldCount(component)}
 componentSold.push(algo)
})

let aux = Math.max(...componentSold.map(({total}) => total))
let componentefinal ;
componentSold.map(({componente,total}) =>{
 if (aux === total) componentefinal = componente
}) 

console.log(componentefinal)
}

mostSoldComponent() 

// 7) huboVentas(mes, anio)

const wereThereSales = (month, year) => {
return salesMonth(month, year) > 0;
}

console.log('hubo ventas?:' , wereThereSales(3, 2019));

// 9) sucursalDelMes(mes, anio)

// 10) render por mes: Muestra una lista ordenada del importe total vendido por cada mes/año
// mejorar
const renderPorMes = () => {
    
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let mesesNum= [1,2,3,4,5,6,7,8,9,10,11,12]
let porMes= 0 

for (let i= 0; i< meses.length; i++) {
  
   let porMes= console.log('Total de '+ meses[i] + ': ' + salesMonth(mesesNum[i], 2019));
}
  return porMes   
  
}

renderPorMes()

// createLi
const createLi = (lista,id) => {
let sucursalUl = document.getElementById(id)
lista.forEach (m => 
{let li = document.createElement('li')
li.innerText = `${m.month}: ${m.salesMonth} ventas`
sucursalUl.appendChild(li)
})
}

// createOption
const createOption = (list,id) => { // list variable para varias cosas
let select = document.getElementById(id)
list.forEach(e => {
let option = document.createElement('option')
option.innerText = e;
select.appendChild(option)
return option
})
}

const initialize = () => {
printInitialData()
 }

const printInitialData = () => {
// createLi(sucursalRender(),"sucursalRender")
createLi(renderPorMes(),"renderPorMes")
createOption(local.sellers,"agent")
createOption(local.offices,"store")
createOption(componentArray,"components")  
createTr(local.sales)
award()
}

let myFunction = () => {
let element = document.getElementById("options");
element.classList.toggle("togle");
}

// createTrYTd
const createTr = (list) => {
let container = document.getElementById("container")
container.innerHTML = ''
list.forEach(sale => {
let tr = document.createElement('tr')
Object.keys(sale).forEach( e=> {
let td = document.createElement('td')
if (e === 'date'){
td.innerText = `${sale[e].getFullYear()},${sale[e].getMonth()+1},${sale[e].getDate()}`
} else {
td.innerText =  sale[e]
}
tr.appendChild(td)
})
container.appendChild(tr)
})
}

//componentes mas vendidos
const award = () => { 
let h4 = document.getElementById('mostSoldComponent')
h4.innerText = mostSoldComponent();
}