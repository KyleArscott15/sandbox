#!/bin/bash

# Doc for General US Gov Data API Key Usage: https://api.data.gov/docs/api-key/
# USDA Specific API: https://fdc.nal.usda.gov/api-spec/fdc_api.html#/FDC/getFood

# Test the file:
# time ./apiTest.sh > out.txt
# History:
# cat out.txt | grep -i broc
# cat out.txt | grep -i cheese
# cat out.txt | grep -i apple
# or check all 3:
# cat out.txt | grep -i 'apple\|raw\|cheese'


API_KEY="cQdS6lD9ixofJvdgpbLi7sNNFze87emyTVqL6rc2"

echo "API Test"

APPLE=1648210
BROCCOLI_RAW=170379
CHEESE=170853
DELIMIATE_BETWEE_FCD_IDS="%2C"

# "GET https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=$API_KEY"

#command="https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key="$API_KEY
#command="https://"$API_KEY"@developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1"

#command="-X GET "https://api.nal.usda.gov/fdc/v1/food/1648210" -H  "accept: application/json"

#curl $command --progress-bar  | python -m json.tool

#     ?api_key=cQdS6lD9ixofJvdgpbLi7sNNFze87emyTVqL6rc2

#curl -X GET "https://api.nal.usda.gov/fdc/v1/food/1648210?api_key="$API_KEY -H  "accept: application/json" | python -m json.tool # works
#curl -X GET "https://"$API_KEY"api.nal.usda.gov/fdc/v1/food/1648210" -H  "accept: application/json" | python -m json.tool # does not work

#curl -X GET "https://api.nal.usda.gov/fdc/v1/foods?fdcIds=1648210?api_key="$API_KEY -H  "accept: application/json" # does not work, does not accept API key

#curl -X GET "https://api.nal.usda.gov/fdc/v1/foods?fdcIds="$APPLE"%2C"$BROCCOLI_RAW -H  "X-Api-Key: "$API_KEY | python -m json.tool # works

curl -X GET "https://api.nal.usda.gov/fdc/v1/foods?fdcIds="$APPLE$DELIMIATE_BETWEE_FCD_IDS$BROCCOLI_RAW$DELIMIATE_BETWEE_FCD_IDS$CHEESE -H  "X-Api-Key: "$API_KEY | python -m json.tool # does not work



echo "API Test Done"