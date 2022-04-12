shopt -s dotglob && shopt -s extglob && shopt -s globstar && shopt -s nocaseglob

echo 'deploy...'

echo 'set timestamp...'
now=$(date --utc +%FT%TZ)
sed -r -i "s/(timestamp: \").*(\")/\1$now\2/" env.ts

echo 'build project...'
npm run build

echo 'delete old files...'
ssh gasthoff@simonjaeger.ch "shopt -s dotglob && rm -rfv /home/gasthoff/public_html/simonjaeger.ch/*"

echo 'upload new files...'
scp -r out/* gasthoff@simonjaeger.ch:/home/gasthoff/public_html/simonjaeger.ch

echo 'DONE'
