#!/bin/bash

# GitHub Repository Setup Script
# Cseréld ki a YOUR_USERNAME részt a GitHub username-edre!

# 1. Remote hozzáadása
git remote add origin https://github.com/YOUR_USERNAME/nemet-igek.git

# 2. Branch átnevezése main-re (ha kell)
git branch -M main

# 3. Push GitHub-ra
git push -u origin main

echo "✅ Kód feltöltve GitHub-ra!"
echo "Most menj a Vercel-hez: https://vercel.com"
