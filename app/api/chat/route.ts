import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topic, prompt }:{topic:string; prompt:string} = await req.json();
  const base = process.env.OPENROUTER_BASE || "https://openrouter.ai/api/v1";
  const model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

  const r = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You help creators turn trending topics into 30-60s short-form scripts. Be concise and practical." },
        { role: "user", content: `Topic: ${topic}\nTask: ${prompt}\nReturn: 3 hooks, a 45s script with [B-ROLL] cues, and 10 hashtags.` }
      ]
    })
  });

  if (!r.ok) {
    const e = await r.text();
    return NextResponse.json({ error: e }, { status: 500 });
  }
  const data = await r.json();
  const text = data.choices?.[0]?.message?.content || "No response";
  return NextResponse.json({ text });
}
