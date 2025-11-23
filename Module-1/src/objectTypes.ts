//*Reference type -> Object

//*type defined in typescript
type TUser = {
    firstNAme: string;
    middleName: string;
    LastName: string;
    isMarried?:"Yes"|"No" //-> ? question mark for optional type ---AND--- "Yes"|"No"  literal type
}
//*how to use type
const user: TUser = {
    firstNAme: "Tanvir",
    middleName: "Evan",
    LastName: "Mr",
    isMarried:"Yes"
}
// *without optional type 
const user2: TUser = {
    firstNAme: "Tanvir",
    middleName: "Evan",
    LastName: "Mr"

    
}