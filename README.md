# Landing Page Project

## Information

Added functionality for dynamically create  navigation menu based on the sections of the page
- each new section will provoke creating a new link in navigation bar.
- was used DocumentFragment, because of it changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
 
Added the functionality to scroll to sections
- was used addEventListener for listening event of "click" type.
- was used preventDefault() for prevent click using href attribute.
- was used scrollIntoView() for scroll to particular section.

Added functionality to distinguish the section in view
- was used IntersectionObserver for recognize particular section in viewport.
- by click or scroll into view will be added "active" value in special attribute belonging particular section or link in nav bar and after it they will be highlighted using css styles. 
 
Assuming that most of users have newest Browser versions IntersectionObserver will work fine considering this.
For more information about supporting versions take a look on comparison table https://caniuse.com/#feat=intersectionobserver
