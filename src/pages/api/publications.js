import axios from 'axios';

export default async function handler(req, res) {
  const { page = 1, size = 6 } = req.query;
  try {
    const response = await axios.get(`http://localhost:8080/api/publications?page=${page}&size=${size}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching publications' });
  }
}