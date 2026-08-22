const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');

function updateReel3Link(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Find Reel 3 block
  const reel3Start = html.indexOf('<!-- Reel 3: Professional Hair Masterclass -->');
  const sectionEnd = html.indexOf('<!-- ==========================================\n       7. GERÇEK MÜŞTERİ YORUMLARI');

  if (reel3Start !== -1) {
    const endPos = sectionEnd !== -1 ? sectionEnd : html.indexOf('</section>', reel3Start);
    let reel3Html = html.substring(reel3Start, endPos);

    // Replace the profili gör link inside reel 3
    reel3Html = reel3Html.replace(
      '<a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="reel-view-profile-btn" data-i18n="insta_view_profile">Profili Gör</a>',
      '<a href="https://www.instagram.com/reel/DYZ5qG3M0U3/" target="_blank" rel="noopener noreferrer" class="reel-view-profile-btn" data-i18n="insta_view_profile">Profili Gör</a>'
    );
    // Also update the see more link in reel 3
    reel3Html = reel3Html.replace(
      '<a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="reel-see-more-link" data-i18n="insta_see_more">',
      '<a href="https://www.instagram.com/reel/DYZ5qG3M0U3/" target="_blank" rel="noopener noreferrer" class="reel-see-more-link" data-i18n="insta_see_more">'
    );

    html = html.substring(0, reel3Start) + reel3Html + html.substring(endPos);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Updated Reel 3 link in', filePath);
  }
}

updateReel3Link(indexPath);
updateReel3Link(publicIndexPath);
