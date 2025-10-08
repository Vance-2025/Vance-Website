# Cloudinary Image Migration Guide

## Step 1: Set up Cloudinary Account
1. Go to https://cloudinary.com/ and create a free account
2. In your dashboard, note down:
   - Cloud Name
   - API Key  
   - API Secret

## Step 2: Configure Credentials
1. Edit `cloudinary-config.js` and replace the placeholder values with your actual credentials:
   ```javascript
   module.exports = {
     cloud_name: 'your-actual-cloud-name',
     api_key: 'your-actual-api-key',
     api_secret: 'your-actual-api-secret'
   };
   ```

## Step 3: Install Dependencies and Upload Images
```bash
npm install cloudinary
npm run upload-images
```

## Step 4: Update Components
After uploading, you'll get a `cloudinary-images.json` file with all the URLs. 
I'll update all your component files to use these Cloudinary URLs.

## Step 5: Remove Local Images
Once everything is working, we'll remove the local images from `public/images/` to reduce repository size.

## Benefits:
- ✅ Reduced GitHub repository size
- ✅ Faster website load times (CDN delivery)
- ✅ Automatic image optimization
- ✅ Better performance globally
- ✅ Centralized image management

## Images to be uploaded:
- 1.png, 2.png, 3.png (Social media images)
- Ellipse 99(1).png (Background overlay)
- footer.png (Wolf character)
- Group 123.png (Process flow diagram)
- Group 127.png (Hero background)
- image copy.png (Curved background)
- imagecopy2.png (Curved background)
- Mask group.png (Wolf character)
- ournetwork.png (Network graphic)
- untitled-0.png (Mobile interface)
- Vector.png (Twitter icon)
- whatsapp-icon.png (WhatsApp icon)
- whatsappbutton-removebg-preview.png (WhatsApp button)
- wolf3.png (Wolf character)
