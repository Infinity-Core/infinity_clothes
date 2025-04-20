# infinity_clothes - RedM Clothes System

Advanced clothes and outfit management module for RedM, developed by Shepard & iiRedDev (ALTITUDE-DEV.COM). Designed for seamless integration with Infinity Core and Infinity Skin.

## ✨ Main Features

- Clothes and outfit management (save, load, apply)
- Shop and wardrobe system (UI-based)
- Full synchronization with skin and core modules
- Database integration (requires oxmysql)
- Client/server outfit logic
- Modern web UI for clothes management (html/core.html)
- Export for outfit loading

## 📦 Installation

1. Place this folder in your server's `resources` directory.
2. Add the resource to your `server.cfg`:
   ```
      ensure oxmysql              # Module SQL
      ensure infinity_core        # Module Framework core
      ensure infinity_skin        # Module Skin (skins)
      ensure infinity_chars       # Module Multichars (verif accounts and multichars)
      ensure infinity_needs       # Module Metabolism, inventory (inventory and metabolism)
      ensure infinity_identity    # Module Identity (identity, skin and login)
      ensure infinity_clothes     # Module Clothes (outfits and shops)
   ```
3. Make sure [oxmysql](https://github.com/overextended/oxmysql) is installed and started before this script.
4. Configure the files as needed.

## ⚙️ Configuration

- Main scripts:
  - `clothes.lua`, `core.lua`, `cl_shops.lua` (client logic)
  - `server.lua` (server logic)
  - `config.lua` (main configuration)
- User interface: `html/`

## 🛠 Contribution

Contributions are welcome!
Please create an issue or pull request for any suggestion or improvement.

## 🤝 Support & Links

- Documentation: [https://altitude-dev.gitbook.io/doc/](https://altitude-dev.gitbook.io/doc/)
- Discord support: [https://discord.gg/ncH7GX3XJd](https://discord.gg/ncH7GX3XJd)
- Authors: Shepard, iiRedDev

---

> Module licensed by ALTITUDE-DEV.COM. Any unauthorized reproduction or distribution is prohibited.
