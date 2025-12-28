import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !message) {
      return {
        success: false,
        error: 'Name and message are required'
      }
    }

    // Validate at least one contact method
    if (!email && !phone) {
      return {
        success: false,
        error: 'Please provide at least an email address or phone number'
      }
    }

    // Create transporter with Gmail
    // NOTE: You need to set up environment variables for security
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
      }
    })

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      dateStyle: 'full',
      timeStyle: 'long'
    })

    // Email content
    const mailOptions = {
      from: `"DevelopmentSpike Website" <${process.env.GMAIL_USER || 'your-email@gmail.com'}>`,
      to: 'developmentspike@gmail.com',
      replyTo: email || undefined,
      subject: `🚀 New Lead from developmentspike.co.za - ${name}`,
      text: `
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Source: developmentspike.co.za
⏰ Received: ${timestamp}

CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${name}
📧 Email: ${email || 'Not provided'}
📱 Phone: ${phone || 'Not provided'}

MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was automatically generated from the contact form on developmentspike.co.za
${email ? `Reply directly to this email to respond to ${name}` : ''}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0A0E27;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0A0E27; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1A1F3A 0%, #0A0E27 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 217, 255, 0.3); border: 1px solid rgba(0, 217, 255, 0.2);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #00D9FF 0%, #7B2CBF 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">
                        🚀 New Lead Notification
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.95); font-size: 14px; font-weight: 500;">
                        developmentspike.co.za
                      </p>
                    </td>
                  </tr>

                  <!-- Source Info Banner -->
                  <tr>
                    <td style="background: rgba(0, 217, 255, 0.1); padding: 15px 30px; border-bottom: 2px solid rgba(0, 217, 255, 0.3);">
                      <table width="100%">
                        <tr>
                          <td style="color: #00D9FF; font-size: 13px; font-weight: 600;">
                            📍 WEBSITE CONTACT FORM
                          </td>
                          <td align="right" style="color: rgba(255,255,255,0.6); font-size: 12px;">
                            ${timestamp}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Contact Details -->
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #00D9FF; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                        Contact Information
                      </h2>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(26, 31, 58, 0.6); border-radius: 12px; border: 1px solid rgba(0, 217, 255, 0.2); overflow: hidden;">
                        <tr>
                          <td style="padding: 20px;">
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td style="color: rgba(255,255,255,0.6); font-size: 13px; width: 100px; vertical-align: top; padding: 12px 0;">
                                  <strong>👤 Name:</strong>
                                </td>
                                <td style="color: white; font-size: 15px; font-weight: 500; padding: 12px 0;">
                                  ${name}
                                </td>
                              </tr>
                              <tr style="border-top: 1px solid rgba(255,255,255,0.1);">
                                <td style="color: rgba(255,255,255,0.6); font-size: 13px; vertical-align: top; padding: 12px 0;">
                                  <strong>📧 Email:</strong>
                                </td>
                                <td style="color: white; font-size: 15px; padding: 12px 0;">
                                  ${email ? `<a href="mailto:${email}" style="color: #00D9FF; text-decoration: none;">${email}</a>` : '<em style="color: rgba(255,255,255,0.4);">Not provided</em>'}
                                </td>
                              </tr>
                              <tr style="border-top: 1px solid rgba(255,255,255,0.1);">
                                <td style="color: rgba(255,255,255,0.6); font-size: 13px; vertical-align: top; padding: 12px 0;">
                                  <strong>📱 Phone:</strong>
                                </td>
                                <td style="color: white; font-size: 15px; padding: 12px 0;">
                                  ${phone ? `<a href="tel:${phone}" style="color: #00D9FF; text-decoration: none;">${phone}</a>` : '<em style="color: rgba(255,255,255,0.4);">Not provided</em>'}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 30px 30px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #00D9FF; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                        Message
                      </h2>
                      <div style="background: rgba(26, 31, 58, 0.6); border-left: 4px solid #00D9FF; border-radius: 8px; padding: 25px; border: 1px solid rgba(0, 217, 255, 0.2);">
                        <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Action Button -->
                  ${email ? `
                  <tr>
                    <td style="padding: 0 30px 30px 30px;" align="center">
                      <a href="mailto:${email}?subject=Re: Your inquiry on developmentspike.co.za" style="display: inline-block; background: linear-gradient(135deg, #00D9FF 0%, #7B2CBF 100%); color: white; text-decoration: none; padding: 15px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(0, 217, 255, 0.4);">
                        📧 Reply to ${name}
                      </a>
                    </td>
                  </tr>
                  ` : ''}
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: rgba(10, 14, 39, 0.8); padding: 25px 30px; border-top: 1px solid rgba(0, 217, 255, 0.2);">
                      <table width="100%">
                        <tr>
                          <td style="color: rgba(255,255,255,0.5); font-size: 12px; line-height: 1.6;">
                            <strong style="color: rgba(255,255,255,0.7);">Automated Notification</strong><br>
                            This email was automatically generated from your contact form on <strong style="color: #00D9FF;">developmentspike.co.za</strong><br>
                            ${email ? `💡 You can reply directly to this email to respond to the sender` : '⚠️ No email address provided - contact via phone only'}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Email sent successfully'
    }
  } catch (error: any) {
    console.error('Email send error:', error)
    return {
      success: false,
      error: error.message || 'Failed to send email'
    }
  }
})
