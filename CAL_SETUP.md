# Cal.com Setup Guide

This guide will walk you through setting up Cal.com for your Providence Legal Co. website to enable automatic meeting scheduling with Google Meet links and calendar invites.

## What is Cal.com?

Cal.com is a free, open-source scheduling platform that integrates with Google Calendar to provide:
- ✅ Automatic Google Meet link generation
- ✅ Calendar invites sent to both you and your clients
- ✅ Professional booking interface
- ✅ Customizable availability
- ✅ Email notifications and reminders

## Step 1: Create a Cal.com Account

1. Go to [https://cal.com/signup](https://cal.com/signup)
2. Click **"Sign up with Google"** (recommended for easy calendar integration)
3. Choose your Google account
4. Grant Cal.com permission to access your calendar
5. Complete your profile:
   - **Name**: Your name or firm name
   - **Username**: Choose a unique username (e.g., `providence-legal`)
   - **Time zone**: Select your timezone (Europe/Paris)

## Step 2: Connect Your Google Calendar

1. After signing up, you'll be prompted to connect your calendar
2. If not, go to **Settings** > **Calendars**
3. Click **"Connect a calendar"**
4. Select **Google Calendar**
5. Choose which calendar to use for bookings (usually your primary calendar)
6. Grant the necessary permissions

## Step 3: Create an Event Type

1. Go to **Event Types** in the sidebar
2. Click **"New Event Type"**
3. Configure your consultation event:
   - **Event name**: "Legal Consultation" or "Initial Consultation"
   - **URL slug**: `consultation` (this creates: cal.com/your-username/consultation)
   - **Duration**: 30 minutes
   - **Location**: Google Meet (it will auto-generate Meet links)
   - **Description**: Add a description for clients about what to expect

4. Set your **availability**:
   - Click on the event type you just created
   - Go to **Availability** tab
   - Set your working hours (e.g., Mon-Fri, 9 AM - 5 PM)
   - Add any buffer time between meetings if needed

5. **Customize booking questions** (optional):
   - Go to **Booking Questions** tab
   - Add custom questions like "What legal matter would you like to discuss?"
   - This helps you prepare for consultations

6. Click **"Save"** or **"Update"**

## Step 4: Get Your Embed Code

1. Go to your event type (e.g., "Legal Consultation")
2. Click the **"Embed"** button or tab
3. Choose **"Inline Embed"** (this embeds the calendar directly in your website)
4. Copy the **username** and **event slug** - you'll need these

Your Cal.com booking link will look like:
```
https://cal.com/your-username/consultation
```

## Step 5: Add to Your Website

1. Open your `.env.local` file in your project
2. Add the following environment variables:

```env
# Cal.com Configuration
NEXT_PUBLIC_CALCOM_USERNAME=your-username
NEXT_PUBLIC_CALCOM_EVENT=consultation
```

Replace `your-username` with your actual Cal.com username and `consultation` with your event slug.

3. **Restart your development server**:
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Step 6: Test Your Booking System

1. Visit your website
2. Click the floating calendar button
3. The Cal.com booking interface should appear
4. Try booking a test appointment
5. Check that:
   - ✅ You receive a calendar invite
   - ✅ The event appears in your Google Calendar
   - ✅ A Google Meet link is included
   - ✅ You receive email notifications

## Customization Options

### Branding
- Go to **Settings** > **Appearance**
- Upload your logo
- Customize colors to match your website
- Add custom CSS if needed

### Notifications
- Go to **Settings** > **Notifications**
- Configure email reminders for yourself and clients
- Set up SMS notifications (optional, may require paid plan)

### Payment Integration (Optional)
- If you want to charge for consultations
- Go to **Settings** > **Billing**
- Connect Stripe or PayPal

### Team Scheduling (Optional)
- If you have multiple attorneys
- Upgrade to a team plan
- Add team members and set round-robin or collective scheduling

## Pricing

- **Free Plan**: Perfect for getting started
  - Unlimited event types
  - Google Calendar integration
  - Google Meet integration
  - Basic features

- **Paid Plans**: Starting at $12/month
  - Remove Cal.com branding
  - Advanced features
  - Priority support

For a law firm, the **free plan is usually sufficient** to get started!

## Troubleshooting

### Booking interface doesn't appear
- Check that you've added the environment variables to `.env.local`
- Restart your development server
- Verify your Cal.com username and event slug are correct

### Google Meet links not generating
- Ensure you selected "Google Meet" as the location in your event type
- Check that Cal.com has permission to access your Google Calendar
- Try disconnecting and reconnecting your Google Calendar

### Calendar events not appearing
- Verify your Google Calendar is connected in Cal.com settings
- Check that you've selected the correct calendar for bookings
- Ensure Cal.com has the necessary permissions

### Clients not receiving invites
- Check your event type settings
- Ensure email notifications are enabled
- Verify the client's email address is correct

## Support

- **Cal.com Documentation**: [https://cal.com/docs](https://cal.com/docs)
- **Community Support**: [https://cal.com/slack](https://cal.com/slack)
- **Video Tutorials**: Search "Cal.com tutorial" on YouTube

---

**That's it!** Your meeting scheduling system is now fully automated with Google Meet links and calendar invites. Clients can book consultations 24/7, and everything is handled automatically! 🎉
