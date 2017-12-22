
PURE_TAG=`git status | grep 'Not currently on any branch'`
CUR_SHA=`git rev-parse HEAD`
CUR_TAG=`git tag --points-at $CUR_SHA`

echo ''
echo git status: $PURE_TAG
echo git tag: $CUR_TAG

if [ $CUR_TAG ] && [ "$PURE_TAG"x != ""x ]; then

echo ''
echo '[is a tag] start packing'

npm install

webpack -p

echo "webpack success"

else

echo ''
echo '[not a tag] exit packing.'

fi
