ssh identifi 'sh deploy.sh'
cp -r dist/* ../identifi.github.io/
cd ../identifi.github.io
git commit -a -m '.'
git push origin master
