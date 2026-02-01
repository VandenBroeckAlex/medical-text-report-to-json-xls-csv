export class GestionAndRecommandations{
    therapyFrequences ! : string
    manualTherapy ! : string
    therapyByExercise ! : string
    neurodynamic ! : string
    patientEducation ! : string
    modality ! : string
}

export type GestionAndRecommandationsSchema = {
    property: keyof GestionAndRecommandations;  
    parser: (obj: GestionAndRecommandations, raw: string) => void; 
    keyText: string; // text in the file 
};

export const gestionAndRecommandationsSchema: GestionAndRecommandationsSchema[] = [
    { property: "therapyFrequences", keyText: "Fréquence Thérapie (séances/semaine)", parser: (obj, v) => obj.therapyFrequences = v },
    { property: "manualTherapy", keyText: "Thérapie Manuelle (Oui/Non)", parser: (obj, v) => obj.manualTherapy = v },
    { property: "therapyByExercise", keyText: "Thérapie par Exercice (Oui/Non)", parser: (obj, v) => obj.therapyByExercise = v },
    { property: "neurodynamic", keyText: "Thérapie par Neurodynamique (Oui/Non)", parser: (obj, v) => obj.neurodynamic = v },
    { property: "patientEducation", keyText: "Éducation Patient (Oui/Non)", parser: (obj, v) => obj.patientEducation = v },
    { property: "modality", keyText: "Modalités Supplémentaires", parser: (obj, v) => obj.modality = v },
];



