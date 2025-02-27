const StringUtil = {
  isString: (data?: string | number): boolean => typeof data === 'string',
  isNumber: (data: string): boolean => /^[0-9]+(\.[0-9]+)?$/.test(data),
  trim: (str = ''): string => str.trim(),
  isEmpty: (str: string | undefined | null): boolean =>
    str === undefined || str === null || str.trim().length === 0,
  equals: (str1: string, str2: string): boolean => str1.trim() === str2.trim(),
  zeroPad: (num: number, size = 2): string => `${num}`.padStart(size, '0'),
  removeSpaces: (str: string) => str.replace(/\s+/g, ''),
  generateUniqueKey: () => {
    const timestamp = Date.now();
    const randomNum1 = Math.floor(Math.random() * 10000);
    const randomNum2 = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum1}-${randomNum2}`;
  },
};

export default StringUtil;
