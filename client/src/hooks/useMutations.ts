import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import faker from 'faker';

import {
  CreateUser,
  CreateColor,
  CreateUserVariables,
  CreateColorVariables,
  Users,
  Colors_colors
} from '../../generated/schema';

const usersQuery = loader('../apollo/queries/Users.graphql');
const colorsQuery = loader('../apollo/queries/Colors.graphql');
const CREATE_COLOR = loader('../apollo/mutations/CreateColor.graphql');
const CREATE_USER = loader('../apollo/mutations/CreateUser.graphql');

export const useMutations = () => {
  const [createColorMutation] = useMutation<CreateColor, CreateColorVariables>(CREATE_COLOR);
  const [createUserMutation] = useMutation<CreateUser, CreateUserVariables>(CREATE_USER);

  const createColor = () => {
    const value = faker.internet.color();
    createColorMutation({
      variables: {
        value
      },
      optimisticResponse: {
        createColor: {
          id: 'random-id',
          __typename: 'Color',
          value
        }
      }
    });
  };

  const createUser = (color?: Colors_colors) => {
    const name = faker.name.firstName();

    createUserMutation({
      variables: {
        name,
        color: color && color.id
      },
      optimisticResponse: {
        createUser: {
          __typename: 'User',
          id: 'random-id',
          name,
          color: color || {
            __typename: 'Color',
            id: 'random-id',
            value: 'red'
          }
        }
      },
      update: (proxy, res) => {
        if (!res.data || !res.data.createUser) {
          return;
        }

        const data = proxy.readQuery<Users>({ query: usersQuery });

        if (data) {
          data.users.push(res.data.createUser);
          proxy.writeQuery({ query: usersQuery, data });
        }
      }
    });
  };

  return { createColor, createUser };
};
