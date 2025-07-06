#!/bin/bash

set -e

# === Configuration ===
SOURCE_BRANCH="develop"
TARGET_BRANCH="master"
BUILD_DIR="out"
REPO_URL="git@github.com:cedrictellier/CedricTellier.github.io.git"
TMP_DIR=".deploy-tmp"

echo "🧼 Nettoyage ancien dossier temporaire..."
rm -rf $TMP_DIR

echo "🚀 Déploiement depuis '$SOURCE_BRANCH' vers '$TARGET_BRANCH'..."

# Assure-toi d’être sur la bonne branche source
git checkout $SOURCE_BRANCH
git pull origin $SOURCE_BRANCH

# Nettoyage build précédent
rm -rf .next $BUILD_DIR

# Build du site statique
echo "🏗  Build du site..."
npm run build

# Ajout du .nojekyll (empêche GitHub Pages de bloquer le dossier _next)
touch $BUILD_DIR/.nojekyll

# Clone du dépôt dans un dossier temporaire (branche cible uniquement)
echo "📦 Préparation du contenu à publier..."
git clone --branch $TARGET_BRANCH $REPO_URL $TMP_DIR

# Suppression du contenu précédent
rm -rf $TMP_DIR/*

# Copie du contenu statique généré
cp -r $BUILD_DIR/* $TMP_DIR/

# Commit et push
cd $TMP_DIR
git add .
COMMIT_MESSAGE="Déploiement statique depuis la branche '$SOURCE_BRANCH' - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MESSAGE"
git push origin $TARGET_BRANCH

cd ..
rm -rf $TMP_DIR

echo "✅ Déploiement terminé sur la branche '$TARGET_BRANCH'."
echo "🌐 Site disponible à : https://cedrictellier.github.io/"
