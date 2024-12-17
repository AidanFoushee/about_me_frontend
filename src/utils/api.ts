import axios from 'axios';

const API_URL = 'http://localhost:5001/awesome/applicant';

export const fetchApplicantInfo = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching applicant info:', error);
    return null;
  }
};
