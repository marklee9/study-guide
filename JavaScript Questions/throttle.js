
// Throttle
// -------------------------------------------------------------------------------------

function throttle (func, time) {
  let timeout;

  return () => {
    if (!timeout) {
      timeout = setTimeout(() => func(), time);
    }
  };
}