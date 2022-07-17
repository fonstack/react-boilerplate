import { Paths } from './paths';

export const parsePathWithParams = (path: Paths, pathParams: Object) => {
  return Object.entries(pathParams).reduce((url, [key, value]) => {
    const injectSingleParam = (): string => {
      const param = `:${key}`;
      if (!url.includes(param)) {
        throw new Error(`Parameter ${param} couldn't be found in the URL pattern`);
      }
      return url.replace(param, value);
    };

    return value == null ? url : injectSingleParam();
  }, path.toString());
};
