# Email Setup Instructions

## Setting up Gmail for the Contact Form

To make the contact form functional, you need to configure Gmail SMTP settings:

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Select **Security**
3. Under "Signing in to Google," enable **2-Step Verification**

### Step 2: Generate App Password
1. Go to Google Account settings > Security
2. Under "Signing in to Google," select **App passwords**
3. Select **Mail** and your device
4. Google will generate a 16-character password
5. Copy this password (you'll use it as `GMAIL_APP_PASSWORD`)

### Step 3: Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your credentials:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

### Step 4: Update Business Email
In `app/api/contact/route.ts`, update the `to` field to your business email:
```typescript
to: 'your-business-email@gmail.com',
```

## How it Works

When a user submits the contact form:
1. **Validation**: Server validates required fields (name, email, message)
2. **Business Notification**: Sends a detailed email to your business email with all form data
3. **Auto-Reply**: Sends a professional thank-you email to the customer
4. **Status Update**: Updates the form UI to show success/error status

## Email Templates

The system sends two emails:
- **To Business**: Contains all form data in a professional format
- **To Customer**: Professional auto-reply with next steps and contact information

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular Gmail passwords
- The API route validates all input data
- Environment variables are only accessible server-side

## Testing

To test the email functionality:
1. Set up your environment variables
2. Fill out the contact form on your website
3. Check both your business email and the test email address for messages
