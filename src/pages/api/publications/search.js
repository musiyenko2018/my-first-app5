import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get(`http://localhost:8080/api/publications/search?query=${query}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Error fetching search results' });
  }
}

