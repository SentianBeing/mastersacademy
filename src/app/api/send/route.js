import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, data } = body;
    const apiKey = process.env.RESEND_API_KEY || 're_iH6erWJE_MLnhdps4pKAaimh9cBjDQvGi';

    // Build Email HTML Template
    let typeLabel = "Contact Form Submission";
    if (type === 'general') typeLabel = "General Enrollment Modal";
    if (type === 'neetjee') typeLabel = "NEET & JEE 2026 Admissions Modal";
    if (type === 'jee') typeLabel = "JEE Course Inquiry Form";
    if (type === 'keam') typeLabel = "KEAM Course Inquiry Form";
    if (type === 'neet') typeLabel = "NEET Course Inquiry Form";
    if (type === 'school_enquiry') typeLabel = "School Tuition Inquiry (5th-12th)";

    let fieldsHtml = "";
    
    // Base details
    if (data.name) {
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013; width: 30%;">Full Name</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${data.name}</td>
        </tr>
      `;
    }
    
    if (data.phone) {
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013;">Phone Number</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="tel:${data.phone}" style="color: #7a0c24; text-decoration: none; font-weight: 600;">${data.phone}</a></td>
        </tr>
      `;
    }

    if (data.email) {
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013;">Email Address</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${data.email}" style="color: #7a0c24; text-decoration: none;">${data.email}</a></td>
        </tr>
      `;
    }

    if (data.course) {
      let courseLabel = data.course;
      if (data.course === 'neet') courseLabel = "NEET Coaching (Medical)";
      if (data.course === 'jee') courseLabel = "JEE Coaching (Engineering)";
      if (data.course === 'keam') courseLabel = "KEAM Coaching (Kerala Entrance)";
      if (data.course === 'foundation') courseLabel = "Early Foundation Class (8-10)";
      if (data.course === 'tuition') courseLabel = "School Tuition (Class 5-12)";
      
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013;">Course of Interest</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 600;">${courseLabel}</td>
        </tr>
      `;
    }

    if (data.programType) {
      let progLabel = data.programType === 'entrance' ? 'Entrance Coaching Courses (NEET / JEE / KEAM)' : 'Tuition Program (Class 5 to 12)';
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013;">Program Type</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${progLabel}</td>
        </tr>
      `;
    }

    if (data.classStandard) {
      let batchLabel = data.classStandard;
      if (data.classStandard === 'repeaters') batchLabel = "NEET/JEE Repeaters (1-Year Long Term)";
      if (data.classStandard === 'integrated') batchLabel = "Two-Year Integrated Batch (Class 11 & 12)";
      if (data.classStandard === 'crash') batchLabel = "NEET/JEE 2026 Crash Course";
      if (data.classStandard === 'foundation') batchLabel = "Early Foundation (Class 8 to 10)";
      
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013;">Class / Batch</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${batchLabel}</td>
        </tr>
      `;
    }

    if (data.message) {
      fieldsHtml += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013; vertical-align: top;">Message</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b; line-height: 1.5; white-space: pre-line;">${data.message}</td>
        </tr>
      `;
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Academy Inquiry</title>
        </head>
        <body style="font-family: 'Outfit', Helvetica, Arial, sans-serif; background-color: #fdf5f6; margin: 0; padding: 40px 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #f3d9df; overflow: hidden; box-shadow: 0 4px 15px rgba(77, 0, 19, 0.04);">
            <!-- Header -->
            <tr>
              <td style="background-color: #4d0013; padding: 30px 40px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: 0.5px; text-transform: uppercase;">Master's Entrance Academy</h1>
                <p style="color: #d1a129; font-size: 13px; font-weight: 600; margin: 5px 0 0 0; letter-spacing: 1.5px; text-transform: uppercase;">New Student Inquiry Details</p>
              </td>
            </tr>
            
            <!-- Body -->
            <tr>
              <td style="padding: 40px;">
                <p style="font-size: 15px; color: #64748b; margin-top: 0; margin-bottom: 25px; line-height: 1.5;">
                  Hello Admin,<br><br>
                  A new student has submitted an inquiry on the Master's Entrance Academy website. Here are the details of the submission:
                </p>
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 30px; font-size: 14.5px;">
                  <tbody>
                    <tr>
                      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #4d0013; width: 35%;">Submission Source</td>
                      <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #7a0c24; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px;">${typeLabel}</td>
                    </tr>
                    ${fieldsHtml}
                  </tbody>
                </table>
                
                <p style="font-size: 14px; color: #64748b; line-height: 1.5; margin: 0;">
                  Please follow up with this candidate as soon as possible.
                </p>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="background-color: #fdf5f6; padding: 20px 40px; text-align: center; border-top: 1px solid #f3d9df;">
                <p style="font-size: 12px; color: #ab1736; margin: 0; font-weight: 600;">
                  Sent from Master's Entrance Academy Portal
                </p>
                <p style="font-size: 11px; color: #94a3b8; margin: 5px 0 0 0;">
                  © ${new Date().getFullYear()} Master's Entrance Academy. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Make API Call to Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Masters Entrance Academy <inquiry@mastersentranceacademy.com>',
        to: 'mastersacademypattom@gmail.com',
        subject: `New Inquiry: ${data.name} - ${typeLabel}`,
        html: emailHtml
      })
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API Error details:", errorData);
      return NextResponse.json({ error: errorData.message || "Failed to send email via Resend" }, { status: resendResponse.status });
    }

    const responseData = await resendResponse.json();
    return NextResponse.json({ success: true, id: responseData.id });
    
  } catch (error) {
    console.error("Email API Route Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
