window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'emc', nom: 'EMC', emoji: '⚖️', couleur: '#f97316',
desc: "Enseignement moral et civique de 2nde : « La liberté, les libertés ». Un seul thème, souvent évalué par un exposé, un débat ou un dossier. Les notions clés et les textes de référence ci-dessous couvrent l'essentiel.",
ressources: [
 { nom: 'Lumni EMC 2nde', url: 'https://www.lumni.fr/lycee/seconde/emc', ico: '📺', desc: 'Vidéos sur les libertés.' },
 { nom: 'Vie publique', url: 'https://www.vie-publique.fr/', ico: '🏛️', desc: 'Fiches officielles sur les institutions et les droits.' },
 { nom: 'Légifrance', url: 'https://www.legifrance.gouv.fr/', ico: '📜', desc: 'Les textes de loi originaux (DDHC, Constitution).' }
],
chapitres: [
{ id: 'emc-libertes', theme: 'La liberté, les libertés', titre: 'Les libertés : fondements, garanties et limites', duree: 25,
cours: [
{ titre: 'Fondements', texte: `
- **Liberté** : pouvoir d'agir selon sa volonté dans le respect de la loi. Article 4 de la **DDHC (1789)** : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. »
- Libertés **individuelles** (conscience, opinion, aller et venir, vie privée) et **collectives** (réunion, association, manifestation, syndicale, presse).
- Textes de référence : DDHC (1789), Déclaration universelle des droits de l'homme (ONU, **1948**), Convention européenne des droits de l'homme (1950), Constitution de la Ve République (**1958**), Charte des droits fondamentaux de l'UE (2000).
- Grandes conquêtes : abolition de l'esclavage (**1848**), liberté de la presse (**1881**), liberté syndicale (1884), liberté d'association (**1901**), laïcité (**1905**), vote des femmes (**1944**), abolition de la peine de mort (**1981**), mariage pour tous (2013).`},
{ titre: 'Garanties et limites', texte: `
- **Garanties** : l'**État de droit** (tous soumis à la loi, y compris l'État), la **séparation des pouvoirs**, une **justice indépendante**, le **Conseil constitutionnel** (contrôle des lois ; question prioritaire de constitutionnalité depuis 2008), la **Cour européenne des droits de l'homme** (recours contre un État), le **Défenseur des droits**, la **CNIL** (données), les associations (Ligue des droits de l'homme).
- **Limites** : ma liberté s'arrête où commence celle d'autrui ; la loi interdit la diffamation, l'injure, l'incitation à la haine, l'apologie du terrorisme, le négationnisme. Le **droit à la sûreté** et l'ordre public justifient des restrictions (état d'urgence, couvre-feu pendant le Covid), qui doivent être **nécessaires et proportionnées**.
- **Laïcité** (loi de 1905) : l'État est neutre, garantit la liberté de conscience et de culte ; à l'école, interdiction des signes religieux ostensibles pour les élèves (loi de 2004).
- Débats actuels : liberté d'expression et réseaux sociaux (modération, cyberharcèlement), surveillance et vie privée (caméras, reconnaissance faciale), liberté et sécurité, liberté de la presse (classement RSF).`}
],
notions: [
 { terme: 'Liberté (DDHC art. 4)', def: '« Pouvoir faire tout ce qui ne nuit pas à autrui » ; ses limites sont fixées par la loi.' },
 { terme: 'Libertés individuelles / collectives', def: 'Individuelles : conscience, opinion, circulation, vie privée. Collectives : réunion, association, manifestation, syndicat, presse.' },
 { terme: 'DDHC (1789)', def: 'Déclaration des droits de l\'homme et du citoyen, texte fondateur intégré à la Constitution.' },
 { terme: 'DUDH (1948)', def: 'Déclaration universelle des droits de l\'homme adoptée par l\'ONU après la Seconde Guerre mondiale.' },
 { terme: 'État de droit', def: 'État où tous, gouvernants compris, sont soumis à des règles de droit contrôlées par des juges indépendants.' },
 { terme: 'Séparation des pouvoirs', def: 'Législatif (Parlement), exécutif (gouvernement), judiciaire (tribunaux) distincts pour éviter l\'arbitraire (Montesquieu).' },
 { terme: 'Conseil constitutionnel', def: 'Institution vérifiant la conformité des lois à la Constitution ; saisissable par QPC depuis 2008.' },
 { terme: 'Laïcité (1905)', def: 'Séparation des Églises et de l\'État : neutralité de l\'État, liberté de conscience et de culte.' },
 { terme: 'Limites à la liberté d\'expression', def: 'Diffamation, injure, incitation à la haine, apologie du terrorisme, négationnisme : interdits par la loi.' },
 { terme: 'Proportionnalité', def: 'Une restriction de liberté doit être nécessaire, adaptée et limitée à l\'objectif poursuivi.' },
 { terme: 'Défenseur des droits', def: 'Autorité indépendante que tout citoyen peut saisir en cas d\'atteinte à ses droits.' }
],
quiz: [
 { q: 'La DDHC date de…', choix: ['1789', '1848', '1905', '1948'], r: 0, exp: '26 août 1789.' },
 { q: 'La loi de 1905 établit…', choix: ['la liberté de la presse', 'la laïcité', 'le vote des femmes', 'l\'abolition de la peine de mort'], r: 1, exp: 'Séparation des Églises et de l\'État.' },
 { q: 'La peine de mort est abolie en France en…', choix: ['1944', '1958', '1981', '2000'], r: 2, exp: 'Loi Badinter.' },
 { q: 'Selon la DDHC, la liberté consiste à…', choix: ['faire tout ce qu\'on veut', 'faire tout ce qui ne nuit pas à autrui', 'obéir au roi', 'voter'], r: 1, exp: 'Article 4.' },
 { q: 'Qui contrôle la conformité des lois à la Constitution ?', choix: ['Le Président', 'Le Sénat', 'Le Conseil constitutionnel', 'La CNIL'], r: 2, exp: 'Avant promulgation ou par QPC.' },
 { q: 'Quelle expression est interdite par la loi ?', choix: ['Critiquer le gouvernement', 'Inciter à la haine raciale', 'Caricaturer une religion', 'Manifester'], r: 1, exp: 'La critique et la caricature sont protégées ; l\'incitation à la haine est un délit.' }
],
pieges: ['Confondre liberté d\'expression (protégée, y compris pour choquer) et ses abus (diffamation, haine) qui sont des délits.', 'Croire que la laïcité interdit la religion : elle garantit la liberté de culte et la neutralité de l\'État.'],
astuces: ['Pour un débat ou un exposé : définis la liberté concernée, cite un texte, un exemple d\'actualité, une limite légale et une garantie.'],
exos: [
 { enonce: 'Argumenter : « La liberté d\'expression doit-elle être totale sur les réseaux sociaux ? »', correction: `**Pour une large liberté** : droit fondamental (DDHC art. 11, DUDH art. 19), pluralisme, lanceurs d'alerte, mobilisations citoyennes. **Pour des limites** : les mêmes lois s'appliquent en ligne (diffamation, haine, harcèlement : loi de 1881, loi Avia partiellement censurée, règlement européen DSA 2022) ; les fake news nuisent au débat ; les mineurs doivent être protégés. **Conclusion** : liberté totale non, mais les limites doivent être fixées par la loi et contrôlées par le juge, pas décidées arbitrairement par les plateformes.` }
]}
]});
