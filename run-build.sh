#!/bin/bash

#compile css form scss in styles
for filename in ./styles/*;
do
  cd "$(dirname "$0")"
  file=$(basename "$filename")
  fileNoExt="${file%.*}"
  node-sass "$filename" "./build/styles/$fileNoExt.css"
  css-beautify --replace $filename
done

#beautify pages
for filename in ./pages/*;
do
  js-beautify --replace --jslint-happy --e4x $filename
done

#beautify components
for filename in ./components/*;
do
  js-beautify --replace --jslint-happy --e4x $filename
done
