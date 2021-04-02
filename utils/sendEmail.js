import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY ='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'
const sendEmail = async ({ firstName, lastName, email, content }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: 'keshsolasi@gmail.com',
                }
              ],
              subject: `New Email from ${firstName} ${lastName}`
            }
          ],
          from: {
            email: 'anthonypaper2014@gmail.com',
          },
          content: [
            {
              type: 'text/html',
              value: `You have received a new email. 
              <br> <strong>Name:</strong> ${firstName} ${lastName}. 
              <br> <strong>Email Address:</strong> ${email}
              <br> <strong> Message:</strong> <br> ${content}`
            }
          ]
        })
    });
}

export { sendEmail };