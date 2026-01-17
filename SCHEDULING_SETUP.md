# Meeting Scheduling Setup Guide

This guide will walk you through setting up the Google Calendar API integration for the meeting scheduling feature on your Providence Legal Co. website.

## Overview

The scheduling feature allows clients to:
- Select a date and time for a consultation
- Provide their contact information
- Automatically receive a Google Calendar invite with a Google Meet link
- Have the meeting appear in both their calendar and your firm's calendar

## Prerequisites

- A Google account (free Gmail account works fine)
- Access to Google Cloud Console
- Admin access to your website's environment variables

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click on the project dropdown at the top of the page
4. Click **"New Project"**
5. Enter a project name (e.g., "Providence Legal Scheduling")
6. Click **"Create"**
7. Wait for the project to be created (this takes a few seconds)

## Step 2: Enable Google Calendar API

1. Make sure your new project is selected in the project dropdown
2. Go to **"APIs & Services"** > **"Library"** (use the left sidebar menu)
3. Search for **"Google Calendar API"**
4. Click on **"Google Calendar API"** in the results
5. Click the **"Enable"** button
6. Wait for the API to be enabled

## Step 3: Create a Service Account

1. Go to **"APIs & Services"** > **"Credentials"**
2. Click **"Create Credentials"** at the top
3. Select **"Service Account"**
4. Fill in the service account details:
   - **Service account name**: `calendar-scheduler` (or any name you prefer)
   - **Service account ID**: This will auto-populate
   - **Description**: "Service account for meeting scheduling"
5. Click **"Create and Continue"**
6. For **"Grant this service account access to project"**:
   - Skip this step by clicking **"Continue"**
7. For **"Grant users access to this service account"**:
   - Skip this step by clicking **"Done"**

## Step 4: Create and Download Service Account Key

1. On the **Credentials** page, you should see your new service account listed under **"Service Accounts"**
2. Click on the service account email (it looks like `calendar-scheduler@your-project.iam.gserviceaccount.com`)
3. Go to the **"Keys"** tab
4. Click **"Add Key"** > **"Create new key"**
5. Select **"JSON"** as the key type
6. Click **"Create"**
7. A JSON file will be downloaded to your computer - **KEEP THIS FILE SAFE AND SECURE!**
8. **Important**: Copy the service account email address (e.g., `calendar-scheduler@your-project.iam.gserviceaccount.com`) - you'll need it in the next step

## Step 5: Share Your Calendar with the Service Account

1. Open [Google Calendar](https://calendar.google.com/)
2. On the left sidebar, find **"My calendars"**
3. Hover over your main calendar and click the three dots (⋮)
4. Click **"Settings and sharing"**
5. Scroll down to **"Share with specific people or groups"**
6. Click **"Add people and groups"**
7. Paste the service account email address you copied in Step 4
8. Set permissions to **"Make changes to events"**
9. Click **"Send"**

> **Note**: You can also create a dedicated calendar for meetings and share that instead of your main calendar.

## Step 6: Configure Environment Variables

1. Open the downloaded JSON key file from Step 4 in a text editor
2. Copy the **entire contents** of the file (it should be a single line of JSON)
3. Create a `.env.local` file in your project root (if it doesn't exist)
4. Add the following environment variables:

```env
# Google Calendar Service Account Credentials
# Paste the entire JSON contents as a single line
GOOGLE_CALENDAR_CREDENTIALS={"type":"service_account","project_id":"...","private_key_id":"..."}

# Your email address (where meeting invites will be sent)
ADMIN_EMAIL=your-email@example.com

# Calendar ID (use 'primary' for your main calendar, or the calendar ID if using a dedicated calendar)
CALENDAR_ID=primary

# Your timezone (IANA timezone format)
# Examples: Europe/Paris, America/New_York, Asia/Tokyo
NEXT_PUBLIC_TIMEZONE=Europe/Paris
```

### Finding Your Calendar ID (Optional)

If you created a dedicated calendar for meetings:
1. Go to [Google Calendar](https://calendar.google.com/)
2. Find your calendar in the left sidebar
3. Click the three dots (⋮) > **"Settings and sharing"**
4. Scroll down to **"Integrate calendar"**
5. Copy the **"Calendar ID"** (it looks like an email address)
6. Use this instead of `primary` in your `.env.local` file

## Step 7: Restart Your Development Server

1. Stop your current development server (Ctrl+C in the terminal)
2. Restart it with `npm run dev`
3. The scheduling feature should now be fully functional!

## Testing the Integration

1. Visit your website
2. Click the floating calendar button on the left side
3. Select a date and time
4. Fill out the contact form
5. Submit the booking
6. Check your Google Calendar - you should see the new event with a Google Meet link!

## Customizing Business Hours

You can customize when meetings can be booked by editing `lib/schedule-config.ts`:

```typescript
export const scheduleConfig = {
  // Business hours (24-hour format)
  businessHours: {
    start: 9,  // 9 AM
    end: 17,   // 5 PM
  },
  
  // Working days (0 = Sunday, 6 = Saturday)
  workingDays: [1, 2, 3, 4, 5], // Monday to Friday
  
  // Meeting duration in minutes
  meetingDuration: 30,
  
  // How many days in advance can meetings be booked
  maxDaysInAdvance: 30,
};
```

## Troubleshooting

### "Calendar service is not configured" error
- Make sure you've added the `GOOGLE_CALENDAR_CREDENTIALS` to your `.env.local` file
- Verify the JSON is valid (no extra spaces or line breaks)
- Restart your development server

### No time slots available
- Check that you've shared your calendar with the service account
- Verify the service account email is correct
- Make sure the date you selected is a working day (Monday-Friday by default)

### Calendar events not appearing
- Confirm you've enabled the Google Calendar API in Google Cloud Console
- Check that the service account has "Make changes to events" permission on your calendar
- Verify the `CALENDAR_ID` in your `.env.local` is correct

### Google Meet link not generated
- This is a known limitation with service accounts - Google Meet links may not always be generated
- As an alternative, you can use other video conferencing tools or add a manual meeting link in the event description

## Security Notes

- **Never commit your `.env.local` file to version control** (it's already in `.gitignore`)
- Keep your service account JSON key file secure
- Don't share your credentials publicly
- For production deployment, use your hosting platform's environment variable settings (e.g., Vercel, Netlify, etc.)

## Production Deployment

When deploying to production:

1. Add the same environment variables to your hosting platform's environment settings
2. Make sure to use the **same service account credentials**
3. Test the booking flow on your production site
4. Monitor your Google Cloud Console for API usage (you have a generous free tier)

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Check your server logs for API errors
3. Verify all environment variables are set correctly
4. Ensure the Google Calendar API is enabled in your Google Cloud project

---

**Congratulations!** Your meeting scheduling feature is now set up and ready to use. Clients can now book consultations directly from your website! 🎉
