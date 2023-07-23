export default function DateParse(data) {
  //   console.log('data : ', data);
  //   function parseDateISOString(s) {
  //     let ds = s.split(/\D/).map(s => parseInt(s));
  //     // ds[1] = ds[1] - 1; // adjust month
  //     return new Date(...ds);
  //   }
  //   console.log(parseDateISOString(toString(data)));

  const date = new Date(data);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  //   console.log('hours: ', hours);
  //   const minutes = date.getUTCMinutes();
  const year = date.getUTCFullYear();
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  const monthIndex = date.getUTCMonth();
  console.log('monthIndex: ', monthIndex);
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  return `${months[Number(monthIndex)]} ${year} ${hours}:${minutes} `;
}
