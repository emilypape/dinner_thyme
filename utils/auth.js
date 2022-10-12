function authorizeSession(session) {
  return session.authorized;
}

module.exports = { authorizeSession };
