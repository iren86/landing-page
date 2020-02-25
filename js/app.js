function getNavBarBlock() {
  return document.querySelector('#navbar__list');
}

function getSectionList() {
  return document.querySelectorAll('section[id^="section"]');
}

function buildNavBarMenu() {
  const navBar = getNavBarBlock();
  const sectionList = getSectionList();
  const fragment = document.createDocumentFragment();
  let count = 1;
  sectionList.forEach((section) => {
    const sectionName = section.getAttribute('data-nav');
    const sectionId = section.getAttribute('id');
    const navbarLink = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.setAttribute('data-section', sectionId);
    link.setAttribute('data-order', count);
    link.className = 'navbar__menu menu__link';
    link.textContent = sectionName;
    navbarLink.appendChild(link);

    fragment.appendChild(navbarLink);

    count += 1;
  });
  navBar.appendChild(fragment);
}

function getNavBarList() {
  return document.querySelectorAll('.navbar__menu.menu__link');
}

function scrollToSection() {
  const navBarList = getNavBarList();
  navBarList.forEach((element) => {
    element.addEventListener('click', function scrollTo(event) {
        event.preventDefault();
        const navItem = element.getAttribute('data-section');
        const sectionSelector = `#${navItem}`;
        const target = document.querySelector(sectionSelector);
        target.scrollIntoView({behavior: "smooth", block: "start"});
      }
    );
  });
}

function updateMenuState(targetId) {
  const navBarLink = document.querySelector(`[data-section="${targetId}"]`);
  const currentLinkOrder = parseInt(navBarLink.getAttribute('data-order'), 10);
  const navBarList = getNavBarList();
  for (const link of navBarList) {
    const tmpLinkOrder = parseInt(link.getAttribute('data-order'), 10);
    if (tmpLinkOrder <= currentLinkOrder) {
      if (link.className.indexOf('active') === -1) {
        link.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  }
}

function updateSectionState(targetId) {
  const sectionList = getSectionList();
  for (const section of sectionList) {
    if (section.getAttribute('id') === targetId) {
      if (section.className.indexOf('active') === -1) {
        section.classList.add('active');
      }
    } else {
      section.classList.remove('active');
    }
  }
}

const handler = (entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetId = target.getAttribute(`id`);
        updateMenuState(targetId);
        updateSectionState(targetId);
      }
    }
  );
};

function subscribeToViewport() {
  const sectionList = getSectionList();
  const observer = new IntersectionObserver(handler, {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  });
  sectionList.forEach((element) => {
    observer.observe(element);
  });
}

// build the nav bar menu
buildNavBarMenu();

// Add class 'active' to navigation item when target near top of viewport
subscribeToViewport();

// Scroll to section on link click
scrollToSection();
