import Livraison from "./services/Livraison";
import Stock from "./services/Stock";
import Catalogue from "./services/Catalogue";
import Magasin from "./services/Magasin"
import Facturation from "./services/Facturation";


function App() {
  return (
    <div className="md:flex min-h-screen p-2 gap-2 bg-[#3A6EA5] ">
        <Magasin />
        <Catalogue />
        <Stock />
        <Facturation />
        <Livraison />
    </div>
  );
}

export default App;
