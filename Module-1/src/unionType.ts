type TFrontEndDev = 'JuniorDeveloper' | 'seniorDeveloper' //? union type 
type TBackendDev = "JuniorBackend" | "SeniorBackend"

type TDeveloper = TFrontEndDev | TBackendDev
const frontEndDev: TDeveloper = 'seniorDeveloper'




type TFrontEnd = {
    skills: ['React', 'JS']
}
type TBackEnd = {
    experience: string
}


type TFullStack = TFrontEnd & TBackEnd //? intersection


const fullStackDev: TFullStack = {
    skills: ['React', 'JS'],
    experience: '2 years'
}