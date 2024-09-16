# FETCH

- A `fetch()` call is only reject if the network request itself fails for some reason (host not found, no connection, server not responding, etc.)
  Any result back from the server (200, 404, 500, etc.) is considered success from Promise pov.
