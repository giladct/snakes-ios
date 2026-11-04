# נחש צפע? - iOS

עטיפת Capacitor לאתר https://giladct.github.io/snakes/ (הקבצים נארזים באפליקציה ועובדים גם בלי רשת).

- Bundle ID: `snakes.myapp`
- עדכון תוכן: `node sync-web.js` (מעתיק מ-`../snakes-site` ל-`www`), אחר כך `npx cap sync ios` ו-commit.
- בנייה: Codemagic, workflow `ios-release` (מעלה ל-TestFlight). בכל גרסה חדשה לעדכן `MARKETING_VERSION` ב-`ios/App/App.xcodeproj/project.pbxproj`.
