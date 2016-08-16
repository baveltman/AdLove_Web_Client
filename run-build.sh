#!/bin/bash

for filename in ./styles/*;
do
  cd "$(dirname "$0")"
  file=$(basename "$filename")
  fileNoExt="${file%.*}"
  node-sass "$filename" "./build/styles/$fileNoExt.css"
done
