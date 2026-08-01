export type LeadPayload = {
  name: string;
  businessName?: string;
  email: string;
  phone: string;
  helpType: string;
  message: string;
};

export async function submitLead(payload: LeadPayload) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint) {
    console.info("[submitLead] endpoint not configured", payload);
    return { ok: true, mode: "mock" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(body || `Falha ao enviar (${response.status})`);
  }

  return response.json().catch(() => ({ ok: true }));
}
