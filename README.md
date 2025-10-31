# 💰 Baztami

**Baztami** est une application web qui permet à chaque utilisateur d’ajouter, suivre et organiser simplement ses **revenus** et **dépenses**, avec une **vue rapide du solde**.  
Elle facilite la maîtrise du budget quotidien tout en gardant les données **accessibles et sécurisées** dans le navigateur grâce au **LocalStorage**.

---

## 📚 Table des matières
- [🚀 Objectif](#-objectif)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [✨ Fonctionnalités principales](#-fonctionnalités-principales)
- [👤 User Stories](#-user-stories)
- [⚙️ Installation](#️-installation)
- [📸 Aperçu visuel](#-aperçu-visuel)
- [🧠 Concepts utilisés](#-concepts-utilisés)

---

## 🚀 Objectif

L'objectif principal de Baztami est d’aider les utilisateurs à :
- Organiser leur budget personnel.  
- Visualiser rapidement leur solde.  
- Prendre de meilleures décisions financières au quotidien.  

---

## 🛠️ Technologies utilisées

- **HTML5** — structure de la page.  
- **Tailwind CSS** — mise en page et design rapide, réactif et moderne.  
- **JavaScript (DOM)** — gestion des interactions, du stockage et des calculs.  
- **LocalStorage** — sauvegarde des transactions sur l’appareil de l’utilisateur.  
- **Git & GitHub Projects** — gestion de version et planification collaborative.  

---

## ✨ Fonctionnalités principales

- ➕ **Ajouter** un revenu ou une dépense (avec description, type, montant et date).  
- 🧾 **Afficher** chaque transaction dans une carte colorée :
  - 🟩 verte pour les revenus.
  - 🟥 rouge pour les dépenses.
- ✏️ **Modifier** une transaction enregistrée.  
- 🗑️ **Supprimer** une transaction avec **confirmation** avant suppression.  
- 💰 **Calcul en temps réel** du :
  - total des revenus,
  - total des dépenses,
  - solde net.  
- 💾 **Sauvegarde automatique** dans le LocalStorage (les données persistent même après fermeture du navigateur).  

---

## 👤 User Stories

### 💳 Suivi des revenus et dépenses
> En tant qu’utilisateur souhaitant suivre mon argent,  
> je veux ajouter chaque revenu ou dépense avec description, montant, type et date,  
> afin de connaître précisément l’état de mon budget au jour le jour.

### 💶 Visualisation claire
> En tant qu’utilisateur attentif à mes dépenses,  
> je veux voir toutes les transactions s’afficher dans des cartes colorées (vert pour revenu, rouge pour dépense),  
> afin de comprendre instantanément mes mouvements financiers.

### ✏️ Modification
> En tant qu’utilisateur rigoureux,  
> je veux pouvoir modifier facilement une transaction pour corriger les erreurs.

### 🗑️ Suppression sécurisée
> En tant qu’utilisateur prudent,  
> je veux confirmer avant de supprimer une transaction afin d’éviter toute perte accidentelle de données.

### 💵 Calcul automatique
> En tant qu’utilisateur aspirant à la maîtrise de mes finances,  
> je veux voir en temps réel le total des revenus (+), le total des dépenses (–), et le solde net.

### 🏦 Sauvegarde locale
> En tant qu’utilisateur prévoyant,  
> je veux que toutes mes transactions soient enregistrées automatiquement sur mon ordinateur,  
> pour les retrouver quand je reviens, même après avoir fermé l’application.

### 🧩 Collaboration
> En tant qu’apprenant et membre d’une équipe projet,  
> je veux planifier mes tâches, suivre leur avancement et organiser la progression collective via GitHub Projects,  
> afin d’améliorer la collaboration et la gestion du temps de développement.

---

## ⚙️ Installation

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/ton-compte/baztami.git
   ```


2. **Ouvre le dossier :**
```bash
cd baztami
```
3. **Lance simplement index.html dans ton navigateur :**
```bash
open index.html
```
(ou fais un clic droit → “Ouvrir avec → navigateur”)

## 📸 Aperçu visuel

- 💡 Les cartes de transactions s’affichent avec des couleurs selon le type :

> Revenu → vert (+)
> Dépense → rouge (–)

## 🧠 Concepts utilisés

- Manipulation du **DOM** (document.querySelector, addEventListener, innerHTML, etc.)
- Gestion des **événements** (clic, input, submit)
- Stockage et récupération via **localStorage**
- Utilisation de **Tailwind** CSS pour styliser les éléments dynamiques
- Mise à jour en temps réel du contenu sans recharger la page