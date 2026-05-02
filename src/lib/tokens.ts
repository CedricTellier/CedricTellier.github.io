import { Theme, ThemeTokens } from './types';

const ACCENT_DEFAULT = '#3B82F6';

export function getTokens(theme: Theme, accent: string = ACCENT_DEFAULT): ThemeTokens {
  const isDark = theme === 'dark';
  return {
    bg: isDark ? '#09090b' : '#fafafa',
    bg2: isDark ? '#18181b' : '#f4f4f5',
    bgAlt: isDark ? '#121214' : '#f2f1ec',
    bgBlur: isDark ? 'rgba(11,11,12,0.72)' : 'rgba(250,250,247,0.72)',
    fg: isDark ? '#fafafa' : '#09090b',
    muted: '#71717a',
    border: isDark ? '#27272a' : '#e4e4e7',
    accent,
    accentFg: '#fff',
    inputBg: isDark ? '#18181b' : '#fff',
    fontMono: "'JetBrains Mono', ui-monospace, monospace",
    fontSerif: "'Fraunces', Georgia, serif",
  };
}

export const ACCENT_DEFAULT_VALUE = ACCENT_DEFAULT;
