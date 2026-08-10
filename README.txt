DI-MOND QUALITY CONTROL — iPad web app

WHAT THIS VERSION DOES
- Mainline QC and Mounting Bay QC.
- Removes C/U columns.
- Keeps an INITIALS field beside every inspection item.
- Inspector enters their initials once and can tap Initial beside completed items.
- Incomplete QC sheets are saved locally on the iPad and appear on the Incomplete QC screen.
- Complete QC creates a print-ready final document.
- On iPad, use Print / Save PDF, open the print preview, Share, then Save to Files.
- The inspector manually chooses:
  OneDrive → Di-Mond Reporting → Work Order → [corresponding work order] → QC Sheets.
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
