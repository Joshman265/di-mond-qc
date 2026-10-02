DI-MOND QC — VERSION 16 — DIRECT ONEDRIVE SAVING

Upload ALL files inside di-mond-qc-main to your GitHub repository root, including onedrive.js and msal-browser.min.js. Commit and wait for GitHub Pages deployment.

Open https://joshman265.github.io/di-mond-qc/ on each iPad. Tap Connect OneDrive and sign in with that employee's company Microsoft account. Allow the requested file access, if company policy permits. Microsoft may request administrator approval; a company administrator must approve if it does. The app registration already uses SPA authentication and the company's tenant.

SAVE OPTIONS
1. Save as Incomplete keeps the QC on the current iPad under Incomplete QC.
2. Save to OneDrive validates the QC, prepares the PDF, and opens a folder chooser inside the QC app. Browse the shared folder, choose a filename, and tap Save here. Select an existing PDF to use its filename; replacing it requires confirmation. New filename conflicts fail instead of silently overwriting.

A successful upload files the QC automatically. A cancelled or failed upload keeps the QC in Incomplete QC. Keep the app open while uploading. If a network failure occurs, check OneDrive before retrying because the server may have received the PDF.

Each employee needs edit access to the shared folder. The app uses the employee's own Microsoft permissions. Connect both iPads separately. Change account is available on the home screen. No client secret is required or included.

Incomplete sheets are local to each iPad. Do not clear website data. Sign-in persists subject to Microsoft session policy. After updating, close and reopen the app; if the old version appears, refresh the website in Safari while online, then reopen the Home Screen app.

Verification: code and mocked Microsoft responses can be checked locally. Real Microsoft sign-in, company consent policy, shared-folder access, and uploading require testing on the live HTTPS website with your account.
