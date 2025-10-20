// hooks/useHistory.js
export function useHistory() {
  const updateUrl = (id) => {
    const path = id === 'hero' ? '/' : `/${id}`;
    window.history.pushState({}, '', path);
  };

  return { updateUrl };
}
