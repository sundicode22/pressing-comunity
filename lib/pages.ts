import { actionAxes, developmentPhases, supportWays, values } from "@/lib/content"
import type { PagePlaceholderProps } from "@/components/pages"

export const quiSommesNous: PagePlaceholderProps = {
  title: "Qui sommes-nous ?",
  subtitle:
    "Une communauté camerounaise engagée à créer et faciliter de meilleures opportunités pour les Camerounais.",
  ctas: [{ label: "Rejoindre la communauté", href: "/devenir-membre" }],
  sections: [
    {
      title: "Notre raison d'être",
      body: "The Pressing Community est une communauté camerounaise engagée à créer et faciliter de meilleures opportunités pour les Camerounais. Nous voulons construire une communauté qui ne se limite pas à la solidarité ponctuelle.",
    },
    {
      id: "vision",
      layout: "image",
      title: "Notre vision",
      body: "Contribuer à l'émergence d'une génération de Camerounais mieux informés, mieux formés, mieux accompagnés et capables de saisir davantage d'opportunités.",
      imageSeed: 1,
    },
    {
      title: "Notre mission",
      body: "Nous ne voulons pas seulement aider les personnes à résoudre un problème. Nous voulons leur donner les moyens de construire une meilleure situation pour leur avenir.",
      items: [
        { title: "Soutenir les personnes et communautés vulnérables" },
        { title: "Faciliter l'accès à l'information et aux opportunités" },
        { title: "Accompagner nos membres dans leurs projets" },
        { title: "Organiser des formations accessibles" },
        { title: "Identifier et promouvoir les talents camerounais" },
      ],
    },
    {
      id: "valeurs",
      title: "Nos valeurs",
      layout: "snap",
      items: values,
    },
    {
      id: "gouvernance",
      title: "Notre gouvernance",
      body: "The Pressing Community repose sur une organisation structurée comprenant des fondateurs, une gouvernance, des responsables, des équipes et des commissions. Photos et fonctions des membres du bureau à fournir.",
      theme: "black",
    },
    {
      id: "developpement",
      title: "Notre développement",
      layout: "snap",
      items: developmentPhases,
    },
    {
      title: "Notre engagement",
      body: "Nous voulons construire une communauté où celui qui possède une compétence peut la transmettre, et celui qui a bénéficié d'une opportunité peut, à son tour, en créer une pour quelqu'un d'autre.",
      ctas: [{ label: "Rejoindre la communauté", href: "/devenir-membre" }],
    },
  ],
}

export const nosActions: PagePlaceholderProps = {
  title: "Nos grands axes d'action",
  subtitle: "Aider aujourd'hui. Construire des solutions pour demain.",
  sections: [
    {
      title: "Les 5 axes",
      layout: "snap",
      items: actionAxes,
    },
    {
      title: "Vous voulez participer à ces actions ?",
      theme: "black",
      ctas: [
        { label: "Devenir membre", href: "/devenir-membre" },
        { label: "Soutenir une action", href: "/nous-soutenir/faire-un-don", variant: "outline" },
      ],
    },
  ],
}

export const solidarite: PagePlaceholderProps = {
  title: "Solidarité & action sociale",
  subtitle: "Nos premières actions sont orientées vers les personnes qui en ont le plus besoin.",
  sections: [
    {
      layout: "image",
      title: "Aider aujourd'hui",
      body: "Aider aujourd'hui. Construire des solutions pour demain.",
      imageSeed: 0,
    },
    {
      title: "Auprès de qui nous intervenons",
      items: [
        { title: "Les orphelinats" },
        { title: "Les veuves" },
        { title: "Les familles défavorisées" },
        { title: "Les personnes vulnérables" },
        { title: "Les communautés ayant besoin d'un soutien ponctuel" },
      ],
    },
    {
      title: "Notre approche",
      body: "Notre ambition est d'aller progressivement au-delà du simple don. Une aide ponctuelle règle un problème du jour. Une formation, un accompagnement ou une opportunité changent une trajectoire.",
      ctas: [
        { label: "Devenir membre", href: "/devenir-membre" },
        { label: "Faire un don", href: "/nous-soutenir/faire-un-don", variant: "outline" },
      ],
    },
  ],
}

export const accompagnement: PagePlaceholderProps = {
  title: "Opportunités & accompagnement",
  subtitle: "Rendre l'information plus accessible pour permettre à chacun de mieux décider.",
  sections: [
    {
      title: "Le principe",
      body: "Nous accompagnons nos membres avec de l'information, de l'orientation et un suivi. Le site parle d'orientation, jamais de garantie de visa.",
    },
    {
      title: "Demande d'accompagnement",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "need", label: "Votre besoin", type: "textarea" },
      ],
      submitLabel: "Envoyer ma demande",
    },
  ],
}

