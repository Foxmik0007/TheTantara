import events1 from './images/events1.PNG'
import events2 from './images/events2.jpg'
import events3 from './images/events3.PNG'
import events4 from './images/events4.jpg'
import events5 from './images/events5.jpg'
import events6 from './images/drugs.jpg'
import events7 from './images/mosley.jpg'
import events8 from './images/event6.jpg'


const Articles = () => {

    const zoom =(e)=>{
        
        }

    return (
        <div className="todayArticles">
            <h2>Les Articles du jour</h2>

            <div className='titles'>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <h5>Histoire de la ville de Montréal</h5>
                            <img src={events1} alt="image - Histoire de la ville de montreal" width={400} style={{ borderRadius: '20px',float:'left', marginRight:'2em' }}></img>
                            <p>L'histoire de Montréal a été marquée par plusieurs vagues d'immigration. D'abord françaises, puis britanniques, ces vagues ont commencé à se diversifier au milieu du XXe siècle avec l'arrivée d'autres groupes venus du continent européen. Au début des années 1960, l'immigration devient encore plus variée, des communautés d'Asie émigrent à Montréal. Dans les années 1970, les immigrants venaient principalement d'Europe, d'Asie et des Caraïbes. À partir des années 1980, cependant, les Asiatiques constituaient le plus grand groupe d'immigrants. Les années 1990 ont confirmé cette tendance. Après l'an 2000, l'immigration continue de se diversifier, les communautés d'Afrique du Nord et d'Amérique latine adoptant Montréal comme nouvelle patrie. Aujourd'hui, Montréal continue de s'enrichir des apports de personnes venues de partout dans le monde, tout en conservant certaines des caractéristiques de sa civilisation française fondatrice ainsi que son influence britannique. <br />
                            Les vagues successives d'immigration à Montréal au cours des siècles ont contribué à en faire la ville cosmopolite que nous connaissons et aimons tous aujourd'hui, avec ses plus de 120 communautés ethnoculturelles. Véritable pôle économique, Montréal relève les défis ambitieux qu'elle se fixe en encourageant l'investissement de tous les instants. Reconnue dans le monde entier pour sa qualité de vie exceptionnelle, Montréal porte une attention particulière à son environnement, à son paysage urbain, à la préservation de son patrimoine et à la qualité de ses milieux de vie. Ville hôte de grands congrès et d'événements internationaux, cette grande métropole est un centre névralgique pour les enjeux d'envergure internationale.
                            </p>
                            <p style={{textAlign:'right'}}>
                                - Livre "Discovering and Living in Montreal"
                            </p>
                        </div>
                        <div class="col-sm">
                        <h5>1948 dans le monde - L'après-guerre</h5>
                            <img src={events2} alt="image - Ville du monde après la guerre" width={400} style={{ borderRadius: '20px',float:'right', marginLeft:'2em' }} ></img>
                            <p>L'année 1948 marque, plus que 1944 ou 1945, la véritable sortie de la Seconde Guerre mondiale. Cette année-là, les vainqueurs du nazisme, URSS et États-Unis, entrent pour de bon dans ce que l'on appellera la «guerre froide» : blocus de la zone d'occupation occidentale de Berlin par les Soviétiques, prise de pouvoir brutale du parti communiste en Tchécoslovaquie.

Hors de la sphère européenne, les pays que l'on ne désigne pas encore comme tiers-monde ou pays sous-dévelopés s'engagent dans la voie de leur émancipation. Les Britanniques quittent définitivement leurs anciennes colonies des Indes, le joyau de leur Empire. L'indépendance tumultueuse d'Israël inaugure le conflit le plus médiatisé de la fin du XXe siècle...
                            </p>
                            <p style={{textAlign:'right'}}>
                                - André Larané
                            </p>
                            <img src={events8} alt="Photographie d'une grève dans une ville Americaine" width={600} style={{borderRadius: '20px', display:'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>"Them's Fighting Words" : violence, masculinité et cow-boy texan à la fin du XIXe siècle</h5>
                            <img src={events3} alt="Photographie de cow boy en marche de nuit" width={600} style={{ borderRadius: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}></img>
                            <p>La violence joue inévitablement un rôle dans les discussions sur le cow-boy, historique ou mythique. Les traditionalistes ont célébré ses combats virils comme ce qui a apprivoisé l'Occident et sauvé la virilité américaine; les révisionnistes ont fustigé la brutalité avec laquelle il a traité les Amérindiens et l'environnement. Il est important, cependant, de considérer à quoi servait la violence pour le cow-boy lui-même. Pour le cow-boy de la classe ouvrière, la violence pouvait préserver l'harmonie sociale, à la fois en défendant l'honneur personnel et en régulant le comportement social des femmes et des minorités. Son utilisation était un marqueur clair de masculinité, car elle lui permettait à la fois de montrer son égale valeur avec les hommes qui l'entouraient et de maintenir des hiérarchies sociales qui lui donnaient un avantage sur les autres. Cependant, les citadins et les éleveurs de la classe moyenne et supérieure autour des cow-boys considéraient de plus en plus la violence comme contre-productive. Bien que les parents aient encouragé l'agression dans l'enfance, ils pensaient que pour devenir un vrai homme, il fallait apprendre à se retenir et canaliser cette agression dans des activités socialement acceptables. De plus en plus, les idées respectables de maintien de l'ordre social ne laissaient aucune place à la violence et, par conséquent, les cow-boys étaient confrontés à une réglementation sociale croissante de leur identité masculine.</p>
                            <p style={{textAlign:'right'}}>
                                - Jacqueline M. Moore
                            </p>
                        </div>
                        <div class="col">
                        <h5>Thomas Shelby : Le rôle d'une vie</h5>
                            <img src={events4} alt="Photographie de Thomas Shelby" width={450} style={{ borderRadius: '20px', display: 'block',float:'right', marginLeft: '2em', marginRight: 'auto' }}></img>
                            <p>Peaky Blinders étaient connus comme des gentlemen ouvriers de la classe inférieure, leur style distinct trahit ce qu'ils auraient dû porter, du moins en théorie. De plus, les vrais Peaky Blinders se composaient de divers gangs et étaient tout sauf une seule famille de hors-la-loi. Des criminels comme Thomas Gilbert ont couru avec une équipe spécifique, rendant ainsi le nom "Peaky Blinders" plus important dans la culture de Birmingham. Ils étaient une famille criminelle par association - pas par le sang ou un code uni de "omertà", comme les gangsters dans Les Soprano ou Le Parrain.

Au fil du temps, les vrais Peaky Blinders ont commencé à se qualifier de « sloggers », le produit de « la pauvreté, de la misère et de l'environnement des bidonvilles », selon le fabricant de Birmingham Arthur Matthison. Au début du XXe siècle, le gang de jeunes a maintenu le même look et style de vie criminel, mais surtout par nécessité plutôt que par un grand projet visant à acquérir un pouvoir immense à Birmingham. Les véritables gangs de Peaky Blinders se sont lentement dissipés à cause de l'athlétisme, des films et d'autres activités qui occupaient les jeunes hommes. En bref, la vie est devenue plus facile pour certains - ils n'avaient pas à compter sur la criminalité de bas niveau pour joindre les deux bouts. Les vrais Peaky Blinders ont grandi et disparu. Et c'est alors que Peaky Blinders, la série originale BBC/Netflix, commence.</p>
                            <p style={{textAlign:'right'}}>
                                - Q.V. Hough
                            </p>
                        </div>
                        <div class="row">
                        <div class="col">
                        <h5>Histoire de la médecine jusqu’à 1950</h5>
                            <img src={events6} alt="Photographie de plusieur medicaments" width={500} style={{ borderRadius: '20px', display: 'block',float:'left', marginLeft: 'auto', marginRight: '2em' }}></img>
                          <p> Au Canada, la médecine est née des siècles avant que ne viennent s'établir les Français sur les côtes d'Amérique du Nord. Les Autochtones ne transmettant leur tradition qu'oralement, les seuls comptes rendus écrits de leurs coutumes et de leurs croyances ont été relevés par les explorateurs et les colons européens. En général, les Autochtones obtiennent des remèdes d’un chaman ou guérisseur. Les Autochtones soignent également la maladie avec des remèdes à base de plantes très efficaces (par exemple, l'essence de wintergreen, le sang-dragon, le pimbina; voir Utilisation des plantes par les Autochtones) et des traitements physiques comme les sueries et les massages. Jacques Cartier a appris d'un Autochtone comment traiter le scorbut à l'aide d'une décoction d'aiguilles et d'écorce d'épinette blanche ou de pruche. Cette maladie a emporté presque tout son groupe d'explorateurs français. La médecine autochtone commence à disparaître après les contacts prolongés avec les colons européens et leurs maladies, souvent épidémiques, comme la rougeole, les fièvres typhoïdes, le typhus, la diphtérie et la variole. (voir Santé des Autochtones).</p> 
                            <p style={{textAlign:'right'}}>
                                - 	Charles G. Roland
                            </p>
                        </div>
                    

                  
                        <div class="col-sm">
                            <h5>Qu'a fait l'Union britannique des fascistes ?</h5>
                            <img src={events7} alt="Photographie de Oswald Mosley" width={400} style={{ borderRadius: '20px', display: 'block',float:'right', marginLeft: '2em', marginRight: 'auto' }}></img>
                            <p>Le BUF voulait se projeter comme une force radicale et dynamique - à l'exact opposé des partis politiques conventionnels qui gouvernaient la Grande-Bretagne à l'époque, explique le professeur Copsey. Pour transmettre un sentiment de lutte, d'action et d'unité, ils ont adopté un style paramilitaire - cela impliquait de revêtir des uniformes Blackshirt inspirés de ceux de l'Italie de Mussolini, qui en Grande-Bretagne étaient dans le style d'une tunique d'escrime.

                                    Ils ont également adopté le salut fasciste - un salut du bras droit tendu qui aurait ses origines dans la Rome antique, qui a été adopté, avec de petites variations, par des groupes de style fasciste ailleurs. Le BUF a également adopté les «fasces» comme symbole [un faisceau de tiges de bois et une hache liées ensemble par des lanières de cuir] - imitant à nouveau Mussolini - mais cela a ensuite été remplacé par l'éclair dans un cercle, censé représenter l'action. et l'unité. <br />
                                    Le BUF a organisé un grand nombre de marches, de réunions et de rassemblements publics. Certains des plus grands ont eu lieu en 1934, dont Olympia à Londres; la salle Albert; Hyde Park; et les jardins de Belle Vue à Manchester. Ces réunions se sont souvent heurtées à une résistance antifasciste. En fait, environ 60% des réunions du BUF à Londres en 1936 ont vu une forme de résistance organisée. Le 7 juin 1934, un rassemblement à l'Olympia de Londres est infiltré par plusieurs centaines d'antifascistes munis de faux billets. Ils ont chahuté Mosley et ont été expulsés de force. Beaucoup ont subi des traitements féroces dans le foyer avant d'être jetés à la rue, plusieurs nécessitant des soins hospitaliers. La réaction du public à cette violence a été indignée, et les membres et le soutien de la presse au BUF ont été négativement impactés.

À partir de la fin de 1934, à la lumière de la mauvaise presse générée par Olympia, le BUF s'est lancé dans une campagne antisémite militante d'intimidation, de harcèlement et de violence contre la population juive de Grande-Bretagne, en particulier dans l'East End de Londres - où vivent environ 100 000 Juifs. En octobre 1936, Mosley organisa une marche dans l'East End. Entre 100 000 et 300 000 personnes se sont mobilisées pour empêcher la marche. Au coin de Gardiner, environ 50 000 personnes ont formé une barricade humaine, et à Cable Street, des barricades ont été érigées. À la suite d'affrontements entre des manifestants antifascistes et la police, la police a forcé Mosley à abandonner la marche.
                            </p>
                            <p style={{textAlign:'right'}}>
                                - Emma Mason
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>



    );
}

export default Articles;