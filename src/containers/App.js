import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { App as AppView, Loader } from "../views";
import { setLoadUsers } from "../actions/loaderActions";
import { setUsers } from "../actions/usersActions";

const AppContainer = ({isLoading, setLoading, setUsers}) => {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUsers([
        {id: 1, name: "Иван", lastName: "Иванов", age: 36},
        {id: 2, name: "Тарас", lastName: "Зыков", age: 45},
        {id: 3, name: "Оливер", lastName: "Шубин", age: 28},
        {id: 4, name: "Емельян", lastName: "Доронин", age: 39},
        {id: 5, name: "Олег", lastName: "Петухов", age: 43},
        {id: 6, name: "Фёдор", lastName: "Князев", age: 27},
        {id: 7, name: "Данила", lastName: "Кобзар", age: 33},
        {id: 8, name: "Кирилл", lastName: "Горшков", age: 26},
        {id: 9, name: "Пётр", lastName: "Хохлов", age: 44},
        {id: 10, name: "Максим", lastName: "Харитонов", age: 34}
      ]);
      }, 2000)
  }, []);

  return isLoading ? <Loader /> : <AppView />;
}

const mapStateToProps = state => ({
  isLoading: state.loader.isLoading,
});
const mapDispatchToProps = dispatch => ({
  setLoading: (value) => dispatch(setLoadUsers(value)),
  setUsers: (users) => dispatch(setUsers(users)),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);