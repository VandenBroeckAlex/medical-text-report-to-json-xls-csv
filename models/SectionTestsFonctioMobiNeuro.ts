

export class FonctioMobiNeuro{
    flexion ! : ValueNRS
    extension ! : ValueNRS
    inclinaisonLateraleDroit ! : ValueNRS
    inclinaisonLateraleGauche ! : ValueNRS
    rotationDroite! : ValueNRS
    rotationGauche! : ValueNRS
    combinaisonMouvements ! : string
    mobiliteSegmentaire ! : ValueNRS
    hanche ! : ValueNRS
    slrDroit ! : number
    slrGauche ! : number
    asymetrie ! : number
    slumpTest ! : SlumpTest
    pKB ! : SlumpTest
    forceMusculaire ! : string
    reflexes ! : string
    sensation! : Sensation
    profilSensoriel! : string
    signesMeninges! : string
    tensionMusculaire! : string
    triggerPoints ! : string
    hypersensibilitePression ! : string
    spasmeMusculaire! : string
    sorensen ! : string
    itoShirado ! : string
    coreStrength! : string
    sidePlank ! : string
    csm ! : string
}

export type FonctioMobiNeuroSchema = {
    property: keyof FonctioMobiNeuro;  
    parser: (obj: FonctioMobiNeuro, raw: string) => void; 
    keyText: string; // text in the file 
};

export const fonctioMobiNeuroSchema: FonctioMobiNeuroSchema[] = [
    { property: "flexion", keyText: "Flexion Avant (cm/grade)", parser: (obj, line) => obj.flexion = ParseValueNRS(line) },
    { property: "extension", keyText: "Extension (cm/grade)", parser: (obj, line) => obj.extension = ParseValueNRS(line) },
    { property: "inclinaisonLateraleDroit", keyText: "Inclinaison Latérale Droit (cm/grade)", parser: (obj, line) => obj.inclinaisonLateraleDroit = ParseValueNRS(line) },
    { property: "inclinaisonLateraleGauche", keyText: "Inclinaison Latérale Gauche (cm/grade)", parser: (obj, line) => obj.inclinaisonLateraleGauche = ParseValueNRS(line) },
    { property: "rotationDroite", keyText: "Rotation droite(degré/grade)", parser: (obj, line) => obj.rotationDroite = ParseValueNRS(line) },
    { property: "rotationGauche", keyText: "Rotation Gauche(degré/grade)", parser: (obj, line) => obj.rotationGauche = ParseValueNRS(line) },
    { property: "combinaisonMouvements", keyText: "Combinaison de mouvements (mouvements/grade)", parser: (obj, line) => obj.combinaisonMouvements = line },
    { property: "mobiliteSegmentaire", keyText: "Mobilité segmentaire PA (étage/grade)", parser: (obj, line) => obj.mobiliteSegmentaire = ParseValueNRS(line) },
    { property: "hanche", keyText: "Hanche (mouvements/grade)", parser: (obj, line) => obj.hanche = ParseValueNRS(line) },
    { property: "slrDroit", keyText: "SLR Droit (degrés)", parser: (obj, line) => obj.slrDroit = parseSLR(line) },
    { property: "slrGauche", keyText: "SLR Gauche (degrés)", parser: (obj, line) => obj.slrGauche = parseSLR(line) },
    { property: "asymetrie", keyText: "Asymétrie SLR", parser: (obj, line) => obj.asymetrie = parseSLR(line) },
    { property: "slumpTest", keyText: "Slump test (degrés)", parser: (obj, line) => obj.slumpTest = ParseSlumpTest(line) },
    { property: "pKB", keyText: "PKB (degrés)", parser: (obj, line) => obj.pKB = ParseSlumpTest(line) },
    { property: "forceMusculaire", keyText: "Force musculaire (MRC scale 0-5)", parser: (obj, line) => obj.forceMusculaire = line },
    { property: "reflexes", keyText: "Réflexes (Oui/Non)", parser: (obj, line) => obj.reflexes = line },
    { property: "sensation", keyText: "Sensation", parser: (obj, line) => obj.sensation = parseSensation(line) },
    { property: "profilSensoriel", keyText: "Profil sensoriel", parser: (obj, line) => obj.profilSensoriel = line },
    { property: "signesMeninges", keyText: "Signes méningés", parser: (obj, line) => obj.signesMeninges = line },
    { property: "tensionMusculaire", keyText: "Tension musculaire", parser: (obj, line) => obj.tensionMusculaire = line },
    { property: "triggerPoints", keyText: "Trigger points", parser: (obj, line) => obj.triggerPoints = line },
    { property: "hypersensibilitePression", keyText: "Hypersensibilité à la pression (Oui/Non)", parser: (obj, line) => obj.hypersensibilitePression = line },
    { property: "spasmeMusculaire", keyText: "Spasme musculaire", parser: (obj, line) => obj.spasmeMusculaire = line },
    { property: "sorensen", keyText: "Sorensen (secondes)", parser: (obj, line) => obj.sorensen = line },
    { property: "itoShirado", keyText: "Ito Shirado (secondes)", parser: (obj, line) => obj.itoShirado = line },
    { property: "coreStrength", keyText: "Core Strength Index", parser: (obj, line) => obj.coreStrength = line },
    { property: "sidePlank", keyText: "Side plank D/G (secondes)", parser: (obj, line) => obj.sidePlank = line },
    { property: "csm", keyText: "CSM (Plank, Pelvic tilt, Bridge,...)", parser: (obj, line) => obj.csm = line },
];


