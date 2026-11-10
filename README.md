# wallraff.fr

Site de Wallraff Contents, en Astro (site statique), qui remplace l'ancien WordPress.

## Travailler en local

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site dans dist/
npm run preview   # sert dist/ pour vérifier avant la mise en ligne
```

Il faut Node 22.23 ou plus récent.

## Mettre en ligne sur O2Switch

1. Créer la clé du formulaire (voir plus bas), puis lancer `npm run build`.
2. Envoyer tout le contenu de `dist/` dans `public_html/`, par FTP ou SSH, à la place de l'ancien WordPress. Garder une sauvegarde de l'ancien site.
3. Vérifier que `.htaccess` est bien parti (c'est un fichier caché). Il gère :
   - le passage en HTTPS ;
   - les redirections 301 des anciennes adresses WordPress, par exemple `/realisations/documentaire/guerre-des-clans.html` vers `/realisations/documentaire/guerre-des-clans/` ;
   - la page 404 ;
   - le cache et les en-têtes de sécurité.

## Formulaire de contact

Le site est statique, donc l'envoi passe par [Web3Forms](https://web3forms.com), un service gratuit.

1. Créer une clé sur web3forms.com avec l'adresse qui doit recevoir les demandes.
2. Copier `.env.example` en `.env` et y renseigner `PUBLIC_WEB3FORMS_KEY=…`.
3. Relancer `npm run build`.

Sans clé, le formulaire reste utilisable : à l'envoi, il ouvre la messagerie du visiteur avec le message déjà rédigé.

## Modifier les contenus

| Quoi | Où |
| --- | --- |
| Réalisations (films, presse, livres, web) | `src/content/works/*.md` : un fichier par réalisation. L'en-tête du fichier donne le titre, la catégorie, l'image, la vidéo YouTube et le générique (diffusion, durée, réalisation…). |
| Images | `src/assets/works/<réalisation>/` et `src/assets/site/` |
| Textes des pages | directement dans `src/pages/**` (accueil : `src/pages/index.astro`) |
| Texte de référence de l'ancien site | `src/content/pages/*.md` (seules les mentions légales sont affichées depuis ce dossier) |
| Téléphone, e-mail, menu | `src/data/site.ts` |
| Clients et partenaires | `src/components/Partners.astro` |

Pour ajouter une réalisation, dupliquer un fichier de `src/content/works/`, changer l'en-tête et le texte, déposer les images dans `src/assets/works/<nouveau-nom>/`, puis relancer le build. La réalisation apparaît d'elle-même dans les pages Réalisations et dans la page de sa catégorie.

## Direction visuelle

C'est une planche contact de monteur :

- les images réelles des films sont posées sur des bandes de pellicule noire, sur du papier blanc ;
- le crayon gras rouge, seul rouge du site, entoure l'image sélectionnée ;
- les titres sont en Archivo étendu, les textes en Source Serif 4 ;
- les citations sont mises en forme comme des sous-titres incrustés.

Le contrat de direction est dans `.impeccable/surfaces/` et la fiche produit dans `PRODUCT.md`.
