// config/plugins.js
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
        url: 'https://api.mailgun.net', //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'Mailgun Test <myemail@protonmail.com>',
        defaultReplyTo: 'smitpeter777@gmail.com',
      },
    },
  },
  // ...
});
