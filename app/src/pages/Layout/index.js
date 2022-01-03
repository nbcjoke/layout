import { Header, Footer } from './components';
import { HowItWorks, Info, InfoSupport, PetsLove, Support, Wild } from './containers';

export const Layout = () => {
    return (
        <div>
        <Header />
        <Info />
        <HowItWorks />
        <InfoSupport />
        <Support />
        <PetsLove />
        <Wild />
        <Footer />
        </div>  
    );
};
