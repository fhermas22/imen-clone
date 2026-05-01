{/*== Component Imports  == */ }
import ErrorNotFound from "../../components/common/ErrorNotFound";
{/*== Icons Imports  == */ }
import ConstructionConePrimary from "../../assets/images/icons/construction-cone-attention-primary.svg";

function UnderConstruction() {
    return (
        <ErrorNotFound
            title="Bientôt disponible"
            subtitle="Page en cours de développement"
            description={`L'équipe technique de l'IMeN travaille activement sur cette section. \nRevenez très prochainement !`}
            redirectText="Retourner à l'accueil"
            iconSrc={ConstructionConePrimary}
            countdown={30}
        />
    );
}

export default UnderConstruction;