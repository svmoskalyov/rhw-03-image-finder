import { Formik, ErrorMessage } from 'formik';
import {
  Header,
  Forma,
  Input,
  SearchButton,
  SearchLabel,
} from './Searchbar.styled';

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    if (values.search.trim() === '') {
      console.log('please input name for search');
      return;
    }

    await onSubmit(values);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Forma>
          <SearchButton type="submit">
            <SearchLabel />
          </SearchButton>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
          <ErrorMessage name="search" />
        </Forma>
      </Formik>
    </Header>
  );
};
