import type { MediaKey } from "@/lib/media"

export type ContentCard = {
  title: string
  text: string
  href?: string
  image?: MediaKey
}

export const actionAxes: ContentCard[] = [
  {
    title: "Solidarité & action sociale",
    text: "Nous intervenons auprès des orphelinats, des veuves et des familles qui en ont le plus besoin. Une aide concrète — repas, fournitures, présence — parce qu'une urgence ne peut pas attendre que tout le reste soit en place. La solidarité ouvre le chemin : elle n'est pas un aboutissement, elle est le premier geste.",
    href: "/nos-actions/solidarite",
    image: "solidarity",
  },
  {
    title: "Opportunités & accompagnement",
    text: "Trop de portes restent fermées faute d'information ou d'un interlocuteur de confiance. Nous rendons l'orientation plus accessible : écoute, lecture d'une opportunité, mise en relation, suivi. Nous parlons d'accompagnement, jamais de garantie de visa, d'emploi ou de résultat. Voir plus clair, c'est déjà avancer.",
    href: "/nos-actions/accompagnement",
    image: "mentoring",
  },
  {
    title: "Formation & développement",
    text: "Anglais, TCF, intelligence artificielle, entrepreneuriat : des formations accessibles, pensées pour les réalités camerounaises. Apprendre doit débloquer une porte — un entretien, un projet, un outil — pas remplir une salle. Les membres sont prioritaires ; les sessions se publient dès qu'elles sont confirmées.",
    href: "/nos-actions/formation",
    image: "workshop",
  },
  {
    title: "Talents camerounais",
    text: "Le Cameroun ne manque pas de talents. Il manque trop souvent de moyens : un mentor, un matériel, un premier réseau. Nous identifions et accompagnons celles et ceux qui ont un don, une discipline ou une idée, et à qui il manque une passerelle. Un talent n'attend pas d'être « découvert » ailleurs pour exister.",
    href: "/nos-actions/talents",
    image: "students",
  },
  {
    title: "Jeunesse & développement",
    text: "Apprendre, se former, découvrir ses talents et construire son autonomie. La jeunesse n'est pas un public à occuper : c'est la génération que nous formons aujourd'hui. Ateliers, métiers, numérique, sport et vivre-ensemble — avec les familles, les écoles et les animateurs de terrain.",
    href: "/nos-actions/jeunesse",
    image: "youth",
  },
]

export const virtuousCircle: ContentCard[] = [
  {
    title: "Communauté",
    text: "Nous commençons ensemble, à Douala, avec celles et ceux qui veulent contribuer. Sans communauté, rien ne tient : ni les actions, ni les formations, ni les portes que nous voulons ouvrir. Le premier chantier, c'est de nous rassembler.",
    image: "community",
  },
  {
    title: "Solidarité",
    text: "La solidarité permet de commencer. Nous aidons aujourd'hui, parce qu'une faim, un toit, une urgence ne peuvent pas attendre le « plus tard ». Ce geste n'est pas symbolique : il est la condition de tout ce qui suit.",
    image: "volunteers",
  },
  {
    title: "Formation & accompagnement",
    text: "La formation permet de grandir. L'accompagnement permet d'avancer. Ensemble, ils transforment une aide ponctuelle en trajectoire : un savoir, un suivi, une décision plus claire.",
    image: "formation",
  },
  {
    title: "Opportunités",
    text: "Les partenariats et l'information créent des opportunités concrètes : un stage, un réseau, une orientation, une porte qui s'ouvre au bon moment. Encore faut-il que quelqu'un les rende lisibles.",
    image: "handshake",
  },
  {
    title: "Développement des talents",
    text: "Les talents camerounais sont identifiés, formés et accompagnés. Un talent sans moyens n'est pas un talent perdu : c'est une responsabilité collective. Nous voulons que le sérieux d'un geste trouve enfin un relais.",
    image: "students",
  },
  {
    title: "Création de valeur",
    text: "Les talents créent de la valeur pour eux-mêmes et pour les autres. Un métier, une entreprise, une compétence transmise : l'impact se multiplie dès que quelqu'un peut enfin travailler, créer, enseigner.",
    image: "entrepreneur",
  },
  {
    title: "Nouvel impact",
    text: "Les opportunités permettent de créer davantage d'impact pour la communauté. Celui qui a reçu peut, à son tour, ouvrir une porte. C'est le cercle que nous voulons : pas une aide sans lendemain, une chaîne.",
    image: "highFive",
  },
]

