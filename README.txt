DI-MOND QUALITY CONTROL — iPad web app

WHAT THIS VERSION DOES
- Mainline QC and Mounting Bay QC.
- Removes C/U columns.
- Keeps an INITIALS field beside every inspection item.
- Inspector enters their initials once and can tap Initial beside completed items.
- Incomplete QC sheets are saved locally on the iPad and appear on the Incomplete QC screen.
- Complete QC creates a print-ready final document.
- Click Save PDF — Choose Folder. On supported desktop browsers, choose a synced OneDrive folder.
- On iPad, use Share → Save to Files → OneDrive. Enable OneDrive in Files first if needed.
- If sharing is unavailable, upload the downloaded PDF to your chosen OneDrive folder.
- Print / Save PDF remains available as a backup.
- The inspector manually chooses:
  Any desired folder in OneDrive. No automatic Work Order or Lost QC uploads occur.
- After saving to OneDrive, tap “I Saved It to OneDrive” to remove the QC from Incomplete.

IMPORTANT
This package is a Progressive Web App (PWA). To put it on an iPad Home Screen as a true app-like icon,
the folder must be hosted on an HTTPS website. Opening index.html directly from a ZIP/File is fine for
desktop testing, but iPad Home Screen installation requires a hosted URL.

TEST ON WINDOWS
1. Extract the ZIP.
2. Double-click index.html for a basic test.
3. For full offline/PWA behaviour, serve the folder through a web server.

DATA
Incomplete QC data is stored in the browser on the individual iPad. Do not clear Safari website data
until the QC has been completed and saved to OneDrive.

UPDATE THE LIVE GITHUB SITE
1. In GitHub, open joshman265/di-mond-qc.
2. Choose Add file → Upload files.
3. Extract this ZIP and upload the files inside di-mond-qc-main to the repository root.
4. Commit changes, wait for GitHub Pages deployment, then reopen/refresh the app.
5. Complete a test QC, save it into your OneDrive folder, and confirm it is there before marking it filed.
