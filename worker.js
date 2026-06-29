export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await request.json();

    // Step 1: get file_id from FreeTTS
    const ttsResponse = await fetch("https://freetts.org/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!ttsResponse.ok) {
      return new Response("FreeTTS error", { status: 502, headers: corsHeaders });
    }

    const data = await ttsResponse.json();
    if (!data.file_id) {
      return new Response("No file_id", { status: 502, headers: corsHeaders });
    }

    // Step 2: fetch the audio and return it directly
    const audioResponse = await fetch("https://freetts.org/api/audio/" + data.file_id);
    if (!audioResponse.ok) {
      return new Response("Audio fetch error", { status: 502, headers: corsHeaders });
    }

    const audioBuffer = await audioResponse.arrayBuffer();

    return new Response(audioBuffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "audio/mpeg"
      }
    });
  }
};