const REQUIRED = ["title", "employer", "location", "url"];
const MAX_LENGTHS = { title: 120, employer: 120, location: 120, type: 40, pay: 80, url: 500, email: 120, description: 5000 };

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isValidUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export async function onRequestPost(context) {
  const kv = context.env.POSTED_JOBS;
  if (!kv) return json({ error: "Posting is temporarily unavailable." }, 503);

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }
  if (!body || typeof body !== "object") return json({ error: "Invalid request body." }, 400);

  if (clean(body.website)) return json({ ok: true });

  const job = {};
  for (const field of Object.keys(MAX_LENGTHS)) job[field] = clean(body[field], MAX_LENGTHS[field]);

  const missing = REQUIRED.filter((f) => !job[f]);
  if (missing.length) return json({ error: `Missing required field(s): ${missing.join(", ")}.` }, 400);

  if (!isValidUrl(job.url)) return json({ error: "Application URL must be a valid http(s) link." }, 400);
  if (job.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(job.email)) {
    return json({ error: "Contact email looks invalid." }, 400);
  }

  job.description = job.description.split(/\n+/).filter(Boolean);
  job.type = job.type || "Full-Time";
  job.posted = "Just posted";
  job.source = "posted";
  job.postedAt = Date.now();
  job.id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

  const key = `post-${job.id}`;
  await kv.put(key, JSON.stringify(job));

  return json({ ok: true, id: job.id }, 201);
}
