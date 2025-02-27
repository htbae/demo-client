const trim = (value?: string | number) => {
  if (value !== undefined && typeof value === 'string') {
    return value.replace(/^\s+|\s+$/gm, '');
  } else {
    return value;
  }
};

const trimAll = (value?: string | number) => {
  if (value !== undefined && typeof value === 'string') {
    return value.replace(/(\s*)/g, '');
  } else {
    return value;
  }
};

const trimForm = <T>(data: T): T => {
  if (data === null || typeof data !== 'object') {
    if (typeof data === 'string') {
      return data.trim() as T;
    }
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => trimForm(item)) as T;
  }

  if (data instanceof Date) {
    return data;
  }

  const trimmedData: Partial<T> = {};
  for (const key in data) {
    if (data[key]) {
      const value = data[key];
      trimmedData[key] = trimForm(value);
    }
  }
  return trimmedData as T;
};

const toFormData = <T>(data: T): FormData => {
  const formData = new FormData();

  for (const key in data) {
    if (data[key]) {
      const value = data[key];
      if (typeof value !== 'undefined' && value !== 'undefined') {
        formData.append(key, String(value));
      }
    }
  }

  return formData;
};

export const formService = {
  trim,
  trimAll,
  trimForm,
  toFormData,
};
