//multi export 
export const aString = 'test'
export function aFunction(){...}
export const aObject = {...}
export const aArray = []
export class aClass {
 //...
}

//import from multi export 
import {aString, aObject, aArray, aFunction, aClass} from './location'
import  * as myModule from './location'                                       //import 

//single import
export default moduleName
                            
                            
