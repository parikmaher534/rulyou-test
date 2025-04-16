condition=true
str='reverted successfully.'
while $condition; do
  res=$(eval 'npm run migration:revert | grep "$str"')

  if [[ "$res" == *"$str"* ]];
  then
    echo $res
  else
    condition=false
    echo 'Больше нечего откатывать!'
  fi
done
