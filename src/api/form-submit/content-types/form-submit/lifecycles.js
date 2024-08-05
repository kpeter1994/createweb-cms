'use strict';

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      // Email a kitöltőnek
      await strapi.plugins['email'].services.email.send({
        to: result.email,
        from: 'your-verified-email@example.com',
        subject: 'Köszönjük a kapcsolatfelvételt!',
        text: `Kedves ${result.name},\n\nKöszönjük üzenetét: ${result.message}`,
        html: `<p>Kedves ${result.name},</p><p>Köszönjük üzenetét: ${result.message}</p>`,
      });

      // Email a weboldal tulajdonosának
      await strapi.plugins['email'].services.email.send({
        to: 'owner@example.com',
        from: 'your-verified-email@example.com',
        subject: 'Új kapcsolatfelvételi űrlap beküldve',
        text: `Új üzenet érkezett ${result.name} (${result.email}) által:\n\n${result.message}`,
        html: `<p>Új üzenet érkezett ${result.name} (${result.email}) által:</p><p>${result.message}</p>`,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
