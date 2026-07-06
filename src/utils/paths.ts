const base = import.meta.env.BASE_URL || "/";

export const withBase = (path: string) => {
  if (!path || path === "/") {
    return base;
  }

  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

export const pagePath = withBase;
export const assetPath = withBase;
