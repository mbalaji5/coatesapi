# How to start

npm start

# soultion

        * Should expose api to send email "post /sendEmail"
        * The "post /sendEmail" endpoint should accept body param with below format.
            req.body {
                provider: '',
                to: [],
                cc: [],
                bcc: [],
                subject: ''
                body: ''
            }
        * Return 200 if we get success response from Email provider
        * Retrun 500 error if we get failure response from Email provider.

Due to time constrain implemented only "SendGrid" provider.

# Planned test case

    * Should have body details with all the fields
    * Should return 200 success if we get success response from email provider
    * Should return 500 error if we get failure response from email provider
