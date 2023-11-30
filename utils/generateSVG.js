// utils/generateSVG.js
function generateSVG(data) {
    return `
  <svg width="300" height="200">
    <rect width="100%" height="100%" fill="${data.shapeColor}" />
    <text x="50%" y="50%" font-size="30" fill="${data.textColor}" text-anchor="middle">${data.text}</text>
  </svg>
    `;
  }
  
  // Exporting the function
  module.exports = generateSVG;
  