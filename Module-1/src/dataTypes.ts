//* implicit data type  - typescript will automatically take the type to string.
const firstName = "Tanvir"
//* explicit data type  - define typescript data type.
const lastName: string = "Evan"
//* Number data type .
const roll: number = 12
//* boolean data type .
const isAdmin: boolean = true
//* undefined data type 
const isDefined: undefined = undefined
//* null data type 
const isNull: null = null
//* any data type  - any type of data defined
const anything: any = 12


// ? arrays with defined data types
const arr1: string[] = ["tanvir", "evan", "noor", "alifa"]
const coOrdinates: (string | number)[] = ["tanvir",12,"evan"]
let orderPair:[string,number,boolean] = ["Mr x",24,true] //tuple