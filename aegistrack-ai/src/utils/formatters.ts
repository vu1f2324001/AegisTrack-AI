export function formatSeconds(sec: number): string {
  return `${sec.toFixed(2)}s`;
}
export function formatSpeed(kmh: number): string {
  return `${Math.round(kmh)} km/h`;
}
export function formatExcursion(cm: number): string {
  return `${cm.toFixed(1)} cm`;
}
export function formatTimestamp(isoString: string): string {
  const d = new Date(isoString);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
export function formatPercentage(val: number): string {
  return `${Math.round(val)}%`;
}