export const formation: PagePlaceholderProps = {
  title: "Formation & développement",
  subtitle: "Anglais, TCF, intelligence artificielle, entrepreneuriat : des formations accessibles.",
  sections: [
    {
      title: "Nos domaines de formation",
      items: [
        { title: "Anglais" },
        { title: "TCF" },
        { title: "Intelligence artificielle" },
        { title: "Entrepreneuriat" },
      ],
    },
    {
      title: "Prochaines sessions",
      body: "Les sessions de formation seront publiées ici dès qu'elles seront confirmées.",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "session", label: "Formation souhaitée" },
      ],
      submitLabel: "M'inscrire à une formation",
    },
  ],
}

export const talents: PagePlaceholderProps = {
  title: "Talents camerounais",
  subtitle: "Nous identifions et accompagnons les jeunes talents qui manquent de moyens.",
  sections: [
    {
      layout: "image",
      title: "Le programme",
      body: "Identifier, accompagner et donner une chance aux talents camerounais.",
      imageSeed: 3,
    },
    {
      title: "Vous avez un talent à développer ?",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "talent", label: "Domaine de talent" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "pitch", label: "Présentez-vous", type: "textarea" },
      ],
      submitLabel: "Déposer ma candidature",
    },
  ],
}

export const jeunesse: PagePlaceholderProps = {
  title: "Jeunesse & développement",
  subtitle: "Apprendre, se former, découvrir ses talents et construire son autonomie.",
  sections: [
    {
      title: "Nos programmes jeunesse",
      body: "Des activités pour apprendre, se former et construire son autonomie.",
    },
    {
      title: "Participer",
      theme: "black",
      ctas: [
        { label: "Devenir membre", href: "/devenir-membre" },
        { label: "Proposer une idée", href: "/proposer-une-idee", variant: "outline" },
      ],
    },
  ],
}

export const devenirMembre: PagePlaceholderProps = {
  title: "Devenir membre de The Pressing Community",
  subtitle: "Faire partie d'une communauté qui cherche à progresser collectivement.",
  ctas: [{ label: "Remplir ma demande d'adhésion", href: "#adhesion" }],
  sections: [
    {
      title: "Vos droits en tant que membre",
      items: [
        { title: "Participer aux activités" },
        { title: "Participer aux actions sociales" },
        { title: "Participer aux formations" },
        { title: "Accéder à l'accompagnement prévu" },
        { title: "Proposer des initiatives et développer vos projets" },
      ],
    },
    {
      title: "L'adhésion est aussi une responsabilité",
      body: "Être membre ne consiste pas seulement à recevoir. Chaque membre est encouragé à contribuer, selon ses possibilités, au développement de la communauté.",
    },
    {
      id: "adhesion",
      title: "Comment fonctionne l'adhésion",
      body: "Montant et périodicité des frais d'adhésion : à confirmer. Moyens de paiement : à confirmer.",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "city", label: "Ville" },
        { name: "motivation", label: "Pourquoi rejoindre", type: "textarea" },
      ],
      submitLabel: "Envoyer ma demande",
    },
  ],
}

export const nousSoutenir: PagePlaceholderProps = {
  title: "Comment nous soutenir ?",
  subtitle: "Il existe plusieurs manières de contribuer. Chacune compte.",
  sections: [
    {
      title: "Les 7 façons de contribuer",
      layout: "snap",
      items: supportWays,
    },
    {
      title: "Comment nous finançons nos actions",
      body: "Pour assurer sa pérennité, The Pressing Community mobilise plusieurs sources compatibles avec son objet : frais d'adhésion, dons, mécénat, partenariats, formations et activités économiques compatibles.",
      theme: "black",
    },
  ],
}

export const faireUnDon: PagePlaceholderProps = {
  title: "Faire un don",
  subtitle: "Soutenir une action ou un programme précis.",
  sections: [
    {
      title: "Choix du montant",
      body: "Les montants et moyens de paiement (Orange Money, MTN MoMo, virement, PayPal) seront affichés dès qu'ils seront confirmés.",
    },
    {
      title: "Confirmer un don",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "amount", label: "Montant" },
        { name: "message", label: "Message", type: "textarea" },
      ],
      submitLabel: "Confirmer mon don",
    },
  ],
}

export const mecene: PagePlaceholderProps = {
  title: "Devenir mécène",
  subtitle: "Contribuer régulièrement au financement de nos activités.",
  sections: [
    {
      title: "Votre engagement",
      body: "Le mécénat permet de soutenir durablement les programmes de la communauté.",
      formFields: [
        { name: "name", label: "Nom ou organisation" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "proposal", label: "Votre proposition", type: "textarea" },
      ],
      submitLabel: "Proposer un mécénat",
    },
  ],
}

