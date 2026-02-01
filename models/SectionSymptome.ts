
class NRS {
    rest ! : number
    activity ! : number 
    maximum ! : number
}

export class Symptome{
    nrs = new NRS()
    doulerHoraire ! : string
    variationJournaliaire ! : string
    aggravating_factors ! : string[]
    relieving_factors ! : string
    evolution ! : string
}


type SymptomeSchema = {
    property: keyof Symptome;  
    parser: (obj: Symptome, raw: string) => void; 
    keyText: string; 
};

export const symptomeSchema: SymptomeSchema[] = [
    { property: "nrs", keyText: "NRS Douleur au Repos", parser: (obj, v) => obj.nrs.rest = ParseNRS(v,obj) },
    { property: "nrs", keyText: "NRS Douleur à l'Activité", parser: (obj, v) => obj.nrs.activity = ParseNRS(v,obj) },
    { property: "nrs", keyText: "NRS Douleur Maximum", parser: (obj, v) => obj.nrs.maximum = ParseNRS(v,obj) },
    { property: "doulerHoraire", keyText: "Horaire Douleur (Matin/Midi/Soir/Nuit)", parser: (obj, v) => obj.doulerHoraire = v },
    { property: "variationJournaliaire", keyText: "Variation Journalière", parser: (obj, v) => obj.variationJournaliaire = v },
    { property: "aggravating_factors", keyText: "Facteurs Aggravants", parser: (obj, v) => obj.aggravating_factors= ParseAgravationFactor(v) },
    { property: "relieving_factors", keyText: "Facteurs Soulageants", parser: (obj, v) => obj.relieving_factors= v },
    { property: "evolution", keyText: "Évolution", parser: (obj, v) => obj.evolution= v },
];


function ParseNRS(line : string, symptomeObj : Symptome) : number {

    line = line.replace("/10","")
    return Number(line)
}

function ParseAgravationFactor(line : string) : string[]{

    let valueList = line.split(",")

    valueList.forEach((value,index) => {
        valueList[index] = value.trim()
    });
    return valueList

}