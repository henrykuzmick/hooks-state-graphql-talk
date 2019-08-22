import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import faker from 'faker';

const CREATE_COLOR = loader('../apollo/mutations/CreateColor.graphql');
const CREATE_USER = loader('../apollo/mutations/CreateUser.graphql');

export const useMutations = () => {
  const [createColorMutation] = useMutation(CREATE_COLOR);
  const [createUserMutation] = useMutation(CREATE_USER);

  const createColor = () => {
    createColorMutation({
      variables: {
        value: faker.internet.color()
      }
    });
  };

  const createUser = () => {
    createUserMutation({
      variables: {
        name: faker.name.firstName()
      }
    });
  };

  return { createColor, createUser };
};
