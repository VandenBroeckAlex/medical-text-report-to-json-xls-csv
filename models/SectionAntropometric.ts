
class BMI {
    value! : number
    classification ! : string
}

export class AntropoMetric{
    poids ! : string
    taille ! : string
    bmi ! : BMI 
}


type AntropoMetricSchema = {
    property: keyof AntropoMetric;  
    parser: (obj: AntropoMetric, raw: string) => void; 
    keyText: string; 
};

export const antropoMetricSchema: AntropoMetricSchema[] = [
    { property: "poids", keyText: "Poids (kg)", parser: (obj, v) => obj.poids = v },
    { property: "taille", keyText: "Taille (cm)", parser: (obj, v) => obj.taille = v },
    { property: "bmi", keyText: "IMC Calculé", parser: (obj, v) => obj.bmi = parseBMI(v) },
];


function parseBMI(line : string) : BMI{
    let bmiObj = new BMI()

    let value = Number(line.split(" ")[0].replace(",","."))
    let classification = line.split(" ")[1]

    bmiObj.value = value
    bmiObj.classification = classification
    return bmiObj
}