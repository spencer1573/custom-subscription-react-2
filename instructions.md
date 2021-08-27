1. download shopify cli
2. log into store

```
shopify login --store name-of-the-store-in-hyphens
```

you can find the name of the store ... look in at the url where.. subdomain of .myshopify.com

3. go to github and download the react widget AND narwal_2

```
git clone git@github.com:spencer1573/narwal_theme_2.git
```

```
git clone git@github.com:spencer1573/custom-subscription-react-2.git
```

if you already have it pull the latest

4. go into the react folder

```
cd ./custom-subscription-react-2
```

5. make sure you have nvm installed and have v14.7.4

```
node --version
```

6. build the project

install dependencies

```
npm i
```

build it

```
npm run build
```

7. open both projects

two terminals

new terminal

```
cd narwal_theme_2
```

```
code .
```

previous terminal

in the react widget you

```
code .
```

8. fix index.html in build folder

set default formatter to prettier in vscode

in vscode open index.html in build folder (should be greyed out because its a dist)

autoformat index.html by rightclicking on the code in the index.html and click format document

** SUPER IMPORTANT NOTE **

<div id="root" /> does not exist like in a traditional react app

its called

<div id="custom-subscription-widget-5e6r72" />

to containerize things and make sure nothing else messes with the root hook thing

9. copy over build files and hook up names

go to templates

open

```
page.subscription.liquid
```

A. from build/index.html
copy script that is not a file into the page.subscription overriding the other one in there

B. 2 script files on bottom
look at names of script files on the bottom on the build folder
if its the same you don't have to copy over that file you need to copy that name over and put it in the script tag in narwal_theme_2

- go to build/static/js
  - copy over the ones you need into the `assets` folder of `narwal_theme_2`
  - even if its the same name as was there before make sure each file is in the assets folder

C. - css file
go to the top of `build/index.html`
see the <link>

in `naral` navigate to `layout/theme.liquid`
scroll to the end of the head tag
around line 188 make sure that css chunk name is correct

copy over that css `build/static/css/main.*****.css`
into `narwal` assets

10. push up the theme

A. verify correct store

```
shopify store
```

if its not right ... see the step about logging into the store

B. push theme

```
shopify theme push
```

if that doesn't work..make sure your store is linked to your login correctly
https://github.com/Shopify/shopify-cli/issues/1361

11. make a page `pages/subscriptions`

go to pages select `subscriptions` instead of defualt on the right

then make sure title is `subscriptions` plural

write meaningful tags in body of page

12.5 - test code to iterate -

```
cd custom-subscription-react-2
```

```
npm run start
```

navigate to localhost:3000
