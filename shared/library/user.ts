// Native Fix
if (typeof window === 'undefined' || typeof document === 'undefined') document = {
  cookie: ''
};

export default USER;
export const user = USER();
