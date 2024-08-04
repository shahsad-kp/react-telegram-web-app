import { useWebApp } from './core';
import { useCallback } from 'react';

/**
 * A method that opens a telegram link inside the Telegram app. The Mini App will not be closed after this method is called.
 */
export type OpenTelegramLinkFunction = (url: string) => void;

/**
 * This hook that provided {@link OpenTelegramLinkFunction}
 * You have to look original description openTelegramLink in {@link telegram!WebApp}, because hook just implements his.
 * @return {OpenTelegramLinkFunction}
 * @group Hooks
 */
const useOpenTelegramLink = (): OpenTelegramLinkFunction => {
  const WebApp = useWebApp();

  return useCallback(
    (...args) => WebApp?.openTelegramLink?.(...args),
    [WebApp],
  );
};

export default useOpenTelegramLink;
