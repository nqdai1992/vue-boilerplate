*** Settings ***
Documentation     A test suite with a single test for list product.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Library    Collections
Resource          resource.robot

*** Test Cases ***

Remove product
    Open Browser To Product Page
    ${random int}   Evaluate	random.randint(1, 10)	modules=random
    ${productname}  Get Text  //div[@class="page__content"]//tbody//tr[${random int}]//a
    Click Element   //div[@class="page__content"]//tbody//tr[${random int}]//div[@class="v-data-table__checkbox v-simple-checkbox"]
    Click Element   //button[@id="button-remove-product"]
    Click Element   //div[@class="v-dialog__content v-dialog__content--active"]//button[1]    
    Input Search Product    ${productname}
    Click Element   //div[@class="v-data-footer__select"]//div[@class="v-input__control"]
    Click Element   //div[@class="v-list-item__title" and contains(text(), "All")]/ancestor::div[@role="option"]
    ${rows} =       Get WebElements     //div[@class="page__content"]//table/tbody/tr/td[2]
    ${names}=    Create List
     :FOR    ${row}    IN    @{rows}
     \      Log     ${row.text}
     \      Append To List      ${names}
    Should Not Contain Match        ${names}        ${productname}      case_insensitive=${TRUE}	# Python True is true.
    [Teardown]    Close Browser

Search product
    Open Browser To Product Page
     ${random int}   Evaluate	random.randint(1, 10)	modules=random
     ${productname}  Get Text  //div[@class="page__content"]//tbody//tr[${random int}]//a
     Input Search Product    ${productname}
     ${rows} =       Get WebElements     //div[@class="page__content"]//table/tbody/tr/td[2]
      ${names}=    Create List
     :FOR    ${row}    IN    @{rows}
     \      Log     ${row.text}
     \      Append To List      ${names}    ${row.text}
     Should Contain Match        ${names}        ${productname}*      case_insensitive=${TRUE}
     [Teardown]    Close Browser

Redirect to add product page
    Open Browser To Product Page
    Click Element   //button[@id="button-add-product"]
    Add Product Page Should Be Open
    [Teardown]    Close Browser

Redirect to edit product page
    Open Browser To Product Page
    ${random int}   Evaluate	random.randint(1, 10)	modules=random
    Click Element  //div[@class="page__content"]//tbody//tr[${random int}]//a
    Edit Product Page Should Be Open
    [Teardown]    Close Browser
