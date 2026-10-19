import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldCheck, Scale, FileText, Phone, MapPin } from 'lucide-react';
import Button from '../../components/ui/Button';

export const metadata: Metadata = {
  title: 'Mentions Légales & Confidentialité',
  description:
    'Mentions légales, politique de confidentialité, RGPD et informations réglementaires du Salon de coiffure Tendance Attitud à Allauch (13190).',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#11180E] text-[#F7F5EE] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar with back button */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5C368] hover:text-[#F9EFC5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo Tendance Attitud"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border border-[#E5C368]/60 object-cover"
            />
            <span className="font-serif font-bold text-[#E5C368] hidden sm:inline">
              Tendance Attitud
            </span>
          </div>
        </div>

        {/* Header Header */}
        <div className="bg-[#182315] border border-[#E5C368]/30 rounded-3xl p-8 sm:p-10 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#E5C368]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23301F] text-[#E5C368] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5C368]/30">
            <Scale className="w-3.5 h-3.5" />
            <span>Informations Réglementaires</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#E5C368] mb-4">
            Mentions Légales
          </h1>
          <p className="text-sm sm:text-base text-[#F7F5EE]/80 max-w-2xl leading-relaxed">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (L.C.E.N.), nous portons à la connaissance des utilisateurs les présentes mentions légales.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-6">
          {/* Section 1: Éditeur */}
          <section className="bg-[#182315] border border-[#23301F] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-serif text-[#E5C368] mb-4 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#E5C368]" />
              <span>1. Éditeur du site</span>
            </h2>
            <div className="space-y-2 text-sm text-[#F7F5EE]/85 leading-relaxed">
              <p>
                <strong>Dénomination commerciale :</strong> Salon Tendance Attitud
              </p>
              <p>
                <strong>Activité :</strong> Salon de coiffure mixte, soins capillaires d'exception et barbier
              </p>
              <p>
                <strong>Responsable de la publication & Gérance :</strong> Nathalie
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E5C368]" />
                <span><strong>Adresse :</strong> 44 avenue Salvador Allende, 13190 Allauch, France</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5C368]" />
                <span><strong>Téléphone :</strong> 06 59 26 65 33</span>
              </p>
            </div>
          </section>

          {/* Section 2: Hébergement */}
          <section className="bg-[#182315] border border-[#23301F] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-serif text-[#E5C368] mb-4 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#E5C368]" />
              <span>2. Hébergement de la plateforme</span>
            </h2>
            <div className="space-y-2 text-sm text-[#F7F5EE]/85 leading-relaxed">
              <p>
                Le site est hébergé par la société <strong>Vercel Inc.</strong>
              </p>
              <p>
                <strong>Siège social :</strong> 440 N Barranca Ave #4133, Walnut, CA 91789, États-Unis
              </p>
              <p>
                <strong>Site internet :</strong>{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5C368] underline hover:text-[#F3DE8A]"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 3: Propriété intellectuelle */}
          <section className="bg-[#182315] border border-[#23301F] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-serif text-[#E5C368] mb-4">
              3. Propriété intellectuelle et contrefaçons
            </h2>
            <div className="space-y-3 text-sm text-[#F7F5EE]/85 leading-relaxed">
              <p>
                Le Salon Tendance Attitud est propriétaire exclusif des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images de réalisations, graphismes, logo, icônes, et éléments d'identité visuelle.
              </p>
              <p>
                Les marques partenaires citées (Tokio Inkarami, L'Oréal Professionnel, Kérastase, Olaplex, Ybera Paris, Redken) sont la propriété exclusive de leurs dépositaires respectifs.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est formellement interdite sans l'autorisation écrite préalable du Salon Tendance Attitud.
              </p>
            </div>
          </section>

          {/* Section 4: Données personnelles & RGPD */}
          <section className="bg-[#182315] border border-[#23301F] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-serif text-[#E5C368] mb-4">
              4. Gestion des données personnelles & Réservations (RGPD)
            </h2>
            <div className="space-y-3 text-sm text-[#F7F5EE]/85 leading-relaxed">
              <p>
                En France, les données personnelles sont protégées par le Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et la Loi n° 78-17 du 6 janvier 1978 modifiée.
              </p>
              <p>
                <strong>Prise de rendez-vous en ligne :</strong> La réservation des prestations s'effectue via le service tiers partenaire <strong>Planity</strong>. Lorsque vous réservez un créneau en ligne, vos données (nom, prénom, numéro de téléphone, email) sont traitées conformément à la politique de confidentialité et aux conditions de service de Planity.
              </p>
              <p>
                Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles. Vous pouvez exercer ce droit en contactant directement le salon au 06 59 26 65 33 ou lors de votre venue en salon.
              </p>
            </div>
          </section>

          {/* Section 5: Cookies & Liens externes */}
          <section className="bg-[#182315] border border-[#23301F] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-serif text-[#E5C368] mb-4">
              5. Cookies et Liens hypertextes
            </h2>
            <div className="space-y-3 text-sm text-[#F7F5EE]/85 leading-relaxed">
              <p>
                Le site Salon Tendance Attitud est conçu pour minimiser les traceurs. Aucun cookie publicitaire ou de profilage n'est déposé sans votre consentement. Seuls des cookies strictement techniques nécessaires à la navigation et à la fluidité du service peuvent être utilisés.
              </p>
              <p>
                Le site contient des liens hypertextes vers d'autres sites (notamment Planity et Instagram). Le Salon Tendance Attitud n'a pas la possibilité de vérifier en permanence l'intégralité du contenu des sites ainsi visités, et décline toute responsabilité quant aux éventuels risques de contenus illicites.
              </p>
            </div>
          </section>

          {/* Bottom Action */}
          <div className="text-center pt-8 pb-4">
            <Button asLink href="/" variant="gold" size="lg">
              Retourner sur le site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
