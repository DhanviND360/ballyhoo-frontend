"use client";
import { useState } from "react";

type Item = { platform:string; title:string; url:string; metrics?:any; published_at?:string };

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL!;

export default function Explore() {
  const [loading, setLoading] = useState<string | null>(null);
  const [rows, setRows] = useState<Item[]>([]);
  const [note, setNote] = useState<string | null>(null);

  async function run(platform: "youtube" | "reddit" | "instagram" | "gtrends") {
    setNote(null);
    setLoading(platform);
    setRows([]);
    try {
      const url = `${BACKEND}/trends/${platform}${platform==="reddit" ? "?sub=all&limit=20" : ""}`;
      const r = await fetch(url);
      const j = await r.json();
      if (j.note) setNote(j.note);
      setRows(j.items ?? []);
    } catch (e:any) {
      setNote("Fetch failed: " + e.message);
    } finally {
      setLoading(null);
    }
  }

  return (
    <main className="container">
      <div className="badge">Explore Trends</div>
      <h2 className="h2">Pick a platform</h2>

      {/* Decorative 3D stack (non-interactive) */}
<div className="stack-section">
  <div className="stack-container">
    <div className="stack">
      <div className="stack-card">Trending Now</div>
      <div className="stack-card">Viral Today</div>
      <div className="stack-card">Growth Sparks</div>
    </div>
  </div>
</div>


      
      <div className="grid cards" style={{marginTop:12}}>
        <Card title="YouTube" desc="MostPopular in your region" onClick={()=>run("youtube")} loading={loading==="youtube"} />
        <Card
  title="Instagram"
  desc="Hashtag insights"
  onClick={() => run("instagram")}
  loading={loading==="instagram"}
/>
<Card
  title="Google Trends"
  desc="Daily trending searches"
  onClick={() => run("gtrends")}
  loading={loading==="gtrends"}
/>



        <Card title="Reddit" desc="r/all hot posts" onClick={()=>run("reddit")} loading={loading==="reddit"} />

        <Coming title="Twitter (X)" />
        <Coming title="TikTok" />
      </div>

      {note && <p className="note" style={{marginTop:16}}>{note}</p>}

      {rows.length>0 && (
        <>
          <h2 className="h2">Results</h2>
          <table className="table">
            <thead>
              <tr>
 <th>Platform</th><th>Title</th><th>Thumbnail</th><th>Metrics</th><th>Link</th><th>AI</th>
</tr>

            </thead>
            <tbody>
              {rows.map((r, i)=>(
                <tr key={i}>
                  <td>{r.platform}</td>
                  <td>{r.title}</td>
                  <td>
  {r.platform === "YouTube" && r.thumbnail && (
    <img src={r.thumbnail} width={120} style={{borderRadius:8}} />
  )}
  {r.platform !== "YouTube" && (
    <span className="badge">n/a</span>
  )}
</td>
<td><span className="badge">
  {r.platform==="YouTube" ? `${r.metrics?.views ?? 0} views` :
   r.platform==="Reddit" ? `${r.metrics?.score ?? 0} score` : "-"}
   if(platform==="gtrends") endpoint="trends/gtrends"

</span></td>
<td><a href={r.url ?? "#"} target="_blank">Open</a></td>
<td className="row-actions">
  <a className="icon" title="Chat AI" href={`/chat?title=${encodeURIComponent(r.title)}`}>🤖</a>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}

function Card({title, desc, onClick, loading}:{title:string; desc:string; onClick:()=>void; loading?:boolean}) {
  return (
    <div className="card">
      <div>
        <div style={{fontWeight:700, fontSize:18}}>{title}</div>
        <div className="sub" style={{marginTop:6}}>{desc}</div>
      </div>

      <button
       className="btn"
       onClick={onClick}
      >
        Let’s Ballyhoo!
      </button>
    </div>
  );
}


  


function Coming({title}:{title:string}) {
  return (
    <div className="card">
      <div>
        <div style={{fontWeight:700, fontSize:18}}>{title}</div>
        <div className="sub" style={{marginTop:6}}>Coming soon</div>
      </div>
      <button className="btn secondary" disabled>Coming Soon</button>
    </div>
  );
}
