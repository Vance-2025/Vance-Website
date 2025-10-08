# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Cloudinary Base URL for images
NEXT_PUBLIC_CLOUDINARY_BASE_URL=https://res.cloudinary.com/your_cloud_name/image/upload/v1759960041/vance-website/vance-website
```

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - your credentials will NOT be committed to Git
- ✅ All Cloudinary URLs now use environment variables
- ✅ No hardcoded credentials in the codebase
- ✅ Centralized image URL management in `lib/cloudinary.ts`

## Getting Your Cloudinary Credentials

1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Copy your:
   - Cloud Name
   - API Key  
   - API Secret
3. Update the `.env.local` file with your actual credentials

## Development

After setting up `.env.local`, restart your development server:

```bash
npm run dev
```

The application will now use secure environment variables for all Cloudinary operations.
