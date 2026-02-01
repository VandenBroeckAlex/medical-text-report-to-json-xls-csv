export class Pronostic{
    treatmentDuration ! : string
    numberOfHoppedSession ! : string 
    positivePrognosticFactors ! : string
    negativePrognosticFactors ! : string
    shortTermsObjectives ! : string
    longTermObjectives ! : string
    realisticExpectation ! : string
    healingExpectedByPatient ! : string
    yellowFlag ! : string
    socialSupport ! : string
    identifiedStress ! : string
    reevaluationPoint ! : string
    specialOrientationNeed ! : string
    anticipatedBarriersToTreatment ! : string
    
}

export type PronosticSchema = {
    property: keyof Pronostic;  
    parser: (obj: Pronostic, raw: string) => void; 
    keyText: string; // text in the file 
};

export const pronosticSchema: PronosticSchema[] = [
    { property: "treatmentDuration", keyText: "Durée Estimée Traitement", parser: (obj, v) => obj.treatmentDuration = v },
    { property: "numberOfHoppedSession", keyText: "Nombre de Séances Espérées", parser: (obj, v) => obj.numberOfHoppedSession = v },
    { property: "positivePrognosticFactors", keyText: "Facteurs Pronostiques Positifs", parser: (obj, v) => obj.positivePrognosticFactors = v },
    { property: "negativePrognosticFactors", keyText: "Facteurs Pronostiques Négatifs", parser: (obj, v) => obj.negativePrognosticFactors = v },
    { property: "shortTermsObjectives", keyText: "Objectifs à Court Terme (2-4 sem)", parser: (obj, v) => obj.shortTermsObjectives = v },
    { property: "longTermObjectives", keyText: "Objectifs à Long Terme (8-12 sem)", parser: (obj, v) => obj.longTermObjectives = v },
    { property: "realisticExpectation", keyText: "Attentes réalistes", parser: (obj, v) => obj.realisticExpectation = v },
    { property: "healingExpectedByPatient", keyText: "Patient anticipe guérison", parser: (obj, v) => obj.healingExpectedByPatient = v },
    { property: "yellowFlag", keyText: "Yellow Flags", parser: (obj, v) => obj.yellowFlag = v },
    { property: "socialSupport", keyText: "Soutien social", parser: (obj, v) => obj.socialSupport = v },
    { property: "identifiedStress", keyText: "Stresseurs identifiés", parser: (obj, v) => obj.identifiedStress = v },
    { property: "reevaluationPoint", keyText: "Besoin orientation spécialisée", parser: (obj, v) => obj.reevaluationPoint = v },
    { property: "specialOrientationNeed", keyText: "Point de réévaluation", parser: (obj, v) => obj.specialOrientationNeed = v },
    { property: "anticipatedBarriersToTreatment", keyText: "Barrières anticipées au traitement", parser: (obj, v) => obj.anticipatedBarriersToTreatment = v },

];



