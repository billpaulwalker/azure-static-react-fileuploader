export async function getUser() {
  try {
    const res = await fetch("/.auth/me");
    if (!res.ok) return null;
    const data = await res.json();
    return data?.clientPrincipal ?? null;
  } catch {
    return null;
  }
}

export function login() {
  window.location.href = "/.auth/login/aad";
}

export function logout() {
  window.location.href = "/.auth/logout";
}
