import { Form } from './StyledForm';
import { Input } from './StyledForm';
import Button from '../Button/Button';
import { SearchSVG } from '../SVG/SearchSVG';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm({ getValue }) {
  const [searchParams] = useSearchParams();
  const value = searchParams.get('query');
  // в цьому випадку форма не контрольвана бо запит буде іти в середині форми
  // форма буде записувати значення в рядок пошуку useSearchParams потім звідти пердавати в функцію яка робитиме запит
  // це дасть змогу зберегти значення інпуту між рендерами

  // console.log('searchValue: ', searchValue);

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.children.search.value.trim();
    getValue(inputValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        placeholder="Search"
        defaultValue={value}
        autoFocus
      />
      <Button type="submit">
        <SearchSVG />
      </Button>
    </Form>
  );
}
