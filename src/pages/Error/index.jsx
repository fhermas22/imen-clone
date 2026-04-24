import ErrorNotFound from "../../components/common/ErrorNotFound/index.jsx";

function Error() {
    return <ErrorNotFound 
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        countdownText="Redirection vers l'accueil dans"
    />;
}

export default Error;
