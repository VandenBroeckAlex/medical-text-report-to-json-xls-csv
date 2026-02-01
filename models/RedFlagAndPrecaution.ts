export class RedFlagAndPrecaution{
    redFlagDetected ! : string
    contreIndications ! : string
    allergies ! : string 
    medicationsPertinentes ! : string
    examenMedicaux ! : string 
    instabiliteRachidienne ! : string 
    limitationTraitementManuel ! : string 
    anticoagulation ! : string 
    grossesse ! : string 
    generalState ! : string 
}

export type RedFlagAndPrecautionSchema = {
    property: keyof RedFlagAndPrecaution;  
    parser: (obj: RedFlagAndPrecaution, raw: string) => void; 
    keyText: string; // text in the file 
};

export const redFlagAndPrecautionSchema: RedFlagAndPrecautionSchema[] = [
    { property: "redFlagDetected", keyText: "Drapeaux Rouges Détectés (Oui/Non)", parser: (obj, v) => obj.redFlagDetected = v },
    { property: "contreIndications", keyText: "Contre-Indications", parser: (obj, v) => obj.contreIndications = v },
    { property: "allergies", keyText: "Allergies", parser: (obj, v) => obj.allergies = v },
    { property: "medicationsPertinentes", keyText: "Médications Pertinentes", parser: (obj, v) => obj.medicationsPertinentes = v },
    { property: "examenMedicaux", keyText: "Examen médicaux", parser: (obj, v) => obj.examenMedicaux = v },
    { property: "instabiliteRachidienne", keyText: "Instabilité rachidienne", parser: (obj, v) => obj.instabiliteRachidienne = v },
    { property: "limitationTraitementManuel", keyText: "Limitation traitement manuel", parser: (obj, v) => obj.limitationTraitementManuel = v },
    { property: "anticoagulation", keyText: "Anticoagulation/Trouble hémorragique", parser: (obj, v) => obj.anticoagulation = v },
    { property: "grossesse", keyText: "Grossesse", parser: (obj, v) => obj.grossesse = v },
    { property: "generalState", keyText: "État général", parser: (obj, v) => obj.generalState = v },
];



