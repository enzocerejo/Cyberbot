@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Publier le site Cyber sur GitHub

where git >nul 2>nul
if errorlevel 1 (
  echo [X] Git n'est pas installe.
  echo     Installe-le depuis https://git-scm.com/download/win (Suivant partout^) puis relance ce fichier.
  start https://git-scm.com/download/win
  pause
  exit /b
)

if not exist ".git" (
  echo Premiere publication : connexion du dossier au depot GitHub...
  git init -b main >nul
  git remote add origin https://github.com/enzocerejo/Cyberbot.git
  git config user.name "Enzo Cerejo"
  git config user.email "enzocerejo@users.noreply.github.com"
  git fetch origin main
  if not errorlevel 1 git reset --soft origin/main >nul
)

rem Le depot a ete renomme Cyber -> Cyberbot : on met l'adresse a jour
git remote set-url origin https://github.com/enzocerejo/Cyberbot.git

git add -A
rem Securite : bloque l'envoi si un token Discord, une cle API ou un token de tunnel trainait dans le site
git grep --cached -qE "[MNO][A-Za-z0-9_-]{23,27}\.[A-Za-z0-9_-]{6}\.[A-Za-z0-9_-]{27,}|sk-ant-[A-Za-z0-9_-]{10,}|github_pat_[A-Za-z0-9_]{20,}|eyJhIjoi[A-Za-z0-9+/=_-]{40,}"
if not errorlevel 1 (
  git reset -q
  echo [X] ARRET : un secret ^(token ou cle^) est dans un fichier du site. Rien n'a ete envoye.
  echo     Retire-le du fichier puis relance PUBLIER.bat, ou demande a Claude.
  pause
  exit /b
)
git diff --cached --quiet
if errorlevel 1 goto commit
rem Rien de nouveau dans le dossier : reste-t-il une mise a jour deja enregistree mais pas encore envoyee ?
git fetch origin main >nul 2>nul
set AVANCE=0
for /f %%n in ('git rev-list --count origin/main..HEAD 2^>nul') do set AVANCE=%%n
if "%AVANCE%"=="0" (
  echo [OK] Rien de nouveau a publier : GitHub est deja a jour.
  pause
  exit /b
)
goto envoi

:commit
git commit -m "Mise a jour du site" >nul

:envoi

rem Le depot GitHub peut contenir des modifications faites en ligne (ex. fichier CNAME) : on les recupere d'abord
echo Recuperation des modifications deja presentes sur GitHub...
git fetch origin main
if errorlevel 1 (
  echo [X] Impossible de joindre GitHub : verifie ta connexion internet puis relance ce fichier.
  pause
  exit /b
)
git rebase origin/main
if errorlevel 1 (
  git rebase --abort
  echo.
  echo [X] Conflit : un meme fichier a ete modifie sur GitHub et sur ton PC.
  echo     Rien n'a ete envoye. Ta mise a jour reste enregistree sur ton PC : demande de l'aide a Claude.
  pause
  exit /b
)

echo Envoi vers GitHub (la premiere fois, une fenetre de connexion GitHub peut s'ouvrir^)...
git push -u origin main
if errorlevel 1 (
  echo [X] L'envoi a echoue : lis le message au-dessus.
  pause
  exit /b
)

echo.
echo [OK] Site publie ! Il sera a jour dans 1 a 2 minutes sur :
echo      https://cyberbot.fr/
start https://cyberbot.fr/
pause
