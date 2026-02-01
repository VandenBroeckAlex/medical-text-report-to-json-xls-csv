
import {Header, headerSchema} from "./models/SectionHeader"
import {InfoAdmin, infoAdminSchema} from "./models/SectionInfoAdmin"
import {AntropoMetric, antropoMetricSchema} from "./models/SectionAntropometric"
import { PathologieLombaire, pathologieLombaireSchema } from "./models/SectionPathologieLombaire";
import { Symptome, symptomeSchema } from "./models/SectionSymptome";
import { MecanismeDeDouleur, mecanismeDeDouleurSchema } from "./models/SectionMecanismeDeDouleur";
import { Satisfaction, satisfactionSchema } from "./models/SectionSatisfaction";
import { Observation, observationSchema } from "./models/SectionObservationEtNotes";
import { Hypothese,hypotheseSchema } from "./models/SectionHypothese";
import { ControleQuality, controleQualitySchema } from "./models/SectionControleQuality";
import { FonctioMobiNeuro, fonctioMobiNeuroSchema } from "./models/SectionTestsFonctioMobiNeuro";
import { QuestionnaireValide, questionnaireValideSchema } from "./models/SectionQuestionnaireValide";
import { MecanismeDouleur, mecanismeDouleurSchema } from "./models/SectionMecanismeDouleurs";
import { RedFlagAndPrecaution, redFlagAndPrecautionSchema } from "./models/SectionRedFlagAndPrecaution";
import { GestionAndRecommandations, gestionAndRecommandationsSchema } from "./models/SectionGestionAndRecommandation";
import { PerspectivesAndBelieves, perspectivesAndBelievesSchema } from "./models/SectionPerspectivesAndBelieves";
import { Pronostic, pronosticSchema } from "./models/SectionPronostic";
import { ActivityAndParticipation, activityAndParticipationSchema } from "./models/SectionActivityAndParticipation";
import { ContributingFactor, contributingFactorSchema } from "./models/SectionContributingFactors";
import {EvaluationComplete} from "./models/EvaluationComplete"

import * as fs from 'fs';
import * as path from "path";


let txt = fs.readFileSync('file.txt','utf8')

let evaluation = ParseTxtToEvaluationObj(txt)

ExportEvaluationToJson(evaluation)

// ------------------------------------

