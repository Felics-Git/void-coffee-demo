export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=' + process.env.GEMINI_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    }
  );

  const data = await response.json();
  res.status(response.status).json(data);
}