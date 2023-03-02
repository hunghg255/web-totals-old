# Config Search Algolia

```
1. Get api key, index_name: https://www.algolia.com/account
2. add config.json, get here and update start url, add site map url => build project => serve
   - get config json here https://docsearch.algolia.com/docs/integrations,
   - https://github.com/algolia/docsearch-configs/blob/master/configs/docusaurus-2.json

3. https://docsearch.algolia.com/docs/legacy/run-your-own/#integration
  - add env
  - install jq: brew install jq
  - docker run -it --env-file=.env -e "CONFIG=$(cat /Users/kengzone/Documents/project/web-questions/config.json | jq -r tostring)" algolia/docsearch-scraper

More: https://www.youtube.com/watch?v=F_jqADu-izk&ab_channel=MostlyCode
```
