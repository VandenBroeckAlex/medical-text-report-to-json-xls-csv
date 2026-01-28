
import {Header} from "./models/header"
import * as fs from 'fs';
const Sections  = fs.readFileSync('../BENOIT_Sophie_S0.txt','utf8').split("SECTION")
// .split(/\r?\n/);;

let header = new Header() 

// 1 header
Sections.forEach((section, index) => {
    

    if(section.includes("FICHE BILAN SCALENEO")){
        header = BuildHeader(section)
    }
});
    console.log(header)




function BuildHeader(section : string){

    const lines = SeparateLines(section)

    const headerObj = new Header()
    const schema = Header.schema

    let i = 0
    for (const line of lines) {
        
        i++
        console.log(i + " " +line)
            for (const key in schema) {
                if (line.toLowerCase().includes(key)) {
                    const value = CleanLine(line.toLowerCase(),key);
                    console.log(value)
                    schema[key as keyof Header](headerObj, value);
                }
            }
        }
    console.log(headerObj)
    return headerObj;
}

function SeparateLines(section : string) : string[]{
    return section.split(/\r?\n/);
} 

function CleanLine(line : string, key : string) : string {

    line = line.replace(key,"")
    line = line.replace(":","")

    line = line.trim()

    return line
}

