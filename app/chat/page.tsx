"use client";
import { useEffect, useState } from "react";

export default function Chat() {
  const [topic, setTopic] = useState<string>("");
  const [input, setInput] = useState<string>("Give me 3 hooks and a 45s script with B-ROLL cue and 10 hashtags.");
  const [out, setOut] = useState<string>("");

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    setTopic(params.get("title") || "");
  },[]);

  async function send() {
    setOut("Thinking…");
    const r = await fetch("/api/chat", {
      method:"POST",
      headers:{ "content-type":"application/json" },
      body: JSON.stringify({ topic, prompt: input })
    });
    const j = await r.json();
    setOut(j.text || "No response.");
  }

  return (
    <main className="container">
      <div className="badge">ProCreate • AI Chat</div>
      <h2 className="h2">{topic || "No topic provided"}</h2>
      <div style={{marginTop:8}} className="sub">Ask the AI to craft hooks, scripts, thumbnails, etc.</div>

      <div style={{display:"grid", gap:12, marginTop:16}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)}
          style={{width:"100%", height:120, background:"#0f0f13", color:"white", border:"1px solid #2a2a31", borderRadius:12, padding:12}} />
        <div style={{display:"flex", gap:10}}>
          <button className="btn" onClick={send}>Send</button>
          <a className="btn secondary" href="/explore">Back</a>
        </div>
      </div>

      <div style={{marginTop:18, whiteSpace:"pre-wrap"}}>{out}</div>
    </main>
  );
}
