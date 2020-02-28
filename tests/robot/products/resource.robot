*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary
Library           String

*** Variables ***
${SERVER}         localhost:8080
${BROWSER}        Chrome
${DELAY}          1
${VALID USER}     demo
${VALID PASSWORD}    mode
${PRODUCTS URL}      http://${SERVER}/
${ADD PRODUCTS URL}      http://${SERVER}/add-product
${EDIT PRODUCTS URL}      http://${SERVER}/edit-product

*** Keywords ***
Open Browser To Product Page
    Open Browser    ${PRODUCTS URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Product Page Should Be Open

Open Browser To Add Product Page
    Open Browser    ${ADD PRODUCTS URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Add Product Page Should Be Open

Go To Product Page
    Go To    ${PRODUCTS URL}

Go To Add Product Page
    Go To    ${ADD PRODUCTS URL}

Go To Edit Product Page
    [Arguments]    ${product id}
    Go To    ${EDIT PRODUCTS URL}/${product id}

Input ProductName
    [Arguments]    ${productname}
    Input Text    product__name    ${productname}

Input Price
    [Arguments]    ${price}
    Input Text    product__price    ${price}

Input PriceCost
    [Arguments]    ${pricecost}
    Input Text    product__price-cost   ${pricecost}

Input Search Product
    [Arguments]    ${text}
    Input Text    search-product    ${text}

Add Product
    Click Button    product__add-button

Edit Product
    Click Button    product__edit-button

Remove Product
    Click Button    product__remove-button

Product Page Should Be Open
    Location Should Be    ${PRODUCTS URL}

Add Product Page Should Be Open
    Location Should Be    ${ADD PRODUCTS URL}

Edit Product Page Should Be Open
    Location Should Contain    ${EDIT PRODUCTS URL}
