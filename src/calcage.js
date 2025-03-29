/**
* @param {string} birthdate - The birthdate in YYYY-MM-DD format.
* @returns {Promise<number>} - A promise that resolves to the age in years.
* @description - This function calculates the age based on the provided birthdate.
*/

export const calculateAge = async (birthdate) => {
    return new Promise((resolve) => {
      const birthDate = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
  
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
  
      resolve(age);
    });
};
  