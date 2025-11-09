export default function Page() {
  return (
    <main className="container">
      <div className="badge">ballyhoo.ai</div>
      <h1 className="h1">Viral ideas in minutes.</h1>
      <p className="sub">Discover trending topics from YouTube & Reddit, then turn them into scripts with AI.</p>
      <div style={{marginTop:20}}>
        <a className="btn" href="/explore">Get Started</a>
        {/* infinite marquee features */}
<div className="marquee-wrap">
  <div className="marquee">
    <div className="marquee-item">YouTube Trending Fetch</div>
    <div className="marquee-item">Reddit Hot Topics</div>
    <div className="marquee-item">AI Script Generation</div>
    <div className="marquee-item">Thumbnail Ideas</div>
    <div className="marquee-item">Hook/Intro Generator</div>
    <div className="marquee-item">Viral Concepts</div>

    {/* duplicate ensures seamless loop */}
    <div className="marquee-item">YouTube Trending Fetch</div>
    <div className="marquee-item">Reddit Hot Topics</div>
    <div className="marquee-item">AI Script Generation</div>
    <div className="marquee-item">Thumbnail Ideas</div>
    <div className="marquee-item">Hook/Intro Generator</div>
    <div className="marquee-item">Viral Concepts</div>
  </div>
</div>

      </div>
      <div className="footer-gap" />
    </main>
  );
}
