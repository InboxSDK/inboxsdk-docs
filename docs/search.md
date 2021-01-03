---
id: search-docs
title: Search
---
This namespace allows you to interact Gmail and Inbox's default search behaviour. It allows for two use cases: 1) To provide autocomplete suggestions as the user types in their query and 2) To rewrite sarch queries.

### Namespace methods
#### registerSearchSuggestionsProvider(handler)
Registers a search autocomplete suggestion provider. This allows you to add results to Gmails autocomplete results when a user types into a search box. Each providers results are visually seperated from each other in the UI.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **handler** | `function` | A handler that takes in a string query and returns an Array (or Promise for one) of AutocompleteSearchResults. |

#### registerSearchQueryRewriter(rewriter)
Allows you to rewrite certain queries that may be typed in or programatically set. If a user types in a search, their search term will still be visible but the search that is actually executed by Gmails servers will be what you rewrite the query to.

| Parameters | Type | Description |
| :--- | :--- | :--- |
| **rewriter** | `SearchQueryRewriter` | A rewriter object that specifies the term to rewrite and a function to get the new query. |





--
## AutocompleteSearchResult
This type is returned by the function you pass into the Search.registerSearchSuggestionsProvider() method as a way to add autocomplete suggestions to the Gmail/Inbox search box.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **name** | `string` | The name of the result to display. This property or nameHTML must be set. | No | `null` |
| **nameHTML** | `string` | HTML to display in the name area of the result. This property or name must be set. | No | `null` |
| **description** | `string` | The name of the result to display. This property or descriptionHTML must be set. | No | `null` |
| **descriptionHTML** | `string` | HTML to display in the name area of the result. This property or description must be set. | No | `null` |
| **iconUrl** | `string` | URL for the icon to show in the result. Should be a local extension file URL or a HTTPS url. | No | `null` |
| **iconHTML** | `string` | HTML to display in the icon area of the result. This property can not be used with iconUrl. | No | `null` |
| **routeName** | `string` | The name of the route to navigate to when the autocomplete search result is selected. | No | `null` |
| **routeParams** | `Array<string>` | The parameters of the route being navigated to when the autocomplete search result is selected. | No | `[]` |
| **externalURL** | `string` | An external URL to navigate to when the autocomplete search result is selected. | No | `null` |
| **onClick** | `func()` | A function to call when the autocomplete search result is selected. | No | `null` |








--
## SearchQueryRewriter
This type is passed into the Search.registerSearchQueryRewriter() method as a way to add rewrite search queries.

| Property | Type | Description | Required? | Default |
| :--- | :--- | :--- | :--- | :--- |
| **term** | `string` | The query term that you'd like to rewrite/replace. No wildcards are currently supported. Currently it must begin with "app:" or "has:". | Yes |  |
| **termReplacer** | `function` | A function which returns a String (or Promise for a string) to replace the specified term in the search query. | Yes |  |
