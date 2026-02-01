import { InfoAdmin } from "../models/SectionInfoAdmin"
import { ParseTxtToEvaluationObj } from "../main"

let infoAdmin1 =
`================================================================================
SECTION 1: INFORMATION ADMINISTRATIVE
================================================================================

Nom et prénom du Patient: PITT Brad 
Année de Naissance: 1988
Age: 37 ans
Sexe: F
Profession: ☐ Manuel | ☒ Non-manuel | ☐ Hybride | Secteur: Ressources Humaines - Manager

Kiné Examinateur: Tom Cruise
Date Bilan: 25/01/2026
ID Patient: PAT-2026-0912
ID Bilan: BIL-2026-0912-S0`
let infoAdmin2 = `================================================================================
SECTION 1: INFORMATION ADMINISTRATIVE
================================================================================

Nom et prénom du Patient: PITT Brad 
Année de Naissance: 1988
Age: 37 ans
Sexe: F
Profession: ☐ Manuel | ☒ Non-manuel | ☐ Hybride | Secteur: Ressources Humaines - Manager

Kiné Examinateur: Tom Cruise
Date Bilan: 20/03/2026
ID Patient: PAT-2026-0912
ID Bilan: BIL-2026-0912-S8
`
let infoAdmin3 = `================================================================================
SECTION 1: INFORMATION ADMINISTRATIVE
================================================================================

Nom et prénom du Patient: PITT Brad 
Année de Naissance: 1988
Age: 37 ans
Sexe: F
Profession: ☐ Manuel | ☒ Non-manuel | ☐ Hybride | Secteur: Ressources Humaines - Manager

Kiné Examinateur: Tom Cruise
Date Bilan: 22/02/2026
ID Patient: PAT-2026-0912
ID Bilan: BIL-2026-0912-S4`


describe('infoAdministrative',()=>{
    test('case : infoAdministrative 1', () =>{
        const infoAdmin = new InfoAdmin() 
        infoAdmin.patient = "PITT Brad"
        infoAdmin.bornDate = "1988"
        infoAdmin.age =  37
        infoAdmin.sexe = "F"
        infoAdmin.profession = "Non-manuel"
        infoAdmin.secteur = "Ressources Humaines - Manager"
        infoAdmin.kine = "Tom Cruise"
        infoAdmin.bilan ="25/01/2026"
        infoAdmin.IDBilan ="BIL-2026-0912-S0"
        infoAdmin.IDPatient ="PAT-2026-0912"

        let output = ParseTxtToEvaluationObj(infoAdmin1)
        expect(infoAdmin).toEqual(output.infoAdmin)
    })
    test('case : infoAdministrative 2', () =>{
        const infoAdmin = new InfoAdmin() 
        infoAdmin.patient = "PITT Brad"
        infoAdmin.bornDate = "1988"
        infoAdmin.age =  37
        infoAdmin.sexe = "F"
        infoAdmin.profession = "Non-manuel"
        infoAdmin.secteur = "Ressources Humaines - Manager"
        infoAdmin.kine = "Tom Cruise"
        infoAdmin.bilan ="20/03/2026"
        infoAdmin.IDBilan ="BIL-2026-0912-S8"
        infoAdmin.IDPatient ="PAT-2026-0912"
        let output = ParseTxtToEvaluationObj(infoAdmin2)
        expect(infoAdmin).toEqual(output.infoAdmin)
    })
      test('case : infoAdministrative 3', () =>{
        const infoAdmin = new InfoAdmin() 
        infoAdmin.patient = "PITT Brad"
        infoAdmin.bornDate = "1988"
        infoAdmin.age =  37
        infoAdmin.sexe = "F"
        infoAdmin.profession = "Non-manuel"
        infoAdmin.secteur = "Ressources Humaines - Manager"
        infoAdmin.kine = "Tom Cruise"
        infoAdmin.bilan ="22/02/2026"
        infoAdmin.IDBilan ="BIL-2026-0912-S4"
        infoAdmin.IDPatient ="PAT-2026-0912"
        let output = ParseTxtToEvaluationObj(infoAdmin3)
        expect(infoAdmin).toEqual(output.infoAdmin)
    })
})