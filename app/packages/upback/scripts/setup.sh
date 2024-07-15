#!/usr/bin/env bash

set -euxo pipefail

ANDROID_DIR=android
IOS_DIR=ios

if [[ "$@" == *"--clean"* || "$@" == *"--full-clean"* ]]; then
  echo "Doing a clean build..."
  set +e
  set -x
  echo "Removing app/node_modules"
  rm -rf ../../node_modules
  echo "Removing android and ios directories..."
  rm -rf android ios
fi

yarn install

if [[ ! -d "${ANDROID_DIR}" || ! -d "${IOS_DIR}" ]]; then
  echo "Android and/or iOS directories missing. Running prebuild..."
  npx expo prebuild
fi
