#!/bin/bash
set -euo pipefail

# === PATHS (your setup) ===
REPO_DIR="$HOME/Desktop/Design_GIS/enve5551-pig-tender"
WEBMAP_DIR="$HOME/Desktop/Design_GIS/Webmap"
LIVE_DIR="$REPO_DIR/docs"

GIT="/usr/bin/git"
RSYNC="/usr/bin/rsync"

# === find newest export ===
cd "$WEBMAP_DIR"
latest_folder="$(ls -td qgis2web_* 2>/dev/null | head -1)"
if [[ -z "${latest_folder:-}" ]]; then
  echo "❌ No qgis2web_* folders found in $WEBMAP_DIR"
  exit 1
fi
echo "🗺️  Latest export: $latest_folder"

# === copy into docs ===
rm -rf "$LIVE_DIR"
mkdir -p "$LIVE_DIR"
cp -R "$latest_folder/"* "$LIVE_DIR/"

# flatten if nested qgis2web folder
if [[ -d "$LIVE_DIR/qgis2web" && -f "$LIVE_DIR/qgis2web/index.html" ]]; then
  $RSYNC -a "$LIVE_DIR/qgis2web/"/ "$LIVE_DIR"/
  rm -rf "$LIVE_DIR/qgis2web"
fi

# === commit and push ===
cd "$REPO_DIR"
$GIT add docs
$GIT commit -m "Update webmap: $(date '+%Y-%m-%d %H:%M')" || true
$GIT push origin main

echo "✅ Latest map pushed to GitHub Pages."