export const supportWays: ContentCard[] = [
  {
    title: "Devenir membre",
    text: "Rejoindre directement la communauté, participer aux activités et contribuer, selon vos moyens, à ce que nous construisons. L'adhésion n'est pas un abonnement : c'est une place dans un cercle de participation.",
    href: "/devenir-membre",
    image: "community",
  },
  {
    title: "Faire un don",
    text: "Soutenir une action ou un programme : une distribution, une formation, un accompagnement. Nous voulons que chaque contribution ait une destination, pas seulement un montant.",
    href: "/nous-soutenir/faire-un-don",
    image: "donation",
  },
  {
    title: "Devenir mécène",
    text: "Contribuer régulièrement au financement de nos activités, pour que les programmes ne dépendent pas d'un élan isolé. Un rythme, un objet, un cadre clair : c'est ce qui permet de durer.",
    href: "/nous-soutenir/mecene",
    image: "handshake",
  },
  {
    title: "Devenir partenaire",
    text: "Construire un projet commun : entreprise, institution, association. L'impact se conçoit à deux — une formation, une action de terrain, un accès à des opportunités pour nos membres.",
    href: "/nous-soutenir/partenaire",
    image: "team",
  },
  {
    title: "Offrir ses compétences",
    text: "Mettre son expertise au service de la communauté : former, mentorat, conseil, organisation. Votre temps compte autant qu'un don, et souvent davantage.",
    href: "/nous-soutenir/competences",
    image: "workshop",
  },
  {
    title: "Offrir du matériel",
    text: "Contribuer avec des équipements ou des ressources : ordinateurs, fournitures, matériel pédagogique. Ce dont vous n'avez plus l'usage peut servir ailleurs, à condition de le dire avant de le déposer.",
    href: "/nous-soutenir/materiel",
    image: "packing",
  },
  {
    title: "Proposer une initiative",
    text: "Apporter une idée capable de créer de l'impact. Les meilleures propositions peuvent devenir des actions, des formations ou des programmes. Inutile d'attendre un dossier parfait.",
    href: "/proposer-une-idee",
    image: "writing",
  },
]

export const homeSupportCards: ContentCard[] = [
  {
    title: "Faire un don",
    text: "Soutenir une action ou un programme précis — solidarité, formation, talents — et savoir à quoi sert votre contribution. Chaque geste compte, surtout lorsqu'il a une destination.",
    href: "/nous-soutenir/faire-un-don",
    image: "donation",
  },
  {
    title: "Devenir partenaire",
    text: "Construire un projet commun avec la communauté : une session de formation, un mécénat de compétences, une action sociale. Nous cherchons des alliés, pas seulement des logos.",
    href: "/nous-soutenir/partenaire",
    image: "meeting",
  },
  {
    title: "Offrir vos compétences",
    text: "Mettre votre expertise au service des autres : formateur, mentor, professionnel, bénévole de terrain. Dites-nous ce que vous savez faire, et le temps que vous pouvez offrir.",
    href: "/nous-soutenir/competences",
    image: "collaboration",
  },
]

export const values: ContentCard[] = [
  {
    title: "Solidarité",
    text: "Ceux qui peuvent aider doivent contribuer à améliorer la vie des autres. La solidarité n'est pas un slogan : c'est le premier geste, celui qui rend possible la suite. Nous la pratiquons avant de la commenter.",
    image: "solidarity",
  },
  {
    title: "Opportunité",
    text: "Nous créons des passerelles permettant à nos membres d'accéder à de nouvelles possibilités — information, formation, réseau, orientation. Une opportunité n'est utile que si quelqu'un peut la lire et la saisir.",
    image: "handshake",
  },
  {
    title: "Intégrité",
    text: "Nous construisons une organisation basée sur la confiance, la responsabilité et la transparence. Ce que nous promettons, nous le tenons. Ce que nous ne pouvons pas tenir, nous ne le promettons pas.",
    image: "hands",
  },
  {
    title: "Excellence",
    text: "Nous améliorons continuellement la qualité de nos actions. Bien faire, puis mieux faire, plutôt que de multiplier les gestes vides. La communauté n'a pas besoin de bruit : elle a besoin de résultats utiles.",
    image: "highFive",
  },
  {
    title: "Transmission",
    text: "Les connaissances et les expériences doivent être transmises aux générations suivantes. Ce que nous apprenons ne nous appartient pas tout à fait : cela doit circuler, s'enseigner, se prêter.",
    image: "teacher",
  },
  {
    title: "Innovation",
    text: "Nous encourageons les nouvelles idées et les nouvelles façons de résoudre les problèmes, sans perdre de vue ce qui marche déjà. Innover, ici, ce n'est pas tout changer : c'est trouver le geste qui débloque.",
    image: "coding",
  },
  {
    title: "Responsabilité",
    text: "Construire une communauté implique également de contribuer. Recevoir et donner font partie du même cercle. Chacun selon ses moyens : une présence, une compétence, un relais, un don.",
    image: "crowd",
  },
]

export const developmentPhases: ContentCard[] = [
  {
    title: "01 — Construire",
    text: "Développer la communauté à Douala et commencer les actions sociales. Poser les bases humaines avant de parler d'échelle : se connaître, agir, rendre compte. Rien de solide ne se bâtit sur un slogan.",
    image: "community",
  },
  {
    title: "02 — Former & accompagner",
    text: "Développer les formations, l'accompagnement et les partenariats. Passer de l'élan à une offre régulière, utile et suivie — avec des dates, des publics, des formateurs, un après.",
    image: "workshop",
  },
  {
    title: "03 — Consolider",
    text: "Créer une base financière et organisationnelle suffisamment solide pour durer : gouvernance lisible, ressources, redevabilité. Une communauté qui ne peut pas rendre compte ne peut pas grandir.",
    image: "meeting",
  },
  {
    title: "04 — Investir dans les talents",
    text: "Lancer les premiers programmes structurés d'accompagnement des jeunes talents camerounais, avec un suivi réel. Identifier ne suffit pas : il faut relayer, former, ouvrir une première porte.",
    image: "students",
  },
  {
    title: "05 — Développer",
    text: "Étendre nos actions à d'autres secteurs et territoires selon les besoins, les opportunités et les ressources — jamais par précipitation. Grandir, ici, veut dire rester utile.",
    image: "village",
  },
]

