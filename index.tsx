import { createFileRoute } from "@tanstack/react-router";
import heroBistro from "@/assets/hero-bistro.jpg";
import plateDuck from "@/assets/plate-duck.jpg";
import kitchenHands from "@/assets/kitchen-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Petit Cornichon — Bistrot, Paris 11e" },
      {
        name: "description",
        content:
          "Ardoise qui change tous les jours, vins nature, service midi et soir du mardi au samedi. Réservation par téléphone.",
      },
      { property: "og:title", content: "Le Petit Cornichon — Bistrot, Paris 11e" },
      {
        property: "og:description",
        content:
          "Ardoise qui change tous les jours, vins nature, service midi et soir du mardi au samedi.",
      },
    ],
  }),
  component: Index,
});

const entrees = [
  ["Œuf mayo, câpres frites", "7"],
  ["Poireaux tièdes, vinaigrette à l'échalote", "9"],
  ["Terrine de campagne, cornichons maison", "11"],
  ["Maquereau au vin blanc, pain grillé", "12"],
];

const plats = [
  ["Cuisse de canard, endives braisées", "24"],
  ["Merlan meunière, pommes vapeur", "23"],
  ["Blanquette de veau à l'ancienne", "26"],
  ["Gratin de cardons, comté 18 mois", "18"],
];

const desserts = [
  ["Baba au rhum agricole", "9"],
  ["Riz au lait, caramel salé", "8"],
  ["Tarte fine aux pommes", "9"],
];

function Prix({ items }: { items: string[][] }) {
  return (
    <ul className="space-y-4">
      {items.map(([nom, prix]) => (
        <li key={nom} className="flex items-baseline gap-3">
          <span className="text-[1.0625rem] leading-snug">{nom}</span>
          <span className="dotted-lead h-px flex-1 translate-y-[-2px]" />
          <span className="font-display text-[1.0625rem] text-brass tabular-nums">{prix}</span>
        </li>
      ))}
    </ul>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg tracking-tight">
          Le Petit Cornichon
          <span className="ml-2 rule-label align-middle">est. 1978</span>
        </span>
        <nav className="hidden gap-8 rule-label md:flex">
          <a href="#carte" className="transition-colors hover:text-brass">
            La carte
          </a>
          <a href="#maison" className="transition-colors hover:text-brass">
            La maison
          </a>
          <a href="#venir" className="transition-colors hover:text-brass">
            Nous trouver
          </a>
        </nav>
        <a
          href="tel:+33143570912"
          className="rule-label border-b border-brass pb-1 text-brass transition-opacity hover:opacity-70"
        >
          01 43 57 09 12
        </a>
      </header>

      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={heroBistro}
            alt="Le comptoir en zinc du bistrot en fin de journée"
            width={1600}
            height={1104}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-14">
            <p className="rule-label mb-5">14 rue des Trois-Bornes · Paris 11<sup>e</sup></p>
            <h1 className="max-w-2xl font-display text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.95] tracking-[-0.02em]">
              On écrit la carte
              <span className="block italic text-brass">le matin, à la craie.</span>
            </h1>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
              Vingt-huit couverts, une cuisine ouverte sur la salle et ce qu'on a trouvé
              le matin même chez Marcel, aux Halles de Belleville.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl gap-y-6 px-6 py-7 md:grid-cols-3">
          <p className="rule-label">Mardi — samedi · 12h00 à 14h15 · 19h30 à 22h30</p>
          <p className="rule-label md:text-center">Formule déjeuner 21 € — entrée + plat</p>
          <p className="rule-label md:text-right">Réservation par téléphone uniquement</p>
        </div>
      </section>

      <section id="carte" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="rule-label">Ardoise du jeudi</p>
            <h2 className="mt-3 mb-12 font-display text-4xl tracking-tight">La carte</h2>

            <div className="space-y-12">
              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                  Entrées
                </h3>
                <Prix items={entrees} />
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                  Plats
                </h3>
                <Prix items={plats} />
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                  Desserts
                </h3>
                <Prix items={desserts} />
              </div>
            </div>

            <p className="mt-12 max-w-md text-sm leading-relaxed text-muted-foreground">
              La carte change au gré du marché : il arrive qu'un plat disparaisse
              en milieu de service. On s'en excuse d'avance, c'est plutôt bon signe.
            </p>
          </div>

          <div className="md:pt-24">
            <img
              src={plateDuck}
              alt="Cuisse de canard et endives braisées dans une assiette en grès"
              width={1008}
              height={1312}
              loading="lazy"
              className="w-full object-cover"
            />
            <p className="mt-4 rule-label">
              Canard de la ferme des Quatre-Vents, endives de Charles Coppin
            </p>
          </div>
        </div>
      </section>

      <section id="maison" className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
          <img
            src={kitchenHands}
            alt="Les mains du chef dressant les assiettes en cuisine"
            width={1200}
            height={912}
            loading="lazy"
            className="w-full object-cover grayscale"
          />
          <div>
            <p className="rule-label">Depuis quarante-huit ans</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight">
              Le grand-père tenait le zinc.
              <br />
              <span className="italic text-brass">On a gardé le zinc.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              <p>
                Ouvert en 1978 par Lucien Marchand, repris en 2011 par sa petite-fille
                Camille. Même comptoir, mêmes banquettes en moleskine recousues trois
                fois, cave refaite de fond en comble.
              </p>
              <p>
                Une cinquantaine de références en vins nature, dont une bonne moitié
                de Loire, servis au verre quand la bouteille est ouverte. On ne fait
                pas de menu dégustation et on n'a pas de site de réservation : on
                décroche le téléphone entre 10h et 18h.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="venir" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-3">
          <div>
            <p className="rule-label mb-4">Adresse</p>
            <p className="font-display text-2xl leading-snug">
              14 rue des Trois-Bornes
              <br />
              75011 Paris
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Métro Parmentier, sortie rue du Faubourg-du-Temple
            </p>
          </div>
          <div>
            <p className="rule-label mb-4">Réserver</p>
            <a href="tel:+33143570912" className="font-display text-2xl text-brass">
              01 43 57 09 12
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Tous les jours de 10h à 18h. Groupes de plus de six : on préfère
              en parler de vive voix.
            </p>
          </div>
          <div>
            <p className="rule-label mb-4">Bon à savoir</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Fermé dimanche et lundi</li>
              <li>Congés du 3 au 24 août</li>
              <li>Terrasse quatre tables, non fumeur</li>
              <li>Chien accepté au comptoir</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="rule-label">Le Petit Cornichon · Bistrot · Paris 11<sup>e</sup></p>
          <p className="rule-label">Site de démonstration — établissement fictif</p>
        </div>
      </footer>
    </div>
  );
}
