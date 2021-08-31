# instructions for real products for reacharge

0. add a product
   with variants if you want

1. add info for shopify payemnts and set it to test mode

2. add recharge

apps > customize your store (top right)

search recharge

add app

remember you must have the code from narwal_theme_2 or recharge won't work

3.  set up recharge

add a product

add frequecies

4. test product in cart

- catalog > product put in > checkout

for fake payment

look up how to do fake payments with shopify payemnts test mode

424242424

5. get the variant id

products > first product

click on the variant from the admin - look at the url

it says variants/<number of variant>

and put it in roasts constant

go to `constants/constants`

populate the `value` attribute in roasts with the variant_id

6. get the seller plan ids

go to catalog page

open network tab

select preserve log

add to cart for xx days

in the network it should be the `add.js` xhr request

and you'll see `selling_id` i think

if that network thing is not coming through

go to `/sections/product-template.liquid`

<script>
    console.log('Product', {{ product | json }})
  </script>

add this to it in the last div

push up narwal changes

then go to the console when your looking at a product on the website

then find `seller_plans... ` and look through there till you find the seller plans

copy those seller plan ids as values

in the `frequencies` constant in the `constants/constant`

7. push up narwal

```
cd narwal_theme_2
```

```
shopify theme push
```
