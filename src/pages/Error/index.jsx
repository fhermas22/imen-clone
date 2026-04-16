import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkBrokenPrimary from "../../assets/images/icons/link-broken-primary.svg";
import Button from "../../components/common/Button/index.jsx";

function Error() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            navigate('/');
        }
    }, [countdown, navigate]);

    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center p-8 xs:p-12 md:p-16 lg:p-24 bg-linear-to-br from-white to-gray-50">
            {/*======== Section 1 : 404 Illustration ======== */}
            <img
                src={LinkBrokenPrimary}
                alt="Icône d'erreur 404 représentant un lien brisé"
                className="w-50 h-50 mb-8 xs:mb-12 md:mb-16 animate-float drop-shadow-2xl"
            />

            {/*======== Section 2 : Page-Not-Found Text ======== */}
            <div className=' flex flex-col items-center'>
                <h1 className="font-title text-primary text-4xl font-bold xs:text-5xl md:text-6xl lg:text-7xl mb-4 xs:mb-6 md:mb-8 text-center leading-tight">
                    404
                </h1>
                <p className="font-title text-gray-700 text-xl font-semibold xs:text-2xl md:text-3xl mb-4 xs:mb-6 md:mb-8 text-center max-w-md xs:max-w-lg md:max-w-2xl">
                    Page non trouvée
                </p>
                <p className="font-body text-gray-600 mb-6 text-base xs:text-lg md:text-xl xs:mb-10 md:mb-12 text-center max-w-md xs:max-w-lg md:max-w-2xl leading-relaxed">
                    La page que vous cherchez n'existe pas ou a été déplacée. 
                    <br className="block" />
                    Redirection vers l'accueil dans <span className="font-bold text-primary">{countdown}s</span>.
                </p>
            </div>
            
            {/*======== Section 3 : Redirection Action ======== */}
            <div className='flex flex-col items-center'>
                <Button 
                    isPrimary 
                    to="/" 
                    className="text-lg xs:text-xl md:text-2xl px-8! py-4! !md:py-5 mb-6 xs:mb-8"
                    onClick={() => navigate('/')}
                >
                    Retour à l'accueil
                </Button>
                <p className="font-body text-gray-500 text-sm xs:text-base text-center">
                    Ou cliquez sur le bouton ci-dessus pour revenir immédiatement.
                </p>
            </div>
        </main>
    );
}

export default Error;
