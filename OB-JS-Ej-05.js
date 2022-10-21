let estaturacm= 180
let estaturamts=1.80
let pesokgs=77.5
//Estatura redondeada hacia arriba
let estaturaround=Math.ceil(estaturamts)
console.log(estaturaround)
//Peso redondeado hacia abajo
let pesorounded= Math.floor(pesokgs)
console.log(pesorounded)
//max_value+1 = max_value
let maxvalorbool=false
let maxvalor= Number.MAX_VALUE +1
if(maxvalor==Number.MAX_VALUE)
{
    maxvalorbool=true    
}
console.log(maxvalor)
console.log(maxvalorbool)
