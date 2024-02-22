import React, {useState } from "react";
import { getSearchData } from "../../../api/fetch";
import { Input, Text } from "../../atoms";
import Suggestions from "./suggestions";
import { KEYBOARD_KEY } from "../../../constants";

type Option = {
    id: string;
    label: string;
}

type AutoCompleteProps = {
  debounceTime?: number;
  placeholder: string;
  limit?: number;
}

export const Autocomplete = ({ debounceTime, limit, placeholder }: AutoCompleteProps) => {
    const [ input, setInput ] = useState('');
    const [ suggestions, setSuggestions ] = useState<any>({})
    const [ showSuggestions, setShowSuggestions ] = useState<boolean>(false);
    const [ activeSuggestionIndex, setActiveSuggestionIndex ] = useState(-1);
    const [ isLoading, setLoading ] = useState(false);

    const hideSuggestions = () => {
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
        setLoading(false);
    };

    const setSearch = (input: string) => {
        setInput(input || '');
        setActiveSuggestionIndex(-1);
        setLoading(false);
    };

    const handleSelect = (input: Option) => {
        setInput(input.label || '');
        setActiveSuggestionIndex(-1);
        setLoading(false);
    }

    const handleActiveSuggestionIndex = (index: any) => {
        setActiveSuggestionIndex(index);
    };

    const handleSuggestions = (key: string, suggestions: any) => {
        setSuggestions({
            ...suggestions,
            [key]: suggestions
        })
      };

    const fetchSuggestions = (key: string) => {
        getSearchData(key, debounceTime, limit).then((suggestions) => handleSuggestions(key, suggestions));
    };

    const handleSearch = (e: any) => {
        setLoading(true);
        const search = e.target.value;
        setSearch(search);
        fetchSuggestions(search);
    };

    const getCurrentSuggestions = () => {
        console.log('suggestions=>',suggestions)
        if (suggestions  && suggestions[input]) {
          return suggestions[input];
        }
        return [];
      };


    const handleOnKeyDown = (e: any) => {
        const currentSuggestions = getCurrentSuggestions();
    
        if (e.keyCode === KEYBOARD_KEY.ENTER) {
            handleSelect(currentSuggestions[activeSuggestionIndex]);
            return;
        }

        if (e.keyCode === KEYBOARD_KEY.ARROW_UP) {
          if (activeSuggestionIndex > 0) {
            // it goes to the previous suggestion element index
            setActiveSuggestionIndex(activeSuggestionIndex - 1);
          } else {
            //if you're in the first option and then press arrow up key and it goes to the last option it will take the last index and highlight it, 0 to 2
            const i = currentSuggestions.length - 1;
            setActiveSuggestionIndex(i);
          }
          return;
        } 
        
        if (e.keyCode === KEYBOARD_KEY.ARROW_DOWN) {
          if (activeSuggestionIndex < currentSuggestions.length - 1) {
            // it goes to the next suggestion element index
            setActiveSuggestionIndex(activeSuggestionIndex + 1);
            return;
          }
          setActiveSuggestionIndex(0);
        }
      };

    
    return (
        <>
          <div>
            <Input
              value={input}
              onKeyDown={handleOnKeyDown}
              onChange={handleSearch}
              onBlur={hideSuggestions}
              onFocus={()=>setShowSuggestions(true)}
              type="text"
              placeholder={placeholder}
            />
          </div>
  
          {showSuggestions && suggestions[input] && (
            <Suggestions
              suggestions={getCurrentSuggestions()}
              active={activeSuggestionIndex}
              onMouseOver={handleActiveSuggestionIndex}
              onSelect={handleSelect}
            />
          )}

          { isLoading && !showSuggestions && (
            <div style={{marginTop: 10}}>
                <Text variant="bold">Loading...</Text>
            </div>
          )}
        </>
      );
}

export default Autocomplete;
