const USERNAME_ENV = "BASIC_AUTH_USERNAME";
const PASSWORD_ENV = "BASIC_AUTH_PASSWORD";

export default {
  async fetch(request, env) {
    const expectedUsername = env[USERNAME_ENV];
    const expectedPassword = env[PASSWORD_ENV];

    if (!expectedUsername || !expectedPassword) {
      return new Response("Basic authentication is not configured.", {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      });
    }

    const credentials = parseBasicAuth(request.headers.get("Authorization"));

    if (
      !credentials ||
      !(await secureCompare(credentials.username, expectedUsername)) ||
      !(await secureCompare(credentials.password, expectedPassword))
    ) {
      return authenticationRequired();
    }

    return env.ASSETS.fetch(request);
  },
};

function authenticationRequired() {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Maturitni prace", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

function parseBasicAuth(header) {
  if (!header || !header.startsWith("Basic ")) {
    return null;
  }

  try {
    const decoded = atob(header.slice("Basic ".length).trim());
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

async function secureCompare(actual, expected) {
  const [actualHash, expectedHash] = await Promise.all([
    sha256Hex(actual),
    sha256Hex(expected),
  ]);

  return actualHash === expectedHash;
}

async function sha256Hex(value) {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );

  return [...new Uint8Array(hash)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
