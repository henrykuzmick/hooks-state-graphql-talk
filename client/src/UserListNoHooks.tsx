import React, { Component } from 'react';
import { loader } from 'graphql.macro';
import faker from 'faker';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { graphql, compose, GraphqlQueryControls, MutationFn } from 'react-apollo';

import { Users, Colors, CreateUser, CreateColor, CreateColorVariables } from '../generated/schema';

const USERS = loader('./apollo/queries/Users.graphql');
const COLORS = loader('./apollo/queries/Colors.graphql');
const CREATE_USER = loader('./apollo/mutations/CreateUser.graphql');
const CREATE_COLOR = loader('./apollo/mutations/CreateColor.graphql');

interface Props {
  usersData: GraphqlQueryControls & Users;
  colorsData: GraphqlQueryControls & Colors;
  createUser: MutationFn<CreateUser>;
  createColor: MutationFn<CreateColor, CreateColorVariables>;
}

class UserListComponent extends Component<Props> {
  renderUsers = () => {
    if (this.props.usersData.loading) {
      return 'Loading...';
    }

    return this.props.usersData.users.map(user => <p style={{ backgroundColor: user.color.value }}>{user.name}</p>);
  };

  createUser = () => {
    const { colors } = this.props.colorsData;
    const color = colors ? colors[Math.floor(Math.random() * colors.length)] : undefined;
    const name = faker.name.firstName();

    this.props.createUser({
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

        const data = proxy.readQuery<Users>({ query: USERS });

        if (data) {
          data.users.push(res.data.createUser);
          proxy.writeQuery({ query: USERS, data });
        }
      }
    });
  };

  createColor = () => {
    const value = faker.internet.color();
    this.props.createColor({
      variables: {
        value
      },
      optimisticResponse: {
        createColor: {
          id: 'random-id',
          __typename: 'Color',
          value
        }
      },
      update: (proxy, res) => {
        if (!res.data || !res.data.createColor) {
          return;
        }

        const data = proxy.readQuery<Colors>({ query: COLORS });

        if (data) {
          data.colors.push(res.data.createColor);
          proxy.writeQuery({ query: COLORS, data });
        }
      }
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h2" color="textSecondary">
              User List
            </Typography>
            {this.renderUsers()}
          </CardContent>
          <CardActions>
            <Button onClick={this.createUser} size="small" color="primary">
              Create New User
            </Button>
            <Button onClick={this.createColor} size="small" color="primary">
              Create New Color
            </Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

export const UserList = compose(
  graphql(USERS, { name: 'usersData' }),
  graphql(COLORS, { name: 'colorsData' }),
  graphql(CREATE_USER, { name: 'createUser' }),
  graphql(CREATE_COLOR, { name: 'createColor' })
)(UserListComponent);
