# Landing Page Project

## Information

New functionality added to dynamic menu
- add of a new section will create a new link in navigation bar automatically.
- DocumentFragment used to create HTML node element and to avoid reflow issue, or any other performance impact during page modification.
  
New functionality to scroll to sections
- addEventListener used for click event listening.
- preventDefault() used to prevents the default action of the browser by click.
- scrollIntoView() used to scroll to selected section.

New functionality to highlight the selected section on the page
- IntersectionObserver used to subscribe to user navigation.
- class "active" added automatically to menu and section element up on user navigation.
 
Assuming that most of users have newest Browser version installed, IntersectionObserver will work as expected.
For more information about supporting versions please refer to https://caniuse.com/#feat=intersectionobserver
