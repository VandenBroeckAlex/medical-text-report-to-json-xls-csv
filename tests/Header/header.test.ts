import { Header } from "../../models/SectionHeader"
import { ParseTxtToEvaluationObj } from "../../main"

let header1 =
`FICHE BILAN SCALENEO - VERSION TEXTE OPTIMISÉE v3 App
SEMAINE 0 (BILAN INITIAL)
Patient:  Brad PITT
Date: 25/01/2026`


describe('header',()=>{
    test('case : heder 1', () =>{
        const header = new Header() 
        header.semaine = "0 (BILAN INITIAL)"
        header.patient = "Brad PITT"
        header.date = "25/01/2026"

        let output = ParseTxtToEvaluationObj(header1)
        expect(header).toEqual(output.header)
    })
})