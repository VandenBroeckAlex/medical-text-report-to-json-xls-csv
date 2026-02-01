export class ActivityAndParticipation{
    dailyActivity ! : string
    hobbysAndSports ! : string
    timeSitAndStand ! : string
    sedentary ! : string
    professionalStatus ! : string
    daysOfAbsenceFromWork ! : string
    professionalLimitation ! : string
    expectationsReturnToWork ! : string
    positionModificationsPossible ! : string
}

export type ActivityAndParticipationSchema = {
    property: keyof ActivityAndParticipation;  
    parser: (obj: ActivityAndParticipation, raw: string) => void; 
    keyText: string; // text in the file 
};

export const activityAndParticipationSchema: ActivityAndParticipationSchema[] = [
    { property: "dailyActivity", keyText: "Activités quotidiennes limitées", parser: (obj, v) => obj.dailyActivity = v },
    { property: "hobbysAndSports", keyText: "Loisirs/Sports limitées", parser: (obj, v) => obj.hobbysAndSports = v },
    { property: "timeSitAndStand", keyText: "Temps assis/debout toléré (minutes)", parser: (obj, v) => obj.timeSitAndStand = v },
    { property: "sedentary", keyText: "Comportement sédentaire (heures)", parser: (obj, v) => obj.sedentary = v },
    { property: "professionalStatus", keyText: "Statut professionnel", parser: (obj, v) => obj.professionalStatus = v },
    { property: "daysOfAbsenceFromWork", keyText: "Jours d'absence travail", parser: (obj, v) => obj.daysOfAbsenceFromWork = v },
    { property: "professionalLimitation", keyText: "Limitations professionnelles", parser: (obj, v) => obj.professionalLimitation = v },
    { property: "expectationsReturnToWork", keyText: "Attentes Retour au Travail", parser: (obj, v) => obj.expectationsReturnToWork = v },
    { property: "positionModificationsPossible", keyText: "Modifications poste possibles", parser: (obj, v) => obj.positionModificationsPossible = v },
];



