#!/usr/bin/env sh
jq -R '[inputs | split(",") | {year: .[1], month: .[2], median: .[6], predicted: .[9]}]' < ./data_for_miguel_vis_prototype.csv > 32080.json
