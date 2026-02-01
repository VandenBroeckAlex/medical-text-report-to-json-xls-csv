

export type Profession = "Manuel" | "Non-manuel" | "Hybride"

export class InfoAdmin{
    
    patient! : string
    bornDate! : string
    age! : number
    sexe! : string
    profession! : Profession
    secteur! : string
    kine! : string
    bilan! : string
    IDPatient! : string
    IDBilan! : string
}



function capitalizeFirstLetter(str : string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export type InfoAdminSchema = {
    property: keyof InfoAdmin;  
    parser: (obj: InfoAdmin, raw: string) => void; 
    keyText: string; // text in the file 
};

export const infoAdminSchema: InfoAdminSchema[] = [
    
    { property: "patient", keyText: "Nom et prénom du Patient", parser: (obj, v) => obj.patient = capitalizeFirstLetter(v) },
    { property: "bornDate", keyText: "Année de Naissance", parser: (obj, v) => obj.bornDate = v },
    { property: "age", keyText: "Age", parser: (obj, v) => obj.age = ParseAge(v) },
    { property:"sexe", keyText: "Sexe", parser:(obj,v) => obj.sexe = v},
    { property: "profession", keyText: "Profession", parser: (obj, v) => {const { profession, secteur } = ParseProfessionAndSecteur(v); obj.profession = profession;obj.secteur = secteur;}},
    {property: "kine", keyText:"Kiné Examinateur", parser:(obj,v) => obj.kine = v},
    {property: "bilan", keyText:"Date Bilan", parser:(obj,v) => obj.bilan = v},
    {property: "IDPatient", keyText:"ID Patient", parser:(obj,v) => obj.IDPatient = v},
    {property: "IDBilan", keyText:"ID Bilan", parser:(obj,v) => obj.IDBilan = v},
    
];



function ParseProfessionAndSecteur(line: string): { profession: Profession, secteur: string } {
    const parts = line.split(" | ");
    let secteur = "";
    let profession: Profession | undefined;

    for (const part of parts) {
        if (part.includes("☒")) {
            const value = part.replace(/☒|☐/g, "").trim();
            if (["Manuel", "Non-manuel", "Hybride"].includes(value)) {
                profession = value as Profession;
            }
        }

        if (part.toLowerCase().startsWith("secteur:")) {
            secteur = part.slice("secteur:".length).trim();
        }
    }

    if (!profession) throw new Error("No profession selected");
    return { profession, secteur };
}

function ParseAge(line : string) : number{
    line = line.replace("ans","")
    return Number(line)
}
