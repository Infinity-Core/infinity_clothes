# infinity_clothes - Système de vêtements RedM

Module avancé de gestion des vêtements et tenues pour RedM, développé par Shepard & iiRedDev (ALTITUDE-DEV.COM). Conçu pour une intégration parfaite avec Infinity Core et Infinity Skin.

## ✨ Fonctionnalités principales

- Gestion complète des vêtements et tenues (sauvegarde, chargement, application)
- Système de boutiques et garde-robe (UI moderne)
- Synchronisation totale avec les modules skin et core
- Intégration base de données (oxmysql requis)
- Logique client/serveur pour les tenues
- Interface web moderne pour la gestion des vêtements (html/core.html)
- Export pour le chargement des tenues

## 📦 Installation

1. Placez ce dossier dans `resources` de votre serveur RedM.
2. Ajoutez la ressource à votre `server.cfg` :
   ```
      ensure oxmysql              # Module SQL
      ensure infinity_core        # Module Framework core
      ensure infinity_skin        # Module Skin (skins)
      ensure infinity_chars       # Module Multichars (verif accounts and multichars)
      ensure infinity_needs       # Module Metabolism, inventory (inventory and metabolism)
      ensure infinity_identity    # Module Identity (identity, skin and login)
      ensure infinity_clothes     # Module Clothes (vêtements et boutiques)
   ```
3. Assurez-vous que [oxmysql](https://github.com/overextended/oxmysql) est installé et lancé avant ce script.
4. Configurez les fichiers selon vos besoins.

## ⚙️ Configuration

- Scripts principaux :
  - `clothes.lua`, `core.lua`, `cl_shops.lua` (logique client)
  - `server.lua` (logique serveur)
  - `config.lua` (configuration principale)
- Interface utilisateur : `html/`

## 🛠 Contribution

Toute contribution est la bienvenue !
Merci de créer une issue ou une pull request pour toute suggestion ou amélioration.

## 🤝 Support & liens

- Documentation : [https://altitude-dev.gitbook.io/doc/](https://altitude-dev.gitbook.io/doc/)
- Discord support : [https://discord.gg/ncH7GX3XJd](https://discord.gg/ncH7GX3XJd)
- Auteurs : Shepard, iiRedDev

---

> Module sous licence ALTITUDE-DEV.COM. Toute reproduction ou distribution non autorisée est interdite.
