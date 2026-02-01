class Recidive {
    value !: boolean
    comment !: string
}

class WorstEpisode{
    value !: string
    comment !: string
}

export class PathologieLombaire{
    antecedents ! : boolean
    episodeInitial ! : string
    traumatisme ! : string
    recidive ! : Recidive
    pireEpisode ! : WorstEpisode
    dureeTotal ! : string
    typeLBP ! : string
}


type PathologieLombaireSchema = {
    property: keyof PathologieLombaire;  
    parser: (obj: PathologieLombaire, raw: string) => void; 
    keyText: string; 
};

export const pathologieLombaireSchema: PathologieLombaireSchema[] = [
    { property: "antecedents", keyText: "Antécédents LBP (Oui/Non)", parser: (obj, line) => obj.antecedents = ParseAntecedents(line) },
    { property: "episodeInitial", keyText: "Episode Initial", parser: (obj, line) => obj.episodeInitial = line },
    { property: "traumatisme", keyText: "Traumatisme, progressif ou spontané: Spontané", parser: (obj, v) => obj.traumatisme = v },
    { property: "recidive", keyText: "Récidive (Oui/Non)", parser: (obj, line) => obj.recidive = ParseRecidive(line) },
    { property: "pireEpisode", keyText: "Pire Episode", parser: (obj, line) => obj.pireEpisode = ParseWorstEpisode(line) },
    { property: "dureeTotal", keyText: "Durée Totale LBP (mois)", parser: (obj, line) => obj.dureeTotal = line },
    { property: "typeLBP", keyText: "Type LBP", parser: (obj, line) => obj.typeLBP= line },
];


function ParseAntecedents(line : string) : boolean{
    if(line.toLowerCase().includes("non")){
        return false
    }
    return true
}

function ParseRecidive(line:string) : Recidive{
    let recidiveObj = new Recidive()

    let splitLine = line.split("-")

    let value = splitLine[0]
    let comment = splitLine[1]

    if(value.includes("non")){
        recidiveObj.value = false
    }else{
        recidiveObj.value = true
    }
    recidiveObj.comment = comment
    return recidiveObj
}

function ParseWorstEpisode(line:String) : WorstEpisode{
    let worstEpisodeObj = new WorstEpisode()
    let splitLine = line.split("-")

    worstEpisodeObj.value  = splitLine[0]
    worstEpisodeObj.comment = splitLine[1]
    return worstEpisodeObj
}
