function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export async function onRequestGet(context) {
  const kv = context.env.POSTED_JOBS;
  if (!kv) return json({ jobs: [] });

  const list = await kv.list({ prefix: "post-" });
  const jobs = [];
  for (const key of list.keys) {
    const raw = await kv.get(key.name);
    if (!raw) continue;
    try {
      const job = JSON.parse(raw);
      if (job && job.title && job.url) jobs.push(job);
    } catch {
      // skip malformed entry
    }
  }
  jobs.sort((a, b) => (b.postedAt || 0) - (a.postedAt || 0));
  return json({ jobs });
}
