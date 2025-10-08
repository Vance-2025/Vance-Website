// Cloudinary utility functions for secure image URL management
const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || 'https://res.cloudinary.com/doyhawzj1/image/upload/v1759960041/vance-website/vance-website';

// Image URL mappings - centralized location for all image URLs
export const CLOUDINARY_IMAGES = {
  // Hero Section
  GROUP_127: `${CLOUDINARY_BASE_URL}/Group-127.png.png`,
  MASK_GROUP: `${CLOUDINARY_BASE_URL}/Mask-group.png.png`,
  
  // Brand Identity
  IMAGE_COPY_2: `${CLOUDINARY_BASE_URL}/imagecopy2.png.png`,
  OUR_NETWORK: `${CLOUDINARY_BASE_URL}/ournetwork.png.png`,
  
  // Process Flow
  IMAGE_COPY: `${CLOUDINARY_BASE_URL}/image-copy.png.png`,
  GROUP_123: `${CLOUDINARY_BASE_URL}/Group-123.png.png`,
  
  // Vance Intro
  WOLF3: `${CLOUDINARY_BASE_URL}/wolf3.png.png`,
  
  // Press Media
  ELLIPSE_99: `${CLOUDINARY_BASE_URL}/Ellipse-991.png.png`,
  UNTITLED_0: `${CLOUDINARY_BASE_URL}/untitled-0.png.png`,
  
  // Social Media
  SOCIAL_1: `${CLOUDINARY_BASE_URL}/1.png.png`,
  SOCIAL_2: `${CLOUDINARY_BASE_URL}/2.png.png`,
  SOCIAL_3: `${CLOUDINARY_BASE_URL}/3.png.png`,
  WHATSAPP_BUTTON: `${CLOUDINARY_BASE_URL}/whatsappbutton-removebg-preview.png.png`,
  
  // Icons
  WHATSAPP_ICON: `${CLOUDINARY_BASE_URL}/whatsapp-icon.png.png`,
  VECTOR_X: `${CLOUDINARY_BASE_URL}/Vector.png.png`,
  
  // Footer
  FOOTER_IMAGE: `${CLOUDINARY_BASE_URL}/footer.png.png`,
} as const;

// Helper function to get image URL
export const getCloudinaryImage = (imageKey: keyof typeof CLOUDINARY_IMAGES): string => {
  return CLOUDINARY_IMAGES[imageKey];
};

// Helper function to get image URL with custom path
export const getCloudinaryImageUrl = (imagePath: string): string => {
  return `${CLOUDINARY_BASE_URL}/${imagePath}`;
};
