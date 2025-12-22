type Params = {
  name: string;
  data: { [key: string]: string };
};

export const trackEvent = (params: Params) => {
  console.log('Track event: doing nothing for now')
};
