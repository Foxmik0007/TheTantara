import game from './images/gamr.png'
import fashion from './images/fashion.PNG'
import food from './images/food.PNG'
import mode from './images/mode1900.jpg'

const Affaires = () => {
    return (
        <div class="Affaires">
            <h2>Les petits dossiers du jour</h2>
            <div class="container">
                <div class="row">

                    <div class="col-sm">
                        <h4>La recette du jour</h4>
                        <img src={food} alt="Pain de ménage - photo" width={200} style={{borderRadius: '20px' }} />
                        <h5>Pain de ménage</h5>
                        <ul>
                            <li>1 litre (4 tasses) de farine tout usage</li>
                            <li>15 ml (1 c. à soupe) de sucre</li>
                            <li>5 ml (1 c. à thé) de sel</li>
                            <li>10 ml (2 c. à thé) de levure instantanée ou 1 sachet</li>
                            <li>405 ml (1 1/2 tasse + 2 c. à soupe) d'eau tiède, environ</li>
                        </ul>
                        <br></br>
                        
                        <h4>Préparation</h4>
                        <ol>
                            <li>Dans un bol, mélanger les ingrédients secs. Creuser un puits au centre. Y verser l'eau, l'incorporer à la cuillère de bois, puis mélanger avec les mains pour former une boule. Pétrir de 5 à 10 minutes.</li>
                            <li>Déposer la pâte dans un grand bol huilé. Couvrir d'un linge propre. Laisser lever dans un endroit tiède 45 minutes. Retirer du bol et pétrir environ 30 secondes.</li>
                            <li>Façonner la pâte en forme de rouleau et la déposer dans un moule à pain beurré de 20 x 10 cm (8 x 4 po). Couvrir d'un linge et laisser lever de nouveau dans un endroit tiède pendant 1 h 10.</li>
                            <li>Auxerunt haec vulgi sordidioris audaciam, quod cum</li>
                            <li>Préchauffer le four à 180 °C (350 °F). Cuire dans le bas du four environ 25 minutes.</li>
                        </ol>

                        <h4>Note</h4>
                        <p>
                        Dans une recette, lorsqu'on dit de faire lever une pâte dans un endroit tiède, l'endroit idéal est le four éteint. L'ampoule allumée donnera la chaleur voulue et un bol rempli d'eau chaude apportera l'humidité souhaitée. Parfois, lorsque le four est occupé, j'utilise aussi le four à micro-ondes. J'y place un bol d'eau chaude et je laisse la porte entrouverte pour permettre à l'ampoule de rester allumée.
                        </p>
                    </div>

                    <div class="col-md">
                        <h4>4 conseils de mode qui vont vous changer la vie</h4>
                        <img src={mode} alt="img" width={600} />

                        <br />
                        <br/>
                        <ol>
                            <li><b>CHOISIR SES VÊTEMENTS EN FONCTION DE SA MORPHOLOGIE</b>
                            <p>Mettez en valeur vos atouts. Si par exemple votre taille est fine, optez pour un pantalon ou une robe qui la souligne, mais évitez les robes bustiers qui vous feront paraître plus large que vous ne l’êtes</p></li>
                            <li><b>INVESTIR DANS UN BON PANTALON</b>
                            <p>Essayez toujours un pantalon avant de l’acheter. Il doit parfaitement vous aller et vous devez vous sentir bien dedans, sinon vous ne le porterez jamais.

Mieux vaut investir plus dans un vêtement porté souvent que d’investir dans plusieurs pièces de moindre qualité que vous ne mettrez jamais.</p></li>
<li><b>ASSOCIER LES BONNES COULEURS</b>
                            <p>Inutile d’être une experte en mode pour associer les couleurs de ses vêtements. Pour éviter toute erreur de style, le conseil de mode suivant consiste à avoir principalement des pièces basiques de couleur noire, blanche, grise, beige, nude, etc.

Faites attention à toujours choisir des teintes qui s’accordent à votre couleur de peau pour mettre en valeur votre teint et agir comme un effet bonne mine, surtout en hiver.

                                    Lorsque vous optez pour des couleurs très originales, pensez immédiatement à comment vous allez les associer une fois votre achat effectué.</p></li>
                                    <li><b>OPTER POUR DES VÊTEMENTS CONFORTABLES</b>
                            <p>Ce conseil de mode vaut pour toute votre garde-robe tout au long de votre vie : pull, jupe, chemise, tee-shirt, veste, manteau ou robe, vos habits doivent être confortables pour que vous ayez envie de les porter.

Confortable ne rime pas avec démodé ou laid! La plupart de vos tenues seront agréables à porter, mais en accord avec les tendances du moment.</p></li>
                            
                            
                        </ol>
                        <br></br>

                        <h4>Offre d'emploi</h4>
                        <h5>1. Chef Cuisinier Recherché</h5>
                        <b>Liste de tâches</b>
                        <ul>
                            <li>Préparer, précuire et/ou cuire les produits alimentaires selon les directives.</li>
                            <li>Étiqueter, dater, entreposer les aliments et les boissons dans les aires d’entreposage appropriées, ainsi que d’en effectuer la rotation.</li>
                            <li>Illud autem non dubitatur quod cum esset aliqua</li>
                            <li>Exécuter d’autres tâches assignées ou confiées.</li>
                            <li>Communiquer efficacement avec tous les services opérationnels appropriés.</li>
                        </ul>
                        <br />
                         
                        <b>Compétences et salaire :</b>
                        <ul>
                            <li>Expérience reconnue en cuisine, y compris l’expérience comme cuisinier de restaurant ou commis de cuisine.</li>
                            <li>Précision et rapidité dans l’exécution des tâches assignées.</li>
                            <li>Familiarité avec les pratiques exemplaires de l’industrie.</li>
                            <li>Aptitudes physiques pour exécuter les tâches liées au poste.</li>
                            <li> <b>Salaire : </b> 3$/heure</li>
                            <li> <b>Contact : </b> Allez au restaurant Freddy's le plus proche</li>
                        </ul>
                    </div>

                    <div class="col-sm">
                        <h4>Jeux</h4>
                        <img src={game} alt="img" width="400"></img>
                        <h5>Règle du jeu - Mots croisées</h5>
                        <ol>
                            <li>Le motif de carrés noirs et blancs doit être symétrique. Généralement, cette règle signifie que si vous retournez la grille, le motif aura le même aspect qu'à l'endroit.</li>
                            <li>N'utilisez pas trop de carrés noirs. Dans l'ancien temps des puzzles, les carrés noirs n'étaient pas autorisés à occuper plus de 16% d'une grille. De nos jours, il n'y a pas de limite stricte, afin de permettre une flexibilité maximale pour le placement des entrées thématiques. Néanmoins, les carrés noirs "tricheurs" (ceux qui n'affectent pas le nombre de mots dans le puzzle, mais sont ajoutés pour faciliter la construction) doivent être réduits au minimum, et les gros blocs de carrés noirs n'importe où dans une grille sont fortement déconseillés.
</li>
                            <li>N'utilisez pas de lettres sans clé (lettres qui apparaissent dans un seul mot vers le bas ou vers le bas). Pour être juste envers les solveurs, chaque lettre doit apparaître à la fois dans un mot Across et Down.</li>
                            <li>N'utilisez pas de mots de deux lettres. La longueur minimale du mot est de trois lettres.</li>
                            <li>La grille doit avoir un verrouillage intégral. En d'autres termes, les carrés noirs ne peuvent pas découper la grille en morceaux séparés. Un solveur, théoriquement, devrait pouvoir passer de n'importe quelle section de la grille à n'importe quelle autre sans avoir à s'arrêter et à recommencer.</li>
                            <li>Les entrées thématiques longues doivent être placées symétriquement. S'il y a une entrée de thème majeur à trois rangées du haut de la grille, par exemple, il doit y avoir une autre entrée de thème à la même position à trois rangées du bas. De plus, en règle générale, aucune entrée non thématique ne doit être plus longue que n'importe quelle entrée thématique.</li>
                            <li>Ne répétez pas les mots dans la grille.</li>
                            <li>N'inventez pas de mots et de phrases. Chaque réponse doit avoir une référence ou bien être d'usage courant dans le discours ou l'écriture de tous les jours.</li>
                            <li>(Règle moderne) Le vocabulaire d'un mot croisé doit être vivant et avoir très peu d'obscurité.</li>

                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Affaires;