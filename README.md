# deel-autocomplete

Sample project to demonstrate autocomplete in deel

## Steps to run this project

```
$ yarn install
$ yarn start
```

## Mock Data
the mock data file is in the public directory `public/data/mock.json`

```
[
    {
        "id": "12wdcsdewfd",
        "label": "Roliver"
    },
    {
        "id": "12wdcsdewfd",
        "label": "Javier"
    },
    {
        "id": "12wdcsdewfd",
        "label": "Rodriguez"
    },
    {
        "id": "12wdcsdewfd",
        "label": "Deel"
    },
    {
        "id": "12wdcsdewfd",
        "label": "Challenge"
    }
]
```

###  Autocomplete

#### PROPS
```
debounceTime (optional) - number - Default: 500ms
// How much time should pass between requests (in ms).
```
```
placeholder - string
// Placeholder of the search input.
```
```
limit (optional) - number - Default: 5
// Indicates max amount of results that are shown.
```