export const solidarityAudiences: ContentCard[] = [
  {
    title: "Les orphelinats",
    text: "Présence, fournitures, repas, moments de dignité. Nous voulons des visites qui servent, pas des photos. Les besoins se précisent avec les structures qui nous accueillent.",
    image: "kidsSchool",
  },
  {
    title: "Les veuves",
    text: "Un soutien concret — matériel, relais, écoute — pas une commisération de passage. Tenir après un deuil demande des moyens, et parfois simplement que quelqu'un reste.",
    image: "portrait",
  },
  {
    title: "Les familles défavorisées",
    text: "Quand un mois de trop fait basculer un foyer : rentrée scolaire, loyer, santé, alimentation. Nous intervenons là où un geste ciblé évite une chute plus grave.",
    image: "family",
  },
  {
    title: "Les personnes vulnérables",
    text: "Celles que l'on croise trop tard si l'on n'agit pas. L'urgence sociale n'attend pas un organigramme parfait. Nous commençons par ce qui est en face de nous.",
    image: "charity",
  },
  {
    title: "Les communautés en besoin ponctuel",
    text: "Une urgence, un sinistre, une rentrée scolaire collective. Le soutien ponctuel a un sens s'il est organisé, tracé, et suivi d'un après lorsque c'est possible.",
    image: "volunteersPexels",
  },
]

export const formationDomains: ContentCard[] = [
  {
    title: "Anglais",
    text: "Communiquer, postuler, s'ouvrir au monde. L'anglais n'est pas un luxe : c'est souvent la clé d'un entretien, d'une formation en ligne, d'un premier réseau plus large.",
    image: "classroom",
  },
  {
    title: "TCF",
    text: "Se préparer avec méthode, sans usine à illusions. Nous voulons des sessions utiles : compréhension, expression, rythme d'examen — pas la promesse d'un score magique.",
    image: "books",
  },
  {
    title: "Intelligence artificielle",
    text: "Comprendre les outils, les utiliser avec discernement. L'IA n'est pas un gadget : c'est un levier pour étudier, travailler, entreprendre — à condition de savoir s'en servir.",
    image: "coding",
  },
  {
    title: "Entrepreneuriat",
    text: "Poser un projet, tester, structurer. Beaucoup ont une idée ; peu ont un cadre pour la confronter au réel. Nous voulons des ateliers concrets, pas des slogans sur « l'innovation ».",
    image: "entrepreneur",
  },
]

export const youthPrograms: ContentCard[] = [
  {
    title: "Découverte des métiers",
    text: "Voir ce qui existe, oser s'y projeter. Trop de jeunes choisissent dans le flou. Rencontrer des professionnels, visiter, poser des questions : c'est déjà s'orienter.",
    image: "team",
  },
  {
    title: "Ateliers d'expression",
    text: "Parole, création, confiance. Savoir dire ce que l'on porte — et l'entendre chez les autres — change la manière de se tenir dans un groupe, une classe, une famille.",
    image: "music",
  },
  {
    title: "Initiation numérique",
    text: "Des outils, pas seulement des écrans. Recherche, bureautique, sécurité, création : le numérique doit servir un projet, pas occuper le temps.",
    image: "tech",
  },
  {
    title: "Sport et vivre-ensemble",
    text: "Le corps, l'équipe, la règle du jeu. Le sport apprend ce que les discours peinent à transmettre : l'effort, le respect, la place de chacun.",
    image: "football",
  },
]

export const accompanimentAreas: ContentCard[] = [
  {
    title: "Orientation scolaire et professionnelle",
    text: "Faire le point, puis choisir. Un accompagnement commence par écouter ce qui est déjà là — envies, contraintes, pistes — avant de parler d'ailleurs.",
    image: "listening",
  },
  {
    title: "Lecture d'une opportunité",
    text: "Bourse, formation, appel à projets : encore faut-il comprendre l'offre, les délais, ce qui est réaliste. Nous aidons à lire, pas à rêver à la place de quelqu'un.",
    image: "notes",
  },
  {
    title: "Mise en relation",
    text: "Quand un réseau peut débloquer une situation. Un contact utile, au bon moment, vaut souvent plus qu'un long discours. Nous faisons le lien lorsque c'est possible.",
    image: "meeting",
  },
  {
    title: "Suivi dans la durée",
    text: "Un rendez-vous n'est pas un accompagnement. Revenir, ajuster, tenir : c'est ce qui distingue une orientation sérieuse d'un conseil jeté en passant.",
    image: "collaboration",
  },
]
