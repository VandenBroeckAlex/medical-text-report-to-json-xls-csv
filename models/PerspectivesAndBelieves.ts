export class PerspectivesAndBelieves{
    diagnosisComprehension ! : string
    gravityPerception ! : string
    autoEffectivnessToPain !  : string
}

export type PerspectivesAndBelievesSchema = {
    property: keyof PerspectivesAndBelieves;  
    parser: (obj: PerspectivesAndBelieves, raw: string) => void; 
    keyText: string; // text in the file 
};

export const perspectivesAndBelievesSchema: PerspectivesAndBelievesSchema[] = [
    { property: "diagnosisComprehension", keyText: "Compréhension du diagnostic par le patient", parser: (obj, v) => obj.diagnosisComprehension = v },
    { property: "gravityPerception", keyText: "Perception de gravité", parser: (obj, v) => obj.gravityPerception = v },
    { property: "autoEffectivnessToPain", keyText: "Auto-efficacité face à la douleur", parser: (obj, v) => obj.autoEffectivnessToPain = v },
];



