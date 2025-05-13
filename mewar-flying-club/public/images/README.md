# Image Requirements for Mewar Flying Club Website

This directory should contain all the images required for the Mewar Flying Club website. Below is a list of required images:

## Required Images

### Background Elements
- `engine-part.png` - Aircraft engine component illustration
- `blueprint.png` - Technical drawing or blueprint of aircraft components
- `wing-part.png` - Aircraft wing illustration
- `blueprint-element.png` - Small blueprint technical element
- `blueprint-corner.png` - Decorative blueprint corner element
- `small-plane.png` - Small aircraft silhouette or illustration
- `hero-aircraft.png` - Main hero image of an aircraft or maintenance scene

### Program Details
- `curriculum.jpg` - Image representing curriculum or coursework
- `eligibility.jpg` - Image representing student eligibility
- `duration.jpg` - Image representing program duration
- `prospects.jpg` - Image representing career prospects

### Facilities
- `hangar.jpg` - Photo of an aircraft maintenance hangar
- `workshop.jpg` - Photo of a technical workshop
- `simulation.jpg` - Photo of a simulation or training lab
- `library.jpg` - Photo of a technical library
- `classroom.jpg` - Photo of a modern classroom

### Testimonials
- `testimonial-1.jpg` - Headshot of first testimonial person
- `testimonial-2.jpg` - Headshot of second testimonial person
- `testimonial-3.jpg` - Headshot of third testimonial person

## Temporary Solution for Development

For development and testing purposes, you can:

1. Use placeholder image services:
   - Add `https://placehold.co/600x400?text=Hero+Aircraft` to image src
   - Or use: `https://via.placeholder.com/600x400/001845/FFFFFF?text=Aircraft+Maintenance`

2. Download royalty-free aviation images from sites like:
   - Unsplash: https://unsplash.com/s/photos/aircraft-maintenance
   - Pexels: https://www.pexels.com/search/aviation/
   - Pixabay: https://pixabay.com/images/search/aircraft/

3. Generate aviation-themed images with AI tools

## Implementation for Placeholders

Here's a quick implementation approach for development:

```jsx
// Option 1: Use external placeholder service
<img src="https://placehold.co/600x400?text=Aircraft+Maintenance" alt="Aircraft Maintenance" />

// Option 2: Create local placeholder div with background color
<div className="w-full h-[300px] bg-slate-800 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
  Aircraft Maintenance Image
</div>

// Option 3: Using CSS background with fallback color
<div 
  className="w-full h-[400px] bg-slate-800 bg-no-repeat bg-cover bg-center rounded-lg" 
  style={{ backgroundImage: "url('/images/hangar.jpg')" }}
>
  <div className="flex items-center justify-center h-full text-white text-xl font-semibold">
    Maintenance Hangar
  </div>
</div>
```

Remember to replace these placeholder solutions with actual images before deployment. 