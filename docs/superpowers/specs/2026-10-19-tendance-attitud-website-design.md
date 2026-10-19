# Spécification Technique & Design : Site Web Tendance Attitud

- **Date** : 19 Octobre 2026
- **Projet** : Site Web Mobile-First pour le salon de coiffure *Tendance Attitud* (Allauch)
- **Objectif** : Conception et développement d'un site web Next.js responsive, haut de gamme et fidèle à la maquette graphique (`maquettes/Home.png`), intégrant les photos fournies dans `images/`, les avis clients et la prise de rendez-vous en ligne via Planity.

---

## 1. Contexte & Identité de Marque

*Tendance Attitud* est un salon de coiffure spécialisé situé au 44 avenue Salvador Allende, 13190 Allauch. 
Le salon propose des expertises spécifiques pour tous types de cheveux : bouclés, lissages brésiliens/organiques, crépus/afro, ondulations, balayages et soins profonds (soin Tokio Inkarami).

### Palette de Couleurs
- **Fond principal (Olive sombre)** : `#182315` (déclinaisons : `#1B2718` et `#141C11`)
- **Accents Dorés & Or Champagne** :
  - Or principal : `#E5C368`
  - Or chaud / bouton CTA : `#D4AF37` / `#C7A24B`
  - Or clair / lueur : `#F3DE8A`
- **Cartes Blanches épurées** : `#FFFFFF` avec angles très arrondis (`rounded-3xl` / `24px`)
- **Textes** :
  - Sur fond sombre : Blanc pur (`#FFFFFF`), Blanc crème (`#F7F5EE`), Or satiné (`#E5C368`)
  - Sur fond blanc : Noir d'encre doux (`#1A1A1A`), Gris ardoise (`#555555`)
- **Boutons sombres de sélection ("Choisir")** : `#1B2718` avec texte blanc

### Typographies (via `next/font/google`)
- **Calligraphie / Script d'auteur** : `Alex Brush` (ou `Playfair Display Italic` / `Great Vibes`) pour les titres signatures :
  - *"Du lisse aux Boucles"*
  - *"Vous nous faites confiance"*
  - *"Nos prestations"*
  - *"Rejoignez-nous sur @Tendanceattitud"*
- **Serif Luxe & Élégance** : `Playfair Display` pour les grands titres de section :
  - *"Le salon, notre équipe"*
  - *"Salon Tendance Attitud"*
  - *"Nos partenaires"*
- **Sans-Serif Moderne & Structurée** : `Montserrat` ou `Inter` pour les menus de navigation, boutons d'action, tableaux de tarifs, durées, adresses et horaires.

---

