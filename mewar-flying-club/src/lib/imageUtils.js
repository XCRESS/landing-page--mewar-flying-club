/**
 * Utility functions for handling images
 */

// Collection of curated aviation education images from free stock sites
const aviationImageCollection = {
  // Aircraft and aviation images
  'hero-aircraft': 'https://images.unsplash.com/photo-1608023136037-626dad6c6188?q=80&w=1000&auto=format&fit=crop',
  'small-plane': 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1000&auto=format&fit=crop',
  'engine-part': 'https://images.unsplash.com/photo-1629324572632-7080b05cb4a4?q=80&w=1000&auto=format&fit=crop',
  'wing-part': 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=1000&auto=format&fit=crop',
  'blueprint': 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop',
  'blueprint-element': 'https://images.unsplash.com/photo-1581091211315-5e7b2a492ded?q=80&w=1000&auto=format&fit=crop',
  'blueprint-corner': 'https://img.freepik.com/free-vector/blueprint-background-with-airplane-silhouette_1048-8311.jpg?w=996&t=st=1707318661~exp=1707319261~hmac=9e5ad9e39df0bef9a686c0c3ac9e1306d05dff94e4fcc135510f0ff06b67cd6a',
  
  // Facilities
  'hangar': 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000&auto=format&fit=crop',
  'workshop': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
  'simulation': 'https://images.unsplash.com/photo-1580800434930-e72c02bb7bed?q=80&w=1000&auto=format&fit=crop',
  'library': 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop',
  'classroom': 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop',
  'engine-test': 'https://images.unsplash.com/photo-1605255072222-63c063f54d76?q=80&w=1000&auto=format&fit=crop',
  
  // Program details
  'curriculum': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  'eligibility': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
  'duration': 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000&auto=format&fit=crop',
  'prospects': 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop',
  
  // Mewar University and Club images
  'university-campus': 'https://www.mewaruniversity.org/images/banner.jpg',
  'university-logo': '/images/mewar-university-logo.jpg',
  'club-logo': '/images/mewar-flying-club-logo.jpg',
};

// Mewar Flying Club brand colors from the logo
export const brandColors = {
  primary: '#005b9f', // Main blue from logo
  secondary: '#003b73', // Darker blue from logo
  accent: '#ffffff',  // White
  light: '#e6f2ff',   // Light blue for backgrounds
  text: {
    dark: '#002147',  // Very dark blue for text
    medium: '#00385a', // Medium blue for secondary text
    light: '#ffffff',  // White text on dark backgrounds
  }
};

/**
 * Extract image key from path
 * @param {string} imagePath - Path like '/images/hangar.jpg'
 * @returns {string} - Key like 'hangar'
 */
const getImageKey = (imagePath) => {
  if (!imagePath) return '';
  // Extract the filename without extension
  const match = imagePath.match(/\/images\/([^/]+)\.[a-zA-Z]+$/);
  return match ? match[1] : '';
};

/**
 * Get an image URL from online collection or fallback to a placeholder
 * 
 * @param {string} imagePath - Local path to the image (e.g., '/images/hangar.jpg')
 * @param {string} placeholderText - Text to show on placeholder
 * @param {string} bgColor - Background color for placeholder (hex without #)
 * @param {string} textColor - Text color for placeholder (hex without #)
 * @param {number} width - Width of placeholder
 * @param {number} height - Height of placeholder
 * @return {string} The image URL (online or placeholder)
 */
export const getImageWithFallback = (
  imagePath, 
  placeholderText = 'Image', 
  bgColor = '004080', 
  textColor = 'FFFFFF',
  width = 800,
  height = 600
) => {
  if (!imagePath) {
    const encodedText = encodeURIComponent(placeholderText);
    return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
  }
  
  const imageKey = getImageKey(imagePath);
  
  // Return the online image if available
  if (imageKey && aviationImageCollection[imageKey]) {
    return aviationImageCollection[imageKey];
  }
  
  // Try to return the local file if it's a direct path
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // Fallback to placeholder
  const encodedText = encodeURIComponent(placeholderText);
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
};

/**
 * Generate CSS style for background image with fallback
 * 
 * @param {string} imagePath - Path to the image
 * @param {string} placeholderText - Text for placeholder
 * @return {object} Style object for React element
 */
export const backgroundImageStyle = (imagePath, placeholderText) => {
  return {
    backgroundImage: `url('${getImageWithFallback(imagePath, placeholderText)}')`,
  };
};

/**
 * Create placeholder component properties
 * 
 * @param {string} imagePath - Path to the image
 * @param {string} placeholderText - Text for placeholder
 * @param {string} altText - Alt text for the image
 * @return {object} Props for image component
 */
export const getImageProps = (imagePath, placeholderText, altText = '') => {
  return {
    src: getImageWithFallback(imagePath, placeholderText),
    alt: altText || placeholderText,
    loading: 'lazy',
  };
}; 