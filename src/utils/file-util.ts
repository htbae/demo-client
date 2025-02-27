const FileUtil = {
  formatSize: (bytes: number) => {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    for (; bytes >= 1024 && i < units.length - 1; i++) bytes /= 1024;
    return `${bytes.toFixed(2)} ${units[i]}`;
  },

  extractExt: (fileName?: string) =>
    fileName?.includes('.')
      ? (fileName.split('.').pop()?.toLowerCase() ?? '')
      : '',

  removeExt: (fileName?: string) =>
    fileName?.includes('.')
      ? fileName.split('.').slice(0, -1).join('.')
      : (fileName ?? ''),
};

export default FileUtil;