function ParseValueNRS(line : string) : ValueNRS{

    let nrsObj = new ValueNRS() 
    let valueList = line.split("|").join(",").split("/").join(",").split(",")
    // console.log(valueList)
    nrsObj.value = valueList[0]
    nrsObj.grade = Number(valueList[1].replace("Grade",""))
    nrsObj.nrs = Number(valueList[2].replace("(NRS 0-10):",""))
    
    return nrsObj
}


function parseSLR(line : string) : number{
    let value = line.replace("°","")
    return Number(value)
}

function ParseSlumpTest(line : string) : SlumpTest{
    let slumpTestObj = new SlumpTest()
    line = line.replace("|","").replace("Modif","").replace("à","")
    let valList = line.split(" ")

    let checkBoxValue = false
    valList.forEach(element => {


        if(element.includes("☒")){
            checkBoxValue = true
        }
        else if(element.includes("☐")){
            checkBoxValue = false
        }


        if(element.includes("Complet")){
            slumpTestObj.complet = checkBoxValue
        }   
        else if(element.includes("Limité")){
            slumpTestObj.limit = checkBoxValue
        }
        else if(element.includes("cerv")){
            slumpTestObj.modifCerv = checkBoxValue
        }
        else if(element.includes("distance")){
            slumpTestObj.modifDist = checkBoxValue
        }
        else if(element.includes("Asymétrie")){
            slumpTestObj.asymetry = checkBoxValue
        }
    });

    return slumpTestObj
}

function parseSensation(line :string) : Sensation{
    let sensationObj = new Sensation()

    let valList = line.split("|")

    if(valList[0].includes("☒")){
        sensationObj.piquerToucher = true
    }else{
        sensationObj.piquerToucher = false
    }

    if(valList[1].includes("☒")){
        sensationObj.sensibiliteFine = true
    }else{
        sensationObj.sensibiliteFine = false
    }

    if(valList[2].includes("☒")){
        sensationObj.chaudFroid = true
    }else{
        sensationObj.chaudFroid = false
    }

    sensationObj.localisation = valList[3]
    return sensationObj
}


class ValueNRS{
    value !: string
    grade !: number
    nrs !: number 
}

class SlumpTest{
    complet !: boolean 
    limit !: boolean
    modifCerv !: boolean
    modifDist !: boolean
    asymetry !: boolean
}
class MuscleStrength {
    // MRC scale 0–5
    left!: number
    right!: number
    global!: number
}
class Reflexes {
    normaux!: boolean
    rotulien!: number   // ex: +2
    achilleen!: number  // ex: +2
}
class Sensation {
    piquerToucher!: boolean
    sensibiliteFine!: boolean
    chaudFroid!: boolean

    localisation!: string
    
}
class ProfilSensoriel {
    normal!: boolean
    hypoesthesie!: boolean
    allodynie!: boolean
    hyperalgie!: boolean
}
class SignesMeninges {
    negatifs!: boolean
    kernig!: boolean
    brudzinski!: boolean
}
class TensionMusculaire {
    legere!: boolean
    normale!: boolean
    importante!: boolean
    commentaire?: string
}
class TriggerPoints {
    absent!: boolean
    present!: boolean
    localisation?: string
    commentaire?: string
}
class HypersensibilitePression {
    oui!: boolean
    non!: boolean
    zoneLombaireKgCm2?: number
    zoneControleKgCm2?: number
    commentaire?: string
}
