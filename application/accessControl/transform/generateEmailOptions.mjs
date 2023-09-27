/**
 * @function generateHtml
 * @param {String} name 
 * @param {String} url 
 * @returns {string}
 */

export const generateHtml = (name, url) => `
  <div>
    <span>${name}, вы можете войти в кабинет администратора по этой</span>
    <a href="${url}">ссылке</a>
  </div>
`;

/**
 * @typedef {import('../schema/types').AdminForEmail} AdminForEmail
 * @typedef {import('../schema/types').EmailOptions} EmailOptions
 */

/**
 * @function generateEmailOptions
 * @param {AdminForEmail} adminForEmail
 * @returns {EmailOptions} 
 */

export const generateEmailOptions = (adminForEmail) => {
  const {name, email, magicToken} = adminForEmail;
  const url = `${process.env.CLIENT_URL}/${magicToken}`;
  return {
    to: email,
    subject: 'Уведомление от All For Fans',
    html: generateHtml(name, url),
  };
};
