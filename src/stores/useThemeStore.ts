import { create } from 'zustand';

export type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
  /** 저장된 값 → 시스템 설정 순으로 초기 테마를 결정하고 <html>에 반영 */
  initTheme: () => void;
  /** 다크/라이트 전환 후 localStorage에 저장 */
  toggleTheme: () => void;
}

/** <html data-theme> 속성에 테마를 반영 */
const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark',

  initTheme: () => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('theme');
    } catch {
      // 저장소 접근이 막힌 환경(시크릿 모드 등)에서는 시스템 설정을 따른다
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme: Theme = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';
    applyTheme(theme);
    set({ theme });
  },

  toggleTheme: () => {
    const next: Theme = get().theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // 저장 실패는 무시 (현재 세션에서만 유지)
    }
    set({ theme: next });
  },
}));