## 2. Stack Technique & Dépendances

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS avec configuration des couleurs et polices personnalisées
- **Icônes** : `lucide-react` (Instagram, Téléphone, Horaires, Carte, Étoiles, Menu burger, Flèches de navigation)
- **Animations & Gestes Tactiles** : `framer-motion` (pour le swipe tactile du carrousel sur mobile, les micro-transitions au changement d'onglets de prestations et le menu responsive)
- **Optimisation des Images** : Scripts Node/Python pour convertir les images `.HEIC` en formats modernes `.webp`/`.jpeg`, servis via `next/image`.

---

## 3. Stratégie & Mapping des Médias

Le dossier source contient 42 fichiers dont des photos d'iPhone au format `.HEIC`. Les visuels clés identifiés sur la maquette seront convertis et organisés dans `public/images/` :

1. **Hero Triptyque** :
   - Gauche : Coiffage lisse / blond lumineux
   - Centre : Nathalie souriante devant le salon avec macaron doré « Allauch »
   - Droite : Chevelure bouclée volumineuse
2. **Prestations (4 pastilles rondes)** :
   - Boucles : modèle cheveux bouclés naturels
   - Lissage : modèle lissage soyeux
   - Crépus : modèle coupe & coiffage afro / cheveux crépus
   - Ondulations : modèle ondulations blondes/miel de dos
3. **Équipe & Salon** :
   - Photo extérieure : Les 4 professionnelles devant le salon sous l'enseigne "HAIR STYLIST - COLORIST - CERTIFIÉ - 06 59 266 533"
   - Photo intérieure (incrustation en médaillon arrondi) : Salon moderne avec fauteuils dorés et miroirs ronds lumineux
4. **Instagram** :
   - 3 visuels phares (balayage dos, avant/après bac de soin, cliente souriante extérieure)
5. **Logo** :
   - Badge circulaire blanc « Tendance Attitud - HAIR STYLIST - ALLAUCH »

---

## 4. Architecture des Composants & Pages

```
src/
├── app/
│   ├── layout.tsx             # Setup polices, balises meta SEO, viewport mobile
│   ├── page.tsx               # Assemblage de toutes les sections de la page d'accueil
│   ├── globals.css            # Styles globaux, scrollbar personnalisée, variables de couleurs
│   └── mentions-legales/
│       └── page.tsx           # Page Mentions Légales & RGPD
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Header sticky, navigation, logo central, menu burger mobile & CTA Planity
│   │   └── Footer.tsx         # Partenaires, mentions légales, copyright, retour haut de page
│   ├── home/
│   │   ├── HeroSection.tsx        # Triptyque d'images, titre calligraphié doré, badge Allauch
│   │   ├── ReviewsSection.tsx     # Carrousel d'avis (5.0 ★, flèches + swipe tactile mobile)
│   │   ├── ServicesSection.tsx    # Bulles de sélection interactives, fiche détaillée et tarifs
│   │   ├── AboutSection.tsx       # Présentation du salon, équipe, histoire et photos superposées
│   │   ├── InstagramSection.tsx   # Grille Instagram avec icônes et liens vers le compte
│   │   └── ContactMapSection.tsx  # Coordonnées, badge d'ouverture en direct, horaires & carte interactive
│   └── ui/
│       ├── Button.tsx             # Bouton doré / sombre réutilisable avec micro-animations
│       └── ServiceItem.tsx        # Ligne de prestation avec prix, durée et bouton Choisir
└── data/
    ├── services.ts            # Données structurées des prestations par catégorie
    ├── reviews.ts             # Avis clients réalistes avec notes, dates et commentaires
    ├── partners.ts            # Liste des marques et partenaires
    └── salonInfo.ts           # Adresse, tel, horaires, coordonnées GPS, lien Planity
```

---

## 5. Spécification Détaillée des Sections

### 5.1. Header & Navigation Responsive
- **Structure** :
  - Liens à gauche : *Prestations* (`#prestations`), *Équipe* (`#equipe`)
  - Centre : Logo circulaire Tendance Attitud
  - Droite : *Contactez-nous* (`#contact`) et bouton doré « PRENDRE RDV »
- **Comportement Mobile** :
  - Bouton burger fluide ouvrant un panneau latéral avec accès direct aux rubriques et bouton d'appel rapide.
  - Le CTA « PRENDRE RDV » reste immédiatement accessible.

### 5.2. Hero Triptyque (« Du lisse aux Boucles »)
- **Visuel** : 3 colonnes verticales arrondies avec photos représentatives.
- **Typographie superposée** : Titre signature doré *« Du lisse aux Boucles »* en lettrage cursif élégant, macaron « Allauch », et sous-titre centré : *« Tous les cheveux méritent d'être sublimés »*.
- **Responsive** : Sur petit écran, le triptyque s'adapte en vue mise en avant ou swipe horizontal fluide.

### 5.3. Carrousel d'Avis Clients (« Vous nous faites confiance ★★★★ »)
- **Titre** : Cursif doré avec étoiles dorées.
- **Composant Carrousel** :
  - Affiche une carte blanche arrondie au format pilule.
  - Note : `5,0 ★`
  - Commentaire client (ex : *« Je recommande. Au top @ ! »*, *« Nathalie et son équipe ont sauvé mes boucles, un travail d'orfèvre ! »*)
  - Date : Date du commentaire.
  - Flèches de navigation gauche/droite + swipe tactile fluide sur mobile (`drag="x"` via Framer Motion).

### 5.4. Section Prestations Interactive
- **Titre** : Cursif doré *« Nos prestations »*.
- **Sélecteur de catégories** : 4 pastilles rondes avec photos et légendes en majuscules dorées :
  1. `BOUCLES`
  2. `LISSAGE`
  3. `CRÉPUS`
  4. `ONDULATIONS`
- **Sous-titre d'accompagnement** : *Balayage, soin Tokio, coupes, tresses*.
- **Bloc dynamique de prestations (Carte Blanche)** :
  - Titre dynamique de la catégorie sélectionnée (ex: `FEMMES BOUCLES : ONDULÉS / BOUCLÉS`).
  - Texte explicatif du déroulement du soin.
  - Liste des forfaits avec décomposition claire :
    - Forfait court (ex : `SHAMPOING+SOIN+COUPE + COIFFAGE CURLY COURT` - `1h 20min` - `63,50 €`)
    - Forfait mi-long (`jusqu'à épaule` - `1h 20min` - `67,50 €`)
    - Forfait long (`1h 20min` - `70,50 €`)
    - Forfait très long (`1h 20min` - `75,50 €`)
    - Soins complémentaires (`Supplément soin profond ABC + Spa` - `20min` - `10,50 €`)
  - Chaque prestation dispose d'un bouton sombre « Choisir » redirigeant vers le lien Planity : `https://www.planity.com/tendance-attitud-13190-allauch`.

### 5.5. Section Salon & Équipe
- **Contenu textuel** : Présentation chaleureuse de Nathalie et de son équipe passionnée, de l'ambiance cocooning et professionnelle du salon, et des techniques de pointe utilisées.
- **Composition photographique** :
  - Photo principale : L'équipe des 4 coiffeuses réunies devant la façade du salon.
  - Photo secondaire superposée : L'intérieur raffiné du salon avec ses miroirs ronds rétroéclairés et fauteuils design.

### 5.6. Section Instagram (@Tendanceattitud)
- **Titre** : Cursif doré *« Rejoignez-nous sur @Tendanceattitud »*.
- **Grille** : 3 publications au format carré/vertical avec badge icône Instagram en haut à gauche.
- **Action** : Clic ouvrant directement le compte Instagram officiel.

### 5.7. Salon Tendance Attitud (Coordonnées, Horaires & Carte)
- **Colonne de gauche** :
  - Nom du salon en typographie Serif dorée : *Salon Tendance Attitud*
  - Adresse postale : 44 avenue Salvador Allende, 13190 Allauch
  - Téléphone cliquable : `06 59 26 65 33` (`tel:+33659266533`)
  - Horaires détaillés :
    - LUNDI : 09H - 18H
    - MARDI : 09H - 18H
    - MERCREDI : FERMÉ
    - JEUDI : 09H - 20H30
    - VENDREDI : 09H - 19H
    - SAMEDI : 08H30 - 19H
    - DIMANCHE : FERMÉ
  - Indicateur dynamique vert : « Actuellement ouvert » / « Fermé » calculé en fonction du jour et de l'heure.
- **Colonne de droite** :
  - Carte interactive moderne (Google Maps intégrée ou visuel plan d'accès stylisé avec bouton GPS direct "Ouvrir dans Google Maps / Waze").

### 5.8. Section Partenaires & Footer
- **Titre** : *« Nos partenaires »*
- **Logos** : Pastilles rondes blanches épurées mettant à l'honneur les marques partenaires du salon (Tokio Inkarami, L'Oréal Professionnel, Kérastase, Olaplex, Ybera).
- **Footer** : Lien discret vers les *Mentions Légales*, politique de confidentialité, et mention copyright.

---

## 6. Accessibilité, Performance & SEO

- **Mobile First** : Tailles de cibles tactiles conformes (minimum 44x44px), textes contrastés, navigation au pouce ergonomique.
- **Performances (Core Web Vitals)** :
  - Préchargement des polices avec `next/font`.
  - Compression WebP des images avec attributs `sizes`, `priority` pour le hero et `loading="lazy"` pour les sections inférieures.
- **SEO Local** :
  - Balises `title`, `description` et OpenGraph ciblées sur Allauch, Marseille 11e/12e, Plan-de-Cuques.
  - Données structurées Schema.org `HairSalon` / `LocalBusiness` avec adresse, géolocalisation et horaires.
