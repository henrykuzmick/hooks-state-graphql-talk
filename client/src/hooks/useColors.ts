import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Colors, Colors_colors } from '../../generated/schema';

const COLORS = loader('../apollo/queries/Colors.graphql');

export const useColors = (): [Colors_colors[] | null, boolean] => {
  const colorsQuery = useQuery<Colors>(COLORS);

  const colors = colorsQuery.data && colorsQuery.data.colors ? colorsQuery.data.colors : null;

  return [colors, colorsQuery.loading];
};
