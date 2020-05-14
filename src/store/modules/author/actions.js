export function getAuthors() {
  return {
    type: 'GET_AUTHORS',
  };
}
export function updateAuthors(authors) {
  return {
    type: 'UPDATE_AUTHORS',
    payload: { authors },
  };
}
