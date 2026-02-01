export class ContributingFactor{
    posturalDefectsIdentified ! : string
    biomechanicalfactors ! : string
    lifestyleFactors ! : string
    hormonalMetabolicFactors ! : string
    ergonomicWorkEnvironment ! : string
    majorPsychosocialFactors ! : string
    healthSystemCulture ! : string
    culturalTreatmentExpectations ! : string
    earlyCompliance ! : string
}

export type ContributingFactorSchema = {
    property: keyof ContributingFactor;  
    parser: (obj: ContributingFactor, raw: string) => void; 
    keyText: string; // text in the file 
};

export const contributingFactorSchema: ContributingFactorSchema[] = [
    { property: "posturalDefectsIdentified", keyText: "Défauts posturaux identifiés", parser: (obj, v) => obj.posturalDefectsIdentified = v },
    { property: "biomechanicalfactors", keyText: "Facteurs biomécaniques", parser: (obj, v) => obj.biomechanicalfactors = v },
    { property: "lifestyleFactors", keyText: "Facteurs de style de vie", parser: (obj, v) => obj.lifestyleFactors = v },
    { property: "hormonalMetabolicFactors", keyText: "Facteurs hormonaux/métaboliques", parser: (obj, v) => obj.hormonalMetabolicFactors = v },
    { property: "ergonomicWorkEnvironment", keyText: "Contexte de travail ergonomique", parser: (obj, v) => obj.ergonomicWorkEnvironment = v },
    { property: "majorPsychosocialFactors", keyText: "Facteurs psychosociaux majeurs", parser: (obj, v) => obj.majorPsychosocialFactors = v },
    { property: "healthSystemCulture", keyText: "Système santé/Culture: Conception biopsychosociale", parser: (obj, v) => obj.healthSystemCulture = v },
    { property: "culturalTreatmentExpectations", keyText: "Attentes culturelles de traitement: Attente guérison rapide", parser: (obj, v) => obj.culturalTreatmentExpectations = v },
    { property: "earlyCompliance", keyText: "", parser: (obj, v) => obj.earlyCompliance = v },
];



