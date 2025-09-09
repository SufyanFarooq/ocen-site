# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_bhu3fx5`)

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Note down your **Template ID** (e.g., `template_contact`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Environment Variables
Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Form
1. Restart your development server
2. Fill out the contact form
3. Check your email for the message

## Template Variables Used
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company
- `{{phone}}` - User's phone number
- `{{message}}` - User's message/query
- `{{to_email}}` - Your email (yiwusalahtrading@gmail.com)
- `{{reply_to}}` - User's email for replies
