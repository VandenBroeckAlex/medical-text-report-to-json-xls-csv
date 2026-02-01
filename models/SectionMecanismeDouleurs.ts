

export class MecanismeDouleur{
    motifArticulaire ! : boolean
    motifMyofascial ! : boolean
    motifNeural !: boolean
    sensibilisationCentrale  !: boolean
    controleSensorimoteur  !: boolean
}

export type MecanismeDouleurSchema = {
    property: keyof MecanismeDouleur;  
    parser: (obj: MecanismeDouleur, raw: string) => void; 
    keyText: string; // text in the file 
};

export const mecanismeDouleurSchema: MecanismeDouleurSchema[] = [
    { property: "motifArticulaire", keyText: "Motif articulaire", parser: (obj, line) => obj.motifArticulaire = GetCheckboxValue(line) },
    { property: "motifMyofascial", keyText: "Motif myofascial ", parser: (obj, line) => obj.motifMyofascial = GetCheckboxValue(line) },
    { property: "motifNeural", keyText: "Motif neural", parser: (obj, line) => obj.motifNeural = GetCheckboxValue(line) },
    { property: "sensibilisationCentrale", keyText: "Sensibilisation centrale", parser: (obj, line) => obj.sensibilisationCentrale = GetCheckboxValue(line) },
    { property: "controleSensorimoteur", keyText: "Contrôle sensorimoteur", parser: (obj, line) => obj.controleSensorimoteur = GetCheckboxValue(line) },
];


function GetCheckboxValue( line : string) : boolean{
    // console.log(line)
    if(line.includes("☒")){
        return true
    }
    else{
        return false
    }
}