function ParseTxtToEvaluationObj(text : string) : EvaluationComplete{

const startTime = performance.now();
const Sections  = text.split("SECTION")

let header = new Header() 
let infoAdmin = new InfoAdmin()
let antropoMetric =  new AntropoMetric()
let pathologieLombaire = new PathologieLombaire()
let symptome = new Symptome()
let mecanismeDeDouleur = new MecanismeDeDouleur()
let satisfaction = new Satisfaction()
let observationEtNotes = new Observation()
let hypothese = new Hypothese()
let controleQuality = new ControleQuality()
let fonctioMobiNeuro = new FonctioMobiNeuro()
let questionnaireValide = new QuestionnaireValide()
let mecanismeDouleur = new MecanismeDouleur()
let redFlagAndPrecaution = new RedFlagAndPrecaution()
let gestionRecomandation = new GestionAndRecommandations()
let perspectiveAndBelives = new PerspectivesAndBelieves()
let pronostic = new Pronostic()
let activityAndParticipation = new ActivityAndParticipation()
let contributingFactor = new ContributingFactor()
const evaluation = new EvaluationComplete()

type SectionHandler = {
  match: string;
  target: unknown;
  schema: unknown;
};

const SECTION_HANDLERS: SectionHandler[] = [
  {
    match: "FICHE BILAN SCALENEO",
    target: header,
    schema: headerSchema,
  },
  {
    match: "INFORMATION ADMINISTRATIVE",
    target: infoAdmin,
    schema: infoAdminSchema,
  },
  {
    match: "DONNÉES ANTHROPOMÉTRIQUES",
    target: antropoMetric,
    schema: antropoMetricSchema,
  },
  {
    match: "PATHOLOGIE LOMBAIRE",
    target: pathologieLombaire,
    schema: pathologieLombaireSchema,
  },
  {
    match: "SYMPTÔMES - INTENSITÉ DOULEUR (NRS 0-10)",
    target: symptome,
    schema: symptomeSchema,
  },
  {
    match: "MÉCANISMES DE DOULEUR (Cocher: 1=Oui, 0=Non)",
    target: mecanismeDeDouleur,
    schema: mecanismeDeDouleurSchema,
  },
  {
    match: ": Satisfaction",
    target: satisfaction,
    schema: satisfactionSchema,
  },
  {
    match: "OBSERVATIONS CLINIQUES & NOTES",
    target: observationEtNotes,
    schema: observationSchema,
  },
   {
    match: "Hypothèse de travail (SCALENEO)",
    target: hypothese,
    schema: hypotheseSchema,
  },
  {
    match: "CONTRÔLE QUALITÉ",
    target: controleQuality,
    schema: controleQualitySchema,
  },
  {
    match :"TESTS FONCTIONNELS - MOBILITÉ LOMBAIRE - TESTS NEURODYNAMIQUES - SIGNES NEUROLOGIQUES ",
    target: fonctioMobiNeuro,
    schema: fonctioMobiNeuroSchema,
  },
  {
    match : "QUESTIONNAIRES VALIDÉS - SCORES [À remplir si indiqué]",
    target : questionnaireValide,
    schema : questionnaireValideSchema,
  },
  {
    match :"Mécanismes douleur",
    target: mecanismeDouleur,
    schema: mecanismeDouleurSchema,
  },
  {
    match : "DRAPEAUX ROUGES & PRÉCAUTIONS",
    target :redFlagAndPrecaution,
    schema : redFlagAndPrecautionSchema,
  },
   {
    match : "PLAN DE GESTION & RECOMMANDATIONS",
    target : gestionRecomandation,
    schema : gestionAndRecommandationsSchema,
  },
  {
    match : "Perspectives et croyances du patient",
    target : perspectiveAndBelives,
    schema : perspectivesAndBelievesSchema,
  },
  {
    match : "PRONOSTIC",
    target : pronostic,
    schema : pronosticSchema,
  },
  {
    match : "Activités et participation",
    target: activityAndParticipation,
    schema : activityAndParticipationSchema,
  },
  {
    match : "",
    target: contributingFactor,
    schema : contributingFactorSchema,
  }
];

Sections.forEach(section => {
  const handler = SECTION_HANDLERS.find(h =>
    section.toLowerCase().includes(h.match.toLowerCase())
  );

  if (handler) {
    BuildObject(section, handler.target, handler.schema);
  }
});
    // console.log(header)
    // console.log(infoAdmin)
    // console.log(antropoMetric)
    // console.log(pathologieLombaire)
    // console.log(symptome)
    // console.log(mecanismeDeDouleur)
    console.log(fonctioMobiNeuro)
    // console.log(satisfaction)
    // console.log(observationEtNotes)
    // console.log(hypothese)
    // console.log(controleQuality)
    // console.log(questionnaireValide)
    // console.log(mecanismeDouleur)
    // console.log(redFlagAndPrecaution)
    // console.log(gestionRecomandation)
    // console.log(perspectiveAndBelives)
    // console.log(pronostic)
    // console.log(activityAndParticipation)
    // console.log(contributingFactor)

    Object.assign(evaluation, {
    header,
    infoAdmin,
    antropoMetric,
    pathologieLombaire,
    symptome,
    mecanismeDeDouleur,
    satisfaction,
    observationEtNotes,
    hypothese,
    controleQuality,
    fonctioMobiNeuro,
    questionnaireValide,
    mecanismeDouleur,
    redFlagAndPrecaution,
    gestionRecomandation,
    perspectiveAndBelives,
    pronostic,
    activityAndParticipation,
    contributingFactor
  });

    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time for parsing file : ${elapsedTime} ms`);
    return evaluation
}

function ExportEvaluationToJson(evaluation : EvaluationComplete){

      const jsonData = JSON.stringify(evaluation, null, 2)
      const filePath = path.join(__dirname, "data.json");

  fs.writeFileSync(
    filePath,
    jsonData,
    "utf-8"
  );
}


// ------------------------------------

function BuildObject(section : string, objectToBuild : any , _schema : any){

    const lines = SeparateLines(section)
    const schema = _schema
    if(objectToBuild == MecanismeDouleur){
        // console.log(lines)
        //Key right of separator
         for (const line of lines) {
            for (const entry of schema) {
                let cleanedline = line
                if (cleanedline.toLowerCase().replace("☒","").replace("☐","").trim().startsWith(entry.keyText.toLowerCase())) {

                    const value = KeyRightCleanLine(line, entry.keyText);
                    entry.parser(objectToBuild, value);
                }
            }
        }
    }
     //Key lef of separator
    else{
       for (const line of lines) {
            for (const entry of schema) {
                let cleanedline = line
                if (cleanedline.toLowerCase().replace("☒","").replace("☐","").trim().startsWith(entry.keyText.toLowerCase())) {
                    const value = KeyLeftCleanLine(line, entry.keyText);
                    entry.parser(objectToBuild, value);
                }
            }
        }}
    return objectToBuild;
}

function SeparateLines(section : string) : string[]{
    return section.split("\n");
} 


function KeyLeftCleanLine(line: string, key: string): string {

     const lineLower = line.toLowerCase();
     const keyLower = key.toLowerCase();


    const keyIndex = lineLower.indexOf(keyLower);

    if (keyIndex === -1){
        return line.trim(); 
    } 

    
    let valueStart = keyIndex + key.length;
    while (valueStart < line.length && [":", "-", "=", " "].includes(line[valueStart])) {
        valueStart++;
    }

    // extract value
    const value = line.slice(valueStart).trim();
    return value;
}

function KeyRightCleanLine(line: string, key: string): string {

     const lineLower = line.toLowerCase();
     const keyLower = key.toLowerCase();


    const keyIndex = lineLower.indexOf(keyLower);

    if (keyIndex === -1){
        return line.trim(); 
    } 

    
    let valueStart = keyIndex + key.length;
    while (valueStart < line.length && [":", "-", "=", " "].includes(line[valueStart])) {
        valueStart++;
    }

    // extract value
    const value = line.slice(0,valueStart).trim();
    return value;
}


