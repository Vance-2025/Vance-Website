const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const config = require('./cloudinary-config');

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret
});

// List of images to upload
const imagesToUpload = [
  '1.png',
  '2.png', 
  '3.png',
  'Ellipse 99(1).png',
  'footer.png',
  'Group 123.png',
  'Group 127.png',
  'image copy.png',
  'imagecopy2.png',
  'Mask group.png',
  'ournetwork.png',
  'untitled-0.png',
  'Vector.png',
  'whatsapp-icon.png',
  'whatsappbutton-removebg-preview.png',
  'wolf3.png'
];

// Upload function
async function uploadImages() {
  const uploadedImages = {};
  
  for (const imageName of imagesToUpload) {
    try {
      const imagePath = path.join(__dirname, 'public', 'images', imageName);
      
      if (!fs.existsSync(imagePath)) {
        console.log(`⚠️  Image not found: ${imageName}`);
        continue;
      }
      
      console.log(`📤 Uploading ${imageName}...`);
      
      const result = await cloudinary.uploader.upload(imagePath, {
        public_id: `vance-website/${imageName.replace(/\s+/g, '-').replace(/[()]/g, '')}`,
        folder: 'vance-website',
        resource_type: 'auto'
      });
      
      uploadedImages[imageName] = result.secure_url;
      console.log(`✅ Uploaded ${imageName}: ${result.secure_url}`);
      
    } catch (error) {
      console.error(`❌ Error uploading ${imageName}:`, error.message);
    }
  }
  
  // Save the mapping to a JSON file
  fs.writeFileSync(
    path.join(__dirname, 'cloudinary-images.json'),
    JSON.stringify(uploadedImages, null, 2)
  );
  
  console.log('\n🎉 Upload complete! Check cloudinary-images.json for all URLs');
  console.log('\n📋 Cloudinary URLs:');
  Object.entries(uploadedImages).forEach(([name, url]) => {
    console.log(`${name}: ${url}`);
  });
}

// Run the upload
uploadImages().catch(console.error);
