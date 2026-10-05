// Example serverless endpoint.
// IMPORTANT: keep your AI provider secret key in environment variables.
// This file is intentionally provider-neutral.

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({error:"POST only"});
  const { question } = req.body || {};
  if (!question || question.length > 2000) return res.status(400).json({error:"Invalid question"});

  // Call your chosen AI provider here using process.env.AI_API_KEY.
  // Ask the model to return ONLY JSON matching the schema below.
  //
  // {
  //   title, summary, score, baseline, upside, downside, risk,
  //   assumptions[], risks[], timeline[], recommendation, why
  // }
  //
  // Add authentication, rate limiting, logging, and abuse protection in production.

  return res.status(501).json({
    error:"AI provider not connected yet",
    message:"Connect an AI provider on the server; never expose its API key in the browser."
  });
}
