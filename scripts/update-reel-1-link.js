const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');

function updateReelLink(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Find Reel 1 block
  const reel1Start = html.indexOf('<!-- Reel 1: Bej Blonde -->');
  const reel2Start = html.indexOf('<!-- Reel 2: Ombre & Sombre -->');

  if (reel1Start !== -1 && reel2Start !== -1) {
    let reel1Html = html.substring(reel1Start, reel2Start);
    // Replace the profili gör link inside reel 1
    reel1Html = reel1Html.replace(
      '<a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="reel-view-profile-btn" data-i18n="insta_view_profile">Profili Gör</a>',
      '<a href="https://www.instagram.com/reel/Db6Vh2wsFoZ/" target="_blank" rel="noopener noreferrer" class="reel-view-profile-btn" data-i18n="insta_view_profile">Profili Gör</a>'
    );
    // Also update the see more link in reel 1
    reel1Html = reel1Html.replace(
      '<a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="reel-see-more-link" data-i18n="insta_see_more">',
      '<a href="https://www.instagram.com/reel/Db6Vh2wsFoZ/" target="_blank" rel="noopener noreferrer" class="reel-see-more-link" data-i18n="insta_see_more">'
    );

    html = html.substring(0, reel1Start) + reel1Html + html.substring(reel2Start);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Updated Reel 1 link in', filePath);
  }
}

updateReelLink(indexPath);
updateReelLink(publicIndexPath);
