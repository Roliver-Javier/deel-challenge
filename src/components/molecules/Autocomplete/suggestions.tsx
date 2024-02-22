import React from "react";
import styles from './index.module.css';
import { Text } from '../../atoms'

type SuggestionType = {
  suggestions: any[];
  active: number;
  onMouseOver: (param: any) => void;
  onSelect: (param: any) => void;
}
const Suggestions = ({ active, suggestions, onSelect, onMouseOver }: SuggestionType) => {
    return (
      <div className={styles.suggestionBox}>
        { suggestions.length === 0 && (
          <Text variant="bold" color="#d86d6d">No results found</Text>
        )}
       {
        suggestions.length > 0 && (
          <ul>
          {suggestions.map((suggestion, i) => (
            <li
              onMouseOver={() => onMouseOver(i)}
              onMouseDown={() => onSelect(suggestion)}
              className={`${styles.suggestion} ${i === active ? styles.active : ""}`}
              key={`${suggestion.label}_${active}_${suggestion.id}`}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
        )
       }
      </div>
    )
}

export default Suggestions;
