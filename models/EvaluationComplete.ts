import {Header } from "./SectionHeader"
import {InfoAdmin} from "./SectionInfoAdmin"
import {AntropoMetric} from "./SectionAntropometric"
import { PathologieLombaire} from "./SectionPathologieLombaire";
import { Symptome} from "./SectionSymptome";
import { MecanismeDeDouleur} from "./SectionMecanismeDeDouleur";
import { Satisfaction} from "./SectionSatisfaction";
import { Observation} from "./SectionObservationEtNotes";
import { Hypothese} from "./SectionHypothese";
import { ControleQuality} from "./SectionControleQuality";
import { FonctioMobiNeuro} from "./SectionTestsFonctioMobiNeuro";
import { QuestionnaireValide} from "./SectionQuestionnaireValide";
import { MecanismeDouleur} from "./SectionMecanismeDouleurs";
import { RedFlagAndPrecaution} from "./SectionRedFlagAndPrecaution";
import { GestionAndRecommandations} from "./SectionGestionAndRecommandation";
import { PerspectivesAndBelieves} from "./SectionPerspectivesAndBelieves";
import { Pronostic} from "./SectionPronostic";
import { ActivityAndParticipation} from "./SectionActivityAndParticipation";
import { ContributingFactor} from "./SectionContributingFactors";

export class EvaluationComplete {
    header!: Header
    infoAdmin!: InfoAdmin
    antropoMetric!: AntropoMetric
    pathologieLombaire!: PathologieLombaire
    symptome!: Symptome
    mecanismeDeDouleur!: MecanismeDeDouleur
    fonctioMobiNeuro!: FonctioMobiNeuro
    questionnaireValide!: QuestionnaireValide
    redFlagAndPrecaution!: RedFlagAndPrecaution
    mecanismeDouleur!: MecanismeDouleur
    gestionRecomandation!: GestionAndRecommandations
    perspectiveAndBelives!: PerspectivesAndBelieves
    pronostic!: Pronostic
    activityAndParticipation!: ActivityAndParticipation
    contributingFactor!: ContributingFactor
    satisfaction!: Satisfaction
    observationEtNotes!: Observation
    hypothese!: Hypothese
    controleQuality!: ControleQuality
}
