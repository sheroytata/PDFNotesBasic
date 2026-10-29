# PDF Notes Basic — Website and Support

A static website for **PDF Notes Basic** with a public GitHub Issues tracker.

**This repository is intended for public website files only. Do not upload the private Swift Playgrounds project, paid app code, private PDFs, or sensitive notes.**

## Setup (using GitHub's website)

1. Open your existing repository: https://github.com/sheroytata/PDFNotesBasic . Make sure it is **Public**, because the website and issue forms need to be publicly accessible.
2. Upload the **contents** of this ZIP to the root of the existing repository, not into a subfolder. GitHub **Add file → Upload files** can upload files; to preserve `.github/ISSUE_TEMPLATE/`, using git on a computer is simplest. If uploading in the browser, create these YAML files individually through **Add file → Create new file** with the exact paths shown in the package. If a file already exists in the repository, edit/replace it rather than creating a duplicate.
3. The GitHub username and repository name are already set in `site-config.js`. No support email is displayed; support is through GitHub Issues. Set `appStoreURL` when the App Store listing is live.
4. **Important:** The privacy page now states that the app does not collect user data, accesses only user-chosen documents, and has no direct cloud access, based on the developer's description. Confirm these statements against the released build and App Store privacy disclosures before publication.
5. In GitHub open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**; select **main** and **/(root)**; click **Save**.
6. After enabling GitHub Pages, visit `https://sheroytata.github.io/PDFNotesBasic/`, `https://sheroytata.github.io/PDFNotesBasic/support.html`, and `https://sheroytata.github.io/PDFNotesBasic/privacy.html`.
7. Verify **Settings → General → Features → Issues** is enabled, and open `https://github.com/sheroytata/PDFNotesBasic/issues/new/choose` to test the bug and feature forms.
8. Optional: enable **Discussions** under **Settings → General → Features** for general questions, and link it from the support page if desired.
9. Enter the published URLs into App Store Connect. The support page offers public GitHub Issues rather than an email address. Apple's support-link review may require an additional user contact method; confirm that this approach meets Apple's requirements.

## App Store Connect URLs (once GitHub Pages is published)

- **Support:** `https://sheroytata.github.io/PDFNotesBasic/support.html`
- **Marketing (optional):** `https://sheroytata.github.io/PDFNotesBasic/`
- **Privacy Policy:** `https://sheroytata.github.io/PDFNotesBasic/privacy.html` (only after you finalize the draft)
- **Public bug and feature reports:** `https://github.com/sheroytata/PDFNotesBasic/issues/new/choose`

## Editing and customizing the site

- `index.html`: homepage and app features
- `support.html`: GitHub Issues links and FAQs (no public email address)
- `privacy.html`: privacy policy based on the developer-provided data practices; verify against the released app
- `styles.css`: responsive dark theme
- `site-config.js`: username, repository, optional App Store URL
- `site.js`: sets GitHub and support links dynamically
- `assets/`: exact user-provided app-icon PNG and a small site favicon
- `.github/ISSUE_TEMPLATE/`: GitHub issue forms
- `.nojekyll`: tells GitHub Pages to publish plain static files

## Optional: update the existing repository using git on a computer

```bash
git clone https://github.com/sheroytata/PDFNotesBasic.git
cd PDFNotesBasic
# Copy all contents of this downloaded folder here, INCLUDING .github and .nojekyll
git add -A
git commit -m "Update PDF Notes Basic support website for PDFNotesBasic"
git push origin main
```

## Privacy and safe issue reporting

- GitHub Issues are **public** and require sign-in to GitHub.
- Support requests are public GitHub Issues and require a GitHub account. No email address is displayed.
- Do not publish screenshots of personal notes, proprietary technical documents, or other private material without reviewing them first.
- This website does not load third-party analytics scripts, embed social trackers, or submit forms of its own. Its outbound links lead to GitHub and, when configured, the App Store.

## Public repository and website

- Repository: https://github.com/sheroytata/PDFNotesBasic
- Website: https://sheroytata.github.io/PDFNotesBasic/
- Issue forms: https://github.com/sheroytata/PDFNotesBasic/issues/new/choose

These links will work after the public repository is configured and GitHub Pages is published.
