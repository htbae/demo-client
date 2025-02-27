type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogOptions {
  level: LogLevel;
}

const defaultOptions: LogOptions = {
  level: 'debug',
};

const printIcon = (level: LogLevel): string => {
  const icons = {
    debug: '🟡',
    info: '🟢',
    warn: '🟠',
    error: '🔴',
  };
  return icons[level] ?? '⚪';
};

const logMessage = (level: LogLevel, message: string) => {
  const logFunctions = {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
  };

  const icon = printIcon(level);
  const levelIndicator = level.toUpperCase();
  const logContent =
    typeof message === 'string' ? message : JSON.stringify(message);
  logFunctions[level](`${icon} [${levelIndicator}] | ${logContent}`);
};

const logOnDev = (message: string, options?: Partial<LogOptions>) => {
  if (import.meta.env.VITE_MODE === 'DEVELOPMENT') {
    const config = { ...defaultOptions, ...options };
    logMessage(config.level, message);
  }
};

export { logOnDev };
