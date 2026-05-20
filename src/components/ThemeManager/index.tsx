import useSettings from '@app/hooks/useSettings';
import { useEffect } from 'react';

/**
 * Applies the globally configured theme to the document root.
 *
 * The `theme-apple` class activates the Apple HIG override stylesheet
 * (see `src/styles/theme-apple.css`), which adapts between light and dark
 * automatically via `prefers-color-scheme`. Rendering `null`, this component
 * only manages the root class so the theme reacts live to settings changes.
 */
const ThemeManager = () => {
  const { currentSettings } = useSettings();
  const theme = currentSettings.theme;

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'apple') {
      root.classList.add('theme-apple');
    } else {
      root.classList.remove('theme-apple');
    }
  }, [theme]);

  return null;
};

export default ThemeManager;
