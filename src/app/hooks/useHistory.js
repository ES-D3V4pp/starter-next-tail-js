export function useHistory() {
  const updateUrl = (pathname) => {
    window.history.pushState({}, '', pathname);
  };

  return { updateUrl };
}
