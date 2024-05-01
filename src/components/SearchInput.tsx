import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps{
    onSearch:(searchText: string) => void
}

const SearchInput = ({onSearch}:SearchInputProps) => {
    const searchText = useRef<HTMLInputElement>(null);
  return (
		<form onSubmit={(event) =>{
            event.preventDefault();
            searchText.current && onSearch(searchText.current.value)
        }}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					borderRadius={20}
                    ref={searchText}
					placeholder="...Search Games"
					variant={"filled"}
				/>
			</InputGroup>
		</form>
	);
}

export default SearchInput