export const partenaire: PagePlaceholderProps = {
  title: "Devenir partenaire",
  subtitle: "Construire un projet commun avec la communauté.",
  sections: [
    {
      title: "Avec qui nous travaillons",
      body: "Entreprises, institutions, associations et professionnels qui veulent créer un impact concret.",
    },
    {
      title: "Formulaire partenariat",
      formFields: [
        { name: "organization", label: "Organisation" },
        { name: "name", label: "Nom du contact" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "project", label: "Projet commun envisagé", type: "textarea" },
      ],
      submitLabel: "Proposer un partenariat",
    },
  ],
}

export const competences: PagePlaceholderProps = {
  title: "Offrir vos compétences",
  subtitle: "Formateur, mentor, professionnel : votre expertise vaut autant qu'une contribution financière.",
  sections: [
    {
      title: "Ce que vous pouvez apporter",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "domain", label: "Domaine d'expertise" },
        { name: "offer", label: "Ce que vous pouvez apporter", type: "textarea" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "email", label: "E-mail", type: "email" },
      ],
      submitLabel: "Proposer mes compétences",
    },
  ],
}

export const materiel: PagePlaceholderProps = {
  title: "Offrir du matériel",
  subtitle: "Équipements, fournitures, matériel informatique : ce dont vous n'avez plus l'usage peut servir ailleurs.",
  sections: [
    {
      title: "Décrire le matériel",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "type", label: "Type de matériel" },
        { name: "quantity", label: "Quantité" },
        { name: "city", label: "Ville" },
        { name: "whatsapp", label: "WhatsApp" },
      ],
      submitLabel: "Proposer du matériel",
    },
  ],
}

export const proposerIdee: PagePlaceholderProps = {
  title: "Chaque idée compte",
  subtitle: "Enregistrez une proposition dans le registre des idées de la communauté.",
  sections: [
    {
      title: "Le principe",
      body: "Celui qui possède une idée peut la proposer. Les meilleures initiatives peuvent devenir des actions, des formations ou des programmes.",
    },
    {
      title: "Enregistrer mon idée",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "idea", label: "Votre idée", type: "textarea" },
      ],
      submitLabel: "Enregistrer mon idée",
    },
  ],
}

export const actualites: PagePlaceholderProps = {
  title: "Actualités",
  subtitle: "Nos actions, nos formations et les opportunités de la communauté.",
  sections: [
    {
      title: "Aucun article publié pour le moment",
      body: "Cette section restera masquée en production tant qu'aucun article n'est publié. Les filtres et la liste arriveront avec les premiers contenus.",
      ctas: [{ label: "Revenir à l'accueil", href: "/" }],
    },
  ],
}

export const contact: PagePlaceholderProps = {
  title: "Nous contacter",
  subtitle: "Une question, une proposition, une situation à signaler : écrivez-nous.",
  sections: [
    {
      title: "Moyens de contact",
      items: [
        { title: "WhatsApp", text: "La façon la plus rapide de nous joindre. Numéro …" },
        { title: "E-mail", text: "Pour les demandes détaillées et les dossiers. Adresse …" },
        { title: "Nous rencontrer", text: "Adresse du siège, Douala …" },
      ],
    },
    {
      title: "Envoyer un message",
      formFields: [
        { name: "name", label: "Nom" },
        { name: "email", label: "E-mail", type: "email" },
        { name: "whatsapp", label: "WhatsApp" },
        { name: "subject", label: "Objet" },
        { name: "message", label: "Message", type: "textarea" },
      ],
      submitLabel: "Envoyer mon message",
    },
  ],
}

function legalPage(title: string, cover: string): PagePlaceholderProps {
  return {
    title,
    subtitle: "Gabarit provisoire. Le contenu juridique sera rédigé ou validé par le client.",
    sections: [
      {
        title: "Contenu à valider",
        body: `${cover} Date de dernière mise à jour : à renseigner.`,
      },
    ],
  }
}

export const mentionsLegales = legalPage(
  "Mentions légales",
  "Dénomination, statut, siège, responsable de publication et hébergeur seront indiqués ici."
)

export const politiqueConfidentialite = legalPage(
  "Politique de confidentialité",
  "Données collectées via les formulaires, finalité, durée de conservation, droit d'accès et de suppression."
)

export const conditionsAdhesion = legalPage(
  "Conditions d'adhésion",
  "Conditions d'accès, frais, droits et devoirs du membre, motifs d'exclusion."
)
