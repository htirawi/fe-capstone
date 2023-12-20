// const fetchAPI = (date) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (availableTimesByDate[date]) {
//                 resolve(availableTimesByDate[date])
//             }
//             else {
//                 reject(new Error('No available times for the selected date.'));
//             }
//         }, 1000)
//     })
// }

// const submitAPI = (formData) => {

//     availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (formData) {
//                 resolve(true); // Simulate successful submission
//             } else {
//                 reject(new Error('Form submission failed.'));
//             }
//         }, 1000); // Simulate API delay
//     });
// };

// export { fetchAPI, submitAPI }

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00');
    if (random() < 0.5) result.push(i + ':30');
  }

  return result;
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
