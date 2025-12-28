# Nodemailer Setup Instructions

Your contact form now uses Nodemailer to send emails directly to developmentspike@gmail.com

## Setup Steps

### 1. Create Gmail App Password

Since Gmail requires App Passwords for third-party apps:

1. Go to your Google Account: https://myaccount.google.com
2. Click on **Security** in the left menu
3. Enable **2-Step Verification** if not already enabled
4. Go to **App passwords** (https://myaccount.google.com/apppasswords)
5. Select app: **Mail**
6. Select device: **Other** (enter "Nuxt Website")
7. Click **Generate**
8. Copy the 16-character password (no spaces)

### 2. Create Environment File

Create a `.env` file in your project root:

```bash
cd "/home/marius/Documents/my Projects/My Ad"
cp .env.example .env
```

### 3. Configure Email Settings

Edit the `.env` file:

```env
GMAIL_USER=developmentspike@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password-here
```

Replace:
- `developmentspike@gmail.com` with the Gmail account that will SEND emails
- `your-16-character-app-password-here` with the App Password from Step 1

**Note:** The emails will always be sent TO `developmentspike@gmail.com` (hardcoded in the API)

### 4. Add .env to .gitignore

Make sure `.env` is in your `.gitignore` file to keep credentials secure:

```bash
echo ".env" >> .gitignore
```

### 5. Restart Your Development Server

```bash
npm run dev
```

## How It Works

1. User fills out contact form on your website
2. Frontend sends data to `/api/send-email` endpoint
3. Server-side API uses Nodemailer to send email via Gmail SMTP
4. Email arrives at developmentspike@gmail.com with formatted content

## Email Format

Recipients will receive:
- **Subject:** "New Contact Form Submission from [Name]"
- **Body:** Formatted HTML with sender's name, email, phone, and message

## Security

✅ **Secure:** Credentials stored in .env file (not in code)
✅ **Private:** .env file excluded from git
✅ **App Password:** Uses secure App Password (not main password)
✅ **Server-side:** Email sending happens on server, not client

## Troubleshooting

**"Failed to send email":**
- Check that .env file exists and has correct credentials
- Verify App Password is correct (16 characters, no spaces)
- Ensure 2-Step Verification is enabled on Gmail account
- Restart the development server after creating .env

**Check server logs:**
```bash
# Look for error messages in terminal where you ran npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Click "Send Email"
3. Check developmentspike@gmail.com inbox
4. Email should arrive within seconds

## Free Forever

Gmail allows up to 500 emails per day for free - more than enough for most contact forms!
