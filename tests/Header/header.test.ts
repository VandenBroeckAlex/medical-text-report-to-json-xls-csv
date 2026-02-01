import { Header } from "../../models/SectionHeader"
import { ParseTxtToEvaluationObj } from "../../main"

let header1 =
`FICHE BILAN SCALENEO - VERSION TEXTE OPTIMISÉE v3 App
SEMAINE 0 (BILAN INITIAL)
Patient:  Brad PITT
Date: 25/01/2026`
let header2 = `FICHE BILAN SCALENEO - VERSION TEXTE OPTIMISÉE v3 App
SEMAINE 8 (RÉÉVALUATION FINALE - FIN DE TRAITEMENT)
Patient: Brad PITT
Date: 20/03/2026
`
let header3 = `FICHE BILAN SCALENEO - VERSION TEXTE OPTIMISÉE v3 App
SEMAINE 4 (RÉÉVALUATION INTERMÉDIAIRE)
Patient: Brad PITT
Date: 22/02/2026`


describe('header',()=>{
    test('case : header 1', () =>{
        const header = new Header() 
        header.semaine = "0 (BILAN INITIAL)"
        header.patient = "Brad PITT"
        header.date = "25/01/2026"

        let output = ParseTxtToEvaluationObj(header1)
        expect(header).toEqual(output.header)
    })
    test('case : header 2', () =>{
        const header = new Header() 
        header.semaine = "8 (RÉÉVALUATION FINALE - FIN DE TRAITEMENT)"
        header.patient = "Brad PITT"
        header.date = "20/03/2026"

        let output = ParseTxtToEvaluationObj(header2)
        expect(header).toEqual(output.header)
    })
    test('case : header 3', () =>{
        const header = new Header() 
        header.semaine = "4 (RÉÉVALUATION INTERMÉDIAIRE)"
        header.patient = "Brad PITT"
        header.date = "22/02/2026"

        let output = ParseTxtToEvaluationObj(header3)
        expect(header).toEqual(output.header)
    })
})