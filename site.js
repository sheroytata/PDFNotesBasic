(function () {
  'use strict';
  const config = window.PDF_NOTES_CONFIG || {};
  const hostname = window.location.hostname || '';
  const derivedOwner = hostname.endsWith('.github.io') ? hostname.slice(0, -'.github.io'.length) : '';
  const owner = (config.githubUsername || derivedOwner).trim();
  const repo = (config.repository || 'PDFNotesBasic').trim();
  const repoUrl = owner ? `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}` : '';
  const email = (config.supportEmail || '').trim();
  const appStore = (config.appStoreURL || '').trim();

  document.querySelectorAll('[data-github-link]').forEach(function (link) {
    const suffix = link.getAttribute('data-github-link') || '';
    if (repoUrl) {
      link.setAttribute('href', repoUrl + suffix);
    } else {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
      link.setAttribute('title', 'Available after publishing at GitHub Pages');
      link.classList.add('disabled-link');
    }
  });
  document.querySelectorAll('[data-support-email]').forEach(function (element) {
    if (email && /.+@.+\..+/.test(email)) {
      element.textContent = email;
      if (element.tagName === 'A') element.setAttribute('href', 'mailto:' + email);
    } else {
      element.textContent = 'Support email not configured yet';
      if (element.tagName === 'A') element.removeAttribute('href');
      element.classList.add('needs-setup');
    }
  });
  document.querySelectorAll('[data-appstore-link]').forEach(function (element) {
    if (appStore && /^https:\/\//i.test(appStore)) {
      element.setAttribute('href', appStore);
      element.hidden = false;
    } else {
      element.hidden = true;
    }
  });
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
