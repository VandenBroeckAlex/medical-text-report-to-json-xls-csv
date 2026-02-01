

class Sensation{
    sourde !: boolean
    aigue!: boolean
    brulante!: boolean
    piquante!: boolean
    irradiante!:boolean
    engourdie !:boolean
}

export class MecanismeDeDouleur{
    douleurArticulaire! : string
    douleurMyofasciale ! : string
    douleurNeurologique ! : string
    sensibilisationCentrale ! : string
    deficit  ! : string
    sensations !: Sensation | string
    observationsMecanismes ! : string
}


type MecanismeDeDouleurSchema = {
    property: keyof MecanismeDeDouleur;  
    parser: (obj: MecanismeDeDouleur, raw: string) => void; 
    keyText: string; 
};


//TODO caractère sensation require underline handeling
export const mecanismeDeDouleurSchema: MecanismeDeDouleurSchema[] = [
    { property: "douleurArticulaire", keyText: "Douleur Articulaire", parser: (obj, v) => obj.douleurArticulaire = v },
    { property: "douleurMyofasciale", keyText: "Douleur Myofasciale", parser: (obj, v) => obj.douleurMyofasciale = v },
    { property: "douleurNeurologique", keyText: "Douleur Neurologique", parser: (obj, v) => obj.douleurNeurologique = v },
    { property: "sensibilisationCentrale", keyText: "Sensibilisation Centrale (nociceptive, neuropathique ou nociplastique)", parser: (obj, v) => obj.sensibilisationCentrale = v },
    { property: "deficit", keyText: "Déficit Sensorimotor", parser: (obj, v) => obj.deficit= v },
    { property: "sensations", keyText: "Caractère sensations", parser: (obj, v) => obj.sensations = parseSensation(v) },
    { property: "observationsMecanismes", keyText: "Observations Mécanismes", parser: (obj, v) => obj.observationsMecanismes= v },
];



function parseSensation(line: string):  Sensation | string{
    let sensationObj = new Sensation()

    if(!line.includes("|")){
        return line
    }

    const parts = line.split(" | ");


    for (const part of parts) {
        if (part.includes("☒")) {
            const value = part.replace(/☒|☐/g, "").trim();
            CheckSensation(value,true,sensationObj)
        }
        else{
            CheckSensation(part.replace(/☒|☐/g, "").trim(),false,sensationObj)
        }
    }
    return sensationObj
}


function CheckSensation(line : string,value : boolean,obj :Sensation) : Sensation{

    if(line.includes("Sourde")){
        obj.sourde = value
    }
    else if(line.includes("Aiguë")){
        obj.aigue = value
    }
    else if(line.includes("Brûlante")){
        obj.brulante = value
    }
    else if(line.includes("Irradiante")){
        obj.irradiante = value
    }
     else if(line.includes("Engourdie")){
         obj.engourdie = value
    }
    else if(line.includes("Piquante")){
         obj.piquante = value
    }
    return obj
}