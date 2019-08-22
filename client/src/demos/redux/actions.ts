export const GET_NAMES = 'GET_NAMES';
export const GET_COLORS = 'GET_COLORS';
export const POST_NAME = 'POST_NAME';

type GetNames = {
  type: typeof GET_NAMES;
  payload: {
    names: string[];
  };
};

type GetColors = {
  type: typeof GET_COLORS;
  payload: {
    colors: string[];
  };
};

type PostName = {
  type: typeof POST_NAME;
  payload: {
    name: string;
  };
};

export type Action = GetNames | GetColors | PostName;

export const getNames = (): GetNames => ({
  type: GET_NAMES,
  payload: {
    names: ['john', 'steve']
  }
});

export const getColors = (): GetColors => ({
  type: GET_COLORS,
  payload: {
    colors: ['red', 'blue', 'pink']
  }
});

export const postName = (name: string): PostName => ({
  type: POST_NAME,
  payload: {
    name
  }
});
